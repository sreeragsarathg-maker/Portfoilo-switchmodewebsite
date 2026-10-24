import Logo from './Logo';
import '../styles/sections.css';

export default function Footer({ theme }) {
  const isGhost = theme === 'ghost';
  const year = new Date().getFullYear();

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <button
            className="footer-brand"
            onClick={scrollTop}
            aria-label="Back to top"
            style={{ cursor: 'pointer', background: 'none', border: 'none', padding: 0 }}
          >
            <Logo isGhost={isGhost} />
          </button>

          <p className="footer-copy">
            {isGhost
              ? `> © ${year} — All rights reserved`
              : `© ${year} Sreerag Sarath. Built with React & Vite.`}
          </p>

          <div className="footer-links" aria-label="Footer links">
            <a
              href="https://github.com/sreeragsarathg-maker"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sreerag-sarath-043a74400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/appzzcodes"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
            >
              Instagram
            </a>
            <a
              href="mailto:sreeragsarathg@gmail.com"
              aria-label="Email Sreerag Sarath"
            >
              Email
            </a>
            <button
              onClick={scrollTop}
              style={{ background: 'none', border: 'none', cursor: 'pointer', font: 'inherit', color: 'var(--text-muted)', fontSize: '0.85rem' }}
              aria-label="Back to top"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
