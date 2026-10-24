import { useEffect, useRef, useMemo } from 'react';
import '../styles/hero.css';

const PARTICLES = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: Math.random() * 100,
  animDuration: 8 + Math.random() * 12,
  animDelay: Math.random() * 10,
  size: 1 + Math.random() * 2,
}));

export default function Hero({ theme }) {
  const isGhost = theme === 'ghost';
  const parallaxRef = useRef(null);

  // Parallax on ghost mode
  useEffect(() => {
    if (!isGhost) return;
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const dx = (clientX - centerX) / centerX;
      const dy = (clientY - centerY) / centerY;

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate(${dx * -12}px, ${dy * -8}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isGhost]);

  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Ghost particles */}
      <div className="hero-particles" aria-hidden="true">
        {PARTICLES.map((p) => (
          <span
            key={p.id}
            className="particle"
            style={{
              left: `${p.left}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDuration: `${p.animDuration}s`,
              animationDelay: `${p.animDelay}s`,
            }}
          />
        ))}
      </div>

      <div className="container">
        <div className="hero-inner">
          {/* Left: Text Content */}
          <div className="hero-content">
            <div className="hero-badge" aria-label="Status">
              <span className="hero-badge-dot" aria-hidden="true" />
              {isGhost ? '[ GHOST PROTOCOL ACTIVE ]' : 'Available for opportunities'}
            </div>

            <h1
              className="hero-headline"
              data-text={isGhost ? 'ENTER THE UNKNOWN' : 'BUILD EXPLORE SECURE'}
            >
              {isGhost ? 'ENTER THE\nUNKNOWN' : 'BUILD\nEXPLORE\nSECURE'}
            </h1>

            <p className="hero-description">
              {isGhost
                ? 'Code. Explore. Build. Secure. — A developer who operates at the intersection of physics, software, and cybersecurity. Systems thinking from first principles.'
                : "I'm Sreerag Sarath — a BSc Physics student turned developer, building full-stack web applications and exploring the depths of cybersecurity. I craft digital experiences with precision and curiosity."}
            </p>

            <div className="hero-cta">
              <button
                className="btn btn-primary"
                onClick={() => scrollToSection('#projects')}
                id="hero-explore-btn"
              >
                {isGhost ? 'Access Projects' : 'Explore Projects'}
                <span aria-hidden="true">→</span>
              </button>
              <a
                href="/resume.pdf"
                className="btn btn-outline"
                download
                id="hero-resume-btn"
                aria-label="Download Resume PDF"
              >
                {isGhost ? '[ Download Resume ]' : 'Download Resume'}
              </a>
              <button
                className="btn btn-outline"
                onClick={() => scrollToSection('#contact')}
                id="hero-contact-btn"
              >
                {isGhost ? 'Establish Contact' : 'Contact Me'}
              </button>
            </div>

            <div className="hero-stats" aria-label="Quick stats">
              <div className="hero-stat">
                <span className="hero-stat-value">4+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">1</span>
                <span className="hero-stat-label">Internship</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">∞</span>
                <span className="hero-stat-label">Curiosity</span>
              </div>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="hero-visual">
            {/* HUD rings */}
            <div className="ghost-hud-ring ghost-hud-ring-1" aria-hidden="true" />
            <div className="ghost-hud-ring ghost-hud-ring-2" aria-hidden="true" />
            <div className="ghost-hud-ring ghost-hud-ring-3" aria-hidden="true" />

            {/* Floating code fragments */}
            <span className="ghost-code-float ghost-code-float-1" aria-hidden="true">
              {'> ssh root@192.168.1.1'}
            </span>
            <span className="ghost-code-float ghost-code-float-2" aria-hidden="true">
              {'const hack = () => {}'}
            </span>
            <span className="ghost-code-float ghost-code-float-3" aria-hidden="true">
              {'nmap -sV 10.0.0.0/24'}
            </span>

            {/* Profile frame */}
            <div className="profile-frame" ref={parallaxRef}>
              <div className="profile-frame-bg" aria-hidden="true" />

              {/* HUD corners */}
              <div className="ghost-corner ghost-corner-tl" aria-hidden="true" />
              <div className="ghost-corner ghost-corner-tr" aria-hidden="true" />
              <div className="ghost-corner ghost-corner-bl" aria-hidden="true" />
              <div className="ghost-corner ghost-corner-br" aria-hidden="true" />

              <img
                src={isGhost ? '/images/ghost-portrait.jpg' : '/images/sreerag.jpg'}
                alt={isGhost ? 'Ghost Mode Portrait' : 'Sreerag Sarath — Developer at Betterinu'}
                className="profile-img"
                loading="eager"
              />

              <div className="ghost-fog" aria-hidden="true" />
              <div className="ghost-scanline" aria-hidden="true" />

              {/* Professional decorative squares */}
              {!isGhost && (
                <>
                  <div className="hero-deco-1" aria-hidden="true" />
                  <div className="hero-deco-2" aria-hidden="true" />
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span className="hero-scroll-label">Scroll</span>
      </div>
    </section>
  );
}
