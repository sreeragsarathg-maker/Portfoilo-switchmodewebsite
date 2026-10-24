// Technical skills formatted as futuristic equipment selection modules with honest proficiency tags
export const SKILL_CATEGORIES = [
  {
    id: 'os',
    categoryName: 'OPERATING SYSTEMS',
    code: 'SYS-OPS',
    icon: 'terminal',
    skills: [
      {
        id: 'linux',
        name: 'Linux',
        proficiency: 'PRACTICING',
        summary: 'Core Linux command line, filesystem hierarchy, permissions, process management, and service control.',
        details: 'Daily driver environment. Proficient with systemctl, file permissions (chmod/chown), package management, grep, sed, curl, and pipe-based command chains.',
        icon: 'terminal'
      },
      {
        id: 'kali',
        name: 'Kali Linux',
        proficiency: 'PRACTICING',
        summary: 'Specialized security distribution navigation, utility suite exploration, and lab environment setup.',
        details: 'Configured in virtualized host environments for authorized security research, packet inspection, and security tool training.',
        icon: 'shield'
      },
      {
        id: 'windows',
        name: 'Windows Fundamentals',
        proficiency: 'FAMILIAR',
        summary: 'PowerShell basics, Registry architecture, task manager diagnostics, and administrative tools.',
        details: 'Understanding NTFS permissions, service execution, Windows defender controls, and troubleshooting in developer workstations.',
        icon: 'cpu'
      }
    ]
  },
  {
    id: 'networking',
    categoryName: 'NETWORKING',
    code: 'NET-PROTO',
    icon: 'network',
    skills: [
      {
        id: 'tcpip',
        name: 'TCP/IP',
        proficiency: 'PRACTICING',
        summary: 'Three-way handshakes, packet headers, IP subnetting, CIDR notation, and stateful vs stateless traffic.',
        details: 'Understanding transport dynamics (SYN, ACK, FIN, RST flags), transmission reliability, and flow control across network boundaries.',
        icon: 'activity'
      },
      {
        id: 'dns',
        name: 'DNS',
        proficiency: 'FAMILIAR',
        summary: 'Domain resolution hierarchies, root servers, A/AAAA/CNAME/MX records, and recursive lookup mechanics.',
        details: 'Analyzing domain resolution queries with dig and nslookup, recognizing DNS spoofing concepts, and DNS cache behavior.',
        icon: 'globe'
      },
      {
        id: 'http',
        name: 'HTTP / HTTPS',
        proficiency: 'PRACTICING',
        summary: 'Request/response lifecycle, status codes, REST paradigms, TLS/SSL certificates, and header security.',
        details: 'Hands-on development with HTTP methods, CSP/CORS headers, cookie security flags (HttpOnly, Secure, SameSite), and TLS encryption layers.',
        icon: 'lock'
      },
      {
        id: 'ports',
        name: 'Ports & Protocols',
        proficiency: 'PRACTICING',
        summary: 'Standard port mappings (21, 22, 53, 80, 443, 3306, 8080), socket connections, and listening states.',
        details: 'Inspecting active port bindings using netstat and ss, verifying daemon bindings, and understanding transport protocol selection.',
        icon: 'sliders'
      },
      {
        id: 'osi',
        name: 'OSI Model',
        proficiency: 'FAMILIAR',
        summary: 'Seven-layer conceptual framework: Physical through Application layers and data encapsulation.',
        details: 'Mapping real-world protocols to the 7-layer model to isolate communication failures and understand layer-specific threat surfaces.',
        icon: 'layers'
      }
    ]
  },
  {
    id: 'programming',
    categoryName: 'PROGRAMMING',
    code: 'DEV-CODE',
    icon: 'code',
    skills: [
      {
        id: 'python',
        name: 'Python',
        proficiency: 'PRACTICING',
        summary: 'Scripting, algorithmic logic, data processing, automation, and foundational ML/AI integrations.',
        details: 'Used for building automation utilities, parsing log files, working with REST APIs, and structuring back-end algorithms.',
        icon: 'code'
      },
      {
        id: 'javascript',
        name: 'JavaScript (ES6+)',
        proficiency: 'PRACTICING',
        summary: 'Asynchronous event loops, Promises, async/await, DOM manipulation, functional programming patterns.',
        details: 'Core language for both interactive front-end applications (React) and backend services (Node.js/Express).',
        icon: 'zap'
      },
      {
        id: 'bash',
        name: 'Bash Fundamentals',
        proficiency: 'LEARNING',
        summary: 'Shell scripting, loop automation, environment variable management, and pipeline orchestration.',
        details: 'Writing automated setup routines, batch processing tasks, and custom aliases to streamline developer workflows.',
        icon: 'terminal'
      }
    ]
  },
  {
    id: 'security',
    categoryName: 'SECURITY FUNDAMENTALS',
    code: 'SEC-CORE',
    icon: 'shield',
    skills: [
      {
        id: 'recon',
        name: 'Reconnaissance Concepts',
        proficiency: 'LEARNING',
        summary: 'Passive and active information gathering principles within authorized and simulated labs.',
        details: 'Exploring OSINT concepts, WHOIS querying, network sweeping logic, and target surface delineation purely in authorized contexts.',
        icon: 'search'
      },
      {
        id: 'vuln',
        name: 'Vulnerability Assessment Fundamentals',
        proficiency: 'LEARNING',
        summary: 'Understanding common misconfigurations, CVE databases, OWASP Top 10 vectors, and patch management.',
        details: 'Studying root causes of software flaws: injection flaws, broken access control, cross-site scripting, and cryptographic failures.',
        icon: 'alert'
      },
      {
        id: 'ethical-hacking',
        name: 'Ethical Hacking Concepts',
        proficiency: 'LEARNING',
        summary: 'Principles of authorized penetration testing, legal boundaries, scopes of engagement, and disclosure.',
        details: 'Adherence to strict legal/ethical frameworks. Studying defensive fortification by understanding how attacks are constructed.',
        icon: 'shield'
      },
      {
        id: 'sec-awareness',
        name: 'Security Awareness',
        proficiency: 'PRACTICING',
        summary: 'Social engineering defenses, phishing identification, credential hygiene, and secure browsing habits.',
        details: 'Promoting defensive vigilance, multi-factor authentication enforcement, password entropy, and principle of least privilege.',
        icon: 'eye'
      }
    ]
  },
  {
    id: 'development',
    categoryName: 'DEVELOPMENT',
    code: 'APP-STACK',
    icon: 'layers',
    skills: [
      {
        id: 'react',
        name: 'React.js',
        proficiency: 'PRACTICING',
        summary: 'Component architecture, Hooks (useState, useEffect, useCallback, useRef), virtual DOM, state flow.',
        details: 'Building dynamic, responsive single-page web applications with modular components and performant rendering.',
        icon: 'cpu'
      },
      {
        id: 'htmlcss',
        name: 'HTML & CSS',
        proficiency: 'PRACTICING',
        summary: 'Semantic HTML5 structure, CSS Grid, Flexbox, custom properties, glassmorphism, responsive media queries.',
        details: 'Crafting pixel-perfect, accessible layouts from scratch with modern styling, fluid typography, and micro-interactions.',
        icon: 'layout'
      },
      {
        id: 'restapi',
        name: 'REST APIs',
        proficiency: 'PRACTICING',
        summary: 'Endpoint design, JSON serialization, status code semantics, query parameters, authentication headers.',
        details: 'Integrating frontend clients with backend microservices via asynchronous fetch pipelines with thorough error handling.',
        icon: 'server'
      },
      {
        id: 'git',
        name: 'Git & GitHub',
        proficiency: 'PRACTICING',
        summary: 'Branching, committing, merge resolution, pull requests, repository version control, and GitHub hosting.',
        details: 'Maintaining structured commit histories, managing feature branches, and collaborating through open-source workflows.',
        icon: 'git'
      }
    ]
  }
];
