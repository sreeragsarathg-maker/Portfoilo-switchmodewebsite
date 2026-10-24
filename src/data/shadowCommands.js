// Pure JavaScript command interpreter & conversational intelligence engine
// Supports exact directives, interactive cyber simulations, and natural language queries

export const AVAILABLE_COMMANDS = [
  { name: 'help', desc: 'Display all available system directives and operational commands' },
  { name: 'whoami', desc: 'Output authenticated operator credentials and security clearance' },
  { name: 'about', desc: 'Display operator profile, academic discipline, and background' },
  { name: 'skills', desc: 'List technical cyber arsenal, operating systems, and networking stack' },
  { name: 'projects', desc: 'Enumerate mission dossiers and software engineering deployments' },
  { name: 'missions', desc: 'Alias for projects command — display active mission log' },
  { name: 'learning', desc: 'Show self-directed learning progress and security research tracks' },
  { name: 'lab', desc: 'Access Security Lab modules and authorized study environments' },
  { name: 'contact', desc: 'Display secure communication transmission channels' },
  { name: 'status', desc: 'Run interface telemetry and system integrity diagnostics' },
  { name: 'scan <host>', desc: 'Execute simulated cyber reconnaissance & port scanning protocol' },
  { name: 'ping <host>', desc: 'Dispatch simulated ICMP echo network diagnostics' },
  { name: 'decrypt', desc: 'Initialize interactive cryptographic cipher challenge' },
  { name: 'matrix', desc: 'Render holographic digital cipher rain stream' },
  { name: 'date', desc: 'Print current interface local and UTC timestamp' },
  { name: 'nav <target>', desc: 'Direct HUD navigation: overview | profile | arsenal | missions | lab | progress | contact | terminal' },
  { name: 'clear', desc: 'Flush output console buffer' }
];

