export default function Logo({ className = '', showName = true, isGhost = false }) {
  return (
    <div className={`brand-cyber-logo ${className}`}>
      {/* Cybersecurity Shield Emblem with </> */}
      <svg
        className="brand-shield-icon"
        viewBox="0 0 32 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer Shield Outline */}
        <path
          d="M16 2.5L3.5 7.8V16.8C3.5 24.8 8.8 32.2 16 34C23.2 32.2 28.5 24.8 28.5 16.8V7.8L16 2.5Z"
          stroke="currentColor"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Left Bracket < */}
        <path
          d="M11.5 14L8.5 17.5L11.5 21"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Right Bracket > */}
        <path
          d="M20.5 14L23.5 17.5L20.5 21"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Forward Slash / */}
        <path
          d="M17.5 12L14.5 23"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Terminal Text: >sreerag_ */}
      {showName && (
        <span className="brand-terminal-text">
          <span className="terminal-arrow">&gt;</span>
          <span className="terminal-name">sreerag</span>
          <span className="terminal-underscore">_</span>
        </span>
      )}
    </div>
  );
}
