import {
  profile as spanishProfile,
  capabilities as spanishCapabilities,
  projects as spanishProjects,
  experience as spanishExperience,
  extraExperience as spanishExtraExperience,
  education as spanishEducation,
  certifications as spanishCertifications,
  tools as spanishTools,
} from './contenido'

export const profile = {
  ...spanishProfile,
  role: 'Full-stack developer · Computer Systems Engineer',
  languages: 'Native Spanish · B2 English',
  headline: "Hi, I'm José.",
  heroSubtitle:
    "I'm José, a Computer Systems Engineer and full-stack developer. I enjoy turning real problems into useful software. I've worked with businesses and now build projects independently too.",
  intro:
    'I build web applications from start to finish. I enjoy taking care of the whole process: planning, documenting, building the backend and frontend, and looking after the data.',
  nota:
    'I like understanding the problem before thinking about code. I enjoy working across the whole project: shaping the idea, building the solution, testing it and refining the details. To me, a good result is something useful that makes the user’s day a little easier.',
  status: 'Available for new projects',
}

export const capabilities = [
  {
    ...spanishCapabilities[0],
    title: 'Interfaces',
    text: 'I build web interfaces for finding information, managing tasks and working with content.',
  },
  {
    ...spanishCapabilities[1],
    title: 'Backend and data',
    text: 'I build services and APIs with authentication, permissions and data management.',
  },
  {
    ...spanishCapabilities[2],
    title: 'Integrations and deployment',
    text: 'I connect external services, payment gateways and storage, then deploy web applications to the cloud.',
  },
  {
    ...spanishCapabilities[3],
    title: 'AI and automation',
    text: 'I integrate conversational assistants and AI-powered automations to answer questions, manage orders and work with business information.',
  },
]

export const projects = [
  {
    ...spanishProjects[0],
    kind: 'Management system',
    context: 'University project for a real business',
    alt: 'Screenshot of Veterinaria El Ganadero',
    description: [
      'Sales management with separate access for administrators and users, using JWT authentication and role-based permissions.',
      'Includes a point-of-sale system with PayPal payments.',
      'Built with .NET in a multi-layer architecture, SQL Server and Azure App Services.',
    ],
  },
  {
    ...spanishProjects[1],
    kind: 'Price comparison platform',
    context: 'Costa Rica and the United States',
    alt: 'Screenshot of Oferticas',
    description: [
      'Brings together offers from several stores with filters, price sorting, saved items and links to the original product listings.',
      'Includes a contextual product assistant that answers technical questions using official sources.',
      'Built with React and Node.js. It integrates store catalogs and external services, with MongoDB used to reuse technical specifications.',
    ],
  },
  {
    ...spanishProjects[2],
    kind: 'Services website',
    context: 'Independent work',
    alt: 'Screenshot of BRN Solutions',
    stack: ['Website', 'Automation', 'APIs'],
    description: [
      'A website presenting the digital solutions I offer through my independent work.',
      'Visitors can explore services, learn about the work process and get in touch through WhatsApp.',
      'My independent work also includes n8n automations, third-party API integrations, information processing, web prototypes and a tool built with the Gmail API, OAuth2 and Google Apps Script.',
    ],
  },
  {
    ...spanishProjects[3],
    kind: 'Catalog and admin panel',
    context: 'Website for a small business',
    alt: 'Screenshot of Casa de la Hamaca',
    description: [
      'A public product catalog alongside an admin panel for managing inventory.',
      'The .NET application uses SQL Azure for data and Azure Blob Storage for product images.',
    ],
  },
  {
    ...spanishProjects[4],
    kind: 'Social network',
    context: 'Social network simulation with posts and a marketplace',
    alt: 'Screenshot of Facebook Clone',
    description: [
      'A social network simulation with posts, likes, comments and a marketplace.',
      'The frontend connects to REST APIs built with Node.js and Express. MongoDB stores the data, JWT handles authentication and bcrypt hashes passwords.',
    ],
  },
]

