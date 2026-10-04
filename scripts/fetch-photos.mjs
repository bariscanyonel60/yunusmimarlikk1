/**
 * Downloads representative architecture photos from Unsplash (Unsplash License:
 * free for commercial use, no attribution required) into public/ using the same
 * file names and dimensions as the placeholder set.
 *
 *   node scripts/fetch-photos.mjs            # search + download every slot
 *   node scripts/fetch-photos.mjs hero.jpg   # only slots whose file contains the arg
 *
 * Pinned picks live in `scripts/photo-picks.json` (file -> photo id). When a slot
 * is pinned, that exact photo is used; otherwise the best search hit is chosen
 * and written back so the result is reproducible.
 *
 * Derived files are rebuilt on every run: `before-after/before.jpg` is a muted
 * version of `after.jpg`, and `og.jpg` is the hero photo with the wordmark.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const PICKS_FILE = path.join(ROOT, "scripts", "photo-picks.json");
const CREDITS_FILE = path.join(ROOT, "data", "photo-credits.json");

const SIZE = {
  wide: [2560, 1440],
  landscape: [2400, 1600],
  portrait: [1600, 2000],
  square: [1800, 1800],
};

const ORIENTATION = { wide: "landscape", landscape: "landscape", portrait: "portrait", square: "squarish" };

const BLOCKED = /\b(3d|render|rendering|illustration|drawing|sketch|cgi|ai-generated|mockup|logo|text|sign)\b/i;

/** [file, size, query] */
const slots = [
  ["images/hero.jpg", "wide", "modern concrete house dusk"],
  ["images/manifesto.jpg", "portrait", "brutalist architecture shadow"],
  ["images/break.jpg", "wide", "modern villa pool architecture"],
  ["images/about-detail.jpg", "square", "wood slats architecture detail"],
  ["images/studio.jpg", "portrait", "architect office workspace"],
  ["images/cta.jpg", "wide", "wooden slat wall"],
  ["images/pages/hizmetler.jpg", "wide", "minimal concrete courtyard"],
  ["images/pages/hakkimizda.jpg", "wide", "contemporary architecture facade"],
  ["images/pages/iletisim.jpg", "wide", "modern house night"],
  ["images/before-after/after.jpg", "landscape", "minimal living room natural light"],
  ["images/services/mimari.jpg", "portrait", "modern architecture building facade"],
  ["images/services/ic-mimari.jpg", "portrait", "minimal interior design living room"],
  ["images/services/konut.jpg", "portrait", "modern house facade minimal"],
  ["images/services/ticari.jpg", "portrait", "minimal boutique interior"],
  ["images/services/ofis.jpg", "portrait", "modern office interior wood"],
  ["images/services/uygulama.jpg", "portrait", "building construction site concrete"],
  ["images/services/danismanlik.jpg", "portrait", "architects meeting plans table"],
  ["projects/kazova-evi/cover.jpg", "landscape", "modern house wood facade"],
  ["projects/kazova-evi/01.jpg", "wide", "modern living room large window"],
  ["projects/kazova-evi/02.jpg", "portrait", "concrete staircase interior"],
  ["projects/kazova-evi/03.jpg", "square", "wood cladding detail"],
  ["projects/kazova-evi/04.jpg", "landscape", "minimal house window facade"],
  ["projects/yesilirmak-ofis/cover.jpg", "landscape", "open plan office interior"],
  ["projects/yesilirmak-ofis/01.jpg", "wide", "office interior wooden"],
  ["projects/yesilirmak-ofis/02.jpg", "portrait", "office meeting room glass"],
  ["projects/yesilirmak-ofis/03.jpg", "square", "minimal workspace desk"],
  ["projects/yesilirmak-ofis/04.jpg", "landscape", "office lounge interior"],
  ["projects/avlu-kahve/cover.jpg", "landscape", "minimal cafe interior"],
  ["projects/avlu-kahve/01.jpg", "wide", "cafe interior concrete wood"],
  ["projects/avlu-kahve/02.jpg", "portrait", "cafe storefront"],
  ["projects/avlu-kahve/03.jpg", "square", "coffee bar counter"],
  ["projects/avlu-kahve/04.jpg", "landscape", "cafe seating interior plants"],
  ["projects/camlibel-konutlari/cover.jpg", "landscape", "modern apartment building facade"],
  ["projects/camlibel-konutlari/01.jpg", "wide", "residential complex architecture"],
  ["projects/camlibel-konutlari/02.jpg", "portrait", "apartment balconies architecture"],
  ["projects/camlibel-konutlari/03.jpg", "square", "concrete stairs architecture"],
  ["projects/camlibel-konutlari/04.jpg", "landscape", "housing courtyard architecture"],
  ["projects/tas-ev-donusumu/cover.jpg", "landscape", "stone wall living room modern"],
  ["projects/tas-ev-donusumu/01.jpg", "wide", "stone wall interior"],
  ["projects/tas-ev-donusumu/02.jpg", "portrait", "rustic modern kitchen"],
  ["projects/tas-ev-donusumu/03.jpg", "square", "stone wall interior minimal"],
  ["projects/tas-ev-donusumu/04.jpg", "landscape", "old stone house windows"],
  ["projects/atolye-showroom/cover.jpg", "landscape", "showroom building exterior night"],
  ["projects/atolye-showroom/01.jpg", "wide", "gallery space interior minimal"],
  ["projects/atolye-showroom/02.jpg", "portrait", "concrete interior light"],
  ["projects/atolye-showroom/03.jpg", "square", "wooden slatted partition"],
  ["projects/atolye-showroom/04.jpg", "landscape", "modern pavilion architecture"],
];

