import React from 'react';
import { useDarkMode } from '../hooks';

const ThemeToggle: React.FC = () => {
  const { isDark, preference, setTheme, toggle } = useDarkMode();
  const label = preference === 'system' ? `System (${isDark ? 'Dark' : 'Light'})` : isDark ? 'Dark' : 'Light';

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggle}
        className="inline-flex items-center gap-2 rounded-lg border border-line-light bg-card px-3 py-2 text-xs font-semibold text-ink hover:bg-surface-light"
      >
        <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary" />
        <span>{label}</span>
      </button>
     
    </div>
  );
};

export default ThemeToggle;

