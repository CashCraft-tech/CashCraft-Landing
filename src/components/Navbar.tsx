import React from 'react';
// ThemeToggle removed: default dark mode

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-30 w-full border-b border-line-light bg-app/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/assets-web/icon.png"
            alt="CashCraft logo"
            className="h-9 w-9 rounded-lg object-cover"
          />
          <span className="text-xl font-bold text-ink">CashCraft</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#features" className="text-sm font-medium text-ink hover:text-ink">Features</a>
          <a href="#how" className="text-sm font-medium text-ink hover:text-ink">How it works</a>
          <a href="#faq" className="text-sm font-medium text-ink hover:text-ink">FAQ</a>
          {/* <a href="#contact" className="text-sm font-medium text-ink hover:text-ink">Support</a> */}
        </nav>

        <div className="glass flex items-center gap-3 rounded-xl px-2 py-1">
          <a
                href="/assets-web/CashCraft.apk"
                className="rounded-lg border border-line-light bg-card px-4 py-2 text-sm font-semibold text-ink hover:bg-surface-light"
          >
            Get the App
          </a>
          <a
            href="#contact"
            className="hidden rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft hover:bg-primary-dark md:inline-block"
          >
            Contact
          </a>
          {/* Theme toggle removed as site defaults to dark mode */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;


