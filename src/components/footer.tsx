import UpArrowIcon from '../assets/UpArrowIcon';

export default function Footer() {
  return (
    <footer className="w-full bg-inherit px-16 pb-4 text-lg">
      <a
        href="#home"
        className="inline-flex gap-1 items-center p-1 px-2 border border-slate-900/10 rounded-md hover:-translate-y-2 hover:bg-lime-300 transition-transform"
      >
        Back to top
        <UpArrowIcon />
      </a>
    </footer>
  );
}
