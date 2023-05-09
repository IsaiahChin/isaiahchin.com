import UpArrowIcon from '../assets/UpArrowIcon';

export default function Footer() {
  return (
    <footer
      className="flex justify-end w-full px-8 pb-8 sm:px-16 text-lg 
    dark:[&_g]:stroke-light"
    >
      <a
        href="#home"
        className="inline-flex gap-1 items-center p-1 px-2 border rounded-md 
        border-primary/10 dark:border-light/10 
        hover:bg-accent hover:-translate-y-1
        dark:hover:text-primary
        dark:hover:bg-dark-accent
        dark:[&_g]:hover:stroke-primary
        transition-transform"
      >
        <UpArrowIcon />
        Back to top
      </a>
    </footer>
  );
}
