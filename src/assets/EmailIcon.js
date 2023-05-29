export default function EmailIcon({ size = '1.5' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={`${size}rem`}
      height={`${size}rem`}
      viewBox="0 0 24 24"
    >
      <g stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-356.000000, -335.000000)"
          stroke="#333333"
          strokeWidth="2"
        >
          <g transform="translate(356.000000, 335.000000)">
            <polygon strokeLinejoin="round" points="21 4 3 14 12.5 15 20 20" />
            <polyline
              fill="#333333"
              strokeLinejoin="round"
              points="12 15 12 19 14.5 16.5"
            />
            <path d="M12,15 L20.5,5" />
          </g>
        </g>
      </g>
    </svg>
  );
}
