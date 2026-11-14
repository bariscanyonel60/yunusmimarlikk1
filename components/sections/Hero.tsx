'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { imgPath, site } from '@/content/site';
import { motion } from '@/lib/motion/tokens';
import { useReducedMotion } from '@/lib/motion/useReducedMotion';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const frame = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const section = root.current;
    const fr = frame.current;
    if (!section || !fr) return;

    const showSettled = () => {
      const titles = fr.querySelectorAll('.hero__t .ln > span');
      gsap.set(titles, { yPercent: 0, clearProps: 'transform' });
      gsap.set(fr.querySelector('.hero__img-intro'), {
        scale: 1,
        clipPath: 'inset(0% 0% 0% 0%)',
        clearProps: 'clipPath,transform',
      });
      gsap.set([fr.querySelector('.hero__tag'), fr.querySelector('.hero__scroll'), fr.querySelector('.hero-accent-line')], {
        opacity: 1,
        y: 0,
        clearProps: 'transform',
      });
      section.classList.add('is-ready');
    };

    if (reduced) {
      fr.style.setProperty('--p', '0');
      showSettled();
      return;
    }

    const ctx = gsap.context(() => {
      const titleLines = fr.querySelectorAll('.hero__t .ln > span');
      const introMedia = fr.querySelector('.hero__img-intro');
      const tag = fr.querySelector('.hero__tag');
      const scroll = fr.querySelector('.hero__scroll');
      const line = fr.querySelector('.hero-accent-line');

      gsap.set(titleLines, { yPercent: 110 });
      // Intro clip wrapper'da — Next Image layout boyutu 100vw kalır
      gsap.set(introMedia, { scale: 1.12, clipPath: 'inset(8% 5% 8% 5%)' });
      gsap.set([tag, scroll, line], { opacity: 0, y: 10 });

      const intro = gsap.timeline({
        defaults: { ease: motion.ease.out },
        onComplete: () => section.classList.add('is-ready'),
      });

      intro
        .to(introMedia, { scale: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: motion.image }, 0)
        .to(titleLines, { yPercent: 0, duration: motion.text + 0.1, stagger: 0.12 }, 0.12)
        .to([line, tag], { opacity: 1, y: 0, duration: motion.hover + 0.1, stagger: 0.06 }, 0.45)
        .to(scroll, { opacity: 1, y: 0, duration: motion.hover }, 0.6);

      const failSafe = window.setTimeout(() => {
        if (!section.classList.contains('is-ready')) showSettled();
      }, 2200);

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
        onUpdate: (self) => {
          fr.style.setProperty('--p', self.progress.toFixed(4));
        },
      });

      return () => window.clearTimeout(failSafe);
    }, section);

    return () => ctx.revert();
  }, [reduced]);

  return (
    <section ref={root} className="hero relative min-h-[100svh]" aria-labelledby="h1" data-theme="dark">
      <h1 id="h1" className="sr-only">
        Yunus Mimarlık — iç mimarlık ve mimari tasarım
      </h1>
      <div
        ref={frame}
        className="hero__frame relative flex min-h-[100svh] items-end overflow-hidden pb-16 pt-[calc(var(--chrome)+24px)] text-[var(--white)]"
        style={{ ['--p' as string]: 0 } as React.CSSProperties}
      >
        {/* Full-bleed media — padding yok; sizes=100vw doğru */}
        <div
          className="hero__img absolute inset-0 z-0 will-change-transform"
          style={{
            transform: 'scale(calc(1 + var(--p) * 0.08))',
            clipPath: 'inset(calc(var(--p) * 3%) calc(var(--p) * 2.5%) 0 calc(var(--p) * 2.5%))',
          }}
        >
          <div className="hero__img-intro absolute inset-0">
            <div className="absolute inset-0 md:hidden">
              <Image
                src={imgPath('hero-yunus-giris-mobile.jpg')}
                alt="Modern lobi: kıvrımlı duvar aydınlatması, ahşap çıtalar ve bitkilendirilmiş iç mekân"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover object-[center_28%]"
              />
            </div>
            <div className="absolute inset-0 hidden md:block">
              <Image
                src={imgPath('hero-yunus-giris-desktop.jpg')}
                alt="Geniş açılı modern lobi; ahşap çıtalar, dalgalı duvar ve bitki bandı"
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--black)_42%,transparent)_0%,color-mix(in_srgb,var(--black)_10%,transparent)_36%,color-mix(in_srgb,var(--black)_14%,transparent)_58%,color-mix(in_srgb,var(--black)_62%,transparent)_100%)]"
            aria-hidden
          />
        </div>

        <div
          className="hero__titles pointer-events-none absolute inset-x-[var(--gut)] top-[calc(var(--chrome)+1.25rem)] z-[1] sm:top-[min(26%,8.5rem)] md:top-[24%]"
          aria-hidden
          style={{
            transform: 'translate3d(0, calc(var(--p) * -12vh), 0) scale(calc(1 - var(--p) * 0.08))',
            opacity: 'calc(1 - var(--p) * 0.55)',
          }}
        >
          <div className="hero__t font-[family-name:var(--font-display)] text-[clamp(2.75rem,15vw,13rem)] font-bold uppercase leading-[0.84] tracking-[-0.05em] text-[var(--white)] sm:text-[clamp(3.25rem,17vw,14rem)]">
            <span className="ln block overflow-hidden">
              <span className="block">YUNUS</span>
            </span>
            <span className="ln block overflow-hidden">
              <span className="hero-outline block">MİMARLIK</span>
            </span>
          </div>
        </div>

        <div
          className="relative z-[2] max-w-md px-[var(--gut)]"
          style={{ opacity: 'calc(1 - var(--p) * 0.85)', transform: 'translate3d(0, calc(var(--p) * 24px), 0)' }}
        >
          <div className="hero-accent-line mb-5" aria-hidden />
          <p className="hero__tag text-[clamp(1.05rem,2.1vw,1.5rem)] font-medium leading-snug tracking-[-0.02em]">
            {site.tagline[0]}
            <br />
            <span className="text-[color-mix(in_srgb,var(--white)_88%,var(--petrol-soft))]">{site.tagline[1]}</span>
          </p>
        </div>

        <a
          className="hero__scroll absolute right-[var(--gut)] bottom-10 z-[2] flex flex-col items-center gap-3 text-[0.7rem] font-semibold tracking-[0.18em] text-[color-mix(in_srgb,var(--white)_75%,transparent)] uppercase"
          href="#giris"
        >
          <span className="sr-only">Aşağı kaydır</span>
          <i className="hero__scroll-line" aria-hidden />
          Scroll
        </a>
      </div>
    </section>
  );
}
