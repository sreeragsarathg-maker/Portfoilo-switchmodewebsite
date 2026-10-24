import { useState } from 'react';

export default function ContactConsole({ playSound }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sendingState, setSendingState] = useState('idle'); // idle, encrypting, sent

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      playSound?.('alert');
      alert('Please fill out Operator Name, Communication Frequency (Email), and Transmission Payload.');
      return;
    }

    playSound?.('select');
    setSendingState('encrypting');

    // Simulate cryptographic packet dispatch and trigger WhatsApp dispatch
    setTimeout(() => {
      setSendingState('sent');
      playSound?.('access');
      
      const whatsappMsg = 
        `*SHADOW PROTOCOL // TRANSMISSION PACKET*\n\n` +
        `*Operator:* ${formData.name}\n` +
        `*Email:* ${formData.email}\n` +
        `*Subject:* ${formData.subject || 'Portfolio Inquiry'}\n\n` +
        `*Payload:*\n${formData.message}`;

      const whatsappUrl = `https://wa.me/919188752070?text=${encodeURIComponent(whatsappMsg)}`;
      window.open(whatsappUrl, '_blank');

      setTimeout(() => {
        setSendingState('idle');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 1200);
  };

  const contactChannels = [
    {
      id: 'whatsapp',
      label: 'ENCRYPTED DISPATCH // WHATSAPP',
      value: '+91 9188752070',
      href: 'https://wa.me/919188752070?text=Hello%20Sreerag,%20I%20am%20contacting%20you%20from%20your%20Shadow%20Protocol%20portfolio!',
      icon: '💬',
      desc: 'Instant direct messaging & real-time transmission channel'
    },
    {
      id: 'email',
      label: 'DIRECT TRANSMISSION LINE',
      value: 'sreeragsarathg@gmail.com',
      href: 'mailto:sreeragsarathg@gmail.com',
      icon: '✉️',
      desc: 'Primary communication node for opportunities & collaborations'
    },
    {
      id: 'phone',
      label: 'DIRECT VOICE / TELECOM FREQUENCY',
      value: '+91 9188752070',
      href: 'tel:+919188752070',
      icon: '📞',
      desc: 'Direct voice / cellular transmission link'
    },
    {
      id: 'linkedin',
      label: 'PROFESSIONAL NETWORK NODE',
      value: 'linkedin.com/in/sreerag-sarath-043a74400',
      href: 'https://www.linkedin.com/in/sreerag-sarath-043a74400',
      icon: '💼',
      desc: 'Professional background, academic credentials, and career trajectory'
    },
    {
      id: 'github',
      label: 'SOURCE REPOSITORY HUB',
      value: 'github.com/sreeragsarathg-maker',
      href: 'https://github.com/sreeragsarathg-maker',
      icon: '🐙',
      desc: 'Code artifacts, full-stack repositories, and open experiments'
    },
    {
      id: 'instagram',
      label: 'CREATIVE & DEVELOPER FEED',
      value: 'instagram.com/appzzcodes (@appzzcodes)',
      href: 'https://instagram.com/appzzcodes',
      icon: '📸',
      desc: 'Visual developer journey, tech highlights, and creative experiments'
    }
  ];

  return (
    <div className="contact-console-panel">
      {/* Header */}
      <div className="section-hud-header">
        <div className="hud-header-left">
          <span className="hud-badge-tag">[ TRANSMISSION PROTOCOL // ENCRYPTED COMMS ]</span>
          <h2 className="hud-section-title">ESTABLISH CONNECTION // COMM CONSOLE</h2>
        </div>
        <div className="hud-metric-indicator">
          <span className="live-blink" />
          <span>CHANNELS MONITORED // OPEN TO OPPORTUNITIES</span>
        </div>
      </div>

      <div className="contact-console-grid">
        {/* Left: Communication Channels */}
        <div className="channels-column">
          <div className="channel-box-header">
            <h4>// VERIFIED DIRECTORY FREQUENCIES</h4>
            <p>Select any link below to establish immediate connection via external networks.</p>
          </div>

          <div className="channels-list">
            {contactChannels.map(channel => (
              <a
                key={channel.id}
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
                onMouseEnter={() => playSound?.('blip')}
              >
                <div className="channel-icon-wrap">{channel.icon}</div>
                <div className="channel-info">
                  <span className="ch-label">{channel.label}</span>
                  <span className="ch-val">{channel.value}</span>
                  <p className="ch-desc">{channel.desc}</p>
                </div>
                <span className="ch-arrow">↗</span>
              </a>
            ))}
          </div>

          <div className="comm-security-notice">
            <span className="shield-icon">🛡️</span>
            <div>
              <h6>DISPATCH NOTICE</h6>
              <p>Looking for software development internships, junior engineering roles, or security exploration projects.</p>
            </div>
          </div>
        </div>

        {/* Right: Dispatch Terminal Form */}
        <div className="dispatch-form-card">
          <div className="form-card-header">
            <span className="term-led green" />
            <span className="form-title">TRANSMISSION PACKET DISPATCHER</span>
          </div>

          <form onSubmit={handleSend} className="dispatch-form">
            <div className="form-field">
              <label htmlFor="shadow-name">OPERATOR IDENTIFIER / YOUR NAME *</label>
              <input
                id="shadow-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g., Alex Vance"
                required
                className="hud-input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="shadow-email">RETURN FREQUENCY / YOUR EMAIL *</label>
              <input
                id="shadow-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g., alex@organization.com"
                required
                className="hud-input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="shadow-subject">TRANSMISSION SUBJECT</label>
              <input
                id="shadow-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g., Software Engineering Role / Project Inquiry"
                className="hud-input"
              />
            </div>

            <div className="form-field">
              <label htmlFor="shadow-message">PAYLOAD CONTENT / YOUR MESSAGE *</label>
              <textarea
                id="shadow-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message, opportunity details, or inquiry here..."
                required
                className="hud-textarea"
              />
            </div>

            <div className="form-submit-row">
              <button
                type="submit"
                disabled={sendingState === 'encrypting'}
                className={`hud-action-btn primary full-width ${sendingState}`}
              >
                {sendingState === 'idle' && 'TRANSMIT VIA WHATSAPP (DIRECT) →'}
                {sendingState === 'encrypting' && 'PACKAGING & ENCRYPTING TRANSMISSION...'}
                {sendingState === 'sent' && '✓ OPENING WHATSAPP DISPATCH'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
