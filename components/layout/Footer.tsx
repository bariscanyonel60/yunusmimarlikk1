import Link from "next/link";
import ScrollToTop from "@/components/layout/ScrollToTop";
import AnimatedStat from "@/components/layout/AnimatedStat";

const stats = [
  { value: "10+", label: "Yıllık Tecrübe" },
  { value: "60+", label: "Tamamlanan Proje" },
  { value: "4", label: "Hizmet Verilen Şehir" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--color-ink)] text-[var(--color-paper)] pt-24 pb-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(circle at 12% 0%, rgba(165,138,104,0.18), transparent 45%)",
        }}
      />

      <div className="container-edge relative">
        {/* CTA row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 pb-14 border-b border-[var(--color-paper)]/12">
          <p className="font-display font-light text-3xl md:text-5xl max-w-xl leading-tight">
            Tokat&apos;ta bir mekân hayaliniz mi var?
          </p>
          <Link
            href="/iletisim"
            className="group inline-flex w-fit items-center gap-3 border border-[var(--color-paper)]/30 px-7 py-4 text-sm tracking-wide transition-colors duration-300 hover:border-[var(--color-paper)]"
          >
            Projeyi Başlat
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-6 py-12 border-b border-[var(--color-paper)]/12">
          {stats.map((s) => (
            <AnimatedStat key={s.label} value={s.value} label={s.label} />
          ))}
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 py-14 border-b border-[var(--color-paper)]/12">
          <div className="md:col-span-4">
            <h2 className="font-display text-5xl md:text-6xl leading-[0.9] mb-4">
              YUNUS
              <br />
              MİMARLIK
            </h2>
            <p className="text-sm text-[var(--color-paper)]/55 max-w-xs leading-relaxed">
              Tokat merkezli iç mimarlık atölyesi. Salon, mutfak, iş yeri ve
              villa projelerinde Tokat, Amasya, Sivas ve Samsun&apos;a hizmet
              veriyoruz.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://instagram.com/yunusmimarlik"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-paper)]/20 transition-colors duration-300 hover:border-[var(--color-paper)]/60"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[var(--color-paper)]">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465a4.9 4.9 0 0 1 1.771 1.153 4.9 4.9 0 0 1 1.153 1.771c.248.637.415 1.363.465 2.428.05 1.066.06 1.405.06 4.122s-.01 3.056-.06 4.122c-.05 1.065-.217 1.79-.465 2.428a4.9 4.9 0 0 1-1.153 1.771 4.9 4.9 0 0 1-1.771 1.153c-.637.248-1.363.415-2.428.465-1.066.05-1.405.06-4.122.06s-3.056-.01-4.122-.06c-1.065-.05-1.79-.217-2.428-.465a4.9 4.9 0 0 1-1.771-1.153 4.9 4.9 0 0 1-1.153-1.771c-.248-.637-.415-1.363-.465-2.428C2.01 15.056 2 14.717 2 12s.01-3.056.06-4.122c.05-1.065.217-1.79.465-2.428a4.9 4.9 0 0 1 1.153-1.771A4.9 4.9 0 0 1 5.45 2.525c.637-.248 1.363-.415 2.428-.465C8.944 2.01 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.467.182-.8.399-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.05 1.055-.06 1.372-.06 4.04 0 2.67.01 2.986.06 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.05 1.37.06 4.041.06 2.67 0 2.987-.01 4.04-.06.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.05-1.055.06-1.372.06-4.041 0-2.67-.01-2.986-.06-4.04-.045-.976-.207-1.505-.344-1.858a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.05-1.372-.06-4.041-.06zm0 4.594a5.604 5.604 0 1 1 0 11.208 5.604 5.604 0 0 1 0-11.208zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm7.146-9.404a1.309 1.309 0 1 1-2.618 0 1.309 1.309 0 0 1 2.618 0z" />
                </svg>
              </a>
              <a
                href="https://wa.me/905455453152"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-paper)]/20 transition-colors duration-300 hover:border-[var(--color-paper)]/60"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[var(--color-paper)]">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.36a9.9 9.9 0 0 0 4.62 1.15h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.83 9.83 0 0 0 12.04 2Zm5.8 14.02c-.24.68-1.4 1.3-1.93 1.36-.49.06-1.03.09-1.66-.1-.38-.12-.87-.28-1.5-.55-2.63-1.14-4.35-3.82-4.48-4-.13-.18-1.07-1.42-1.07-2.71s.68-1.93.92-2.19c.24-.26.53-.33.71-.33.18 0 .35 0 .5.01.16.01.38-.06.6.45.24.55.8 1.9.87 2.04.07.14.11.3.02.48-.09.18-.14.3-.27.46-.14.16-.29.36-.41.48-.14.14-.28.29-.12.56.16.28.71 1.17 1.53 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.68-.79.87-1.06.18-.27.36-.22.6-.13.24.09 1.55.73 1.82.86.27.14.44.2.51.31.07.11.07.63-.17 1.32Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-eyebrow text-[var(--color-paper)]/40 mb-4">Hizmetler</p>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-paper)]/70">
              <li>
                <Link href="/hizmetler" className="link-underline">
                  İç Mekan Tasarımı
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="link-underline">
                  Ticari Mekan
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="link-underline">
                  3D Görselleştirme
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-eyebrow text-[var(--color-paper)]/40 mb-4">Kurumsal</p>
            <ul className="flex flex-col gap-3 text-sm text-[var(--color-paper)]/70">
              <li>
                <Link href="/hakkimizda" className="link-underline">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="link-underline">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/blog" className="link-underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-eyebrow text-[var(--color-paper)]/40 mb-4">Atölye</p>
            <a
              href="https://maps.google.com/?q=CİMCİM+İş+Merkezi+Alipaşa+Gaziosmanpaşa+Bulvarı+190+Tokat"
              target="_blank"
              rel="noreferrer"
              className="link-underline text-sm text-[var(--color-paper)]/70 leading-relaxed block mb-6"
            >
              CİMCİM İş Merkezi, Alipaşa,
              <br />
              Gaziosmanpaşa Bulvarı No:190/C Kat:3, Tokat
            </a>
            <p className="text-eyebrow text-[var(--color-paper)]/40 mb-4">Hizmet Bölgesi</p>
            <p className="text-sm text-[var(--color-paper)]/70">
              Tokat · Amasya · Sivas · Samsun
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 text-xs text-[var(--color-paper)]/50">
          <p>
            © 2026 Yunus Mimarlık. Tüm hakları saklıdır. ·{" "}
            <Link href="/gizlilik-politikasi" className="link-underline">
              Gizlilik Politikası
            </Link>
          </p>
          <div className="flex items-center gap-6">
            <a href="tel:+905455453152" className="link-underline">
              0545 545 31 52
            </a>
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
