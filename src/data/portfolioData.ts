import resumeIqImg from '../assets/images/resumeiq_preview_1790919487110.jpg';
import zeroHungerImg from '../assets/images/zerohunger_preview_1790919499172.jpg';
import askWithoutFearImg from '../assets/images/askwithoutfear_preview_1790919512073.jpg';
import algoZenithImg from '../assets/images/algozenith_preview_1790919523090.jpg';
import portraitImg from '../assets/images/jahnavi_portrait_1790919557419.jpg';

export interface Project {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  date: string;
  image: string;
  highlights: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  contribution: string;
  outcome: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: { name: string; context?: string }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationAvailable: boolean;
  skillsLearned: string[];
}

export interface TimelineItem {
  year: string;
  title: string;
  detail: string;
  institution?: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Jahnavi Pathivada",
    initials: "JP.",
    tagline: "Cyber Security Student | Developer | Tech Enthusiast",
    shortBio:
      "Building secure, intelligent and impactful digital experiences through cybersecurity, software development and emerging technologies.",
    education: {
      degree: "B.Tech in Cyber Security",
      institution: "Vignan's Institute of Engineering for Women",
      location: "Visakhapatnam, India",
      duration: "2024 – 2028",
    },
    email: "pathivadajahnavi3000@gmail.com",
    location: "Visakhapatnam, India",
    links: {
      github: "https://github.com/pathivadajahnavi3000",
      linkedin: "https://www.linkedin.com/in/jahnavi-pathivada",
      email: "mailto:pathivadajahnavi3000@gmail.com",
    },
    portrait: portraitImg,
    fallbackPhoto: "/professional.jpeg",
    floatingBadges: [
      "Cybersecurity",
      "Web Development",
      "AI",
      "Problem Solving",
    ],
  },

  about: {
    heading: "About Me",
    narrative:
      "I'm a B.Tech Cyber Security student passionate about cybersecurity, software development, web technologies and emerging technologies. I enjoy building practical projects, solving technical problems and continuously developing skills that can be applied to real-world challenges.",
    subtext:
      "Focused on engineering reliable, privacy-conscious software architectures and deepening my foundational understanding of network defense, web security, and intelligent systems.",
    timeline: [
      {
        year: "2024",
        title: "Started B.Tech in Cyber Security",
        detail: "Enrolled in Cyber Security engineering at Vignan's Institute of Engineering for Women (2024–2028).",
        institution: "Vignan's Institute of Engineering for Women",
      },
      {
        year: "2026",
        title: "Built Multiple Technical Projects",
        detail: "Engineered web platforms including ResumeIQ (AI resume intelligence), Zero Hunger, and Ask Without Fear.",
      },
      {
        year: "2026",
        title: "Cybersecurity & Python Training",
        detail: "Completed formal credentials from Cisco Networking Academy and FutureSkills Prime in Security and Programming.",
      },
      {
        year: "2026",
        title: "Active in Technical Clubs & Challenges",
        detail: "Participating in AlgoZenith daily algorithmic challenges, campus technical clubs, workshops, and student initiatives.",
      },
    ] as TimelineItem[],
  },

  skills: [
    {
      category: "Programming",
      description: "Core algorithmic thinking and software fundamentals",
      skills: [
        { name: "C", context: "Memory management, data structures, low-level logic" },
        { name: "Python", context: "Scripting, automation, algorithms & AI integration" },
        { name: "JavaScript", context: "Dynamic web apps, DOM manipulation, asynchronous logic" },
      ],
    },
    {
      category: "Web Development",
      description: "Frontend architecture and responsive web interfaces",
      skills: [
        { name: "HTML", context: "Semantic, accessible document structure" },
        { name: "CSS", context: "Responsive layouts, animations, modern styling" },
        { name: "JavaScript", context: "Modern ES6+, interactive frontend behaviors" },
        { name: "Web Development", context: "Component design, single-page apps, responsive design" },
        { name: "APIs", context: "RESTful integration, data fetching, JSON communication" },
      ],
    },
    {
      category: "Cybersecurity",
      description: "Defensive concepts, network models, and system integrity",
      skills: [
        { name: "Cybersecurity Fundamentals", context: "Threat models, CIA triad, security hygiene" },
        { name: "Networking Fundamentals", context: "TCP/IP, routing, DNS, protocols & packet flow" },
        { name: "Security Concepts", context: "Access control, encryption principles, authentication" },
      ],
    },
    {
      category: "Design & Productivity",
      description: "Interface visualization and technical presentation",
      skills: [
        { name: "UI/UX Design", context: "Wireframing, user flows, intuitive interface design" },
        { name: "MS PowerPoint", context: "Technical presentation decks, visual communication" },
        { name: "MS Excel", context: "Data tracking, formula analysis, documentation" },
      ],
    },
    {
      category: "Development Approach",
      description: "Engineering methodologies and critical problem execution",
      skills: [
        { name: "Problem Solving", context: "Algorithmic breakdown and edge-case handling" },
        { name: "Analytical Thinking", context: "System diagnosis and root-cause decomposition" },
        { name: "Vibe Coding", context: "Iterative rapid prototyping with AI tools and modern workflows" },
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      id: "resumeiq",
      number: "01",
      name: "ResumeIQ",
      category: "AI / Web Development",
      tagline: "AI-Powered Resume Analysis & Job Matching Engine",
      description:
        "ResumeIQ is an AI-powered resume analysis platform that evaluates resumes, identifies strengths and skill gaps, recommends suitable job roles, and provides personalized LinkedIn job recommendations.",
      date: "2026",
      image: resumeIqImg,
      liveUrl: "https://resumeiq-virid.vercel.app/",
      githubUrl: "https://github.com/pathivadajahnavi3000/resumeiq",
      highlights: [
        "AI-powered resume analysis",
        "Skill-gap identification",
        "Job-role recommendations",
        "LinkedIn job recommendations",
      ],
      technologies: ["AI Integration", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
      problem:
        "Job seekers often submit generic resumes without knowing how well they align with industry expectations or Applicant Tracking Systems (ATS), resulting in missed interview opportunities and unclear career trajectories.",
      solution:
        "Built an intelligent web application that systematically breaks down resume content, benchmarks it against industry criteria, highlights missing competencies, and maps the user directly to active LinkedIn opportunities tailored to their profile.",
      keyFeatures: [
        "Automated resume parsing and semantic content evaluation",
        "Visual skill-gap breakdown highlighting high-priority missing technologies",
        "Dynamic job role mapping based on profile strength",
        "Direct personalized LinkedIn job recommendations for verified roles",
        "Clean, responsive dark-mode dashboard tailored for candidates",
      ],
      contribution:
        "Architected the full frontend dashboard, engineered client-side evaluation pipelines, designed the intuitive user experience, and integrated LinkedIn query generators.",
      outcome:
        "Deployed a high-performance live web platform (https://resumeiq-virid.vercel.app/) that delivers real-time analytical feedback to job candidates.",
    },
    {
      id: "zerohunger",
      number: "02",
      name: "Zero Hunger",
      category: "Social Impact / Web Development",
      tagline: "Connecting Restaurants, NGOs & Donors to Mitigate Food Waste",
      description:
        "Zero Hunger is a web platform designed to reduce food wastage and help people facing hunger by connecting restaurants, NGOs, donors and event organizers.",
      date: "2026",
      image: zeroHungerImg,
      liveUrl: "https://github.com/pathivadajahnavi3000/zero-hunger",
      githubUrl: "https://github.com/pathivadajahnavi3000/zero-hunger",
      highlights: [
        "Food donation coordination",
        "Restaurant and NGO connection",
        "Food type and quantity tracking",
        "Pickup location",
        "Expiry-time information",
        "Community participation",
      ],
      technologies: ["Web Development", "HTML5", "CSS3", "JavaScript", "APIs"],
      problem:
        "Edible surplus food from weddings, banquets, and restaurants is discarded daily while nearby charitable shelters and communities face critical shortages due to a lack of real-time coordination.",
      solution:
        "Engineered a community donation coordination platform where food providers can quickly log surplus meals with critical expiry countdowns, and verified local NGOs can claim and coordinate rapid pickups.",
      keyFeatures: [
        "Real-time food listing management with quantity and meal-type classification",
        "Dynamic expiry-time tracking ensuring food safety standards are respected",
        "Location mapping for seamless local volunteer dispatch and pickup routing",
        "Role-oriented portals for restaurants, donors, and verified NGO partners",
        "Community metrics highlighting collective meals preserved",
      ],
      contribution:
        "Designed the responsive UI, implemented dynamic donation forms with validation, created the expiry-time alert mechanism, and structured data handling for donor-NGO interactions.",
      outcome:
        "Demonstrated a practical, scalable web solution addressing United Nations Sustainable Development Goal 2 (Zero Hunger) through localized community technology.",
    },
    {
      id: "askwithoutfear",
      number: "03",
      name: "Ask Without Fear",
      category: "Education / Web Development",
      tagline: "Anonymous Academic Doubt Submission & Teacher Support",
      description:
        "Ask Without Fear is a student-focused web platform designed to help students overcome the fear of asking questions in class. It allows students to raise academic doubts anonymously and access relevant information and teacher support.",
      date: "2026",
      image: askWithoutFearImg,
      liveUrl: "https://github.com/pathivadajahnavi3000/ask-without-fear",
      githubUrl: "https://github.com/pathivadajahnavi3000/ask-without-fear",
      highlights: [
        "Anonymous doubt submission",
        "Student support",
        "Teacher assistance",
        "Academic information",
      ],
      technologies: ["JavaScript", "HTML/CSS", "Web Development", "UI/UX Design"],
      problem:
        "Many students experience classroom anxiety or peer pressure that discourages them from asking questions during lectures, leading to unresolved conceptual gaps and diminished academic confidence.",
      solution:
        "Created a safe, privacy-preserving question portal where students submit academic doubts without exposing their personal identities, enabling faculty to address real learning bottlenecks.",
      keyFeatures: [
        "Guaranteed anonymity for students when submitting lecture queries",
        "Subject-wise categorization (Core Engineering, Mathematics, Programming)",
        "Faculty response portal with verified instructor verification badge",
        "Searchable doubt repository so peers benefit from previously answered questions",
        "Minimalist distraction-free interface built for both mobile and desktop screens",
      ],
      contribution:
        "Conceived the student privacy architecture, developed user interface mockups, implemented the anonymous posting logic, and built the educator review interface.",
      outcome:
        "Created an empathy-driven educational tool tested with peer groups to foster a collaborative and psychologically safe classroom environment.",
    },
    {
      id: "algozenith",
      number: "04",
      name: "AlgoZenith Daily Tech Challenges",
      category: "Programming / Problem Solving",
      tagline: "Rigorous Algorithmic Problem Solving & Data Structures",
      description:
        "AlgoZenith Daily Tech Challenges is a technical learning initiative focused on improving programming, problem-solving and analytical skills through regular coding and technology-based challenges.",
      date: "2026",
      image: algoZenithImg,
      liveUrl: "https://github.com/pathivadajahnavi3000/algozenith-challenges",
      githubUrl: "https://github.com/pathivadajahnavi3000/algozenith-challenges",
      highlights: [
        "Coding practice",
        "Problem solving",
        "Analytical thinking",
        "Consistent technical learning",
      ],
      technologies: ["C", "Python", "Data Structures", "Algorithms", "Time Complexity"],
      problem:
        "Building reliable software and understanding defensive security fundamentals requires deep proficiency in low-level memory behavior, algorithmic efficiency, and resilient logic design.",
      solution:
        "Undertook continuous daily coding sprints covering arrays, strings, recursion, sorting, search algorithms, and computational complexity on the AlgoZenith track.",
      keyFeatures: [
        "Structured daily programming problems solved in C and Python",
        "Rigorous time and space complexity evaluations (Big-O analysis)",
        "Edge-case identification and boundary condition testing",
        "Consistent technical habit tracking and documentation",
      ],
      contribution:
        "Authored optimized solutions, maintained detailed code commentaries for edge cases, and completed systematic algorithmic problem sets.",
      outcome:
        "Honed acute analytical problem-solving skills, establishing a disciplined foundation essential for software engineering and cybersecurity audits.",
    },
  ] as Project[],

  beyondTheCode: {
    heading: "Beyond the Code",
    subheading:
      "Leadership, community engagement, and collaborative initiatives that enrich my technical journey.",
    activities: [
      {
        title: "Technical & Student Clubs",
        category: "Community & Leadership",
        description:
          "Active involvement in campus technical clubs, contributing to peer learning, hackathons, and collaborative technical initiatives.",
        icon: "Users",
      },
      {
        title: "Event Coordination",
        category: "Organization & Operations",
        description:
          "Organized and coordinated college technical symposiums, coding contests, and guest lectures with seamless operational delivery.",
        icon: "CalendarCheck",
      },
      {
        title: "Content Creation & Branding",
        category: "Creative Strategy",
        description:
          "Created compelling visual designs, presentation decks, and technical promotional collateral for student events and workshops.",
        icon: "Palette",
      },
      {
        title: "Workshops & Cybersecurity Sessions",
        category: "Knowledge Sharing",
        description:
          "Participated in hands-on technical workshops and dedicated cybersecurity awareness sessions covering system defense and safe computing.",
        icon: "ShieldCheck",
      },
      {
        title: "Teamwork & Communication",
        category: "Core Competency",
        description:
          "Demonstrated clear communication and collaborative problem solving across multidisciplinary student teams and project groups.",
        icon: "MessagesSquare",
      },
      {
        title: "Leadership & Adaptability",
        category: "Professional Growth",
        description:
          "Proactively stepping into leadership roles to guide project timelines, mentor peers, and rapidly adapt to emerging tools.",
        icon: "Compass",
      },
    ],
  },

  certifications: [
    {
      id: "cisco-cybersecurity",
      title: "Introduction to Cyber Security",
      issuer: "Cisco Networking Academy",
      date: "July 2026",
      credentialId: "CISCO-CCNA-SEC-2026",
      verificationAvailable: true,
      skillsLearned: [
        "Cybersecurity Fundamentals",
        "Threat Landscapes & Attacks",
        "Network Defense Principles",
        "Confidentiality & Data Privacy",
      ],
    },
    {
      id: "cisco-python",
      title: "Python",
      issuer: "Cisco Networking Academy",
      date: "June 2026",
      credentialId: "CISCO-PY-DEV-2026",
      verificationAvailable: true,
      skillsLearned: [
        "Python Programming Fundamentals",
        "Data Structures & Object Manipulation",
        "Scripting & Modular Code",
        "Error Handling & Algorithms",
      ],
    },
    {
      id: "futureskills-digital-edge",
      title: "Digital Edge 101",
      issuer: "FutureSkills Prime",
      date: "March 2026",
      credentialId: "FSP-DE101-2026",
      verificationAvailable: true,
      skillsLearned: [
        "Emerging Technologies Overview",
        "Digital Transformation Trends",
        "Industry 4.0 Foundations",
        "Modern Workplace Computing",
      ],
    },
  ] as Certification[],

  currentlyExploring: [
    { name: "Cybersecurity", note: "Network vulnerability analysis & security principles" },
    { name: "Web Development", note: "Modern frontend frameworks & responsive design" },
    { name: "APIs", note: "RESTful architecture, endpoints & data serialization" },
    { name: "AI-Powered Applications", note: "Integrating intelligent LLM features into real products" },
    { name: "Emerging Technologies", note: "Staying ahead of technological paradigms" },
    { name: "Problem Solving", note: "Daily algorithmic rigor & computational logic" },
    { name: "Software Development", note: "Clean code structure & resilient engineering" },
  ],

  whatIBring: [
    {
      number: "01",
      title: "Technical Curiosity",
      description:
        "Always interested in learning new technologies, dissecting complex systems, and understanding how modern software and protocols work under the hood.",
    },
    {
      number: "02",
      title: "Problem Solving",
      description:
        "Enjoy tackling programming and technical challenges with patience, decomposing hurdles into manageable algorithmic steps.",
    },
    {
      number: "03",
      title: "Building Mindset",
      description:
        "Prefer learning by creating practical, tangible projects that solve genuine human problems—from resume intelligence to food waste mitigation.",
    },
    {
      number: "04",
      title: "Collaboration",
      description:
        "Proven experience working harmoniously through technical clubs, student activities, and multidisciplinary team-based initiatives.",
    },
    {
      number: "05",
      title: "Adaptability",
      description:
        "Quick and comfortable learning new tools, development environments, frameworks, and modern developer workflows.",
    },
    {
      number: "06",
      title: "Cybersecurity Focus",
      description:
        "A strong foundational commitment to cybersecurity, data privacy, and secure software development practices.",
    },
  ],
};
