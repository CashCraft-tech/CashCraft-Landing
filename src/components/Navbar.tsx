import React, { useState } from 'react';
// ThemeToggle removed: default dark mode

const socialLinks = [
  {
    label: 'GitHub',
    value: '@DevPrasadX',
    href: 'https://github.com/DevPrasadX',
    icon: (
      <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
    ),
    color: 'bg-gray-100',
  },
  {
    label: 'LinkedIn',
    value: '@prasad-pansare',
    href: 'https://www.linkedin.com/in/prasad-pansare-904461208/',
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z"/></svg>
    ),
    color: 'bg-blue-50',
  },
  {
    label: 'Instagram',
    value: '@_.prasad_19',
    href: 'https://instagram.com/_.prasad_19',
    icon: (
      <svg className="w-6 h-6 text-pink-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.014 7.052.072 5.771.13 4.659.388 3.678 1.369c-.981.981-1.239 2.093-1.297 3.374C2.014 5.668 2 6.077 2 12c0 5.923.014 6.332.072 7.611.058 1.281.316 2.393 1.297 3.374.981.981 2.093 1.239 3.374 1.297C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.281-.058 2.393-.316 3.374-1.297.981-.981 1.239-2.093 1.297-3.374.058-1.279.072-1.688.072-7.611 0-5.923-.014-6.332-.072-7.611-.058-1.281-.316-2.393-1.297-3.374-.981-.981-2.093-1.239-3.374-1.297C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/></svg>
    ),
    color: 'bg-pink-50',
  },
];



const Navbar: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
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
        
          {/* Theme toggle removed as site defaults to dark mode */}
        </div>
      </div>
    
    </header>
  );
};

export default Navbar;


