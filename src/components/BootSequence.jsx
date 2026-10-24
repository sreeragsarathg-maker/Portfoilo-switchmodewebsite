import { useState, useEffect } from 'react';

const BOOT_LINES = [
  'INITIALIZING SHADOW PROTOCOL...',
  'LOADING SECURITY MODULES...',
  'ESTABLISHING SECURE CONNECTION...',
  'IDENTITY VERIFIED: SREERAG SARATH',
  'SHADOW SYSTEM ONLINE'
];

export default function BootSequence({ onComplete, playSound }) {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  // Check if reduced motion is preferred
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (media.matches) {
      onComplete?.();
    }
  }, [onComplete]);

  // Initial boot sound
  useEffect(() => {
    playSound?.('boot');
  }, [playSound]);

  // Typewriter effect for current line
  useEffect(() => {
    if (currentLineIndex >= BOOT_LINES.length) {
      const timer = setTimeout(() => {
        playSound?.('access');
        onComplete?.();
      }, 700);
      return () => clearTimeout(timer);
    }

    const targetLine = BOOT_LINES[currentLineIndex];

    if (charIndex < targetLine.length) {
      const typeSpeed = targetLine === 'SHADOW SYSTEM ONLINE' ? 45 : 30;
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + targetLine[charIndex]);
        setCharIndex(prev => prev + 1);
        if (charIndex % 3 === 0) playSound?.('blip');
      }, typeSpeed);
      return () => clearTimeout(timeout);
    } else {
      // Completed line, pause and proceed to next line
      const linePause = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setDisplayedText('');
        setCharIndex(0);
      }, 350);
      return () => clearTimeout(linePause);
    }
  }, [currentLineIndex, charIndex, onComplete, playSound]);

  return (
    <div className="boot-sequence-overlay" role="dialog" aria-label="System Boot Sequence">
      {/* Background Scanning Beam */}
      <div className="boot-scanner-beam" aria-hidden="true" />
      <div className="boot-grid-matrix" aria-hidden="true" />

      {/* Central JARVIS Boot Core */}
      <div className="boot-core-container">
        <div className="boot-ring boot-ring-outer" />
        <div className="boot-ring boot-ring-middle" />
        <div className="boot-ring boot-ring-inner" />
        <div className="boot-center-node">
          <div className="boot-pulse-dot" />
        </div>
      </div>

      {/* Boot Terminal Box */}
      <div className="boot-terminal-box">
        <div className="boot-terminal-header">
          <span className="dot dot-green" />
          <span className="dot dot-cyan" />
          <span className="terminal-title">ERICSXA OS // SHADOW BOOT PROTOCOL v4.2</span>
        </div>

        <div className="boot-terminal-content">
          {BOOT_LINES.slice(0, currentLineIndex).map((line, idx) => (
            <div key={idx} className="boot-log-line completed">
              <span className="prompt-sym">&gt;</span>
              <span className="log-text">{line}</span>
              <span className="status-ok">[OK]</span>
            </div>
          ))}

          {currentLineIndex < BOOT_LINES.length && (
            <div className="boot-log-line active">
              <span className="prompt-sym">&gt;</span>
              <span className="log-text">{displayedText}</span>
              <span className="boot-cursor">█</span>
            </div>
          )}
        </div>

        {/* Skip button for user accessibility */}
        <div className="boot-footer">
          <button
            type="button"
            className="boot-skip-btn"
            onClick={() => {
              playSound?.('select');
              onComplete?.();
            }}
          >
            [ SKIP BOOT SEQUENCE ]
          </button>
        </div>
      </div>
    </div>
  );
}
