import React, { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal';

type Slide = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
};

const slides: Slide[] = [
  {
    id: 'categories',
    eyebrow: 'Manage Categories',
    title: 'Organize the way you spend',
    description: 'Create, edit, or delete categories. Tailor CashCraft to match your real-world habits.',
    bullets: [
      'Unlimited custom categories',
      'Fine-grained control and clean UI',
      'Instant updates to budgets and analytics',
    ],
    image: '/assets-web/HomeScreen-Mockup.png',
    imageAlt: 'Manage categories mockup',
  },
  {
    id: 'transactions',
    eyebrow: 'Transactions',
    title: 'Log expenses in seconds',
    description: 'Fast entry and smart defaults let you record spending without friction.',
    bullets: [
      'One-tap add from the home screen',
      'Attach to categories and notes',
      'Optimized for speed and accuracy',
    ],
    image: '/assets-web/Transactions-Mockup.png',
    imageAlt: 'Transactions mockup',
  },
  {
    id: 'analytics',
    eyebrow: 'Dashboard Analytics',
    title: 'Understand your money at a glance',
    description: 'Clear visualizations help you track budgets and spot trends early.',
    bullets: [
      'Daily/Weekly/Monthly insights',
      'Category breakdowns and charts',
      'Budget thresholds with notifications',
    ],
    image: '/assets-web/Dashboard-Mockup.png',
    imageAlt: 'Dashboard analytics mockup',
  },
];

const FeatureShowcase: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let snapTimer: number | null = null;
    const onScroll = () => {
      const cards = Array.from(el.querySelectorAll('article')) as HTMLElement[];
      if (!cards.length) return;
      const mid = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Number.POSITIVE_INFINITY;
      cards.forEach((card, i) => {
        const center = card.offsetLeft + card.offsetWidth / 2;
        const d = Math.abs(center - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
      if (snapTimer) window.clearTimeout(snapTimer);
      snapTimer = window.setTimeout(() => {
        // Snap to nearest after user stops scrolling for 120ms
        scrollToIndex(best);
      }, 120);
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    // Center the first card on mount
    requestAnimationFrame(() => scrollToIndex(0));
    const onResize = () => requestAnimationFrame(() => scrollToIndex(active));
    window.addEventListener('resize', onResize);
    return () => {
      el.removeEventListener('scroll', onScroll as any);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cards = Array.from(el.querySelectorAll('article')) as HTMLElement[];
    const clamped = Math.max(0, Math.min(cards.length - 1, index));
    const target = cards[clamped];
    if (target) {
      const left = target.offsetLeft - (el.clientWidth - target.clientWidth) / 2;
      el.scrollTo({ left, behavior: 'smooth' });
    }
  };

  return (
    <section id="showcase" className="bg-app py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-ink md:text-4xl">Built for clarity and control</h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-3 text-ink/70">Swipe through to explore the core workflows.</p>
          </Reveal>
        </div>

        <div ref={wrapperRef} className="relative mt-10" tabIndex={0}
             onKeyDown={(e) => {
               if (e.key === 'ArrowRight') { e.preventDefault(); scrollToIndex(active + 1); }
               if (e.key === 'ArrowLeft') { e.preventDefault(); scrollToIndex(active - 1); }
             }}>
          {/* Prev/Next premium buttons (fixed over scroller) */}
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollToIndex(active - 1)}
            className="glass absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full p-3 text-ink shadow-soft transition hover:scale-105 md:inline-flex"
            disabled={active === 0}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollToIndex(active + 1)}
            className="glass absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full p-3 text-ink shadow-soft transition hover:scale-105 md:inline-flex"
            disabled={active === slides.length - 1}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>

          {/* Scroller */}
          <div
            ref={scrollerRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-3 md:gap-6 overflow-x-auto overscroll-x-contain px-0 md:px-[12vw]"
            onWheel={(e) => {
              const el = scrollerRef.current;
              if (!el) return;
              e.preventDefault();
              el.scrollLeft += e.deltaY * 1.0;
            }}
          >
            {/* Start spacer to allow centering first (desktop only) */}
            <div aria-hidden className="hidden md:block shrink-0 basis-[12vw]" />
            {slides.map((s, index) => {
              const isActive = index === active;
              return (
              <article
                key={s.id}
                className={`snap-center shrink-0 grow-0 basis-full md:basis-[70%] lg:basis-[60%] rounded-3xl border border-line-light bg-app p-6 shadow-soft transition-all duration-300 ${isActive ? 'blur-none opacity-100' : 'blur-sm opacity-70'}`}
              >
                <div className="grid items-center gap-8 md:grid-cols-2">
                {/* Left: Content */}
                <div>
                  <Reveal>
                    <div className="text-xs font-semibold uppercase tracking-wide text-ink/60">{s.eyebrow}</div>
                  </Reveal>
                  <Reveal delayMs={80}>
                    <h3 className="mt-2 text-2xl font-bold text-ink md:text-3xl">{s.title}</h3>
                  </Reveal>
                  <Reveal delayMs={120}>
                    <p className="mt-3 text-ink/70">{s.description}</p>
                  </Reveal>
                  <ul className="mt-5 space-y-2 text-sm text-ink/70">
                    {s.bullets.map((b) => (
                      <Reveal key={b} delayMs={160}>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                </div>

                {/* Right: Image */}
                <Reveal variant="scale" delayMs={100}>
                  <div className="relative mx-auto w-full max-w-md">
                    <img
                      src={s.image}
                      alt={s.imageAlt}
                      className={`w-80 rounded-[1.5rem] shadow-soft transition-all duration-300 ${isActive ? 'blur-0 opacity-100' : 'blur-sm opacity-70'}`}
                      loading={index === 0 ? 'eager' : 'lazy'}
                    />
                  </div>
                </Reveal>
              </div>
            </article>
          );})}
            {/* End spacer to allow centering last (desktop only) */}
            <div aria-hidden className="hidden md:block shrink-0 basis-[12vw]" />
          </div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-24 bg-gradient-to-r from-app to-transparent md:block" />
          <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-24 bg-gradient-to-l from-app to-transparent md:block" />

          {/* Dots */}
          <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${i === active ? 'bg-primary' : 'bg-line-light hover:bg-primary/60'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;


