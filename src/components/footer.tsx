import UpArrowIcon from '../assets/UpArrowIcon';

export default function Footer() {
  return (
    <footer
      className="flex justify-end w-full px-8 pb-4 sm:px-16 text-lg 
    dark:[&_g]:stroke-light"
    >
      <a
        href="#home"
        className="inline-flex gap-1 items-center p-1 px-2 border rounded-md 
        border-primary/10 dark:border-light/10 
        hover:bg-accent hover:-translate-y-1 active:bg-accent-active 
        dark:hover:bg-dark-neutral
        transition-transform"
      >
        <UpArrowIcon />
        Back to top
      </a>
    </footer>
  );
}
