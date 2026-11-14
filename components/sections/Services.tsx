'use client';

import Image from 'next/image';
import { useState, useTransition } from 'react';
import { imgPath, services } from '@/content/site';
import { LineSplit, Reveal } from '@/lib/motion/Reveal';
import { cn } from '@/lib/utils';

export function Services({ heading = true }: { heading?: boolean }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const [visible, setVisible] = useState(true);
  const [, startTransition] = useTransition();
  const current = services[active] ?? services[0];

  function activate(i: number) {
    if (i === active) {
      setOpen(i);
      return;
    }
    setVisible(false);
    window.setTimeout(() => {
      startTransition(() => {
        setActive(i);
        setOpen(i);
        setVisible(true);
      });
    }, 160);
  }

  return (
    <section className="svc wrap py-[clamp(5rem,12vw,9rem)]" id="hizmetler" aria-labelledby="hizmetler-h">
      {heading ? (
        <>
          <p className="eyebrow">Hizmetler</p>
          <Reveal as="h2" mode="lines" className="h2 mb-12" id="hizmetler-h">
            <LineSplit lines={['NELER', 'YAPIYORUZ.']} />
          </Reveal>
        </>
      ) : null}

      <div className="svc__grid grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <ul className="svc__list border-t border-[var(--stone)]">
          {services.map((service, i) => {
            const expanded = open === i;
            const isActive = active === i;
            return (
              <li
                key={service.n}
                className="svc__row border-b border-[var(--stone)]"
                onMouseEnter={() => {
                  if (window.matchMedia('(hover: hover)').matches) activate(i);
                }}
              >
                <button
                  type="button"
                  className="svc__btn flex min-h-14 w-full items-center gap-4 py-5 text-left md:gap-8 md:py-6"
                  aria-expanded={expanded}
                  aria-controls={`svc-${i}`}
                  onFocus={() => activate(i)}
                  onClick={() => activate(i)}
                >
                  <span className={cn('svc__n num mb-0 shrink-0', isActive && 'text-[var(--petrol)]')}>
                    {service.n}
                  </span>
                  <span
                    className={cn(
                      'svc__t flex-1 font-[family-name:var(--font-display)] text-[clamp(1.2rem,2.8vw,2.15rem)] font-bold tracking-[-0.03em] uppercase transition-colors duration-300',
                      isActive ? 'text-[var(--petrol)]' : 'text-[var(--black)]',
                    )}
                  >
                    {service.title}
                  </span>
                  <span
                    className={cn(
                      'svc__arr text-xl transition-transform duration-300',
                      isActive && 'translate-x-1 text-[var(--petrol)]',
                      expanded && 'rotate-45',
                    )}
                    aria-hidden
                  >
                    →
                  </span>
                </button>
                <div
                  className={cn(
                    'svc__d overflow-hidden text-[var(--ink-2)] transition-all duration-300',
                    expanded ? 'max-h-40 pb-6' : 'max-h-0 pb-0',
                  )}
                  id={`svc-${i}`}
                >
                  <p className="max-w-xl">{service.text}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="svc__prev relative hidden aspect-[3/4] overflow-hidden lg:block" aria-hidden>
          <Image
            key={current.image}
            src={imgPath(current.image)}
            alt={current.alt}
            fill
            sizes="35vw"
            className={cn(
              'object-cover transition-opacity duration-400 ease-out',
              visible ? 'opacity-100' : 'opacity-0',
            )}
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-[color-mix(in_srgb,var(--petrol)_25%,transparent)]" />
        </div>
      </div>
    </section>
  );
}
