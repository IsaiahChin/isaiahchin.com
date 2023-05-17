'use client';

import ExternalLinkIcon from '../assets/ExternalLinkIcon';
import SunIcon from '../assets/SunIcon';
import MoonIcon from '../assets/MoonIcon';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setHasMounted(true);
  });

  if (!hasMounted) {
    return null;
  }

  return (
    <header
      id="home"
      className="w-full bg-inherit py-4 sm:py-8 text-[16px] sm:text-xl sticky top-0"
    >
      <nav className="flex justify-between items-center dark:[&_g]:stroke-light">
        <ul className="flex gap-4 items-center">
          {[
            ['Home', '/'],
            ['Blog', '/blog'],
            ['Projects', '/projects'],
          ].map(([title, url]) => (
            <li key={title}>
              <Link
                href={url}
                className={`${
                  pathname === url
                    ? 'underline decoration-primary dark:decoration-dark-accent '
                    : ''
                }hover:underline underline-offset-4 
              hover:decoration-primary dark:hover:decoration-dark-accent`}
              >
                {title}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/IsaiahChin"
              className="inline-flex gap-x-1
              hover:underline underline-offset-4 
              hover:decoration-primary dark:hover:decoration-dark-accent"
              target="_blank"
            >
              Github
              <ExternalLinkIcon size="1.5" />
            </a>
          </li>
        </ul>
        <div className="h-[32px]">
          <button
            onClick={() =>
              theme == 'dark' ? setTheme('light') : setTheme('dark')
            }
            className="rounded:md hover:scale-125 active:scale-100 transition-transform"
          >
            {theme == 'dark' ? <SunIcon size="2" /> : <MoonIcon size="2" />}
          </button>
        </div>
      </nav>
    </header>
  );
}
