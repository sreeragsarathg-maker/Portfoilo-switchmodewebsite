import { useState } from 'react';
import '../styles/themetoggle.css';

export default function ModeControllerSwitch({ theme, onToggle, playSound }) {
  const isGhost = theme === 'ghost' || theme === 'shadow';
  const [isPressing, setIsPressing] = useState(false);

  const handleToggle = (e) => {
    setIsPressing(true);
    playSound?.('select');
    setTimeout(() => setIsPressing(false), 250);
    onToggle?.(e);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleToggle(e);
    } else if (e.key === 'ArrowRight' && !isGhost) {
      e.preventDefault();
      handleToggle(e);
    } else if (e.key === 'ArrowLeft' && isGhost) {
      e.preventDefault();
      handleToggle(e);
    }
  };

  return (
    <div
      className={`mode-controller-toggle ${isGhost ? 'is-ghost' : 'is-pro'} ${isPressing ? 'is-pressing' : ''}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      role="switch"
      aria-checked={isGhost}
      tabIndex={0}
      title={isGhost ? 'Switch to Professional Mode' : 'Switch to Ghost Mode'}
      aria-label={`Mode Switch: Currently in ${isGhost ? 'Ghost Mode' : 'Professional Mode'}. Toggle to change.`}
    >
      {/* Cyberpunk HUD Corner Brackets */}
      <span className="controller-corner corner-tl" aria-hidden="true" />
      <span className="controller-corner corner-tr" aria-hidden="true" />
      <span className="controller-corner corner-bl" aria-hidden="true" />
      <span className="controller-corner corner-br" aria-hidden="true" />

      {/* Controller Sliding Switch Track */}
      <div className="controller-track" aria-hidden="true">
        {/* Sliding Switch Thumb with Gamepad Grip Ridges */}
        <div className="controller-slider-thumb">
          <div className="thumb-grip" aria-hidden="true">
            <span className="thumb-grip-line" />
            <span className="thumb-grip-line" />
            <span className="thumb-grip-line" />
          </div>
        </div>
      </div>

      {/* Professional Mode Option Label */}
      <div className={`controller-option option-pro ${!isGhost ? 'active' : ''}`}>
        <span className="controller-led-dot" aria-hidden="true" />
        <div className="controller-text-wrap">
          <span className="controller-label-main">PROFESSIONAL</span>
          <span className="controller-label-sub">MODE</span>
        </div>
      </div>

      {/* Ghost Mode Option Label */}
      <div className={`controller-option option-ghost ${isGhost ? 'active' : ''}`}>
        <span className="controller-led-dot" aria-hidden="true" />
        <div className="controller-text-wrap">
          <span className="controller-label-main">GHOST</span>
          <span className="controller-label-sub">MODE</span>
        </div>
      </div>
    </div>
  );
}
