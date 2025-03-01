import EmailButton from "./EmailButton";
import GitHubButton from "./GitHubButton";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex justify-between sm:justify-end items-center w-full py-6 bg-inherit sticky top-0 z-50">
      <h2 className="block sm:hidden">
          Isaiah Chin<span className="dark:text-accent">.</span>
        </h2>
      <nav className="w-fit flex justify-end items-center gap-2 px-4 py-2 rounded-2xl">
        <GitHubButton />
        {/* <EmailButton /> */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
