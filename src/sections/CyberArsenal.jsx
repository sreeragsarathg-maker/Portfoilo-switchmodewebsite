import { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/shadowSkills';

export default function CyberArsenal({ playSound }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSkillModal, setActiveSkillModal] = useState(null);

  const filteredCategories = selectedCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === selectedCategory);

  const getProficiencyClass = (level) => {
    switch (level) {
      case 'PRACTICING': return 'badge-practicing';
      case 'LEARNING': return 'badge-learning';
      case 'FAMILIAR': return 'badge-familiar';
      default: return 'badge-neutral';
    }
  };

  return (
    <div className="cyber-arsenal-panel">
      {/* Header */}
      <div className="section-hud-header">
        <div className="hud-header-left">
          <span className="hud-badge-tag">[ ARSENAL MATRIX // HARDWARE & SOFTWARE SPECIFICATIONS ]</span>
          <h2 className="hud-section-title">CYBER ARSENAL // TECHNICAL CAPABILITIES</h2>
        </div>
        <div className="hud-category-filter">
          <button
            type="button"
            className={`filter-chip ${selectedCategory === 'all' ? 'active' : ''}`}
            onClick={() => { playSound?.('blip'); setSelectedCategory('all'); }}
          >
            ALL MODULES
          </button>
          {SKILL_CATEGORIES.map(cat => (
            <button
              key={cat.id}
              type="button"
              className={`filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => { playSound?.('blip'); setSelectedCategory(cat.id); }}
            >
              {cat.categoryName}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Equipment Matrix */}
      <div className="arsenal-groups">
        {filteredCategories.map(group => (
          <div key={group.id} className="arsenal-category-block">
            <div className="category-header-strip">
              <span className="cat-code">[{group.code}]</span>
              <h3 className="cat-title">{group.categoryName}</h3>
              <span className="cat-count">{group.skills.length} MODULES LOADED</span>
            </div>

            <div className="skills-equipment-grid">
              {group.skills.map(skill => (
                <div
                  key={skill.id}
                  className="skill-module-card"
                  onMouseEnter={() => playSound?.('blip')}
                  onClick={() => { playSound?.('select'); setActiveSkillModal(skill); }}
                >
                  {/* Radar sweep line */}
                  <div className="module-scanline" aria-hidden="true" />

                  <div className="module-top-row">
                    <span className="module-id-tag">MOD://{skill.id.toUpperCase()}</span>
                    <span className={`proficiency-badge ${getProficiencyClass(skill.proficiency)}`}>
                      {skill.proficiency}
                    </span>
                  </div>

                  <h4 className="module-name">{skill.name}</h4>
                  <p className="module-desc">{skill.summary}</p>

                  <div className="module-footer">
                    <span className="expand-hint">CLICK TO EXPAND DOSSIER</span>
                    <span className="expand-arrow">↗</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Expandable Skill Detail Modal */}
      {activeSkillModal && (
        <div className="hud-modal-backdrop" onClick={() => setActiveSkillModal(null)}>
          <div className="hud-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header-strip">
              <span className="modal-title-tag">MODULE SPECIFICATION // {activeSkillModal.name}</span>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveSkillModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-meta-row">
                <div className="modal-meta-box">
                  <span className="label">PROFICIENCY LEVEL</span>
                  <span className={`val ${getProficiencyClass(activeSkillModal.proficiency)}`}>
                    {activeSkillModal.proficiency}
                  </span>
                </div>
                <div className="modal-meta-box">
                  <span className="label">PRACTICE ENVIRONMENT</span>
                  <span className="val">Workstation / Authorized Labs</span>
                </div>
                <div className="modal-meta-box">
                  <span className="label">VERIFICATION STATUS</span>
                  <span className="val">SELF-AUDITED // ACCURATE</span>
                </div>
              </div>

              <div className="modal-section">
                <h5>// CAPABILITY SUMMARY</h5>
                <p>{activeSkillModal.summary}</p>
              </div>

              <div className="modal-section">
                <h5>// HANDS-ON IMPLEMENTATION & EXPERIENCE</h5>
                <p>{activeSkillModal.details}</p>
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="hud-action-btn primary"
                  onClick={() => setActiveSkillModal(null)}
                >
                  CLOSE SPECIFICATION
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
