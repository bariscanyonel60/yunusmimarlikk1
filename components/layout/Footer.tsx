import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { legalNav, mainNav, site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" data-theme="dark" className="relative overflow-hidden">
      <div aria-hidden className="arch-grid-lines pointer-events-none absolute inset-0 opacity-60" />

      <div className="container-arch relative pt-[var(--section-y-sm)]">
        <div className="grid-arch gap-y-12">
          <div className="col-span-4 md:col-span-5">
            <p className="t-label text-muted">Yunus Mimarlık</p>
            <p className="t-h3 mt-5 max-w-[22ch]">
              Tokat&apos;ta mimari tasarım ve iç mimarlık için <span className="t-serif text-accent">bütüncül</span> bir
              stüdyo.
            </p>
          </div>

          <FooterColumn title="Navigasyon" className="col-span-2 md:col-span-2 md:col-start-7">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-line inline-flex min-h-11 items-center md:min-h-9">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>

          <FooterColumn title="İletişim" className="col-span-2 md:col-span-2">
            <li>
              <a href={site.phone.href} className="link-line t-num inline-flex min-h-11 items-center md:min-h-9">
                {site.phone.display}
              </a>
            </li>
            <li>
              <address className="not-italic text-muted">
                {site.address.building}
                <br />
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.district} / {site.address.city}
              </address>
            </li>
          </FooterColumn>

          <FooterColumn title="Bağlantılar" className="col-span-4 md:col-span-2">
            {site.social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex min-h-11 items-center gap-2 md:min-h-9"
                >
                  <span className="link-line">{item.label}</span>
                  <ArrowUpRight aria-hidden className="arrow-nudge size-3.5" strokeWidth={1.5} />
                </a>
              </li>
            ))}
            <li>
              <a
                href={site.maps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 md:min-h-9"
              >
                <span className="link-line">Google Haritalar</span>
                <ArrowUpRight aria-hidden className="arrow-nudge size-3.5" strokeWidth={1.5} />
              </a>
            </li>
            {legalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-line inline-flex min-h-11 items-center md:min-h-9">
                  {item.label}
                </Link>
              </li>
            ))}
          </FooterColumn>
        </div>

        <div className="mt-[var(--section-y-sm)] flex flex-col gap-3 border-t border-border py-6 text-muted md:flex-row md:items-center md:justify-between">
          <p className="t-label">
            © {year} {site.name.toLocaleUpperCase("tr-TR")}
          </p>
          <p className="t-label">
            {site.address.city} / {site.address.countryName}
          </p>
          {site.credits.name ? (
            <p className="t-label">
              {site.credits.label}:{" "}
              {site.credits.href ? (
                <a href={site.credits.href} target="_blank" rel="noopener noreferrer" className="link-line">
                  {site.credits.name}
                </a>
              ) : (
                site.credits.name
              )}
            </p>
          ) : null}
        </div>
      </div>

      {/* SVG textLength keeps the wordmark exactly edge-to-edge at every width. */}
      <div aria-hidden className="relative -mb-[1.6vw] px-[clamp(0.5rem,1vw,1rem)]">
        <svg viewBox="0 0 1000 158" className="block w-full select-none" focusable="false">
          <text
            x="0"
            y="146"
            textLength="1000"
            lengthAdjust="spacingAndGlyphs"
            fill="currentColor"
            className="font-display font-semibold uppercase [font-stretch:86%]"
            style={{ fontSize: 160, letterSpacing: "-0.04em" }}
          >
            {site.name.toLocaleUpperCase("tr-TR")}
          </text>
        </svg>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  className,
  children,
}: {
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={className}>
      <h2 className="t-label text-muted">{title}</h2>
      <ul className="mt-5 space-y-1 text-[0.9375rem]">{children}</ul>
    </div>
  );
}
