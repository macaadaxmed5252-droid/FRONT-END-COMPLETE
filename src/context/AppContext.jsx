import React, { createContext, useContext, useState } from "react";
import { mockUsers, mockJobs, mockApplications, mockSavedJobs } from "../data/mockData";
const AppContext = createContext(void 0);
const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
const AppProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [jobs, setJobs] = useState(mockJobs);
  const [applications, setApplications] = useState(mockApplications);
  const [savedJobs, setSavedJobs] = useState(mockSavedJobs);
  const [users] = useState(mockUsers);
  const login = (email, password) => {
    const user = users.find((u) => u.email === email);
    if (user) {
      setCurrentUser(user);
      return true;
    }
    return false;
  };
  const logout = () => {
    setCurrentUser(null);
  };
  const register = (email, password, name, role, company) => {
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      return false;
    }
    const newUser = {
      id: (users.length + 1).toString(),
      email,
      name,
      role,
      company
    };
    users.push(newUser);
    setCurrentUser(newUser);
    return true;
  };
  const applyForJob = (jobId, resume, coverLetter) => {
    if (!currentUser) return;
    const job = jobs.find((j) => j.id === jobId);
    if (!job) return;
    const newApplication = {
      id: (applications.length + 1).toString(),
      jobId,
      jobTitle: job.title,
      company: job.company,
      applicantId: currentUser.id,
      applicantName: currentUser.name,
      applicantEmail: currentUser.email,
      resume,
      coverLetter,
      status: "pending",
      appliedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    };
    setApplications([...applications, newApplication]);
    setJobs(jobs.map(
      (j) => j.id === jobId ? { ...j, applicationsCount: j.applicationsCount + 1 } : j
    ));
  };
  const saveJob = (jobId) => {
    if (!currentUser) return;
    const alreadySaved = savedJobs.find(
      (sj) => sj.userId === currentUser.id && sj.jobId === jobId
    );
    if (!alreadySaved) {
      setSavedJobs([
        ...savedJobs,
        {
          userId: currentUser.id,
          jobId,
          savedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
        }
      ]);
    }
  };
  const unsaveJob = (jobId) => {
    if (!currentUser) return;
    setSavedJobs(savedJobs.filter(
      (sj) => !(sj.userId === currentUser.id && sj.jobId === jobId)
    ));
  };
  const addJob = (job) => {
    const newJob = {
      ...job,
      id: (jobs.length + 1).toString(),
      postedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0],
      applicationsCount: 0
    };
    setJobs([newJob, ...jobs]);
  };
  const updateJob = (jobId, updates) => {
    setJobs(jobs.map((job) => job.id === jobId ? { ...job, ...updates } : job));
  };
  const deleteJob = (jobId) => {
    setJobs(jobs.filter((job) => job.id !== jobId));
    setApplications(applications.filter((app) => app.jobId !== jobId));
    setSavedJobs(savedJobs.filter((sj) => sj.jobId !== jobId));
  };
  const approveJob = (jobId) => {
    updateJob(jobId, { status: "approved" });
  };
  const rejectJob = (jobId) => {
    updateJob(jobId, { status: "rejected" });
  };
  const value = {
    currentUser,
    setCurrentUser,
    jobs,
    setJobs,
    applications,
    setApplications,
    savedJobs,
    setSavedJobs,
    login,
    logout,
    register,
    applyForJob,
    saveJob,
    unsaveJob,
    addJob,
    updateJob,
    deleteJob,
    approveJob,
    rejectJob
  };
  return /* @__PURE__ */ React.createElement(AppContext.Provider, { value }, children);
};
export {
  AppProvider,
  useApp
};
