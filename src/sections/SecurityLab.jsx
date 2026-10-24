import { useState } from 'react';

export default function SecurityLab({ playSound }) {
  const [selectedTrack, setSelectedTrack] = useState('all');

  const labModules = [
    {
      id: 'LAB-01',
      category: 'linux',
      categoryLabel: 'LINUX COMMAND LINE',
      title: 'Filesystem Hardening & Systemctl Service Isolation',
      focus: 'Permissions, Daemon Management, Sudoers Privileges',
      status: 'ACTIVE STUDY',
      notes: 'Investigating Unix permissions (SUID/SGID bits), umask default settings, and isolating user execution domains using non-root service accounts.',
      tools: ['bash', 'chmod', 'chown', 'systemctl', 'journalctl']
    },
    {
      id: 'LAB-02',
      category: 'networking',
      categoryLabel: 'NETWORKING FUNDAMENTALS',
      title: 'TCP Handshake & Packet Flag Inspection',
      focus: 'SYN-ACK Mechanics, TLS Cryptographic Handshakes',
      status: 'VERIFIED LAB',
      notes: 'Dissecting TCP connection lifecycles in local sandbox. Mapping SYN flooding defensive mitigations, TCP keep-alive behavior, and HTTPS certificate validation chains.',
      tools: ['wireshark (local)', 'tcpdump', 'ss', 'netstat', 'curl']
    },
    {
      id: 'LAB-03',
      category: 'python',
      categoryLabel: 'PYTHON AUTOMATION',
      title: 'Automated Log Parser & Header Verification Script',
      focus: 'Scripting, Regex Log Ingestion, Alert Automation',
      status: 'ACTIVE DEV',
      notes: 'Building lightweight Python automation utilities to parse web server access logs for anomalous 404/403 bursts and missing security headers (HSTS, CSP).',
      tools: ['python3', 'regex', 'urllib', 'requests', 'pytest']
    },
    {
      id: 'LAB-04',
      category: 'labs',
      categoryLabel: 'AUTHORIZED SECURITY LABS',
      title: 'Local Virtualized Kali & Target Host Sandboxing',
      focus: 'Host Isolation, Network Bridges, Virtual Subnets',
      status: 'CONFIGURED',
      notes: 'Configured local virtualized network environment for safe, isolated security tool experimentation. Strict internal host-only adapter separation.',
      tools: ['virtualbox', 'kali linux', 'host-only networks', 'iptables']
    },
    {
      id: 'LAB-05',
      category: 'ctf',
      categoryLabel: 'CAPTURE-THE-FLAG (CTF)',
      title: 'Fundamental Web Exploitation & Cryptography Challenges',
      focus: 'Base64 Decoding, Cookie Tampering, Input Validation',
      status: 'LEARNING TRACK',
      notes: 'Practicing foundational CTF challenge categories on authorized beginner training platforms (OverTheWire, beginner web challenges) to reinforce vulnerability recognition.',
      tools: ['cyberchef', 'encoder/decoder', 'browser devtools']
    },
    {
      id: 'LAB-06',
      category: 'writeups',
      categoryLabel: 'TECHNICAL NOTES & WRITE-UPS',
      title: 'Physics First-Principles to Computing Security Notes',
      focus: 'Documentation, Architecture Diagrams, Systems Thinking',
      status: 'ONGOING NOTES',
      notes: 'Compiling structured technical write-ups breaking down the intersections between physical entropy, algorithmic cryptography, and defensive network topologies.',
      tools: ['markdown', 'git', 'mermaid diagrams']
    }
  ];

  const filtered = selectedTrack === 'all'
    ? labModules
    : labModules.filter(m => m.category === selectedTrack);

  return (
    <div className="security-lab-panel">
      {/* Header */}
      <div className="section-hud-header">
        <div className="hud-header-left">
          <span className="hud-badge-tag">[ RESEARCH CONSOLE // AUTHORIZED STUDY ENVIRONMENTS ]</span>
          <h2 className="hud-section-title">SECURITY LAB // RESEARCH & ANALYSIS</h2>
        </div>
        <div className="hud-metric-indicator">
          <span className="live-blink" />
          <span>SAFE LAB ENVIRONMENT // ZERO HOSTILE TRAFFIC</span>
        </div>
      </div>

      {/* Track Selector Filter */}
      <div className="lab-filter-bar">
        {[
          { id: 'all', label: 'ALL MODULES' },
          { id: 'linux', label: 'LINUX CLI' },
          { id: 'networking', label: 'NETWORKING' },
          { id: 'python', label: 'PYTHON AUTO' },
          { id: 'labs', label: 'AUTHORIZED LABS' },
          { id: 'ctf', label: 'CTF CHALLENGES' },
          { id: 'writeups', label: 'TECH WRITE-UPS' }
        ].map(tab => (
          <button
            key={tab.id}
            type="button"
            className={`lab-tab-chip ${selectedTrack === tab.id ? 'active' : ''}`}
            onClick={() => { playSound?.('blip'); setSelectedTrack(tab.id); }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Lab Cards Grid */}
      <div className="lab-modules-grid">
        {filtered.map(item => (
          <div key={item.id} className="lab-module-card">
            <div className="lab-card-top">
              <span className="lab-id">{item.id}</span>
              <span className="lab-cat-badge">{item.categoryLabel}</span>
              <span className="lab-status-tag">{item.status}</span>
            </div>

            <h3 className="lab-title">{item.title}</h3>
            <div className="lab-focus-row">
              <span className="focus-label">CORE FOCUS:</span>
              <span className="focus-val">{item.focus}</span>
            </div>

            <p className="lab-notes">{item.notes}</p>

            <div className="lab-tools-row">
              <span className="tools-label">ENVIRONMENT & UTILITIES:</span>
              <div className="tools-list">
                {item.tools.map(tool => (
                  <span key={tool} className="tool-chip">`{tool}`</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Ethical Commitment Notice */}
      <div className="lab-ethical-footer">
        <div className="notice-icon">🛡️</div>
        <div className="notice-text">
          <h5>ETHICAL RESEARCH & SAFEGUARDS DECLARATION</h5>
          <p>
            All security investigations, simulations, and lab exercises are strictly executed within authorized, isolated
            local virtual machines or explicitly approved educational platforms. No unauthorized scans or arbitrary network testing
            are executed from this portfolio.
          </p>
        </div>
      </div>
    </div>
  );
}
