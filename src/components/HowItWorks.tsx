import React from 'react';
import Reveal from './Reveal';

const steps: { step: string; title: string; description: string }[] = [
  { step: '1', title: 'Create your account', description: 'Sign up securely and verify with OTP.' },
  { step: '2', title: 'Add transactions', description: 'Log income and expenses in seconds.' },
  { step: '3', title: 'Categorize & budget', description: 'Organize with custom categories and budgets.' },
  { step: '4', title: 'Get insights', description: 'See trends on your dashboard to optimize spending.' },
  { step: '5', title: 'Stay notified', description: 'Receive push alerts for budgets and activity.' },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how" className="bg-surface-light py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-ink md:text-4xl">How it works</h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-3 text-ink/70">A simple flow designed for everyday use.</p>
          </Reveal>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-5">
          {steps.map((s, idx) => (
            <Reveal key={s.step} delayMs={idx * 80}>
              <li className="rounded-2xl border border-line-light bg-card p-6 text-center shadow-soft">
                <div className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
                  <span className="text-sm font-bold">{s.step}</span>
                </div>
                <h3 className="text-base font-semibold text-ink">{s.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;


