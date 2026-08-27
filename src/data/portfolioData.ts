export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  detailedDescription: string;
  featured: boolean;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  highlights: string[];
  metrics?: { label: string; value: string }[];
  accentColor?: string;
  role: string;
  image?: string;
}

export interface Hackathon {
  id: string;
  name: string;
  projectName?: string;
  edition: string;
  type: string;
  focus: string;
  description: string;
  keyLearnings: string[];
  outcomes: string;
  technologies: string[];
  role: string;
  status: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: string; iconName?: string }[];
}

export interface Strength {
  id: string;
  number: string;
  title: string;
  description: string;
  statement: string;
  subtext: string;
}

export interface JourneyMilestone {
  step: string;
  title: string;
  stage: string;
  description: string;
  keyTakeaway: string;
  tags: string[];
}

export interface GithubStat {
  username: string;
  totalRepos: number;
  totalCommits: number;
  pullRequests: number;
  starsEarned: number;
  longestStreak?: number;
  currentStreak?: number;
  topLanguages: { name: string; percentage: number; color: string }[];
  pinnedRepos: {
    name: string;
    description: string;
    language: string;
    stars: number;
    forks: number;
    url: string;
  }[];
}

export const PERSONAL_INFO = {
  name: "Aarush Singh",
  title: "Developer · AI & Data Science Student · Builder",
  institution: "CGC University",
  department: "Artificial Intelligence & Data Science",
  degree: "B.Tech in Artificial Intelligence & Data Science",
  location: "Mohali, Punjab, India",
  timezone: "Asia/Kolkata (IST)",
  status: "Available for Collaboration & Internships",
  bio: "I'm a B.Tech AI & Data Science student at CGC University who enjoys building projects, exploring technology, participating in hackathons, and turning ideas into real-world solutions.",
  socials: {
    github: "https://github.com/aarush0008x",
    githubUsername: "aarush0008x",
    linkedin: "https://www.linkedin.com/in/aarush-singh-4b3a20358/",
    linkedinHandle: "aarush-singh-4b3a20358",
    email: "aarush0008x@gmail.com",
    portfolioUrl: "https://nimocode.vercel.app/"
  },
  meta: {
    yearsActive: "2023 — Present",
    focusAreas: ["Artificial Intelligence & ML", "Edge Computing & Cloudflare", "Full-Stack Web Engineering", "Digital Forensics & Security"],
    hackathonCount: "2+ Major National Events",
    projectsCompleted: "8+ Active GitHub Repositories"
  }
};

