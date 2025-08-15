import React from 'react';
import Reveal from './Reveal';

type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FeatureIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
    {children}
  </div>
);

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: 'Smart Expense Tracking',
      description: 'Add transactions in seconds and categorize them for powerful insights.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V6zm0 5a1 1 0 011-1h16a1 1 0 011 1v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7zm2 2v5h14v-5H5z"/></svg>
      )
    },
    {
      title: 'Budgets & Categories',
      description: 'Create custom categories and budgets. Stay on top with visual dashboards.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 4h16v2H4V4zm0 4h10v2H4V8zm0 4h16v2H4v-2zm0 4h10v2H4v-2z"/></svg>
      )
    },
    {
      title: 'Real-time Notifications',
      description: 'Get push alerts for budgets and important account events.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22a2 2 0 002-2H10a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 00-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 006 19h12a1 1 0 00.71-1.71L18 16z"/></svg>
      )
    },
    {
      title: 'Dark Mode',
      description: 'Beautiful light and dark themes tuned for readability and comfort.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/></svg>
      )
    },
    {
      title: 'Privacy-first',
      description: 'We respect your data. Clear controls and transparent policies.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1l7 4v6c0 5-3.8 9.7-7 11-3.2-1.3-7-6-7-11V5l7-4z"/></svg>
      )
    }
  ];

  return (
    <section id="features" className="bg-app py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <h2 className="text-3xl font-bold text-ink md:text-4xl">Everything you need to take control</h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-3 text-ink/70">Built for speed, clarity, and control across devices.</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => (
            <Reveal key={feature.title} delayMs={idx * 80}>
              <div className="rounded-2xl border border-line-light bg-card p-6 shadow-soft">
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <h3 className="text-lg font-semibold text-ink">{feature.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{feature.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


