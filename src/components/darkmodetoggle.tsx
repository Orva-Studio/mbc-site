'use client';

import { useState, useEffect } from 'react';
import { SunIcon, MoonIcon } from './icons';

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (stored === 'dark' || (!stored && prefersDark.matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }

    function onSystemChange(e: MediaQueryListEvent) {
      if (localStorage.getItem('theme')) return;
      setDark(e.matches);
      document.documentElement.classList.toggle('dark', e.matches);
    }

    prefersDark.addEventListener('change', onSystemChange);
    return () => prefersDark.removeEventListener('change', onSystemChange);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }

  if (!mounted) return <div className="w-9 h-9" />;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="p-2 rounded-lg text-primary-600 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-100 transition-colors"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default DarkModeToggle;