export const experience = [
  {
    ...spanishExperience[0],
    role: 'Independent software developer',
    date: 'March 2026 – present',
    text: 'I build websites and landing pages for small businesses, along with tools that automate information processing. My independent work also includes API integrations and web prototypes.',
  },
  {
    ...spanishExperience[1],
    role: 'Software developer · professional internship',
    date: 'January – April 2025',
    text: 'I independently developed an institutional system, from gathering requirements through implementation. I coordinated scope with the institution and handled the backend, database and frontend.',
    note: 'Private institutional system with individual accounts and role-based access.',
  },
  {
    ...spanishExperience[2],
    role: 'Junior full-stack developer · temporary project',
    date: 'February – December 2024',
    text: 'I fixed application bugs, added validation and improved data queries. I also supported frontend work as part of a temporary full-stack project.',
  },
]

export const extraExperience = {
  ...spanishExtraExperience,
  role: 'Data analyst and data entry specialist',
  date: 'July 2025 – February 2026',
  text: 'Reviewed, validated and cleaned records, and used Microsoft Office to organize information.',
}

export const education = [
  {
    ...spanishEducation[0],
    title: "Bachelor's degree",
    detail: 'Computer Systems Engineering',
    school: 'Universidad Fidélitas',
    certAlt: "Bachelor's degree in Computer Systems Engineering",
  },
  {
    ...spanishEducation[1],
    title: 'High school diploma',
    detail: '',
    school: 'Colegio San Luis Gonzaga',
    certAlt: 'High school diploma',
  },
]

export const certifications = [
  {
    ...spanishCertifications[0],
    title: 'Scrum Fundamentals Certified',
    school: 'SCRUMstudy',
    certAlt: 'Scrum Fundamentals certificate',
  },
  {
    ...spanishCertifications[1],
    title: 'CCNAv7 course',
    detail: 'Switching, Routing and Wireless Essentials',
    school: 'Cisco Networking Academy',
    certAlt: 'CCNAv7 course certificate',
  },
]

export const tools = [
  {
    ...spanishTools[0],
    group: 'Backend and architecture',
    items: 'C#, ASP.NET Core, Entity Framework, Dapper, MVC and layered architecture.',
  },
  {
    ...spanishTools[1],
    group: 'Development and coordination',
    items: 'Git, GitHub, Postman, Swagger, Jira and Excel.',
  },
  {
    ...spanishTools[2],
    group: 'Automation and APIs',
    items: 'n8n, Google Apps Script, Gmail API and OAuth2.',
  },
]

export const ui = {
  skipProjects: 'Skip to main content',
  navLabel: 'Sections',
  nav: ['Notes', 'Projects', 'Experience', 'Education'],
  menu: 'Menu',
  mastheadRole: 'Full-stack developer',
  heroActionProjects: 'View projects',
  heroActionContact: 'Get in touch',
  noteCaption: 'A short note',
  capabilitiesHeading: 'What I do',
  technologiesHeading: 'Technologies I use',
  visitSite: 'Visit website',
  projectAuthorship: 'End-to-end project ownership',
  projectsDescription: 'Web applications and my independent services website.',
  experienceDescription:
    'I have worked both on teams and independently, often taking a project from start to finish.',
  current: 'Current',
  also: 'Also',
  toolsHeading: 'Tools I use',
  educationHeading: 'Education',
  formalEducation: 'Formal education',
  courses: 'Courses and certifications',
  viewCredential: 'View credential',
  close: 'Close',
  contactHeading: 'Contact',
  contactDescription: 'You can reach me here.',
  backToTop: 'Back to top',
  title: 'Portfolio | José Brenes',
  description:
    'Portfolio of José Andrés Brenes, full-stack developer and Computer Systems Engineer.',
  languageLabel: 'Language',
}
