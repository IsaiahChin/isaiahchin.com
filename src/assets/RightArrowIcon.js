export default function RightArrow({ size = '1.5' }) {
  return (
    <svg
      width={`${size}rem`}
      height={`${size}rem`}
      viewBox="0 0 24 24"
      className="scale-75"
    >
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g
          transform="translate(-576.000000, -335.000000)"
          stroke="#333333"
          strokeWidth="2"
        >
          <g transform="translate(576.000000, 335.000000)">
            <circle id="Oval-1" cx="12" cy="12" r="10" />
            <polyline
              strokeLinecap="round"
              strokeLinejoin="round"
              points="11 9 14 12 11 15"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
