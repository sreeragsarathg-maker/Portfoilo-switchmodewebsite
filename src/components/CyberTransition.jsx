import '../styles/cybertransition.css';

export default function CyberTransition({ targetTheme = 'ghost', isExiting = false }) {
  const isGhostTarget = targetTheme === 'ghost';

  return (
    <div
      className={`cyber-transition-overlay ${isExiting ? 'exiting' : ''} ${!isGhostTarget ? 'mode-professional' : ''}`}
      role="alert"
      aria-live="assertive"
      aria-label={isGhostTarget ? 'Switching to Ghost Mode' : 'Switching to Professional Mode'}
    >
      {/* Background CRT Scanlines */}
      <div className="cyber-scanlines" aria-hidden="true" />

      {/* Sweeping Laser Beam */}
      <div className="cyber-laser-beam" aria-hidden="true" />

      {/* Expanding Shockwave Wavefront */}
      <div className="cyber-shockwave" aria-hidden="true" />

      {/* Central Cyber Breach HUD Card */}
      <div className="cyber-hud-card">
        {/* Corner Accents */}
        <span className="card-corner corner-tl" aria-hidden="true" />
        <span className="card-corner corner-tr" aria-hidden="true" />
        <span className="card-corner corner-bl" aria-hidden="true" />
        <span className="card-corner corner-br" aria-hidden="true" />

        <div className="hud-card-header">
          <span className="hud-protocol-tag">
            {isGhostTarget ? '⚡ [ GHOST PROTOCOL INITIATION ]' : '☀️ [ SYSTEM RESET PROTOCOL ]'}
          </span>
          <span className="hud-code-badge">
            {isGhostTarget ? 'ERICSXA v4.2' : 'PRO MODE'}
          </span>
        </div>

        <div className="hud-card-body">
          {isGhostTarget ? (
            <>
              <div className="hud-log-line">
                <span className="hud-prompt-sym">&gt;</span>
                <span>AUTHENTICATING OPERATOR CLEARANCE... [TIER-1]</span>
              </div>
              <div className="hud-log-line">
                <span className="hud-prompt-sym">&gt;</span>
                <span>INITIALIZING ERICSXA QUANTUM DEFENSE GRID</span>
              </div>
              <div className="hud-log-line">
                <span className="hud-prompt-sym">&gt;</span>
                <span>SHADOW HUD TELEMETRY SYNCHRONIZED</span>
              </div>
            </>
          ) : (
            <>
              <div className="hud-log-line">
                <span className="hud-prompt-sym">&gt;</span>
                <span>DISENGAGING SHADOW TELEMETRY PROTOCOL...</span>
              </div>
              <div className="hud-log-line">
                <span className="hud-prompt-sym">&gt;</span>
                <span>COMPILING CLEAN PROFESSIONAL PORTFOLIO VIEW</span>
              </div>
              <div className="hud-log-line">
                <span className="hud-prompt-sym">&gt;</span>
                <span>SYSTEM DIAGNOSTICS: NOMINAL [100%]</span>
              </div>
            </>
          )}
        </div>

        <div className="hud-progress-wrapper">
          <div className="hud-progress-meta">
            <span>{isGhostTarget ? 'ENGAGING ERICSXA HUD' : 'RESTORING INTERFACE'}</span>
            <span>100%</span>
          </div>
          <div className="hud-progress-track">
            <div className="hud-progress-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
