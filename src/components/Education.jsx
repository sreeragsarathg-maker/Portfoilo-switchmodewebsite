import { Reveal } from './ScrollReveal';
import '../styles/sections.css';

export default function Education({ theme }) {
  const isGhost = theme === 'ghost';

  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">
              {isGhost ? '[ 04 ] TRAINING' : '04 — Education'}
            </span>
            <h2 className="section-title">Academic Background</h2>
            <p className="section-subtitle">
              Where physics met curiosity, and curiosity became code.
            </p>
          </div>
        </Reveal>

        <div className="education-timeline">
          <Reveal delay={1}>
            <article className="edu-card" aria-label="BSc Physics degree">
              <div className="edu-year" aria-label="Duration">
                <div>2023</div>
                <div>—</div>
                <div>2026</div>
              </div>
              <div className="edu-content">
                <h3>Bachelor of Science — Physics</h3>
                <span className="edu-institution">
                  {isGhost ? '> Calicut University' : 'Calicut University'}
                </span>
                <p className="edu-description">
                  Studying physics with a focus on analytical thinking, mathematical modeling, and scientific reasoning. The discipline of physics — breaking complex phenomena into understandable systems — directly informs my approach to software engineering and problem-solving.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {['Physics', 'Mathematics', 'Analytical Reasoning', 'Scientific Method'].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={2}>
            <article className="edu-card" style={{ marginTop: '1rem' }} aria-label="Self-directed learning">
              <div className="edu-year" aria-label="Duration">
                <div>2023</div>
                <div>—</div>
                <div>Now</div>
              </div>
              <div className="edu-content">
                <h3>Self-Directed Technical Learning</h3>
                <span className="edu-institution">
                  {isGhost ? '> Independent Study' : 'Independent Study'}
                </span>
                <p className="edu-description">
                  Parallel to formal education, I've been self-teaching full-stack development, Linux systems, and cybersecurity fundamentals. This includes building projects, completing online courses, and hands-on experimentation with real tools and environments.
                </p>
                <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {['Web Development', 'Linux', 'Cybersecurity', 'Networking', 'Git'].map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
