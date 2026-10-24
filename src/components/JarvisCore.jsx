import { useState, useEffect, useRef } from 'react';

export default function JarvisCore({ onNavigate, playSound, speak, isSpeaking }) {
  const [currentTime, setCurrentTime] = useState({ local: '', utc: '' });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [reactorPulse, setReactorPulse] = useState(false);
  const reactorRef = useRef(null);

  // Live interface clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime({
        local: now.toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }),
        utc: now.toUTCString().slice(17, 25) + ' UTC'
      });
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  // Mouse reactive parallax for holographic reactor
  const handleMouseMove = (e) => {
    if (!reactorRef.current) return;
    const rect = reactorRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = (e.clientX - centerX) / (rect.width / 2);
    const dy = (e.clientY - centerY) / (rect.height / 2);
    setMousePos({ x: dx * 10, y: dy * 10 });
  };

  // Interactive Reactor Click Trigger
  const handleReactorClick = () => {
    playSound?.('boot');
    setReactorPulse(true);
    setTimeout(() => setReactorPulse(false), 1200);

    const voiceLines = [
      'ERICSXA Core online. All telemetry channels operational. Standing by for directives, Operator.',
      'Defense perimeter fortified. Operator Sreerag Sarath authenticated with Tier-1 clearance.',
      'Quantum telemetry synchronized. Zero latency detected across all HUD modules.'
    ];
    const line = voiceLines[Math.floor(Math.random() * voiceLines.length)];
    speak?.(line);
  };

  return (
    <div className="jarvis-core-section" onMouseMove={handleMouseMove}>
      {/* Top Telemetry Strip */}
      <div className="core-telemetry-bar">
        <div className="telemetry-item">
          <span className="telemetry-label">SYSTEM CLOCK</span>
          <span className="telemetry-value font-mono">{currentTime.local} <span className="utc-sub">({currentTime.utc})</span></span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">ERICSXA PROTOCOL</span>
          <span className={`telemetry-value ${isSpeaking ? 'cyan pulse' : 'green'}`}>
            {isSpeaking ? 'VOCALIZING // ACTIVE' : 'ONLINE // V4.2.0'}
          </span>
        </div>
        <div className="telemetry-item">
          <span className="telemetry-label">DEFENSIVE POSTURE</span>
          <span className="telemetry-value cyan">MONITORED // TIER 1</span>
        </div>
      </div>

      {/* Main Holographic Reactor (Audio-reactive and interactive) */}
      <div className="hologram-reactor-wrapper" ref={reactorRef}>
        <div
          className={`reactor-stage ${isSpeaking || reactorPulse ? 'speaking' : ''}`}
          style={{
            transform: `perspective(600px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`
          }}
          onClick={handleReactorClick}
          onMouseEnter={() => playSound?.('blip')}
          title="Click to engage ERICSXA Core diagnostics"
          role="button"
          tabIndex={0}
          aria-label="Interactive ERICSXA Holographic Reactor"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleReactorClick(); }}
        >
          {/* Radar Scanning Sweep */}
          <div className="radar-sweep" aria-hidden="true" />

          {/* Concentric Rotating HUD Rings */}
          <div className="hud-ring ring-outer" />
          <div className="hud-ring ring-ticks" />
          <div className="hud-ring ring-segmented" />
          <div className="hud-ring ring-inner" />

          {/* Orbiting Satellite Nodes */}
          <div className="orbiting-track track-1">
            <span className="orbit-node node-alpha" />
          </div>
          <div className="orbiting-track track-2">
            <span className="orbit-node node-beta" />
          </div>

          {/* Pulsing Central Reactor Core */}
          <div className="reactor-core">
            <div className="core-glow-layer" />
            <div className="core-inner-ring">
              <span className="core-sigil">⚡</span>
            </div>
            <span className="core-label">ERICSXA</span>
          </div>
        </div>
        <span className="reactor-hint-pill">CLICK CORE TO ENGAGE VOICE</span>
      </div>

      {/* Core Profile Introduction */}
      <div className="core-intro-card">
        <div className="intro-badge-row">
          <span className="status-dot-pulse" />
          <span className="intro-tag">IDENTITY // SREERAG SARATH</span>
        </div>
        <h1 className="intro-headline">SYSTEMS. PHYSICS. CYBER DEFENSE.</h1>
        <p className="intro-text">
          BSc Physics student turned software developer and cybersecurity enthusiast.
          Operating at the intersection of first-principles systems engineering, full-stack web architectures,
          and foundational security research.
        </p>

        {/* Quick Directive Actions */}
        <div className="core-actions-row">
          <button
            type="button"
            className="hud-action-btn primary"
            onClick={() => { playSound?.('select'); onNavigate?.('arsenal'); }}
          >
            OPEN ARSENAL →
          </button>
          <button
            type="button"
            className="hud-action-btn"
            onClick={() => { playSound?.('select'); onNavigate?.('missions'); }}
          >
            VIEW MISSIONS
          </button>
          <button
            type="button"
            className="hud-action-btn"
            onClick={() => { playSound?.('select'); onNavigate?.('lab'); }}
          >
            SECURITY LAB
          </button>
          <button
            type="button"
            className="hud-action-btn"
            onClick={() => { playSound?.('select'); onNavigate?.('terminal'); }}
          >
            CYBER TERMINAL
          </button>
        </div>
      </div>
    </div>
  );
}