export const PROJECTS_DATA: Project[] = [
  {
    id: "nimocode",
    title: "NimoCode AI",
    category: "AI & Competitive Programming",
    tagline: "AI-Powered Competitive Programming & FAANG Technical Interview Platform",
    description: "An AI-powered competitive programming ecosystem featuring 2,000+ LeetCode problems, 1v1 duels, live contests, and automated complexity evaluation.",
    detailedDescription: "Built and contributed during the CypherVerse Hackathon and expanded into a full-scale AI platform. Provides intelligent complexity analysis, live coding duel matchmaking, real-time code execution, and algorithmic performance benchmarks for competitive programmers.",
    featured: true,
    image: "/images/projects/nimocode.png",
    technologies: ["TypeScript", "React", "Next.js", "Cloudflare Workers", "Vite", "Turborepo", "Tailwind CSS"],
    githubUrl: "https://github.com/aarush0008x/nimoCode",
    liveUrl: "https://nimocode.vercel.app/",
    role: "Lead Full-Stack & Edge Infrastructure Engineer",
    highlights: [
      "AI-powered automated time and space complexity evaluation engine",
      "2,000+ curated algorithmic problems with real-time duel matchmaking",
      "Sub-2-second edge routing and instant live contest execution",
      "Built and deployed during CypherVerse Hackathon with modern React + TypeScript stack"
    ],
    metrics: [
      { label: "Problems Library", value: "2,000+" },
      { label: "Live Platform", value: "nimocode.vercel.app" },
      { label: "Architecture", value: "Turborepo Monorepo" }
    ]
  },
  {
    id: "rockinroll",
    title: "RockinRoll",
    category: "Full-Stack Web & E-Commerce",
    tagline: "Gourmet Food Ordering & Delivery Platform with Three.js 3D Customizer",
    description: "A production-grade, full-stack food ordering and delivery web platform built with Next.js 16 (App Router), TypeScript, Tailwind CSS, Prisma ORM, Cashfree Payments, and Brevo Transactional Emails.",
    detailedDescription: "Architected for high-concurrency food delivery with Role-Based Access Control (Customer, Kitchen KDS Staff, Rider Dispatch, and Admin Analytics). Features a procedural Three.js 3D interactive roll customizer, Cashfree payment gateway + COD, 6-stage live fulfillment pipeline, and automated Brevo OTP verification & tracking emails. Built in collaboration with Renuka (@Renuka-wq).",
    featured: false,
    image: "/images/projects/rockinroll.svg",
    technologies: ["Next.js 16", "TypeScript", "Three.js", "Prisma ORM", "Cashfree Payments", "Brevo SMTP", "Tailwind CSS", "PWA"],
    githubUrl: "https://github.com/aarush0008x/rockinroll",
    liveUrl: "https://rockinroll.in",
    role: "Lead Full-Stack Architect (Collab with Renuka)",
    highlights: [
      "Procedural Three.js 3D gourmet roll with interactive rotation and custom lighting",
      "Role-Based RBAC: Customer, Kitchen KDS Staff, Delivery Rider fleet, and Admin Analytics",
      "6-stage live order fulfillment pipeline (Confirmed ➔ Preparing ➔ Ready ➔ Delivery ➔ Delivered)",
      "Cashfree Payment Gateway + Cash on Delivery (COD) with webhook verification",
      "Brevo transactional email dispatch for 6-digit OTP verification & live status updates"
    ],
    metrics: [
      { label: "Production Domain", value: "rockinroll.in" },
      { label: "Architecture", value: "Next.js 16 + Prisma" },
      { label: "Collab", value: "With Renuka (@Renuka-wq)" }
    ]
  },
  {
    id: "evidenceledger",
    title: "EvidenceLedger & Forensic Platform",
    category: "Digital Forensics & Security",
    tagline: "Cryptographic tamper-evident evidence ledger & sanitization backend",
    description: "Enterprise digital forensics backend enforcing strict NIST SP 800-88 sanitization policies and cryptographic SHA-256 hash-chained audit logging.",
    detailedDescription: "Architected for forensic investigation laboratories. Integrates raw disk image ingestion, automated file signature carving algorithms (JPEG, PNG, PDF, ZIP), policy evaluation gates blocking unauthorized evidence destruction, and court-admissible PDF/HTML verification certificate generation.",
    featured: false,
    image: "/images/projects/evidenceledger.svg",
    technologies: ["Python", "FastAPI", "SQLAlchemy", "MySQL", "Pytest", "Docker"],
    githubUrl: "https://github.com/aarush0008x/EvidenceLedger",
    liveUrl: "https://github.com/aarush0008x/EvidenceLedger",
    role: "Backend Architect & Security Engineer",
    highlights: [
      "Cryptographic SHA-256 ledger chaining with simulated tampering detection",
      "Signature-based binary file carving for RAW disk image recovery",
      "Comprehensive 25-suite automated Pytest coverage for policy gates",
      "NIST SP 800-88 compliant sanitization certificates"
    ],
    metrics: [
      { label: "Test Suite", value: "25/25 Passed" },
      { label: "Hashing Standard", value: "SHA-256 Chain" }
    ]
  },
  {
    id: "bodhai",
    title: "BodhAI",
    category: "AI & Edge Systems",
    tagline: "Cross-platform AI assistant & terminal CLI with real-time web synthesis",
    description: "An advanced multi-surface AI companion featuring terminal CLI, Cloudflare Workers AI edge routing, live web search synthesis, and instant worldwide public web share links.",
    detailedDescription: "BodhAI is built to deliver fast, deterministic AI interactions across Windows, macOS, Android (Termux/PWA), and iOS. It routes requests intelligently between Cloudflare edge models (Llama 3.1 8B) and local Ollama instances, features real-time search synthesis, automated session export to Excel spreadsheets, and single-binary zero-dependency distribution.",
    featured: false,
    image: "/images/projects/bodhai.svg",
    technologies: ["Python", "TypeScript", "Cloudflare Workers", "FastAPI", "SQLite", "PWA"],
    githubUrl: "https://github.com/aarush0008x/BodhAI",
    liveUrl: "https://api.bodhai.aarushdevworld.workers.dev",
    role: "Creator & Lead AI Engineer",
    highlights: [
      "Sub-150ms edge inference response via Cloudflare Workers AI pipeline",
      "Dynamic engine selector with automatic local Ollama fallback",
      "Live web synthesis and instant worldwide share links (/share)",
      "Single-binary standalone executable packaging for Windows (47MB)"
    ],
    metrics: [
      { label: "Active Deployments", value: "Edge + CLI" },
      { label: "Edge Latency", value: "<150ms" },
      { label: "OS Support", value: "Win/Mac/Linux/iOS/Android" }
    ]
  },
  {
    id: "smartdrobe",
    title: "SmartDrobe",
    category: "AI & Computer Vision",
    tagline: "Intelligent wardrobe cataloging & automated outfit recommendation engine",
    description: "An AI-powered fashion assistant that catalogs apparel items via computer vision, classifies color aesthetics, and generates weather-aware outfit combinations.",
    detailedDescription: "Built with a responsive React frontend and intelligent recommendation heuristics. It categorizes apparel by fabric, season, and formal/casual context, reducing decision fatigue with personalized suggestions.",
    featured: false,
    image: "/images/projects/smartdrobe.svg",
    technologies: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Python"],
    githubUrl: "https://github.com/aarush0008x/smartdrobe",
    liveUrl: "https://smartdrobe-rho.vercel.app/",
    role: "Frontend Engineer & AI Designer",
    highlights: [
      "Interactive visual closet cataloging with palette harmonization",
      "Context-aware recommendations factoring weather and occasion",
      "Responsive fluid user interface with smooth animated filters"
    ],
    metrics: [
      { label: "Stack", value: "React + Next.js" },
      { label: "Live Demo", value: "smartdrobe-rho.vercel.app" }
    ]
  }
];

