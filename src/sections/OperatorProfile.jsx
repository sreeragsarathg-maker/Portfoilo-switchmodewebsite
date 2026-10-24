import { useState } from 'react';

export default function OperatorProfile({ onNavigate, playSound }) {
  const [activeTab, setActiveTab] = useState('dossier');

  const technicalTimeline = [
    {
      period: '2023 — 2026',
      title: 'BSc Physics — Calicut University',
      subtitle: 'First-Principles Analytical Modeling',
      description: 'Training in mathematical modeling, analytical reasoning, and scientific methodology. Applying physics principles directly to software architecture and computer systems understanding.'
    },
    {
      period: '2023 — PRESENT',
      title: 'Self-Directed Technical Engineering',
      subtitle: 'Full-Stack Software Architecture',
      description: 'Built scalable web applications (React, Node.js, Express, MongoDB, MySQL). Focused on clean state management, modular components, and decoupled REST APIs.'
    },
    {
      period: '2024',
      title: 'Software Development Intern — Betterinu',
      subtitle: 'Professional Software Environment',
      description: 'Contributed to production web development tasks, collaborating with engineering teams, code version control, and real-world system debugging.'
    },
    {
      period: '2024 — PRESENT',
      title: 'Cybersecurity & Systems Exploration',
      subtitle: 'Ethical Hacking & Network Security',
      description: 'Deep dive into Linux internals, TCP/IP packet architecture, Kali Linux virtualization, authorized CTF labs, and defensive security fundamentals.'
    }
  ];

  const operatorInterests = [
    { label: 'OPERATING SYSTEMS', value: 'Linux CLI & Kali Linux Virtualization', icon: '⚡' },
    { label: 'SCRIPTING & AUTOMATION', value: 'Python 3 & Bash Shell Scripting', icon: '⚙️' },
    { label: 'NETWORKING PROTOCOLS', value: 'TCP/IP Handshakes, OSI Model, DNS, Ports', icon: '🌐' },
    { label: 'SECURITY METHODOLOGY', value: 'Reconnaissance, Vulnerability Assessment, Defenses', icon: '🛡️' },
    { label: 'APPLICATION DEV', value: 'Full-Stack React, Node.js, REST APIs, Databases', icon: '💻' },
    { label: 'RESEARCH SCOPE', value: 'Defensive Fortification & Authorized CTF Labs', icon: '🔬' }
  ];

  return (
    <div className="operator-profile-panel">
      {/* Header Bar */}
      <div className="section-hud-header">
        <div className="hud-header-left">
          <span className="hud-badge-tag">[ CLASSIFICATION: UNCLASSIFIED // PORTFOLIO DOSSIER ]</span>
          <h2 className="hud-section-title">OPERATOR IDENTITY // SREERAG SARATH</h2>
        </div>
        <div className="hud-tab-switcher">
          <button
            type="button"
            className={`hud-subtab-btn ${activeTab === 'dossier' ? 'active' : ''}`}
            onClick={() => { playSound?.('blip'); setActiveTab('dossier'); }}
          >
            BIO DOSSIER
          </button>
          <button
            type="button"
            className={`hud-subtab-btn ${activeTab === 'timeline' ? 'active' : ''}`}
            onClick={() => { playSound?.('blip'); setActiveTab('timeline'); }}
          >
            TECHNICAL TIMELINE
          </button>
          <button
            type="button"
            className={`hud-subtab-btn ${activeTab === 'interests' ? 'active' : ''}`}
            onClick={() => { playSound?.('blip'); setActiveTab('interests'); }}
          >
            FOCUS AREAS
          </button>
        </div>
      </div>

      {/* Main Identity Grid */}
      <div className="operator-grid">
        {/* Left: Holographic ID Card */}
        <div className="id-card-container">
          <div className="id-card-frame">
            {/* Corner Tech Brackets */}
            <div className="bracket bracket-tl" />
            <div className="bracket bracket-tr" />
            <div className="bracket bracket-bl" />
            <div className="bracket bracket-br" />

            {/* Scanning Line Animation */}
            <div className="id-laser-scanner" aria-hidden="true" />

            <div className="id-photo-wrapper">
              <img
                src="/images/sreerag.jpg"
                alt="Sreerag Sarath"
                className="id-photo"
                onError={(e) => { e.currentTarget.src = '/images/ghost-portrait.jpg'; }}
              />
              <div className="id-photo-overlay" />
              <div className="id-barcode-row">
                <span className="barcode-line" />
                <span className="barcode-line w-2" />
                <span className="barcode-line w-1" />
                <span className="barcode-line w-3" />
                <span className="barcode-text">OPERATOR ID: #SR-2026-PHYS</span>
              </div>
            </div>

            <div className="id-details">
              <div className="id-status-badge">
                <span className="status-blink-dot" />
                <span>STATUS: ACTIVE RESEARCHER</span>
              </div>
              <h3 className="id-name">SREERAG SARATH</h3>
              <p className="id-role">Developer | Cybersecurity Learner | Ethical Hacking Enthusiast</p>
              
              <div className="id-meta-grid">
                <div className="meta-box">
                  <span className="meta-label">EDUCATION</span>
                  <span className="meta-val">BSc Physics (Calicut Univ)</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">CLEARANCE</span>
                  <span className="meta-val">Tier 1 // Independent</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">CORE DOMAIN</span>
                  <span className="meta-val">Web Dev & Cyber Defense</span>
                </div>
                <div className="meta-box">
                  <span className="meta-label">LOCATION</span>
                  <span className="meta-val">Kerala, India</span>
                </div>
              </div>

              <div className="id-actions">
                <button
                  type="button"
                  className="hud-action-btn primary"
                  onClick={() => { playSound?.('select'); onNavigate?.('arsenal'); }}
                >
                  INSPECT ARSENAL →
                </button>
                <button
                  type="button"
                  className="hud-action-btn"
                  onClick={() => { playSound?.('select'); onNavigate?.('contact'); }}
                >
                  SECURE CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Tab Content */}
        <div className="operator-content-card">
          {activeTab === 'dossier' && (
            <div className="dossier-tab-view">
              <div className="terminal-header-strip">
                <span className="terminal-dot green" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot red" />
                <span className="terminal-title">DOSSIER // EXECUTIVE SUMMARY</span>
              </div>
              <div className="dossier-body">
                <p className="dossier-lead">
                  "Physics taught me to deconstruct complex phenomena to their foundational laws.
                  In computing, that translates to understanding systems from first principles — knowing how
                  packets flow, how memory is allocated, and how architectures can be fortified."
                </p>
                <div className="dossier-section">
                  <h4 className="dossier-subhead">// BACKGROUND & PHILOSOPHY</h4>
                  <p>
                    I am a BSc Physics student who transitioned analytical training into software engineering
                    and cybersecurity exploration. Rather than treating computers as black boxes, my passion lies in
                    understanding both sides of the coin: building resilient full-stack web applications and dissecting
                    how they can be audited, secured, and protected.
                  </p>
                </div>
                <div className="dossier-section">
                  <h4 className="dossier-subhead">// SYSTEMS METHODOLOGY</h4>
                  <p>
                    From building civic welfare assistance platforms like <strong>Sahaayi</strong> to financial web applications,
                    I build with disciplined input sanitation, role isolation, and clean state logic. Concurrently, my security
                    studies focus on defensive awareness, Linux hardening, TCP/IP handshakes, and authorized lab practice.
                  </p>
                </div>
                <div className="dossier-stats-row">
                  <div className="dossier-stat-box">
                    <span className="stat-num">4+</span>
                    <span className="stat-desc">Software Deployments</span>
                  </div>
                  <div className="dossier-stat-box">
                    <span className="stat-num">01</span>
                    <span className="stat-desc">Industry Internship</span>
                  </div>
                  <div className="dossier-stat-box">
                    <span className="stat-num">100%</span>
                    <span className="stat-desc">Ethical Lab Commitment</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="timeline-tab-view">
              <div className="timeline-wrapper">
                {technicalTimeline.map((item, idx) => (
                  <div key={idx} className="timeline-node">
                    <div className="timeline-marker">
                      <span className="marker-dot" />
                      <span className="marker-line" />
                    </div>
                    <div className="timeline-card">
                      <div className="timeline-badge">{item.period}</div>
                      <h4 className="timeline-title">{item.title}</h4>
                      <h5 className="timeline-subtitle">{item.subtitle}</h5>
                      <p className="timeline-text">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'interests' && (
            <div className="interests-tab-view">
              <div className="interests-grid">
                {operatorInterests.map((interest, idx) => (
                  <div key={idx} className="interest-hud-card">
                    <div className="interest-icon-wrap">{interest.icon}</div>
                    <div className="interest-info">
                      <span className="interest-label">{interest.label}</span>
                      <h4 className="interest-val">{interest.value}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
