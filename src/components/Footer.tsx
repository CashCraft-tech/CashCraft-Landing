import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer
      id="contact"
      className="border-t border-line-light bg-app py-10 flex flex-col items-center justify-center"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-center gap-6">
          {/* Logo + Title */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
              <img
                src="/assets-web/icon.png"
                alt="CashCraft logo"
                className="h-9 w-9 rounded-lg object-cover"
              />
            </div>
            <span className="text-base font-semibold text-ink">CashCraft</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-row gap-2 md:gap-10 items-center  text-sm text-ink/70">
            <a href="#features" className="hover:text-ink">Features</a>
            <a href="#how" className="hover:text-ink">How it works</a>
            <a href="#download" className="hover:text-ink">Download</a>
            <Link to="/privacy" className="hover:text-ink">Privacy</Link>
            <Link to="/terms" className="hover:text-ink">Terms</Link>
          </nav>

          <div className="flex flex-row gap-4 md:gap-6 items-center text-lg text-ink/70">
            <a
              href="mailto:prasadpansare02@gmail.com"
              className="hover:text-ink transition-colors"
              aria-label="Email"
            >
              <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/DevPrasadX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/prasad-pansare-904461208/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/_.prasad_19"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink transition-colors"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-ink/60 text-center">
            © {new Date().getFullYear()} CashCraft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
