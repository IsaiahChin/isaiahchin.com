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
      <nav className="flex justify-between items-center dark:[&_g]:stroke-stone-100">
        <ul className="flex gap-8">
          <li>
            <a
              href="https://github.com/isaiahchin"
              className="inline-flex gap-0.5 items-center p-1 px-2 border border-slate-900/10 dark:border-stone-100/10 rounded-md hover:scale-110 hover:text-slate-900 hover:bg-lime-300 hover:-rotate-1 active:bg-lime-400 dark:[&_g]:hover:stroke-slate-900 transition-transform"
              target="_blank"
            >
              Github
              <ExternalLinkIcon />
            </a>
          </li>
        </ul>
        <div className="theme-changer ">
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
