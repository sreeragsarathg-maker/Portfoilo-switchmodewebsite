import { Reveal } from './ScrollReveal';
import '../styles/sections.css';

export default function About({ theme }) {
  const isGhost = theme === 'ghost';

  const traits = [
    'Full-Stack Developer',
    'BSc Physics',
    'Cybersecurity Enthusiast',
    'Linux Advocate',
    'Problem Solver',
    'Lifelong Learner',
  ];

  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">
              {isGhost ? '[ 01 ] IDENTITY' : '01 — About'}
            </span>
            <h2 className="section-title">Who I Am</h2>
            <p className="section-subtitle">
              Physics graduate, software developer, security explorer.
            </p>
          </div>
        </Reveal>

        <div className="about-inner">
          {/* Image */}
          <Reveal delay={1}>
            <div className="about-image-wrap">
              <img
                src={isGhost ? '/images/ghost-portrait.jpg' : '/images/sreerag.jpg'}
                alt="Sreerag Sarath at Betterinu"
                className="about-img"
                loading="lazy"
              />
              <div className="about-image-tag" aria-hidden="true">
                {isGhost ? '> IDENTITY: SREERAG.S' : 'Sreerag Sarath · Developer'}
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal delay={2}>
              <h3>{isGhost ? 'SYSTEM PROFILE' : 'Hello, I\'m Sreerag'}</h3>
              <p className="about-lead">
                BSc Physics student at Calicut University with a passion for building software and exploring cybersecurity.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p>
                My background in physics gave me an analytical framework for solving complex problems from first principles. That same curiosity drives my approach to software — understanding systems deeply, not just writing code.
              </p>
            </Reveal>

            <Reveal delay={4}>
              <p>
                I'm building expertise in full-stack development with React, Node.js, and databases, while simultaneously diving into the world of cybersecurity — ethical hacking, Linux security, and networking fundamentals. I believe the best developers understand how systems can break, not just how to build them.
              </p>
            </Reveal>

            <Reveal delay={5}>
              <p>
                Beyond code, I'm driven by impact. Projects like Sahaayi — an AI-powered civic welfare assistant — reflect my belief that technology should solve real human problems. I'm looking for opportunities to grow, collaborate, and build things that matter.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="about-traits" role="list" aria-label="Traits and focus areas">
                {traits.map((trait) => (
                  <span key={trait} className="tag" role="listitem">{trait}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