export const HACKATHONS_DATA: Hackathon[] = [
  {
    id: "cypherverse",
    name: "CypherVerse Hackathon",
    projectName: "nimoCode",
    edition: "24-Hour Competitive Sprint",
    type: "24-Hour Hackathon",
    focus: "CypherVerse — nimoCode",
    description: "Built and contributed to nimoCode during the 24-hour CypherVerse Hackathon. The experience gave me practical exposure to collaborative development, rapid problem-solving, and building a working solution under time constraints.",
    keyLearnings: [
      "Working in a team and collaborating on a project",
      "Building and developing a real-world web application",
      "Managing tasks and development within a limited 24-hour timeframe",
      "Solving problems and turning ideas into a working product",
      "Using modern web development technologies (React, TypeScript, Vite)"
    ],
    outcomes: "Successfully built and shipped nimoCode within the 24-hour sprint, transforming conceptual ideas into an operational web application.",
    technologies: ["React", "TypeScript", "Vite"],
    role: "Frontend & Web Developer",
    status: "Project Delivered · Hackathon Submission",
    githubUrl: "https://github.com/aarush0008x/nimoCode",
    liveUrl: "https://nimo-code.vercel.app/"
  },
  {
    id: "hacknwin-3",
    name: "HackNWin 3.0",
    projectName: "Arogya AI",
    edition: "24-Hour National Hackathon",
    type: "24-Hour Continuous Sprint",
    focus: "HackNWin 3.0 — Arogya AI",
    description: "Built Arogya AI during the 24-hour HackNWin 3.0 Hackathon, where I worked on transforming an idea into a functional AI-focused web application. The hackathon gave me valuable experience in rapid development, problem-solving, and building under time constraints.",
    keyLearnings: [
      "Building a real-world project within a limited 24-hour timeframe",
      "Working on an AI-focused solution",
      "Turning an idea into a functional web application",
      "Problem-solving and rapid development",
      "Collaborating and managing tasks during a hackathon",
      "Presenting and improving a project based on requirements and feedback"
    ],
    outcomes: "Successfully engineered and deployed Arogya AI live on Vercel, demonstrating an operational AI-assisted application within the 24-hour sprint.",
    technologies: ["React", "Next.js", "TypeScript", "AI Integration", "Tailwind CSS"],
    role: "Full-Stack & AI Prototyper",
    status: "Completed · Live Deployment",
    liveUrl: "https://arogya-bice.vercel.app/"
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "Programming Languages",
    description: "Core languages for logic building, algorithms, and full-stack software development.",
    skills: [
      { name: "Python", level: "Scripting, AI Pipelines, Data Science" },
      { name: "C++", level: "Data Structures, High Performance" },
      { name: "C", level: "System Foundations & Memory Logic" },
      { name: "Java", level: "Object-Oriented Design, DSA" },
      { name: "HTML & CSS", level: "In-Depth Semantic Markup & Modern Styling" },
      { name: "JavaScript & TypeScript", level: "Strict Typing, ESNext, Full-Stack" },
      { name: "SQL", level: "Relational Queries, Schema Design" }
    ]
  },
  {
    title: "Design & Media",
    description: "Visual communication, creative media, and prompt engineering.",
    skills: [
      { name: "UI/UX Design", level: "Interface Hierarchy & Wireframing" },
      { name: "Poster Making", level: "Visual Composition & Typography" },
      { name: "Graphic Design", level: "Branding, Assets & Layouts" },
      { name: "AI Prompt Engineering", level: "LLM Optimization & Context Tuning" },
      { name: "Reels Creation", level: "Engaging Visual Media & Storytelling" }
    ]
  },
  {
    title: "Tools & Ecosystem",
    description: "Modern development environments, AI engines, and deployment platforms.",
    skills: [
      { name: "VS Code", level: "Primary Development IDE" },
      { name: "Git & GitHub", level: "Branching, Collaboration, PRs" },
      { name: "Canva", level: "Design, Visuals & Presentation Decks" },
      { name: "Ollama", level: "Local LLM Inference & Experimentation" },
      { name: "Antigravity", level: "Advanced Agentic Coding & AI Workflows" },
      { name: "Vercel", level: "Edge Hosting & CI/CD Deployment" },
      { name: "Cloudflare Workers", level: "Serverless Edge Computing & AI" }
    ]
  },
  {
    title: "Core Concepts & Architecture",
    description: "Fundamental engineering principles that drive robust applications.",
    skills: [
      { name: "Logic Building", level: "Algorithmic Reasoning & Decomposition" },
      { name: "Data Structures (DSA)", level: "Arrays, Trees, Graphs, Complexity" },
      { name: "In-Depth HTML/CSS & React", level: "Component Lifecycle, State & Performance" },
      { name: "Java OOP", level: "Inheritance, Polymorphism, Design Patterns" }
    ]
  }
];

