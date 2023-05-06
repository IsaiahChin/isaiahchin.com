export default function Header() {
  return (
    <header className="max-w-6xl mx-auto w-full top-0 sticky py-8 px-20 text-lg">
      <nav>
        <ul className="flex gap-8">
          <li className="hover:scale-110 hover:bg-lime-300 hover:bg-opacity-80 p-1 px-2 rounded-md transition-transform">
            <a
              href="https://github.com/isaiahchin"
              className="inline-flex gap-0.5 items-center"
              target="_blank"
            >
              Github
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
                className="scale-75"
              >
                {/* Generator: Sketch 43.2 (39069) - http://www.bohemiancoding.com/sketch */}
                <title>https://github.com/isaiahchin</title>
                <desc>My GitHub</desc>
                <defs />
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  stroke-linecap="round"
                >
                  <g
                    id="Artboard-4"
                    transform="translate(-312.000000, -203.000000)"
                    stroke="#333333"
                    stroke-width="2"
                  >
                    <g id="47" transform="translate(312.000000, 203.000000)">
                      <path
                        d="M20,15 L20,18.0026083 C20,19.1057373 19.1073772,20 18.0049107,20 L5.99508929,20 C4.8932319,20 4,19.1073772 4,18.0049107 L4,5.99508929 C4,4.8932319 4.89585781,4 5.9973917,4 L9,4"
                        id="Rectangle-460"
                      />
                      <polyline
                        id="Path-93"
                        strokeLinejoin="round"
                        points="13 4 20.0207973 4 20.0207973 11.0191059"
                      />
                      <path
                        d="M19,5 L12,12"
                        id="Path-94"
                        strokeLinejoin="round"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
