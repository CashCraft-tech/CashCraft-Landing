import React from 'react';
import { Link } from 'react-router-dom';
import logo from './../../public/assets-web/icon.png';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-line-light bg-app py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <img
            src="/assets-web/icon.png"
            alt="CashCraft logo"
            className="h-9 w-9 rounded-lg object-cover"
          />           </div>
            <span className="text-base font-semibold text-ink">CashCraft</span>
          </div>
          <nav className="flex items-center gap-4 text-sm text-ink/70">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#download" className="hover:text-ink">Download</a>
            <Link to="/privacy" className="hover:text-ink">Privacy</Link>
            <Link to="/terms" className="hover:text-ink">Terms</Link>
          </nav>
          <p className="text-sm text-ink/60">© {new Date().getFullYear()} CashCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


