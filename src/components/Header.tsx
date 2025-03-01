"use client";

import { RxExternalLink } from "react-icons/rx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", link: "/", isExternal: false },
    // { title: 'Blog', link: '/blog', isExternal: false },
    { title: "Projects", link: "/projects", isExternal: false },
    {
      title: "GitHub",
      link: "https://github.com/IsaiahChin",
      isExternal: true,
    },
  ];

  return (
    <header className="w-full bg-inherit py-4 sm:py-8 text-[16px] sm:text-xl sticky top-0 z-50">
      <nav className="flex justify-between items-center">
        <ul className="flex gap-4 items-center">
          {navLinks.map(({ title, link, isExternal }) => (
            <li key={title} className="pr-4">
              <Link
                href={link}
                className="underline-offset-4 hover:decoration-accent relative inline-flex gap-1 group"
                target={`${isExternal ? "_blank" : "_self"}`}
              >
                {title}
                {pathname === link ? (
                  <span className="absolute -bottom-1 w-full h-[2px] bg-accent"></span>
                ) : (
                  <span className="absolute -bottom-1 w-full h-0 bg-accent transition-[height] group-hover:h-[2px]"></span>
                )}
                {isExternal && <RxExternalLink size={"1.3rem"} />}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
