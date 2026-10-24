import { useState } from 'react';
import { SHADOW_PROJECTS } from '../data/shadowProjects';

export default function MissionLog({ playSound }) {
  const [selectedMission, setSelectedMission] = useState(null);

  return (
    <div className="mission-log-panel">
      {/* Header */}
      <div className="section-hud-header">
        <div className="hud-header-left">
          <span className="hud-badge-tag">[ OPERATIONS DIRECTORY // DEPLOYED INITIATIVES ]</span>
          <h2 className="hud-section-title">MISSION LOG // SOFTWARE ARCHITECTURE</h2>
        </div>
        <div className="hud-metric-indicator">
          <span className="live-blink" />
          <span>4 ACTIVE MISSIONS CATALOGED</span>
        </div>
      </div>

      {/* Mission Cards Grid */}
      <div className="missions-grid">
        {SHADOW_PROJECTS.map(mission => (
          <div
            key={mission.id}
            className="mission-card"
            onMouseEnter={() => playSound?.('blip')}
            onClick={() => { playSound?.('select'); setSelectedMission(mission); }}
          >
            <div className="mission-card-header">
              <span className="mission-id-badge">{mission.id}</span>
              <span className="mission-status-pill">{mission.status}</span>
            </div>

            <h3 className="mission-title">{mission.title}</h3>
            <span className="mission-codename">{mission.codeName}</span>
            <p className="mission-objective-preview">{mission.objective}</p>

            <div className="mission-tech-tags">
              {mission.technologies.slice(0, 4).map(tech => (
                <span key={tech} className="tech-chip">{tech}</span>
              ))}
              {mission.technologies.length > 4 && (
                <span className="tech-chip more">+{mission.technologies.length - 4}</span>
              )}
            </div>

            <div className="mission-card-footer">
              <span className="open-dossier-text">ACCESS MISSION DOSSIER</span>
              <span className="open-dossier-icon">→</span>
            </div>
          </div>
        ))}
      </div>

      {/* Full-Screen Mission Dossier Modal */}
      {selectedMission && (
        <div className="hud-modal-backdrop" onClick={() => setSelectedMission(null)}>
          <div className="hud-modal-content mission-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-strip">
              <div className="strip-title-group">
                <span className="modal-badge">{selectedMission.id}</span>
                <span className="modal-title-tag">{selectedMission.codeName}</span>
              </div>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedMission(null)}
                aria-label="Close mission briefing"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="mission-briefing-header">
                <h2>{selectedMission.title}</h2>
                <div className="mission-status-row">
                  <span className="status-label">CLASSIFICATION:</span>
                  <span className="status-val">{selectedMission.classification}</span>
                  <span className="status-divider">|</span>
                  <span className="status-label">STATUS:</span>
                  <span className="status-val green">{selectedMission.status}</span>
                </div>
              </div>

              {/* Primary Objective */}
              <div className="mission-section">
                <h5>// PRIMARY DIRECTIVE & OBJECTIVE</h5>
                <p className="highlight-text">{selectedMission.objective}</p>
              </div>

              {/* Technical Briefing */}
              <div className="mission-section">
                <h5>// TECHNICAL BRIEFING & ARCHITECTURE</h5>
                <p>{selectedMission.briefing}</p>
              </div>

              {/* Security Highlights */}
              <div className="mission-section">
                <h5>// SECURITY MEASURES & SYSTEM FORTIFICATIONS</h5>
                <ul className="security-highlights-list">
                  {selectedMission.securityHighlights.map((item, idx) => (
                    <li key={idx}>
                      <span className="check-bullet">🛡️</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* System Architecture Metrics */}
              <div className="mission-metrics-grid">
                {selectedMission.metrics.map((m, idx) => (
                  <div key={idx} className="metric-box">
                    <span className="m-label">{m.label}</span>
                    <span className="m-val">{m.value}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Deployed */}
              <div className="mission-section">
                <h5>// TECHNOLOGIES DEPLOYED</h5>
                <div className="tech-tags-full">
                  {selectedMission.technologies.map(t => (
                    <span key={t} className="tech-chip-lg">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links & Repository Access */}
              <div className="mission-links-strip">
                {selectedMission.github ? (
                  <a
                    href={selectedMission.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hud-action-btn primary"
                  >
                    REPOSITORY ACCESS ↗
                  </a>
                ) : (
                  <div className="repo-note">
                    <span className="note-badge">STATUS NOTE:</span>
                    <span>{selectedMission.linksNote}</span>
                  </div>
                )}
                {selectedMission.demo && (
                  <a
                    href={selectedMission.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hud-action-btn"
                  >
                    LIVE DEMO ↗
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
