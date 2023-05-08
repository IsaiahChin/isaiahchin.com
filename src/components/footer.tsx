import UpArrowIcon from '../assets/UpArrowIcon';

export default function Footer() {
  return (
    <footer className="flex justify-end w-full px-8 pb-4 sm:px-16 text-lg dark:[&_g]:stroke-stone-100">
      <a
        href="#home"
        className="inline-flex gap-1 items-center p-1 px-2 border border-slate-900/10 dark:border-stone-100/10 rounded-md hover:-translate-y-2 hover:text-slate-900 hover:bg-lime-300 active:bg-lime-400 dark:[&_g]:hover:stroke-slate-900 transition-transform"
      >
        <UpArrowIcon />
        Back to top
      </a>
    </footer>
  );
}
