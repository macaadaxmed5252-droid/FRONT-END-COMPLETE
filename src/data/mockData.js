const mockUsers = [
  {
    id: "1",
    email: "jobseeker@example.com",
    name: "Ahmed Mohamed",
    role: "job-seeker"
  },
  {
    id: "2",
    email: "employer@example.com",
    name: "Farah Hassan",
    role: "employer",
    company: "Tech Solutions Ltd"
  },
  {
    id: "3",
    email: "admin@example.com",
    name: "Sahra Ali",
    role: "admin"
  }
];
const mockJobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Tech Solutions Ltd",
    location: "Mogadishu, Somalia",
    type: "Full-time",
    salary: "$3,000 - $5,000/month",
    description: "We are looking for an experienced software engineer to join our growing team.",
    requirements: [
      "5+ years of software development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS, Azure)",
      "Strong problem-solving skills"
    ],
    responsibilities: [
      "Design and develop scalable web applications",
      "Collaborate with cross-functional teams",
      "Mentor junior developers",
      "Code review and quality assurance"
    ],
    benefits: [
      "Competitive salary",
      "Health insurance",
      "Professional development opportunities",
      "Flexible working hours"
    ],
    category: "Technology",
    postedDate: "2026-01-02",
    employerId: "2",
    status: "approved",
    applicationsCount: 12
  },
  {
    id: "2",
    title: "Marketing Manager",
    company: "Digital Marketing Agency",
    location: "Hargeisa, Somalia",
    type: "Full-time",
    salary: "$2,500 - $4,000/month",
    description: "Join our dynamic marketing team to lead innovative campaigns.",
    requirements: [
      "3+ years of marketing experience",
      "Strong digital marketing skills",
      "Experience with social media platforms",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Develop marketing strategies",
      "Manage social media campaigns",
      "Analyze market trends",
      "Lead marketing team"
    ],
    benefits: [
      "Performance bonuses",
      "Remote work options",
      "Training programs",
      "Career growth"
    ],
    category: "Marketing",
    postedDate: "2026-01-01",
    employerId: "2",
    status: "approved",
    applicationsCount: 8
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: "Creative Studio",
    location: "Kismayo, Somalia",
    type: "Part-time",
    salary: "$1,500 - $2,500/month",
    description: "Looking for a creative designer to create stunning visuals.",
    requirements: [
      "2+ years of design experience",
      "Proficiency in Adobe Creative Suite",
      "Strong portfolio",
      "Creative mindset"
    ],
    responsibilities: [
      "Design marketing materials",
      "Create brand identities",
      "Collaborate with clients",
      "Manage multiple projects"
    ],
    benefits: [
      "Flexible schedule",
      "Creative freedom",
      "Portfolio building",
      "Networking opportunities"
    ],
    category: "Design",
    postedDate: "2025-12-30",
    employerId: "2",
    status: "approved",
    applicationsCount: 15
  },
  {
    id: "4",
    title: "Sales Representative",
    company: "International Trade Co.",
    location: "Bosaso, Somalia",
    type: "Full-time",
    salary: "$2,000 - $3,500/month",
    description: "Seeking motivated sales professionals to expand our market reach.",
    requirements: [
      "1+ years of sales experience",
      "Excellent negotiation skills",
      "Knowledge of local markets",
      "Fluent in Somali and English"
    ],
    responsibilities: [
      "Generate new business",
      "Maintain client relationships",
      "Achieve sales targets",
      "Market research"
    ],
    benefits: [
      "Commission structure",
      "Travel allowances",
      "Sales training",
      "Career advancement"
    ],
    category: "Sales",
    postedDate: "2025-12-28",
    employerId: "2",
    status: "approved",
    applicationsCount: 20
  },
  {
    id: "5",
    title: "Data Analyst",
    company: "FinTech Innovations",
    location: "Mogadishu, Somalia",
    type: "Contract",
    salary: "$3,500 - $5,500/month",
    description: "Analyze data to drive business insights and decisions.",
    requirements: [
      "3+ years in data analysis",
      "SQL and Python proficiency",
      "Experience with data visualization tools",
      "Statistical analysis skills"
    ],
    responsibilities: [
      "Analyze business data",
      "Create dashboards and reports",
      "Identify trends and patterns",
      "Present findings to stakeholders"
    ],
    benefits: [
      "High compensation",
      "Remote work",
      "Latest tools and technology",
      "Professional growth"
    ],
    category: "Data Science",
    postedDate: "2026-01-03",
    employerId: "2",
    status: "pending",
    applicationsCount: 5
  },
  {
    id: "6",
    title: "Customer Service Agent",
    company: "Telecom Solutions",
    location: "Garowe, Somalia",
    type: "Full-time",
    salary: "$1,000 - $1,800/month",
    description: "Provide excellent customer service and support.",
    requirements: [
      "High school diploma",
      "Good communication skills",
      "Customer service experience preferred",
      "Fluent in Somali and English"
    ],
    responsibilities: [
      "Handle customer inquiries",
      "Resolve complaints",
      "Process orders and requests",
      "Maintain customer records"
    ],
    benefits: [
      "Training provided",
      "Fixed schedule",
      "Team environment",
      "Growth opportunities"
    ],
    category: "Customer Service",
    postedDate: "2025-12-25",
    employerId: "2",
    status: "approved",
    applicationsCount: 30
  }
];
const mockApplications = [
  {
    id: "1",
    jobId: "1",
    jobTitle: "Senior Software Engineer",
    company: "Tech Solutions Ltd",
    applicantId: "1",
    applicantName: "Ahmed Mohamed",
    applicantEmail: "jobseeker@example.com",
    resume: "Resume content here...",
    coverLetter: "I am very interested in this position...",
    status: "pending",
    appliedDate: "2026-01-04"
  },
  {
    id: "2",
    jobId: "2",
    jobTitle: "Marketing Manager",
    company: "Digital Marketing Agency",
    applicantId: "1",
    applicantName: "Ahmed Mohamed",
    applicantEmail: "jobseeker@example.com",
    resume: "Resume content here...",
    coverLetter: "I have extensive marketing experience...",
    status: "reviewed",
    appliedDate: "2026-01-03"
  }
];
const mockSavedJobs = [
  {
    userId: "1",
    jobId: "3",
    savedDate: "2026-01-04"
  },
  {
    userId: "1",
    jobId: "4",
    savedDate: "2026-01-03"
  }
];
export {
  mockApplications,
  mockJobs,
  mockSavedJobs,
  mockUsers
};
