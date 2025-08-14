import React from 'react';
import Reveal from './Reveal';

const faqs: { q: string; a: string }[] = [
  { q: 'Is my data secure?', a: 'Yes. We use Firebase auth and follow privacy-first principles.' },
  { q: 'Does CashCraft support dark mode?', a: 'Absolutely. We offer a beautiful dark theme and system mode.' },
  { q: 'Can I manage custom categories?', a: 'Yes. Create, edit, and delete categories to fit your habits.' },
  { q: 'Do I get notifications?', a: 'Yes. Enable push alerts for budgets and important events.' },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="bg-app py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-ink md:text-4xl">Frequently asked questions</h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-3 text-ink/70">Quick answers about CashCraft</p>
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-line-light rounded-2xl border border-line-light bg-card">
          {faqs.map((item, idx) => (
            <Reveal key={item.q} delayMs={idx * 80}>
              <details className="group p-6 open:bg-surface-light">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <h3 className="text-base font-semibold text-ink">{item.q}</h3>
                  <span className="text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 text-sm text-ink/70">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;


