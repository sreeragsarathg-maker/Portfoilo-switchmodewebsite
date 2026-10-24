import { Reveal } from './ScrollReveal';
import '../styles/sections.css';

const SKILL_GROUPS = [
  {
    icon: '🎨',
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    icon: '⚙️',
    title: 'Backend',
    items: ['Node.js', 'Express.js', 'Python', 'REST APIs'],
  },
  {
    icon: '🗄️',
    title: 'Databases',
    items: ['MongoDB', 'MySQL'],
  },
  {
    icon: '🛠️',
    title: 'Tools & Systems',
    items: ['Git', 'GitHub', 'Linux', 'Bash', 'Networking'],
  },
  {
    icon: '🔐',
    title: 'Security & Learning',
    items: ['Cybersecurity', 'Ethical Hacking', 'Full-Stack Dev', 'Kali Linux', 'CTF'],
  },
];

const GHOST_ICONS = {
  Frontend: '[ UI ]',
  Backend: '[ SRV ]',
  Databases: '[ DB ]',
  'Tools & Systems': '[ SYS ]',
  'Security & Learning': '[ SEC ]',
};

export default function Skills({ theme }) {
  const isGhost = theme === 'ghost';

  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">
              {isGhost ? '[ 02 ] CAPABILITIES' : '02 — Skills'}
            </span>
            <h2 className="section-title">Technical Arsenal</h2>
            <p className="section-subtitle">
              Technologies and tools I work with — from building UIs to securing systems.
            </p>
          </div>
        </Reveal>

        <div className="skills-grid" role="list" aria-label="Skill categories">
          {SKILL_GROUPS.map((group, idx) => (
            <Reveal key={group.title} delay={(idx % 5) + 1}>
              <article className="skill-card" role="listitem" aria-label={`${group.title} skills`}>
                <div className="skill-card-header">
                  <div className="skill-icon" aria-hidden="true">{group.icon}</div>
                  <span className="skill-card-title">
                    {isGhost ? GHOST_ICONS[group.title] : group.title}
                  </span>
                </div>
                <div className="skill-items" role="list" aria-label={`${group.title} technologies`}>
                  {group.items.map((item) => (
                    <span key={item} className="skill-item" role="listitem">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
