'use client';

import ExternalLinkIcon from '../assets/ExternalLinkIcon';
import SunIcon from '../assets/SunIcon';
import MoonIcon from '../assets/MoonIcon';
import { useTheme } from 'next-themes';

export default function Header() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <header id="home" className="w-full bg-inherit px-8 py-8 sm:px-16">
      <nav className="flex justify-between items-center dark:[&_g]:stroke-light">
        <ul className="flex gap-8">
          <li>
            <a
              href="https://github.com/isaiahchin"
              className="inline-flex gap-0.5 items-center p-1 px-2 border rounded-md hover:scale-110 
              border-primary/10 dark:border-light/10 
              hover:bg-accent hover:-rotate-1 active:bg-accent-active 
              dark:hover:bg-dark-neutral
              transition-transform"
              target="_blank"
            >
              Github
              <ExternalLinkIcon />
            </a>
          </li>
        </ul>
        <div>
          <button
            onClick={() =>
              theme == 'dark' ? setTheme('light') : setTheme('dark')
            }
            className="rounded:md hover:scale-125 cursor-pointer transition-transform"
          >
            {currentTheme == 'dark' ? (
              <SunIcon size="2" />
            ) : (
              <MoonIcon size="2" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
