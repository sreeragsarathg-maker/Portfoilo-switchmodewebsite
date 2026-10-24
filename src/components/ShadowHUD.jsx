import { useState } from 'react';
import ShadowNavigation from './ShadowNavigation';
import JarvisAssistant from './JarvisAssistant';
import JarvisCore from './JarvisCore';
import CyberTerminal from './CyberTerminal';
import SystemPanel from './SystemPanel';
import Logo from './Logo';

// Section Views
import OperatorProfile from '../sections/OperatorProfile';
import CyberArsenal from '../sections/CyberArsenal';
import MissionLog from '../sections/MissionLog';
import SecurityLab from '../sections/SecurityLab';
import LearningProgress from '../sections/LearningProgress';
import ContactConsole from '../sections/ContactConsole';

export default function ShadowHUD({ onToggleTheme, playSound, speak, isSpeaking, isTtsMuted, toggleTts, isMuted, toggleMute }) {
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [assistantOpen, setAssistantOpen] = useState(false);

  const handleNavigate = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <div className="shadow-hud-layout" role="region" aria-label="Shadow Mode ERICSXA Interface">
      {/* Top Mobile Bar (visible on <1024px) */}
      <header className="shadow-mobile-bar">
        <div className="mobile-brand-group">
          <Logo isGhost={true} />
        </div>

        <div className="mobile-actions-group">
          <button
            type="button"
            className="mobile-btn assistant-toggle"
            onClick={() => setAssistantOpen(prev => !prev)}
            aria-label="Toggle ERICSXA Assistant"
          >
            💬 ERICSXA
          </button>
          <button
            type="button"
            className="mobile-btn pro-switch"
            onClick={onToggleTheme}
            aria-label="Switch to Professional Mode"
          >
            ☀️ PRO
          </button>
          <button
            type="button"
            className={`mobile-btn menu-toggle ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(prev => !prev)}
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? '✕' : '☰ MENU'}
          </button>
        </div>
      </header>

      {/* 3-Column Desktop Grid Container */}
      <div className="shadow-hud-columns">
        {/* LEFT PANEL: Navigation */}
        <div className={`hud-col-left ${mobileMenuOpen ? 'mobile-drawer-open' : ''}`}>
          <ShadowNavigation
            activeSection={activeSection}
            onNavigate={handleNavigate}
            onToggleTheme={onToggleTheme}
            playSound={playSound}
          />
        </div>

        {/* Backdrop for mobile drawer */}
        {mobileMenuOpen && (
          <div
            className="mobile-drawer-backdrop"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* CENTER PANEL: Main Interactive Workstation */}
        <main className="hud-col-center">
          {/* Top Assistant Drawer or Collapsible Bar */}
          <div className={`jarvis-assistant-wrapper ${assistantOpen ? 'force-open' : ''}`}>
            <JarvisAssistant
              onNavigate={handleNavigate}
              playSound={playSound}
              speak={speak}
              isSpeaking={isSpeaking}
              isTtsMuted={isTtsMuted}
              toggleTts={toggleTts}
              isMuted={isMuted}
              toggleMute={toggleMute}
            />
          </div>

          {/* Active Viewport Content */}
          <div className="hud-active-viewport" key={activeSection}>
            {activeSection === 'overview' && (
              <JarvisCore
                onNavigate={handleNavigate}
                playSound={playSound}
                speak={speak}
                isSpeaking={isSpeaking}
              />
            )}
            {activeSection === 'profile' && (
              <OperatorProfile onNavigate={handleNavigate} playSound={playSound} />
            )}
            {activeSection === 'arsenal' && (
              <CyberArsenal playSound={playSound} />
            )}
            {activeSection === 'missions' && (
              <MissionLog playSound={playSound} />
            )}
            {activeSection === 'lab' && (
              <SecurityLab playSound={playSound} />
            )}
            {activeSection === 'progress' && (
              <LearningProgress onNavigate={handleNavigate} playSound={playSound} />
            )}
            {activeSection === 'contact' && (
              <ContactConsole playSound={playSound} />
            )}
            {activeSection === 'terminal' && (
              <CyberTerminal onNavigate={handleNavigate} playSound={playSound} />
            )}
          </div>
        </main>

        {/* RIGHT PANEL: System Intelligence & Network Node Telemetry */}
        <div className="hud-col-right">
          <SystemPanel
            activeSection={activeSection}
            onNavigate={handleNavigate}
            playSound={playSound}
          />
        </div>
      </div>
    </div>
  );
}
