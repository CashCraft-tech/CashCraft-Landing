import React from 'react';
import Reveal from './Reveal';

const CTA: React.FC = () => {
  return (
    <section id="download" className="bg-app py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-10 rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 text-white shadow-soft md:grid-cols-2">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">Take control of your finances now</h2>
              <p className="mt-3 text-white/90">Join CashCraft and start tracking smarter today.</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href="#" className="glass rounded-lg px-5 py-3 text-sm font-semibold text-ink hover:bg-surface-light">Download App (Android)</a>
                <a href="#contact" className="rounded-lg border border-white/40 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Contact Support</a>
              </div>
            </div>
          </Reveal>
          <Reveal delayMs={150} variant="scale">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white/70">Users</div>
                  <div className="text-2xl font-bold">10k+</div>
                </div>
                <div>
                  <div className="text-white/70">Avg. Rating</div>
                  <div className="text-2xl font-bold">4.8/5</div>
                </div>
                <div>
                  <div className="text-white/70">Countries</div>
                  <div className="text-2xl font-bold">25+</div>
                </div>
                <div>
                  <div className="text-white/70">Categories</div>
                  <div className="text-2xl font-bold">Unlimited</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CTA;