/** Source crop as fractions of the original photo [x, y, width]; height follows the slot ratio. */
const CROPS = {
  "images/hero.jpg": [0, 0.16, 0.64],
};

const HEADERS = { "User-Agent": "curl/8.7.1", Accept: "*/*" };

async function readJson(file, fallback) {
  try {
    return JSON.parse(await readFile(file, "utf8"));
  } catch {
    return fallback;
  }
}

async function getJson(url) {
  const res = await fetch(url, { headers: HEADERS });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

function acceptable(photo, [w, h]) {
  if (photo.premium || photo.plus || photo.sponsorship) return false;
  const words = `${photo.slug ?? ""} ${photo.alt_description ?? ""} ${photo.description ?? ""}`.replace(/-/g, " ");
  if (BLOCKED.test(words)) return false;
  return photo.width >= w * 0.9 && photo.height >= h * 0.9;
}

async function search(query, size, used) {
  const url = `https://unsplash.com/napi/search/photos?query=${encodeURIComponent(query)}&per_page=30&orientation=${ORIENTATION[size]}`;
  const { results } = await getJson(url);
  const candidates = results.filter((p) => acceptable(p, SIZE[size]) && !used.has(p.id));
  candidates.sort((a, b) => (b.likes ?? 0) - (a.likes ?? 0));
  const pick = candidates.slice(0, 8)[0];
  if (!pick) throw new Error(`No acceptable result for "${query}"`);
  return pick;
}

async function download(photo, file, size) {
  const [w, h] = SIZE[size];
  let rect = "";
  const crop = CROPS[file];
  if (crop) {
    const [x, y, cw] = crop;
    const width = Math.round(photo.width * cw);
    const height = Math.round((width * h) / w);
    rect = `&rect=${Math.round(photo.width * x)},${Math.round(photo.height * y)},${width},${height}`;
  }
  const url = `${photo.urls.raw}${rect}&w=${w}&h=${h}&fit=crop&crop=entropy&q=82&fm=jpg`;
  const res = await fetch(url, { headers: { "User-Agent": HEADERS["User-Agent"] } });
  if (!res.ok) throw new Error(`${res.status} downloading ${photo.id}`);
  const buffer = Buffer.from(await res.arrayBuffer());
  const target = path.join(PUBLIC_DIR, file);
  await mkdir(path.dirname(target), { recursive: true });
  await sharp(buffer).resize(w, h, { fit: "cover" }).jpeg({ quality: 82, mozjpeg: true }).toFile(target);
}

async function buildDerived() {
  const after = path.join(PUBLIC_DIR, "images/before-after/after.jpg");
  await sharp(after)
    .modulate({ saturation: 0.08, brightness: 0.86 })
    .linear(0.78, 18)
    .blur(0.6)
    .jpeg({ quality: 80, mozjpeg: true })
    .toFile(path.join(PUBLIC_DIR, "images/before-after/before.jpg"));

  const [w, h] = [1200, 630];
  const overlay = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
      <defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0" stop-color="#121c28" stop-opacity="0.15"/>
        <stop offset="1" stop-color="#121c28" stop-opacity="0.85"/>
      </linearGradient></defs>
      <rect width="100%" height="100%" fill="url(#g)"/>
      <text x="64" y="520" fill="#f6f5f1" font-family="Helvetica, Arial, sans-serif" font-weight="700" font-size="84" letter-spacing="-2">YUNUS MİMARLIK</text>
      <text x="66" y="572" fill="#f6f5f1" fill-opacity="0.75" font-family="Helvetica, Arial, sans-serif" font-size="24" letter-spacing="4">MİMARLIK · İÇ MİMARLIK · TOKAT</text>
    </svg>`,
  );
  await sharp(path.join(PUBLIC_DIR, "images/hero.jpg"))
    .resize(w, h, { fit: "cover" })
    .composite([{ input: overlay }])
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(path.join(PUBLIC_DIR, "og.jpg"));
}

async function main() {
  const filter = process.argv[2];
  const picks = await readJson(PICKS_FILE, {});
  const credits = await readJson(CREDITS_FILE, {});
  const rejected = await readJson(path.join(ROOT, "scripts", "photo-rejected.json"), []);
  const used = new Set([...Object.values(picks), ...rejected]);

  for (const [file, size, query] of slots) {
    if (filter && !file.includes(filter)) continue;
    const pinned = picks[file];
    let photo;
    try {
      photo = pinned ? await getJson(`https://unsplash.com/napi/photos/${pinned}`) : await search(query, size, used);
      used.add(photo.id);
      picks[file] = photo.id;
      await download(photo, file, size);
    } catch (error) {
      console.error(`SKIP ${file}: ${error.message}`);
      continue;
    }
    credits[file] = {
      id: photo.id,
      photographer: photo.user?.name ?? "",
      url: photo.links?.html ?? `https://unsplash.com/photos/${photo.id}`,
      description: photo.alt_description ?? "",
    };
    console.log(`${file}  <-  ${photo.id}  (${photo.user?.name})  ${photo.alt_description ?? ""}`);
  }

  await writeFile(PICKS_FILE, `${JSON.stringify(picks, null, 2)}\n`);
  await writeFile(CREDITS_FILE, `${JSON.stringify(credits, null, 2)}\n`);
  await buildDerived();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