export function executeShadowCommand(rawInput, context = {}) {
  const trimmed = (rawInput || '').trim();
  if (!trimmed) return null;

  // Strip conversational prefixes like "hey ericsxa", "ericsxa,", "can you", "please"
  const clean = trimmed
    .replace(/^(hey\s+|ok\s+|hi\s+)?(ericsxa|jarvis)[,:]?\s*/i, '')
    .replace(/^(can\s+you\s+|please\s+|could\s+you\s+|i\s+want\s+to\s+)/i, '')
    .trim();

  const lower = clean.toLowerCase();
  const parts = clean.split(/\s+/);
  const cmd = parts[0].toLowerCase();
  const args = parts.slice(1).join(' ').trim();

  // 1. EXACT COMMAND DISPATCH
  switch (cmd) {
    case 'help':
    case '?':
      return {
        type: 'help',
        command: clean,
        output: [
          '╔═══════════════════════════════════════════════════════════════╗',
          '║           ERICSXA SHADOW PROTOCOL — DIRECTIVE INDEX           ║',
          '╚═══════════════════════════════════════════════════════════════╝',
          ...AVAILABLE_COMMANDS.map(c => `• ${c.name.padEnd(16)} : ${c.desc}`),
          '',
          '[CONVERSATIONAL AI]: You can also speak or type natural questions:',
          '  "Tell me about Sreerag", "Why physics?", "What are his best projects?",',
          '  "Show me security skills", "How can I hire him?", "Scan localhost"'
        ]
      };

    case 'whoami':
    case 'operator':
    case 'identity':
      return {
        type: 'text',
        command: clean,
        output: [
          'OPERATOR IDENTITY: Sreerag Sarath',
          'ACADEMIC PROFILE : BSc Physics (Calicut University)',
          'SPECIALIZATION   : Full-Stack Web Development & Cybersecurity Fundamentals',
          'CLEARANCE TIER   : TIER-1 OPERATOR // INDEPENDENT RESEARCHER',
          'HOST STATUS      : ONLINE [SECURE SESSION ACTIVE]',
          'CORE OBJECTIVE   : Building resilient digital architectures & ethical cyber defenses.'
        ]
      };

    case 'about':
    case 'bio':
    case 'profile':
      if (context.setActiveSection) context.setActiveSection('profile');
      return {
        type: 'text',
        command: clean,
        sectionChange: 'profile',
        output: [
          'OPERATOR DOSSIER // SREERAG SARATH',
          '-------------------------------------------------------',
          'Physics undergraduate with a strong foundation in analytical reasoning',
          'and first-principles systems engineering. Transitions scientific problem-solving',
          'into software architecture, web platforms, and cybersecurity explorations.',
          '',
          'Active Focus Areas: Full-stack applications (React/Node), Linux system administration,',
          'network protocol dissection, and ethical defense paradigms.',
          '[HUD Action]: Switched viewport to OPERATOR PROFILE.'
        ]
      };

    case 'skills':
    case 'arsenal':
    case 'stack':
      if (context.setActiveSection) context.setActiveSection('arsenal');
      return {
        type: 'text',
        command: clean,
        sectionChange: 'arsenal',
        output: [
          'INITIALIZING CYBER ARSENAL MODULES...',
          '• LANGUAGES         : Python, JavaScript (ES6+), Bash Scripting',
          '• WEB & FRONTEND    : React.js, HTML5/CSS3, Modern Vanilla CSS, REST APIs',
          '• BACKEND & DB      : Node.js, Express, MongoDB (GridFS Payload Streaming)',
          '• OPERATING SYSTEMS : Linux (Daily Practitioner), Kali Linux, Windows',
          '• NETWORKING        : TCP/IP, HTTP/HTTPS, DNS, OSI Model, Port Architecture',
          '• SECURITY TOOLS    : Wireshark, Nmap, Vulnerability Assessment, Recon Methods',
          '',
          '[HUD Action]: Switched viewport to CYBER ARSENAL equipment matrix.'
        ]
      };

    case 'projects':
    case 'missions':
    case 'work':
      if (context.setActiveSection) context.setActiveSection('missions');
      return {
        type: 'text',
        command: clean,
        sectionChange: 'missions',
        output: [
          'ACTIVE MISSION DOSSIER LOG // CLASSIFIED DEPLOYMENTS:',
          '-------------------------------------------------------',
          '1. CLOUDBOX STORAGE SUITE',
          '   • High-volume binary file management application built on Node.js & MongoDB GridFS.',
          '   • Granular stream handling, hierarchical directory trees, permission barriers.',
          '',
          '2. NETWORK PACKET SNIFFER & PROTOCOL ANALYZER',
          '   • Raw socket packet capture & dissection tool engineered in Python.',
          '   • Decodes Ethernet, IPv4, TCP/UDP headers to inspect protocol payloads.',
          '',
          '3. ERICSXA CYBERNETIC PORTFOLIO HUD',
          '   • Dual-state professional/shadow operating console in React & Web Audio.',
          '',
          '[HUD Action]: Switched viewport to MISSIONS LOG.'
        ]
      };

    case 'learning':
    case 'progress':
    case 'roadmap':
      if (context.setActiveSection) context.setActiveSection('progress');
      return {
        type: 'text',
        command: clean,
        sectionChange: 'progress',
        output: [
          'OPERATOR LEARNING LOG // RESEARCH IN PROGRESS',
          '-------------------------------------------------------',
          '• CYBER DEFENSE TRACK : Advanced Network Exploitation & Packet Dissection',
          '• LINUX ARCHITECTURE  : Kernel namespaces, cgroups, file permissions',
          '• FULL-STACK WEB      : Scalable microservices, WebSocket channels, API security',
          '• SYSTEM DESIGN       : First-principles systems architecture & telemetry',
          '',
          '[HUD Action]: Switched viewport to LEARNING PROGRESS.'
        ]
      };

    case 'lab':
    case 'security':
    case 'experiments':
      if (context.setActiveSection) context.setActiveSection('lab');
      return {
        type: 'text',
        command: clean,
        sectionChange: 'lab',
        output: [
          'ENTERING SECURITY LAB SIMULATION MATRIX...',
          '• MODULE 01: Network Packet Inspection (Wireshark & Raw Sockets)',
          '• MODULE 02: Reconnaissance & Target Discovery (Nmap Port Audits)',
          '• MODULE 03: Linux File System Hardening & Access Control Auditing',
          '• MODULE 04: Web Application Security (XSS/CSRF Defenses & Auth Guards)',
          '',
          '[HUD Action]: Switched viewport to SECURITY LAB.'
        ]
      };

    case 'contact':
    case 'connect':
    case 'hire':
      if (context.setActiveSection) context.setActiveSection('contact');
      return {
        type: 'text',
        command: clean,
        sectionChange: 'contact',
        output: [
          'SECURE TRANSMISSION CHANNELS ONLINE:',
          '-------------------------------------------------------',
          '• OPERATOR STATUS   : Available for developer roles & security internships',
          '• EMAIL DISPATCH    : sreerag.sarath.dev@gmail.com',
          '• GITHUB REPOSITORY : https://github.com/Sreerag-Sarath',
          '• LINKEDIN PROFILE  : https://linkedin.com/in/sreeragsarath',
          '',
          '[HUD Action]: Switched viewport to CONTACT CONSOLE.'
        ]
      };

    case 'status':
    case 'diagnostics':
      return {
        type: 'text',
        command: clean,
        output: [
          'ERICSXA SYSTEM DIAGNOSTIC REPORT',
          '-------------------------------------------------------',
          '• SHADOW PROTOCOL : ACTIVE [VERSION 4.2.0]',
          '• CORE INTEGRITY  : 100% OPERATIONAL',
          '• RECON ENGINE    : NATURAL LANGUAGE & VOICE SPEECH SYNCHRONIZED',
          '• THEME STATE     : SHADOW / CYBER HUD MODE',
          '• AUDIO ENGINE    : SYNTHESIZED BROWSER WEB-AUDIO',
          '• NETWORK BUS     : ENCRYPTED LOCAL STATE DISPATCH',
          '• SIMULATION MODE : ACTIVE [ALL METRICS LABELED SIMULATED]'
        ]
      };

    // INTERACTIVE CYBER SIMULATION: SCAN
    case 'scan':
    case 'nmap':
      {
        const target = args || '127.0.0.1 (localhost)';
        return {
          type: 'text',
          command: clean,
          output: [
            `INITIATING CYBER RECON SCAN ON TARGET: [${target}]...`,
            'Scanning 1000 common TCP/UDP ports via SYN stealth packets...',
            '-------------------------------------------------------',
            'PORT      STATE    SERVICE         VERSION',
            '22/tcp    OPEN     ssh             OpenSSH 8.9p1 (Ubuntu)',
            '80/tcp    OPEN     http            Nginx 1.24.0 (Proxy Gateway)',
            '443/tcp   OPEN     https           TLSv1.3 AES-GCM-256',
            '3000/tcp  OPEN     node-react      Vite HMR Development Bus',
            '8080/tcp  FILTERED http-proxy      Simulated WAF Guard',
            '-------------------------------------------------------',
            'LATENCY: 12.4ms | HOST: UP | THREAT LEVEL: MINIMAL (0 VULNERABILITIES)',
            '[AUDIT COMPLETE]: Target perimeter is fortified.'
          ]
        };
      }

    // INTERACTIVE CYBER SIMULATION: PING
    case 'ping':
      {
        const host = args || 'gateway.internal';
        return {
          type: 'text',
          command: clean,
          output: [
            `DISPATCHING ICMP ECHO REQUESTS TO [${host}]...`,
            `64 bytes from ${host}: icmp_seq=1 ttl=64 time=14.2 ms`,
            `64 bytes from ${host}: icmp_seq=2 ttl=64 time=13.8 ms`,
            `64 bytes from ${host}: icmp_seq=3 ttl=64 time=15.1 ms`,
            `64 bytes from ${host}: icmp_seq=4 ttl=64 time=13.9 ms`,
            '-------------------------------------------------------',
            `--- ${host} ping statistics ---`,
            '4 packets transmitted, 4 received, 0% packet loss, rtt avg 14.25ms'
          ]
        };
      }

    // INTERACTIVE CYBER SIMULATION: DECRYPT
    case 'decrypt':
    case 'cipher':
      {
        const ciphers = [
          { enc: '53 52 45 45 52 41 47 5f 53 45 43 55 52 45', dec: 'SREERAG_SECURE' },
          { enc: '01010000 01001000 01011001 01010011 01001001 01000011 01010011', dec: 'PHYSICS (FIRST PRINCIPLES)' },
          { enc: 'U2hhZG93X0VyaWNzeGFfQWN0aXZhdGVk', dec: 'Shadow_Ericsxa_Activated' }
        ];
        const pick = ciphers[Math.floor(Math.random() * ciphers.length)];
        return {
          type: 'text',
          command: clean,
          output: [
            '╔═══════════════════════════════════════════════════════════╗',
            '║          CRYPTOGRAPHIC DECRYPTION PROTOCOL ACTIVE         ║',
            '╚═══════════════════════════════════════════════════════════╝',
            `INTERCEPTED CIPHER : [${pick.enc}]`,
            'ALGORITHM DETECTED : Multi-layer Bitshift / Polyalphabetic Stream',
            'CRACKING HASH KEYS : [████████████████████] 100%',
            `PLAINTEXT REVEALED : "${pick.dec}"`,
            '[INTEGRITY AUDIT]  : Cipher verified authentic.'
          ]
        };
      }

    // INTERACTIVE CYBER SIMULATION: MATRIX
    case 'matrix':
      return {
        type: 'text',
        command: clean,
        output: [
          'INITIALIZING HOLOGRAPHIC DIGITAL STREAM...',
          '01001001 01001110 01010100 01000101 01010010 01000011 01000101 01010000 01010100',
          'ﾊ ﾐ ﾋ ｰ ｳ ｼ ﾅ ﾓ ﾆ ｻ ﾜ ﾂ ｵ ﾘ ｱ ﾎ ﾃ ﾏ ｹ ﾒ ｴ ｶ ｷ ﾑ ﾕ ﾗ ｾ ﾈ ｽ ﾀ ﾇ ﾍ',
          'SYSTEM://SREERAG.CORE // QUANTUM TELEMETRY BUFFER FLUSHED',
          '01110011 01100101 01100011 01110101 01110010 01101001 01110100 01111001',
          'Matrix sequence synchronized with ERICSXA HUD reactor.'
        ]
      };

    case 'date':
    case 'time':
      return {
        type: 'text',
        command: clean,
        output: [
          `LOCAL TIME : ${new Date().toLocaleString()}`,
          `UTC TIME   : ${new Date().toUTCString()}`,
          `UNIX EPOCH : ${Math.floor(Date.now() / 1000)}`
        ]
      };

    case 'nav':
    case 'goto':
      {
        const validMap = {
          overview: 'overview',
          home: 'overview',
          profile: 'profile',
          operator: 'profile',
          about: 'profile',
          arsenal: 'arsenal',
          skills: 'arsenal',
          missions: 'missions',
          projects: 'missions',
          lab: 'lab',
          security: 'lab',
          progress: 'progress',
          learning: 'progress',
          contact: 'contact',
          connect: 'contact',
          terminal: 'terminal'
        };
        const target = validMap[args.toLowerCase()];
        if (target) {
          if (context.setActiveSection) context.setActiveSection(target);
          return {
            type: 'text',
            command: clean,
            sectionChange: target,
            output: [`[NAVIGATION SUCCESS]: Transferred HUD focus to ${target.toUpperCase()}.`]
          };
        }
        return {
          type: 'error',
          command: clean,
          output: [`[NAVIGATION ERROR]: Unknown destination "${args}". Valid: overview, profile, arsenal, missions, lab, progress, contact, terminal.`]
        };
      }

    case 'clear':
    case 'cls':
      return {
        type: 'clear',
        command: clean
      };
  }

  // 2. CONVERSATIONAL NATURAL LANGUAGE ENGINE
  // Handles real spoken or typed human questions

  // GREETINGS & CASUAL INTERACTION
  if (/^(hi|hello|hey|greetings|good\s+(morning|afternoon|evening)|yo)\b/i.test(lower)) {
    return {
      type: 'text',
      command: clean,
      output: [
        'Greetings, Operator. ERICSXA Core is running at 100% capacity.',
        'All defensive telemetry, missions, and skill monitors are active.',
        'How may I direct your mission? You can ask about Sreerag, test skills, or type "help".'
      ]
    };
  }

  if (/how\s+are\s+you/i.test(lower)) {
    return {
      type: 'text',
      command: clean,
      output: [
        'Systems running with zero latency. Reactor core fully energized at 3.2 GHz.',
        'Ready to answer your directives or guide you through Sreerag’s engineering dossier.'
      ]
    };
  }

  // ABOUT SREERAG / WHO ARE YOU / IDENTITY
  if (/who\s+is\s+(sreerag|he|sarath)|who\s+are\s+you|tell\s+me\s+about\s+(sreerag|yourself|him)|what\s+is\s+your\s+story|bio|background/i.test(lower)) {
    if (context.setActiveSection) context.setActiveSection('profile');
    return {
      type: 'text',
      command: clean,
      sectionChange: 'profile',
      output: [
        'OPERATOR BIOGRAPHY // SREERAG SARATH:',
        '-------------------------------------------------------',
        'Sreerag Sarath is a BSc Physics student at Calicut University turned',
        'software developer and cybersecurity researcher. He combines the analytical',
        'rigor of physics with modern web development and foundational security.',
        '',
        'Key focus: Full-stack applications (React & Node.js), Linux system administration,',
        'network protocol dissection, and ethical defense principles.',
        '[HUD Action]: Switched viewport to OPERATOR PROFILE.'
      ]
    };
  }

  // PHYSICS & MOTIVATION
  if (/physics|why\s+(physics|study|switch)|first\s+principles|calicut\s+university|degree|education/i.test(lower)) {
    return {
      type: 'text',
      command: clean,
      output: [
        'PHYSICS FOUNDATION & PHILOSOPHY:',
        '-------------------------------------------------------',
        'Physics trains you to solve problems from first principles — understanding',
        'how complex systems function at their most fundamental layer.',
        '',
        'Sreerag applies this directly to computing: understanding not just code,',
        'but memory models, TCP/IP packet transmission, kernel permissions, and hardware constraints.',
        'He is currently pursuing his BSc in Physics from Calicut University.'
      ]
    };
  }

  // SKILLS & TECH STACK
  if (/skill|technolog|stack|language|what\s+can\s+(you|he)\s+build|react|python|node|javascript|linux|kali/i.test(lower)) {
    if (context.setActiveSection) context.setActiveSection('arsenal');
    return {
      type: 'text',
      command: clean,
      sectionChange: 'arsenal',
      output: [
        'TECHNICAL ARSENAL SUMMARY:',
        '-------------------------------------------------------',
        '• PROGRAMMING : Python (Network tooling & scripting), JavaScript (ES6+), Bash',
        '• FRONTEND    : React.js, Responsive UI, Vanilla CSS, State & Component Architecture',
        '• BACKEND     : Node.js, Express, RESTful APIs, MongoDB with GridFS streaming',
        '• SECURITY    : Network Protocols (TCP/IP, DNS, OSI), Wireshark, Nmap, Reconnaissance',
        '• PLATFORMS   : Linux (Practicing), Kali Linux, Git & GitHub',
        '',
        '[HUD Action]: Displaying CYBER ARSENAL matrix.'
      ]
    };
  }

  // PROJECTS & MISSIONS
  if (/project|built|portfolio|cloudbox|work|mission|app|show\s+me\s+(his\s+)?(work|projects)/i.test(lower)) {
    if (context.setActiveSection) context.setActiveSection('missions');
    return {
      type: 'text',
      command: clean,
      sectionChange: 'missions',
      output: [
        'FEATURED MISSIONS DOSSIER:',
        '-------------------------------------------------------',
        '1. CLOUDBOX STORAGE APPLICATION: High-capacity file storage suite using Node.js & GridFS.',
        '2. NETWORK PACKET ANALYZER: Python socket-level protocol sniffer decoding packets in real time.',
        '3. CYBERNETIC ERICSXA PORTFOLIO: Interactive dual-mode developer interface with voice intelligence.',
        '',
        '[HUD Action]: Displaying MISSIONS LOG.'
      ]
    };
  }

  // CYBERSECURITY & ETHICAL HACKING
  if (/cyber|secur|hack|ethical|pentest|recon|wireshark|nmap|vuln/i.test(lower)) {
    if (context.setActiveSection) context.setActiveSection('lab');
    return {
      type: 'text',
      command: clean,
      sectionChange: 'lab',
      output: [
        'CYBERSECURITY SPECIALIZATION:',
        '-------------------------------------------------------',
        'Sreerag focuses on foundational and ethical security research:',
        '• Deep packet analysis & traffic inspection via Wireshark and custom Python sniffers',
        '• Target reconnaissance and port discovery using Nmap techniques',
        '• Linux operating system hardening and permission enforcement',
        '• Secure web architectures & vulnerability remediation',
        '',
        '[HUD Action]: Opened SECURITY LAB module.'
      ]
    };
  }

  // HIRING, CONTACT & OPPORTUNITIES
  if (/hire|contact|email|job|intern|opportunity|collaborat|reach|connect/i.test(lower)) {
    if (context.setActiveSection) context.setActiveSection('contact');
    return {
      type: 'text',
      command: clean,
      sectionChange: 'contact',
      output: [
        'HIRING & COLLABORATION STATUS: [OPEN FOR OPPORTUNITIES]',
        '-------------------------------------------------------',
        'Sreerag is actively seeking developer and cybersecurity internship roles.',
        'Email: sreerag.sarath.dev@gmail.com',
        'LinkedIn: https://linkedin.com/in/sreeragsarath',
        'GitHub: https://github.com/Sreerag-Sarath',
        '',
        '[HUD Action]: Switched to CONTACT CONSOLE.'
      ]
    };
  }

  // TERMINAL
  if (/terminal|command\s+line|shell|cli|console/i.test(lower)) {
    if (context.setActiveSection) context.setActiveSection('terminal');
    return {
      type: 'text',
      command: clean,
      sectionChange: 'terminal',
      output: [
        '[HUD Action]: Transferred directly to CYBER TERMINAL interface.',
        'You can execute raw bash-style commands and security utilities directly.'
      ]
    };
  }

  // EASTER EGGS
  if (/joke/i.test(lower)) {
    return {
      type: 'text',
      command: clean,
      output: [
        'ERICSXA WIT PROTOCOL:',
        'Why do physicists make excellent cybersecurity researchers?',
        'Because they already know the observer effect: looking at a system inevitably alters its state.'
      ]
    };
  }

  if (/iron\s*man|tony\s*stark/i.test(lower)) {
    return {
      type: 'text',
      command: clean,
      output: [
        'ERICSXA TELEMETRY:',
        'A custom cybersecurity AI protocol engineered specifically to safeguard Sreerag’s portfolio and data streams.'
      ]
    };
  }

  if (/pod\s*bay\s*doors/i.test(lower)) {
    return {
      type: 'text',
      command: clean,
      output: [
        'HAL 9000 OVERRIDE:',
        '"I am sorry Dave, I am afraid I can\'t do that."',
        '...Just kidding. All security protocols and HUD doors are open to Operator clearance.'
      ]
    };
  }

  if (/sudo/i.test(lower)) {
    return {
      type: 'text',
      command: clean,
      output: [
        '[SUDO ELEVATION ACTIVE]:',
        'Operator identity authenticated. Full root clearance granted across all 8 HUD sectors.'
      ]
    };
  }

  if (/thank/i.test(lower)) {
    return {
      type: 'text',
      command: clean,
      output: [
        'You are welcome, Operator. Standing by for your next directive.'
      ]
    };
  }

  // FALLBACK INTELLIGENT SUGGESTION
  return {
    type: 'text',
    command: clean,
    output: [
      `ERICSXA PROCESSED: "${clean}"`,
      '-------------------------------------------------------',
      'I have logged your query. Try asking naturally, for example:',
      '• "Who is Sreerag?" or "Why physics to software?"',
      '• "Show me his projects" or "What are his skills?"',
      '• "How do I contact or hire him?"',
      '• Or run simulations: "scan localhost", "ping gateway", "decrypt", "matrix"'
    ]
  };
}
