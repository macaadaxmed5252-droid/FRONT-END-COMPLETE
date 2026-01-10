import { createSlice } from "@reduxjs/toolkit";
const mockJobs = [
  {
    id: "1",
    title: "Senior Software Engineer",
    company: "Tech Solutions Inc",
    location: "Mogadishu, Somalia",
    type: "Full-time",
    category: "Technology",
    salary: "$80,000 - $120,000/year",
    description: "We are looking for an experienced Software Engineer to join our dynamic team.",
    requirements: ["5+ years of experience", "React, TypeScript expertise", "Strong problem-solving skills"],
    responsibilities: ["Develop scalable applications", "Mentor junior developers", "Code review"],
    benefits: ["Health insurance", "Remote work options", "401k matching"],
    postedDate: "2026-01-03",
    status: "approved",
    applicationsCount: 0
  },
  {
    id: "2",
    title: "Marketing Manager",
    company: "Creative Agency Ltd",
    location: "Hargeisa, Somalia",
    type: "Full-time",
    category: "Marketing",
    salary: "$60,000 - $80,000/year",
    description: "Join our creative team as a Marketing Manager and drive our brand forward.",
    requirements: ["3+ years marketing experience", "Digital marketing expertise", "Leadership skills"],
    responsibilities: ["Develop marketing strategies", "Manage campaigns", "Analyze performance"],
    benefits: ["Flexible hours", "Professional development", "Health insurance"],
    postedDate: "2026-01-02",
    status: "approved",
    applicationsCount: 0
  },
  {
    id: "3",
    title: "Graphic Designer",
    company: "Design Studio Pro",
    location: "Bossaso, Somalia",
    type: "Part-time",
    category: "Design",
    salary: "$30/hour",
    description: "Creative graphic designer needed for exciting projects.",
    requirements: ["Adobe Creative Suite expert", "Portfolio required", "2+ years experience"],
    responsibilities: ["Create visual concepts", "Design marketing materials", "Collaborate with team"],
    benefits: ["Flexible schedule", "Remote work", "Creative freedom"],
    postedDate: "2026-01-01",
    status: "approved",
    applicationsCount: 0
  },
  {
    id: "4",
    title: "Data Analyst",
    company: "Analytics Corp",
    location: "Mogadishu, Somalia",
    type: "Full-time",
    category: "Technology",
    salary: "$70,000 - $95,000/year",
    description: "Data-driven professional needed to analyze and interpret complex datasets.",
    requirements: ["SQL proficiency", "Python/R experience", "Statistical analysis skills"],
    responsibilities: ["Analyze data trends", "Create reports", "Present insights"],
    benefits: ["Training programs", "Health coverage", "Bonus structure"],
    postedDate: "2025-12-30",
    status: "approved",
    applicationsCount: 0
  },
  {
    id: "5",
    title: "Customer Service Representative",
    company: "Support Solutions",
    location: "Remote",
    type: "Full-time",
    category: "Customer Service",
    salary: "$35,000 - $45,000/year",
    description: "Help customers and provide exceptional service in a remote environment.",
    requirements: ["Excellent communication", "Problem-solving skills", "Previous CS experience"],
    responsibilities: ["Handle customer inquiries", "Resolve issues", "Maintain records"],
    benefits: ["Remote work", "Training provided", "Career growth"],
    postedDate: "2025-12-28",
    status: "approved",
    applicationsCount: 0
  },
  {
    id: "6",
    title: "Project Manager",
    company: "Construction & Build",
    location: "Kismayo, Somalia",
    type: "Full-time",
    category: "Management",
    salary: "$90,000 - $110,000/year",
    description: "Lead construction projects from planning to completion.",
    requirements: ["PMP certification", "5+ years PM experience", "Construction knowledge"],
    responsibilities: ["Project planning", "Team coordination", "Budget management"],
    benefits: ["Company vehicle", "Health insurance", "Performance bonuses"],
    postedDate: "2025-12-27",
    status: "approved",
    applicationsCount: 0
  }
];
const loadJobsState = () => {
  try {
    const serializedState = localStorage.getItem("jobs");
    if (serializedState === null) {
      return {
        jobs: mockJobs,
        applications: [],
        contactMessages: [],
        savedJobs: []
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {
      jobs: mockJobs,
      applications: [],
      contactMessages: [],
      savedJobs: []
    };
  }
};
const saveJobsState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("jobs", serializedState);
  } catch (err) {
  }
};
const initialState = loadJobsState();
const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobs.unshift(action.payload);
      saveJobsState(state);
    },
    updateJob: (state, action) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state.jobs[index] = action.payload;
        saveJobsState(state);
      }
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      saveJobsState(state);
    },
    approveJob: (state, action) => {
      const job = state.jobs.find((j) => j.id === action.payload);
      if (job) {
        job.status = "approved";
        saveJobsState(state);
      }
    },
    rejectJob: (state, action) => {
      const job = state.jobs.find((j) => j.id === action.payload);
      if (job) {
        job.status = "rejected";
        saveJobsState(state);
      }
    },
    applyToJob: (state, action) => {
      state.applications.push(action.payload);
      const job = state.jobs.find((j) => j.id === action.payload.jobId);
      if (job) job.applicationsCount += 1;
      saveJobsState(state);
    },
    updateApplicationStatus: (state, action) => {
      const application = state.applications.find((app) => app.id === action.payload.id);
      if (application) {
        application.status = action.payload.status;
        saveJobsState(state);
      }
    },
    markAdminContacted: (state, action) => {
      const application = state.applications.find((app) => app.id === action.payload);
      if (application) {
        application.adminContacted = true;
        saveJobsState(state);
      }
    },
    addContactMessage: (state, action) => {
      state.contactMessages.push(action.payload);
      saveJobsState(state);
    },
    markMessageAsRead: (state, action) => {
      const message = state.contactMessages.find((msg) => msg.id === action.payload);
      if (message) {
        message.status = "read";
        saveJobsState(state);
      }
    },
    toggleSaveJob: (state, action) => {
      const index = state.savedJobs.indexOf(action.payload);
      if (index > -1) {
        state.savedJobs.splice(index, 1);
      } else {
        state.savedJobs.push(action.payload);
      }
      saveJobsState(state);
    }
  }
});
const {
  addJob,
  updateJob,
  deleteJob,
  approveJob,
  rejectJob,
  applyToJob,
  updateApplicationStatus,
  markAdminContacted,
  addContactMessage,
  markMessageAsRead,
  toggleSaveJob
} = jobsSlice.actions;
var jobsSlice_default = jobsSlice.reducer;
export {
  addContactMessage,
  addJob,
  applyToJob,
  approveJob,
  jobsSlice_default as default,
  deleteJob,
  markAdminContacted,
  markMessageAsRead,
  rejectJob,
  toggleSaveJob,
  updateApplicationStatus,
  updateJob
};
