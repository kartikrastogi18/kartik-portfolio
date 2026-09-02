export const profile = {
  name: 'Kartik Rastogi',
  role: 'Computer Science Engineer · Full-Stack Developer · Problem Solver',
  tagline: 'Building things that actually work.',
  roles: [
    'Full-Stack Developer',
    'Backend Developer',
    'Competitive Programmer',
    'AI/ML Enthusiast',
  ],
  email: 'kartikrastogi4544@gmail.com',
  github: 'https://github.com/kartikrastogi18',
  linkedin: 'https://www.linkedin.com/in/kartik-rastogi-113236325',
  resumeUrl: '/resume.pdf',
  location: 'Jawaharlal Nehru University, New Delhi',
  photo: '/kartik.png',
}

export const about = {
  paragraphs: [
    "I'm a third-year Computer Science student at Jawaharlal Nehru University, living somewhere between a terminal and a whiteboard — architecting backend systems by day and hunting down edge cases in DSA problems by night.",
    'My craft leans toward full-stack and backend engineering: APIs that hold their ground under real traffic, schemas that don\u2019t buckle at scale, and interfaces that quietly get out of the user\u2019s way. FitConnect and HostelZBuddy are both proof of concept turned proof of execution — fitness accountability and hostel administration, solved with production-grade tooling instead of toy demos.',
    '500+ problems deep on LeetCode and 700+ across the wider DSA/CP landscape, competitive programming has stopped being a hobby and become instinct — a way of reasoning about correctness and complexity before a single line of code gets written. Beyond the backend, I actively work with Deep Learning, Generative AI, and Agentic AI — building models and intelligent agents with Scikit-learn and Pandas, and treating machine learning less as a buzzword and more as another tool for solving real problems.',
  ],
}

export const skills = [
  'C++',
  'C',
  'JavaScript',
  'Python',
  'SQL',
  'React',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MySQL',
  'MongoDB',
  'Docker',
  'Git',
  'Postman',
  'Machine Learning',
]

export const aimlFocus = [
  'Deep Learning',
  'Generative AI',
  'Agentic AI',
  'Scikit-learn',
  'Pandas',
]

export const projects = [
  {
    id: 'fitconnect',
    name: 'FitConnect',
    tag: 'AI-Powered Fitness Platform',
    description:
      'A full-stack fitness platform with authenticated user accounts, real-time coaching chat, and a working payments flow — built to feel like a product, not a demo.',
    tech: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 'Socket.IO'],
    features: [
      'JWT authentication with OTP email verification',
      'Real-time messaging via Socket.IO',
      'Stripe payment integration (demo mode)',
      'Fitness tracking and progress workflows',
    ],
    github: 'https://github.com/kartikrastogi18/FitConnect',
    live: 'https://fit-connect-plum-nine.vercel.app/',
    year: '2024',
  },
  {
    id: 'hostelzbuddy',
    name: 'HostelZBuddy',
    tag: 'Hostel ERP System',
    description:
      'A hostel management platform with role-based dashboards and JWT authentication — built to replace paper registers with scalable, auditable REST APIs.',
    tech: ['React', 'Node.js', 'Express.js', 'PostgreSQL'],
    features: [
      'Role-based dashboards with JWT authentication',
      'Announcements and complaint tracking',
      'Request management workflows',
      'Scalable REST APIs with a PostgreSQL backend',
    ],
    github: 'https://github.com/kartikrastogi18',
    live: null,
    year: '2024',
  },
  {
    id: 'library-management',
    name: 'Library Management System',
    tag: 'Full-Stack CRUD System',
    description:
      'A full-stack library system for managing users, book inventory, and lending — built around clean relational schema design.',
    tech: ['Node.js', 'Express', 'Sequelize', 'PostgreSQL'],
    features: [
      'User and book catalog management',
      'Borrow/return workflows with due tracking',
      'Relational schema built for scale',
    ],
    github: 'https://github.com/kartikrastogi18',
    live: null,
    year: '2023',
  },
  {
    id: 'querygen',
    name: 'QueryGen',
    tag: 'AI SQL Query Generator',
    description:
      'An AI-powered SQL generator that converts natural language into executable SQL, built on the Gemini API with a responsive React frontend.',
    tech: ['React', 'Node.js', 'Gemini API'],
    features: [
      'Natural language to executable SQL conversion',
      'Powered by the Gemini API',
      'Responsive React frontend, deployed on Vercel',
    ],
    github: 'https://github.com/kartikrastogi18',
    live: null,
    year: '2024',
  },
  {
    id: 'flappy-dqn',
    name: 'Flappy Bird DQN',
    tag: 'Reinforcement Learning',
    description:
      'A Deep Q-Network agent trained to play Flappy Bird from raw game state, using experience replay for stable learning.',
    tech: ['Python', 'PyTorch', 'Gymnasium', 'DQN', 'Replay Memory'],
    features: [
      'Custom DQN architecture in PyTorch',
      'Experience replay memory for stability',
      'Reward shaping and training visualization',
    ],
    github: 'https://github.com/kartikrastogi18',
    live: null,
    year: '2023',
  },
  {
    id: 'crop-recommendation',
    name: 'Crop Recommendation System',
    tag: 'Applied Machine Learning',
    description:
      'An ML pipeline recommending optimal crops from soil and climate parameters, comparing multiple classical models for best accuracy.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Decision Tree', 'Random Forest', 'Naive Bayes', 'KMeans'],
    features: [
      'Multi-model comparison for best-fit accuracy',
      'Feature engineering on agricultural datasets',
      'Clustering-based crop grouping with KMeans',
    ],
    github: 'https://github.com/kartikrastogi18',
    live: null,
    year: '2023',
  },
]

export const education = [
  {
    institute: 'Jawaharlal Nehru University',
    degree: 'B.Tech in Computer Science',
    detail: 'CGPA: 7.23 / 9.0',
    period: 'Aug 2024 – Present',
    location: 'New Delhi',
  },
]

export const experience = [
  {
    role: 'Vice President',
    org: 'Megawhats Quiz Club, JNU',
    period: 'Ongoing',
    description:
      'Steering quiz strategy and operations for the university\u2019s quiz club — orchestrating inter-college events, coordinating logistics, and mentoring newer members into sharper quizzers.',
  },
  {
    role: 'Treasurer',
    org: 'LOOP — The Development Club, JNU',
    period: 'Ongoing',
    description:
      'Managing finances and resource planning for JNU\u2019s development club, while staying hands-on with the technical side — building internal tools and running peer sessions on DSA and web development.',
  },
  {
    role: 'Event Organizer',
    org: 'Hackathons & Technical Events',
    period: '2023 – Present',
    description:
      'Helped plan and run hackathons and technical events end-to-end, from problem statements and logistics to mentoring participant teams.',
  },
]

export const achievements = [
  { value: '700+', label: 'DSA / CP Problems Solved' },
  { value: 'Top 3', label: 'Co.L.D CP Challenge 2.0 — Codeforces Marathon' },
  { value: 'Scholar', label: 'Reliance Foundation Scholarship' },
]

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]
