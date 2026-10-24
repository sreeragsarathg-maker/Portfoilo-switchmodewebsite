import { Reveal } from './ScrollReveal';
import '../styles/sections.css';

const EXPERIENCES = [
  {
    role: 'Software Development Intern',
    company: 'Betterinu',
    period: '2024',
    description:
      'Completed an internship at Betterinu, contributing to web development tasks and gaining hands-on experience in a professional software development environment. Worked on building and improving web features, collaborating with the development team, and applying academic knowledge to real-world challenges.',
    skills: ['Web Development', 'JavaScript', 'Team Collaboration', 'Version Control'],
  },
];

export default function Experience({ theme }) {
  const isGhost = theme === 'ghost';

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">
              {isGhost ? '[ 05 ] DEPLOYMENT HISTORY' : '05 — Experience'}
            </span>
            <h2 className="section-title">Work Experience</h2>
            <p className="section-subtitle">
              Real-world experience building software in professional environments.
            </p>
          </div>
        </Reveal>

        <div className="experience-list" role="list" aria-label="Work experience">
          {EXPERIENCES.map((exp, idx) => (
            <Reveal key={idx} delay={1}>
              <article className="exp-card" role="listitem" aria-label={`${exp.role} at ${exp.company}`}>
                <div className="exp-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-company">
                    {isGhost ? `> ${exp.company}` : `@ ${exp.company}`}
                  </span>
                </div>
                <div className="exp-period" aria-label="Duration">
                  {isGhost ? `[ ${exp.period} ]` : exp.period}
                </div>
                <p className="exp-description">{exp.description}</p>
                <div className="exp-skills-wrap" role="list" aria-label="Skills used">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="tag" role="listitem">{skill}</span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}

          {/* Open to work notice */}
          <Reveal delay={2}>
            <div
              style={{
                padding: '1.5rem',
                border: '1px dashed var(--border-color)',
                borderRadius: 'var(--radius-xl)',
                textAlign: 'center',
              }}
              aria-label="Availability notice"
            >
              <p style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.08em' }}>
                {isGhost
                  ? '> STATUS: OPEN TO NEW MISSIONS'
                  : 'Currently seeking internships, entry-level roles, and freelance opportunities'}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
