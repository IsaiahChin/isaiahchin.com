import GitHubButton from "./GitHubButton";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full py-6 sm:mt-12 bg-inherit sticky top-0 z-50">
      <h2>
        Isaiah Chin<span className="dark:text-accent">.</span>
      </h2>
      <nav className="w-fit flex justify-end items-center gap-2 py-2 rounded-2xl">
        <GitHubButton />
        <ThemeToggle />
      </nav>
    </header>
  );
}