export const CERTIFICATES_DATA = [
  { title: "Basics in Python Programming", issuer: "Technical Certification", year: "2025" },
  { title: "Introduction to Generative AI", issuer: "AI & ML Certification", year: "2025" },
  { title: "Essentials English", issuer: "Professional Communication", year: "2025" },
  { title: "AI Prompt Engineering", issuer: "Applied Intelligence & LLMs", year: "2025" }
];

export const HOBBIES_DATA = [
  { name: "Reels Creation", desc: "Crafting engaging short-form tech and creative video content" },
  { name: "Watching Movies & Series", desc: "Exploring narrative storytelling, cinematography, and sci-fi" },
  { name: "Public Speaking", desc: "Presenting ideas, pitch decks, and technical architectures" }
];

export const STRENGTHS_DATA: Strength[] = [
  {
    id: "communication",
    number: "01",
    title: "Communication",
    statement: "I communicate ideas clearly and enjoy collaborating with different people.",
    description: "Bridging the gap between complex engineering concepts and straightforward human understanding. Whether presenting to hackathon juries or documenting APIs for teammates, clarity is my priority.",
    subtext: "Clear articulation · Transparent updates · Active listening"
  },
  {
    id: "collaboration",
    number: "02",
    title: "Collaboration",
    statement: "I enjoy working in teams, sharing ideas, and learning from others.",
    description: "Great software is rarely built in isolation. I thrive in multidisciplinary environments where diverse perspectives challenge assumptions and elevate the final product.",
    subtext: "Team synchronization · Peer code review · Shared ownership"
  },
  {
    id: "problem-solving",
    number: "03",
    title: "Problem Solving",
    statement: "I like exploring challenges and finding practical solutions.",
    description: "Approaching ambiguity with structured problem decomposition. I focus on understanding root causes rather than patching symptoms, balancing rapid delivery with long-term maintainability.",
    subtext: "First-principles thinking · Analytical debugging · Pragmatic design"
  },
  {
    id: "continuous-learning",
    number: "04",
    title: "Continuous Learning",
    statement: "I am constantly learning new technologies and improving my skills through projects and experiences.",
    description: "In the fast-moving landscape of AI and web engineering, curiosity is the greatest asset. I continuously test emerging frameworks, read documentation, and build experimental projects.",
    subtext: "Adaptive mindset · Hands-on experimentation · Relentless curiosity"
  }
];

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    step: "01",
    title: "Learning Programming",
    stage: "Foundation Phase",
    description: "Discovered the craft of coding through Java and Python. Focused deeply on algorithmic problem solving, core computer science concepts, object-oriented principles, and data structures.",
    keyTakeaway: "Mastering foundational data structures and writing code with computational discipline.",
    tags: ["Java", "Python", "Algorithms", "Data Structures"]
  },
  {
    step: "02",
    title: "Building Projects",
    stage: "Application Phase",
    description: "Transitioned from textbook theory into building real applications. Built BodhAI, EvidenceLedger, and nimoCode, mastering React, Next.js, FastAPI, and Cloudflare Workers.",
    keyTakeaway: "Understanding user requirements and architecting complete end-to-end full-stack software.",
    tags: ["React", "Next.js", "TypeScript", "FastAPI", "Cloudflare"]
  },
  {
    step: "03",
    title: "Participating in Hackathons",
    stage: "High-Tempo Execution",
    description: "Immersed in national hackathons including HackNWin 3.0 and Cypherverse. Experienced high-pressure collaboration, rapid prototyping, and delivering polished presentations under tight deadlines.",
    keyTakeaway: "Shipping functional MVPs under time constraints while keeping architecture stable.",
    tags: ["HackNWin 3.0", "Cypherverse", "Team Sprints", "Rapid Prototyping"]
  },
  {
    step: "04",
    title: "Collaborating with Developers",
    stage: "Professional Growth",
    description: "Expanded teamwork through shared GitHub repositories, peer code reviews, and cross-functional project teams. Focused on clear technical communication and collaborative problem solving.",
    keyTakeaway: "Writing maintainable, well-documented code that teammates can rely on.",
    tags: ["Git Workflows", "Peer Reviews", "Agile Mindset", "Communication"]
  },
  {
    step: "05",
    title: "Exploring AI & Data Science",
    stage: "Specialization @ CGC University",
    description: "Deepening knowledge in Artificial Intelligence and Data Science at CGC University. Combining full-stack engineering with machine learning models and edge computing to build intelligent, practical software.",
    keyTakeaway: "Deploying production-ready AI models and edge pipelines with clean, intuitive user interfaces.",
    tags: ["AI & DS", "Machine Learning", "Cloudflare Workers AI", "Intelligent Systems"]
  }
];

