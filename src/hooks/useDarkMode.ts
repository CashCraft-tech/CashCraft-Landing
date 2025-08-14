import { useEffect, useState, useCallback } from 'react';

type ThemePreference = 'light' | 'dark' | 'system';

export function useDarkMode() {
  const getSystemPrefersDark = () =>
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const readStoredPreference = (): ThemePreference | null => {
    try {
      const stored = localStorage.getItem('theme');
      if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
      return null;
    } catch {
      return null;
    }
  };

  const [preference, setPreference] = useState<ThemePreference>(
    () => readStoredPreference() ?? 'system'
  );
  const [isDark, setIsDark] = useState<boolean>(() => {
    const stored = readStoredPreference();
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return getSystemPrefersDark();
  });

  const applyClass = useCallback((dark: boolean) => {
    const root = document.documentElement;
    if (dark) root.classList.add('dark');
    else root.classList.remove('dark');
  }, []);

  useEffect(() => {
    const sync = () => {
      const stored = readStoredPreference();
      let dark = false;
      if (stored === 'dark') dark = true;
      else if (stored === 'light') dark = false;
      else dark = getSystemPrefersDark();
      setIsDark(dark);
      applyClass(dark);
    };
    sync();
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = () => preference === 'system' && sync();
    mq.addEventListener?.('change', listener);
    return () => mq.removeEventListener?.('change', listener);
  }, [preference, applyClass]);

  const setTheme = useCallback((pref: ThemePreference) => {
    setPreference(pref);
    try {
      localStorage.setItem('theme', pref);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark');
  }, [isDark, setTheme]);

  return { isDark, preference, setTheme, toggle };
}

