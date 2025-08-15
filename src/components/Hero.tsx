import React from 'react';
import Reveal from './Reveal';
const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-app bg-aurora">
      <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 py-20">
        <div>
          <Reveal variant="fade-up">
            <h1 className="text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
              Master your Money Management with CashCraft
            </h1>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-4 max-w-xl text-lg text-ink/70">
              Track expenses, set budgets, categorize transactions, and get real-time notifications. Secure authentication and a gorgeous dark mode make it effortless to stay in control.
            </p>
          </Reveal>
          <Reveal delayMs={200}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/assets-web/CashCraft.apk"
                download
                className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft hover:bg-primary-dark"
              >
                Download on Android
              </a>
              <a
                href="#features"
                className="rounded-lg border border-line-light bg-card px-5 py-3 text-sm font-semibold text-ink hover:bg-surface-light"
              >
                See Features
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={300}>
            <div className="mt-6 flex items-center gap-4 text-xs text-ink/60">
              <span>Secure OTP verification</span>
              <span>•</span>
              <span>Push notifications</span>
              <span>•</span>
              <span>Privacy-first</span>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <Reveal variant="scale">
            <div className="relative mx-auto h-[360px] w-full max-w-2xl md:h-[460px] lg:h-[520px]">
              {/* Left phone */}
              <img
                src="/assets-web/HomeScreen-Mockup.png"
                alt="CashCraft app homescreen"
                className="absolute bottom-0 left-0 w-40 rotate-[-6deg] rounded-[1.5rem]  shadow-soft sm:w-48 md:w-56 lg:w-64"
                loading="lazy"
              />
              {/* Center phone */}
              <img
                src="/assets-web/Logo-Mockup.png"
                alt="CashCraft branded splash"
                className="absolute inset-x-0 bottom-0 z-10 mx-auto w-48 rounded-[1.7rem]  shadow-soft sm:w-56 md:w-64 lg:w-72"
                loading="eager"
              />
              {/* Right phone */}
              <img
                src="/assets-web/Dashboard-Mockup.png"
                alt="CashCraft dashboard"
                className="absolute bottom-0 right-0 w-40 rotate-[6deg] rounded-[1.5rem]  shadow-soft sm:w-48 md:w-56 lg:w-64"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Hero;