export const GITHUB_DATA: GithubStat = {
  username: "aarush0008x",
  totalRepos: 8,
  totalCommits: 320,
  pullRequests: 18,
  starsEarned: 6,
  topLanguages: [
    { name: "TypeScript", percentage: 55, color: "#9E3A4C" },
    { name: "Python", percentage: 35, color: "#802938" },
    { name: "JavaScript", percentage: 10, color: "#B85366" }
  ],
  pinnedRepos: [
    {
      name: "BodhAI",
      description: "AI assistant & terminal CLI with live web search synthesis, Cloudflare Workers AI edge routing, and public web shares.",
      language: "TypeScript / Python",
      stars: 3,
      forks: 1,
      url: "https://github.com/aarush0008x/BodhAI"
    },
    {
      name: "EvidenceLedger",
      description: "Digital forensics evidence manager & sanitization backend with cryptographic SHA-256 audit chaining and disk carving.",
      language: "Python",
      stars: 2,
      forks: 0,
      url: "https://github.com/aarush0008x/EvidenceLedger"
    },
    {
      name: "nimoCode",
      description: "Public subdomain management platform & DNS edge routing built on Cloudflare Workers and Next.js.",
      language: "TypeScript",
      stars: 1,
      forks: 1,
      url: "https://github.com/aarush0008x/nimoCode"
    },
    {
      name: "smartdrobe",
      description: "Intelligent wardrobe management and outfit recommendation web application utilizing computer vision and style classification.",
      language: "TypeScript",
      stars: 1,
      forks: 0,
      url: "https://github.com/aarush0008x/smartdrobe"
    }
  ]
};

