import ExternalLinkIcon from '../assets/ExternalLinkIcon';

export default function Header() {
  return (
    <header id="home" className="w-full bg-inherit p-16 py-8">
      <nav>
        <ul className="flex gap-8">
          <li>
            <a
              href="https://github.com/isaiahchin"
              className="inline-flex gap-0.5 items-center p-1 px-2 border border-slate-900/10 rounded-md hover:scale-110 hover:text-slate-900 hover:bg-lime-300 hover:bg-opacity-80 hover:-rotate-1 active:bg-lime-400 transition-transform"
              target="_blank"
            >
              Github
              <ExternalLinkIcon />
            </a>
          </li>
        </ul>
      </nav>
      <div className="theme-changer">
        
      </div>
    </header>
  );
}
