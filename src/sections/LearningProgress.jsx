export default function LearningProgress({ playSound, onNavigate }) {
  const milestones = [
    {
      phase: 'PHASE 01 // FOUNDATION',
      title: 'Analytical Modeling & Physics Systems',
      status: 'SOLIDIFIED',
      progress: '100%',
      description: 'Formal BSc Physics study at Calicut University. Cultivated rigorous first-principles reasoning, scientific hypothesis testing, and systemic breakdown of complex variables.',
      milestoneItems: [
        'Mathematical and differential calculus foundations',
        'Physical system thermodynamics and wave dynamics',
        'Analytical breakdown of computational state machines'
      ]
    },
    {
      phase: 'PHASE 02 // SOFTWARE ENGINEERING',
      title: 'Full-Stack Web Architecture',
      status: 'OPERATIONAL',
      progress: '85%',
      description: 'Self-directed engineering in modern web frameworks. Mastered component architecture in React, server-side REST APIs with Node/Express, and database persistence with MongoDB & MySQL.',
      milestoneItems: [
        'Component state lifecycle & custom hooks in React',
        'RESTful microservice routing & asynchronous pipelines',
        'Industry software internship completion at Betterinu',
        'Shipped full-stack projects (Sahaayi, OXIFINZ, Drive System)'
      ]
    },
    {
      phase: 'PHASE 03 // SYSTEMS & INFRASTRUCTURE',
      title: 'Linux Systems & Command-Line Fluency',
      status: 'PRACTICING',
      progress: '70%',
      description: 'Linux systems exploration as daily driver. Understanding kernel concepts, process hierarchies, daemons, cron jobs, file permission bits, and bash scripting automation.',
      milestoneItems: [
        'Navigating POSIX filesystems and terminal toolchains (grep, sed, awk)',
        'Managing systemd services, journals, and runtime permissions',
        'Bash scripting for automated tasks and environment setups'
      ]
    },
    {
      phase: 'PHASE 04 // PROTOCOLS & ARCHITECTURE',
      title: 'Network Communication & Packet Protocols',
      status: 'PRACTICING',
      progress: '65%',
      description: 'Comprehensive study of computer networking. Analyzing packet flows across the OSI model, TCP three-way handshakes, routing mechanisms, and TLS certificate handshakes.',
      milestoneItems: [
        'Transport layer dynamics (TCP flags, UDP datagrams)',
        'Application layer security (HTTP methods, CORS, secure cookies)',
        'DNS resolution mechanisms and record configurations'
      ]
    },
    {
      phase: 'PHASE 05 // CYBER DEFENSE',
      title: 'Cybersecurity Fundamentals & Threat Analysis',
      status: 'ACTIVE PURSUIT',
      progress: '50%',
      description: 'Active learning trajectory into cybersecurity and ethical defense. Exploring vulnerability taxonomies, reconnaissance principles, safe lab virtualization, and defensive mitigations.',
      milestoneItems: [
        'Virtualizing Kali Linux in isolated sandboxed subnets',
        'Studying OWASP Top 10 web application security vectors',
        'Practicing ethical challenge problems on authorized beginner platforms',
        'Synthesizing defensive patterns to write unbreachable code'
      ]
    }
  ];

  return (
    <div className="learning-progress-panel">
      {/* Header */}
      <div className="section-hud-header">
        <div className="hud-header-left">
          <span className="hud-badge-tag">[ TRAJECTORY TELEMETRY // CONTINUOUS SKILL EVOLUTION ]</span>
          <h2 className="hud-section-title">LEARNING PROGRESS // TECHNICAL HORIZON</h2>
        </div>
        <div className="hud-metric-indicator">
          <span className="live-blink" />
          <span>STATUS: EXPANDING SYSTEMS EXPERTISE</span>
        </div>
      </div>

      {/* Trajectory Milestones */}
      <div className="progress-phases-list">
        {milestones.map((m, idx) => (
          <div key={idx} className="progress-phase-card">
            <div className="phase-card-header">
              <div className="phase-indicator-col">
                <span className="phase-step-badge">{m.phase}</span>
                <span className="phase-status-pill">{m.status}</span>
              </div>
              <div className="phase-progress-metric">
                <span className="metric-text">{m.progress}</span>
                <div className="phase-bar-track">
                  <div
                    className="phase-bar-fill"
                    style={{ width: m.progress }}
                  />
                </div>
              </div>
            </div>

            <h3 className="phase-title">{m.title}</h3>
            <p className="phase-description">{m.description}</p>

            <div className="phase-milestones-box">
              <span className="sub-tag">VALIDATED MILESTONES:</span>
              <ul className="milestone-checklist">
                {m.milestoneItems.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <span className="check-icon">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Action Footer */}
      <div className="progress-footer-bar">
        <span>Ready to collaborate or discuss development and cybersecurity opportunities?</span>
        <button
          type="button"
          className="hud-action-btn primary"
          onClick={() => { playSound?.('select'); onNavigate?.('contact'); }}
        >
          ESTABLISH CONNECTION →
        </button>
      </div>
    </div>
  );
}
