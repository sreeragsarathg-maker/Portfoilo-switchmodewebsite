import { Reveal } from './ScrollReveal';
import '../styles/sections.css';

const PROJECTS = [
  {
    id: '01',
    title: 'Sahaayi',
    description:
      'An AI-powered civic welfare assistance platform that helps citizens navigate government schemes and welfare programs. Built to bridge the gap between public services and the people who need them.',
    tags: ['React', 'Node.js', 'Python', 'AI/ML', 'REST API', 'MongoDB'],
    link: null,
    linkLabel: 'View Project',
  },
  {
    id: '02',
    title: 'OXIFINZ',
    description:
      'A fintech web application focused on loan management and financial services. Features include loan application flows, eligibility checks, and user dashboards with real-time data.',
    tags: ['React', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
    link: null,
    linkLabel: 'View Project',
  },
  {
    id: '03',
    title: 'Drive Management System',
    description:
      'A file and data management application providing cloud-style storage capabilities, file organization, and access control features in a clean, intuitive interface.',
    tags: ['JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'REST API'],
    link: null,
    linkLabel: 'View Project',
  },
  {
    id: '04',
    title: 'Blog Platform',
    description:
      'A fully functional React-based blogging platform with rich text editing, category management, user authentication, and a responsive reading experience.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'CSS'],
    link: null,
    linkLabel: 'View Project',
  },
];

export default function Projects({ theme }) {
  const isGhost = theme === 'ghost';

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <span className="section-label">
              {isGhost ? '[ 03 ] OPERATIONS' : '03 — Projects'}
            </span>
            <h2 className="section-title">Selected Work</h2>
            <p className="section-subtitle">
              A collection of projects built with purpose — from civic tech to fintech to developer tooling.
            </p>
          </div>
        </Reveal>

        <div className="projects-grid" role="list" aria-label="Portfolio projects">
          {PROJECTS.map((project, idx) => (
            <Reveal key={project.id} delay={(idx % 4) + 1}>
              <article className="project-card" role="listitem" aria-label={project.title}>
                <span className="project-number" aria-hidden="true">
                  {isGhost ? `[ ${project.id} ]` : project.id}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-tags" role="list" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag" role="listitem">{tag}</span>
                  ))}
                </div>

                <div className="project-footer">
                  {project.link ? (
                    <a
                      href={project.link}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.linkLabel} — ${project.title}`}
                    >
                      {project.linkLabel} <span aria-hidden="true">↗</span>
                    </a>
                  ) : (
                    <span className="project-link" style={{ opacity: 0.4, cursor: 'default' }}>
                      {isGhost ? '[ CLASSIFIED ]' : 'Link coming soon'}
                    </span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
