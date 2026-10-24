import { useState } from 'react';
import { Reveal } from './ScrollReveal';
import '../styles/sections.css';

const CONTACT_LINKS = [
  {
    icon: '💬',
    label: 'WhatsApp',
    value: '+91 9188752070',
    href: 'https://wa.me/919188752070?text=Hello%20Sreerag,%20I%20am%20contacting%20you%20from%20your%20portfolio!',
  },
  {
    icon: '✉️',
    label: 'Email',
    value: 'sreeragsarathg@gmail.com',
    href: 'mailto:sreeragsarathg@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9188752070',
    href: 'tel:+919188752070',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sreerag-sarath',
    href: 'https://www.linkedin.com/in/sreerag-sarath-043a74400',
  },
  {
    icon: '🐙',
    label: 'GitHub',
    value: 'github.com/sreeragsarathg-maker',
    href: 'https://github.com/sreeragsarathg-maker',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@appzzcodes',
    href: 'https://instagram.com/appzzcodes',
  },
];

export default function Contact({ theme }) {
  const isGhost = theme === 'ghost';
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Format enquiry for WhatsApp direct dispatch
    const whatsappMessage = 
      `*New Portfolio Enquiry*\n\n` +
      `*From:* ${formState.name}\n` +
      `*Email:* ${formState.email}\n` +
      `*Subject:* ${formState.subject || 'Portfolio Inquiry'}\n\n` +
      `*Message:*\n${formState.message}`;

    const whatsappUrl = `https://wa.me/919188752070?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');

    setTimeout(() => setSubmitted(false), 4000);
    setFormState({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">
              {isGhost ? '[ 06 ] ESTABLISH CONTACT' : '06 — Contact'}
            </span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Whether you have an opportunity, a project idea, or just want to connect — I'd love to hear from you.
            </p>
          </div>
        </Reveal>

        <div className="contact-inner">
          {/* Info column */}
          <Reveal delay={1}>
            <div className="contact-info">
              <h3>
                {isGhost ? '> Let\'s connect' : "Let's work together"}
              </h3>
              <p>
                I'm actively looking for internships, entry-level developer roles, and interesting freelance projects. My inbox is always open.
              </p>

              <div className="contact-links" role="list" aria-label="Contact methods">
                {CONTACT_LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="contact-link"
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    role="listitem"
                    aria-label={`${link.label}: ${link.value}`}
                  >
                    <div className="contact-link-icon" aria-hidden="true">{link.icon}</div>
                    <div className="contact-link-text">
                      <span className="contact-link-label">
                        {isGhost ? `[ ${link.label.toUpperCase()} ]` : link.label}
                      </span>
                      <span className="contact-link-value">{link.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={2}>
            <form
              className="contact-form"
              onSubmit={handleSubmit}
              aria-label="Contact form"
              noValidate
            >
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name" className="form-label">Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    className="form-input"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email" className="form-label">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">Subject</label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="What's this about?"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="form-textarea"
                  placeholder={isGhost ? '> Your message here...' : 'Your message...'}
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                id="contact-submit-btn"
                style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>💬</span>
                <span>
                  {submitted
                    ? (isGhost ? '[ OPENING WHATSAPP... ]' : 'Connecting to WhatsApp ✓')
                    : (isGhost ? '> Send to WhatsApp' : 'Send via WhatsApp')}
                </span>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