export const RESUME_DATA = {
  name: "Aarush",
  fullName: "Aarush Singh",
  title: "B.Tech Student — Artificial Intelligence & Data Science",
  institution: "CGC University",
  email: "aarush0008x@gmail.com",
  github: "https://github.com/aarush0008x",
  githubHandle: "aarush0008x",
  linkedin: "https://www.linkedin.com/in/aarush-singh-4b3a20358/",
  linkedinHandle: "aarush-singh-4b3a20358",
  location: "Mohali, Punjab, India",
  summary: "Motivated B.Tech AI & Data Science student at CGC University with hands-on experience building full-stack applications, edge AI integrations (Cloudflare Workers AI), digital forensics systems, and CLI tools. Proven track record of high-tempo execution in national hackathons (HackNWin 3.0, Cypherverse) and strong technical communication.",
  education: [
    {
      degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence & Data Science",
      institution: "CGC University (Chandigarh Group of Colleges)",
      period: "2023 — 2027 (Expected)",
      location: "Mohali, Punjab",
      score: "Active Honors Candidate"
    }
  ],
  experience: [
    {
      role: "Hackathon Developer & AI Prototyper",
      event: "HackNWin 3.0 — Arogya AI (arogya-bice.vercel.app)",
      period: "2024",
      highlights: [
        "Built Arogya AI, a functional AI-focused web application under 36-hour sprint constraints.",
        "Gained hands-on experience in rapid prototyping, AI solution engineering, and live deployment on Vercel."
      ]
    },
    {
      role: "AI Architecture & Solution Engineering",
      event: "Cypherverse (Innovation Ideathon)",
      period: "2024",
      highlights: [
        "Engineered decentralized data integrity verification workflows and pitched to senior technical panels.",
        "Coordinated cross-functional team across algorithm design, API contracts, and slide presentations."
      ]
    }
  ],
  keyProjects: [
    {
      name: "BodhAI",
      tech: "Python, TypeScript, Cloudflare Workers, FastAPI, SQLite, PWA",
      desc: "Cross-platform AI assistant & terminal CLI with real-time web search synthesis, Cloudflare Workers AI edge routing, and public web share links."
    },
    {
      name: "EvidenceLedger & Forensic Sanitization Platform",
      tech: "Python, FastAPI, SQLAlchemy, MySQL, Docker, Pytest",
      desc: "Digital forensics evidence manager and NIST SP 800-88 sanitization engine featuring cryptographic SHA-256 tamper-evident hash chaining and file carving."
    },
    {
      name: "nimoCode Domains Platform",
      tech: "TypeScript, Next.js, Cloudflare Workers, Turborepo",
      desc: "High-performance public subdomain management and DNS edge routing infrastructure."
    }
  ],
  technicalSkills: {
    languages: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
    web: ["React", "Next.js", "Node.js", "FastAPI", "Tailwind CSS", "HTML5", "CSS3"],
    ai_data: ["Artificial Intelligence", "Machine Learning", "Data Science", "Cloudflare Workers AI", "PyTorch"],
    tools_devops: ["Git", "GitHub", "Cloudflare", "Vercel", "MySQL", "Docker", "Linux"]
  }
};
