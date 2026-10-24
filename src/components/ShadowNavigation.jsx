import Logo from './Logo';
import ModeControllerSwitch from './ModeControllerSwitch';

export default function ShadowNavigation({ activeSection, onNavigate, onToggleTheme, playSound }) {
  const navItems = [
    {
      id: 'overview',
      code: '01',
      label: 'SYSTEM OVERVIEW',
      sub: 'ERICSXA Reactor & Status',
      icon: (
        <svg viewBox="0 0 24 24" className="nav-svg">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      id: 'profile',
      code: '02',
      label: 'OPERATOR PROFILE',
      sub: 'Identity & Discipline',
      icon: (
        <svg viewBox="0 0 24 24" className="nav-svg">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      )
    },
    {
      id: 'arsenal',
      code: '03',
      label: 'CYBER ARSENAL',
      sub: 'Capabilities & Stack',
      icon: (
        <svg viewBox="0 0 24 24" className="nav-svg">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    },
    {
      id: 'missions',
      code: '04',
      label: 'MISSION LOG',
      sub: 'Project Deployments',
      icon: (
        <svg viewBox="0 0 24 24" className="nav-svg">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      )
    },
    {
      id: 'lab',
      code: '05',
      label: 'SECURITY LAB',
      sub: 'Research & Sandboxing',
      icon: (
        <svg viewBox="0 0 24 24" className="nav-svg">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      id: 'progress',
      code: '06',
      label: 'LEARNING PROGRESS',
      sub: 'Skill Trajectory',
      icon: (
        <svg viewBox="0 0 24 24" className="nav-svg">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      )
    },
    {
      id: 'contact',
      code: '07',
      label: 'ESTABLISH CONNECTION',
      sub: 'Secure Transmissions',
      icon: (
        <svg viewBox="0 0 24 24" className="nav-svg">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      id: 'terminal',
      code: '08',
      label: 'CYBER TERMINAL',
      sub: 'Interactive Shell',
      icon: (
        <svg viewBox="0 0 24 24" className="nav-svg">
          <polyline points="4 17 10 11 4 5" />
          <line x1="12" y1="19" x2="20" y2="19" />
        </svg>
      )
    }
  ];

  return (
    <aside className="shadow-left-panel" aria-label="Shadow Mode Navigation">
      {/* Brand / Mode Header */}
      <div className="shadow-brand-box">
        <div className="brand-badge-row">
          <span className="brand-dot-active" />
          <span className="brand-mode-tag">CYBER OPERATIONS</span>
        </div>
        <div style={{ margin: '6px 0 4px' }}>
          <Logo isGhost={true} />
        </div>
        <span className="brand-sub">OPERATOR: SREERAG.S</span>
      </div>

      {/* Navigation Directory List */}
      <nav className="shadow-nav-menu">
        <span className="nav-section-title">// NAVIGATION MATRIX</span>
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              type="button"
              className={`shadow-nav-item ${isActive ? 'active' : ''}`}
              onClick={() => {
                playSound?.('select');
                onNavigate(item.id);
              }}
              onMouseEnter={() => playSound?.('blip')}
            >
              <span className="nav-notch" aria-hidden="true" />
              <div className="nav-icon-container">{item.icon}</div>
              <div className="nav-text-col">
                <span className="nav-code">{item.code} //</span>
                <span className="nav-main-label">{item.label}</span>
                <span className="nav-sub-label">{item.sub}</span>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions: Gaming-Controller Mode Switch */}
      <div className="shadow-nav-footer">
        <ModeControllerSwitch
          theme="ghost"
          onToggle={onToggleTheme}
          playSound={playSound}
        />
      </div>
    </aside>
  );
}
