'use client';

import SunIcon from '../assets/SunIcon';
import MoonIcon from '../assets/MoonIcon';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  });

  if (!hasMounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => setTheme(theme == 'dark' ? 'light' : 'dark')}
      className="hover:scale-125 active:scale-100 opacity-0 animate-fade-in transition-[transform,_opacity]"
    >
      {theme == 'dark' ? <SunIcon size="2" /> : <MoonIcon size="2" />}
    </button>
  );
}
