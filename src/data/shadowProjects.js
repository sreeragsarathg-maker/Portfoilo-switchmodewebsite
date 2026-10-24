// Real projects transformed into game-style mission dossiers for Sreerag Sarath
export const SHADOW_PROJECTS = [
  {
    id: 'MISSION-01',
    codeName: 'OPERATION SAHAAYI',
    title: 'Sahaayi — AI Civic Assistance Platform',
    classification: 'CIVIC TECH // PUBLIC WELFARE // AI',
    status: 'DEPLOYED // ACTIVE',
    statusLevel: 'operational', // operational, in-progress, classified
    objective: 'Bridge the access barrier between citizens and government welfare schemes through automated AI assistance and structured guidance.',
    briefing:
      'Sahaayi is an AI-powered civic platform engineered to demystify complex bureaucratic welfare programs. Operating from first-principles systems design, it ingests multi-tier eligibility rules, processes citizen queries in natural language, and returns actionable, step-by-step application guidance. Built to empower underserved communities and ensure public initiatives reach their intended beneficiaries.',
    technologies: ['React', 'Node.js', 'Python', 'AI/ML', 'REST API', 'MongoDB'],
    securityHighlights: [
      'Input validation & sanitation on public query streams',
      'Encrypted transit for citizen data submissions',
      'Role-delimited administrative dashboard access',
      'Resilient API rate limiting to safeguard civic infrastructure'
    ],
    metrics: [
      { label: 'ARCHITECTURE', value: 'Decoupled Client-API' },
      { label: 'TARGET AUDIENCE', value: 'Public / Citizenry' },
      { label: 'DATA STACK', value: 'MongoDB NoSQL + Python ML' }
    ],
    github: null,
    demo: null,
    linksNote: 'Source code and internal demo undergoing packaging.'
  },
  {
    id: 'MISSION-02',
    codeName: 'OPERATION OXIFINZ',
    title: 'OXIFINZ — Financial & Loan Management Engine',
    classification: 'FINTECH // TRANSACTION SECURITY',
    status: 'ACTIVE DEPLOYMENT',
    statusLevel: 'operational',
    objective: 'Provide a robust, end-to-end loan application flow, financial eligibility verification, and real-time client analytics dashboard.',
    briefing:
      'A full-stack fintech platform designed for loan management and financial services. Features high-integrity data validation, user authentication, responsive application review flows, and structured MySQL relational schemas. Emphasizes clean UI state management and deterministic transaction handling.',
    technologies: ['React', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
    securityHighlights: [
      'Strict parameter validation for loan calculation engines',
      'Relational integrity constraints preventing double-submission bugs',
      'Session-based authorization layers on protected loan tables',
      'Sanitized SQL queries mitigating injection attack vectors'
    ],
    metrics: [
      { label: 'DATABASE', value: 'Structured Relational MySQL' },
      { label: 'BACKEND', value: 'Express.js REST Microservices' },
      { label: 'FRONTEND', value: 'Tailwind + React State Layer' }
    ],
    github: null,
    demo: null,
    linksNote: 'Repository link pending client authorization.'
  },
  {
    id: 'MISSION-03',
    codeName: 'OPERATION DRIVE-SEC',
    title: 'Drive Management & Cloud Storage System',
    classification: 'STORAGE // ACCESS CONTROL // FILES',
    status: 'STABLE CORE',
    statusLevel: 'operational',
    objective: 'Engineer a secure, private cloud-style storage hub with intuitive organization, directory management, and robust access controls.',
    briefing:
      'A file management application providing cloud-style storage capabilities, hierarchical directory sorting, upload streaming, and granular permission enforcement. Built with Node.js and MongoDB GridFS architecture to explore large binary payload handling and authorization schemes.',
    technologies: ['JavaScript', 'Node.js', 'MongoDB', 'Express.js', 'REST API'],
    securityHighlights: [
      'MIME-type validation & extension verification against malicious payload uploads',
      'Path traversal protection preventing directory escape exploits',
      'Access token verification on every direct file download route',
      'Metadata isolation separating file descriptors from binary blobs'
    ],
    metrics: [
      { label: 'STORAGE LAYER', value: 'MongoDB Binary Document Store' },
      { label: 'SECURITY FOCUS', value: 'Path Traversal & Payload Filtering' },
      { label: 'PROTOCOL', value: 'HTTP Multi-part Stream Pipeline' }
    ],
    github: null,
    demo: null,
    linksNote: 'Public repository upload scheduled.'
  },
  {
    id: 'MISSION-04',
    codeName: 'OPERATION CHRONICLE',
    title: 'Modern Content & Blog Publishing Architecture',
    classification: 'FULL-STACK // CONTENT INTEGRITY',
    status: 'COMPLETED // ARCHIVED',
    statusLevel: 'operational',
    objective: 'Develop a responsive publishing hub featuring rich text authoring, category taxonomies, user authentication, and reader optimization.',
    briefing:
      'A content publishing system built from scratch with React and Node.js. Incorporates authenticated writer dashboards, markdown parsing, category filtering, and optimized reading views. Served as a testing ground for scalable component architecture and component re-usability.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'CSS'],
    securityHighlights: [
      'Sanitized markdown parser preventing stored Cross-Site Scripting (XSS)',
      'Hashed credential storage with modern hashing algorithms',
      'CORS policies restricted to authorized client domains',
      'Stateless JWT session verification'
    ],
    metrics: [
      { label: 'AUTH PROTOCOL', value: 'Token-based User Validation' },
      { label: 'PARSER', value: 'Sanitized Markdown Engine' },
      { label: 'FRONTEND', value: 'Custom Responsive React UI' }
    ],
    github: null,
    demo: null,
    linksNote: 'Live demo & repo available upon request.'
  }
];
