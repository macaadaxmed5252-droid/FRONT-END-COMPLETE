import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleSaveJob, applyToJob } from "../store/jobsSlice";
import { Button } from "../components/design-system/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/design-system/card";
import { Badge } from "../components/design-system/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/design-system/dialog";
import { Input } from "../components/design-system/input";
import { Label } from "../components/design-system/label";
import { Textarea } from "../components/design-system/textarea";
import { BookmarkCheck, MapPin, DollarSign, Clock, Building2, User, Phone, Link as LinkIcon, Upload, FileText, CheckCircle2, Briefcase } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
function SavedJobsPage() {
  const { jobs, savedJobs } = useSelector((state) => state.jobs);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const savedJobsList = jobs.filter((job) => savedJobs.includes(job.id));
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationDialog, setShowApplicationDialog] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationData, setApplicationData] = useState({
    coverLetter: "",
    phone: user?.phone || "",
    address: user?.address || "",
    education: user?.education || "",
    experience: user?.experience || "",
    skills: user?.skills || "",
    linkedin: "",
    portfolio: "",
    resumeName: "resume.pdf"
  });
  const handleUnsave = (jobId) => {
    dispatch(toggleSaveJob(jobId));
    toast.success("Job removed from saved");
  };
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setApplicationData((prev) => ({ ...prev, resumeName: file.name }));
      toast.success("Resume uploaded successfully");
    }
  };
  const handleApply = async () => {
    if (!selectedJob || !user) return;
    if (!applicationData.coverLetter || !applicationData.phone || !applicationData.skills) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const application = {
      id: Math.random().toString(36).substr(2, 9),
      jobId: selectedJob.id,
      jobseekerId: user.id,
      jobseekerName: user.name,
      jobseekerEmail: user.email,
      jobseekerPhone: applicationData.phone,
      address: applicationData.address,
      education: applicationData.education,
      experience: applicationData.experience,
      skills: applicationData.skills,
      resume: applicationData.resumeName,
      coverLetter: applicationData.coverLetter,
      linkedin: applicationData.linkedin,
      portfolio: applicationData.portfolio,
      appliedDate: (/* @__PURE__ */ new Date()).toISOString(),
      status: "pending"
    };
    dispatch(applyToJob(application));
    toast.success("Application submitted successfully!", {
      description: `Good luck with your application for ${selectedJob.title}`
    });
    setIsSubmitting(false);
    setShowApplicationDialog(false);
    setSelectedJob(null);
    setApplicationData({
      coverLetter: "",
      phone: user?.phone || "",
      address: user?.address || "",
      education: user?.education || "",
      experience: user?.experience || "",
      skills: user?.skills || "",
      linkedin: "",
      portfolio: "",
      resumeName: "resume.pdf"
    });
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      className: "mb-8"
    },
    /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "Saved Jobs"),
    /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, savedJobsList.length, " saved ", savedJobsList.length === 1 ? "job" : "jobs")
  ), savedJobsList.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-12" }, /* @__PURE__ */ React.createElement(BookmarkCheck, { className: "h-16 w-16 mx-auto text-gray-400 mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400 text-lg" }, "No saved jobs yet")) : /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, savedJobsList.map((job, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: job.id,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.05 }
    },
    /* @__PURE__ */ React.createElement(Card, { className: "hover:shadow-lg transition-all duration-300" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, { className: "text-xl mb-2" }, job.title), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(Building2, { className: "h-4 w-4 mr-2" }), job.company)), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, /* @__PURE__ */ React.createElement(Badge, { variant: "secondary" }, job.type), /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, job.category)), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(MapPin, { className: "h-4 w-4 mr-2" }), job.location), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(DollarSign, { className: "h-4 w-4 mr-2" }), job.salary), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(Clock, { className: "h-4 w-4 mr-2" }), "Posted ", new Date(job.postedDate).toLocaleDateString())), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-2" }, /* @__PURE__ */ React.createElement(
      Button,
      {
        onClick: () => setSelectedJob(job),
        variant: "outline",
        className: "flex-1"
      },
      "View Details"
    ), /* @__PURE__ */ React.createElement(
      Button,
      {
        onClick: () => {
          setSelectedJob(job);
          setShowApplicationDialog(true);
        },
        className: "flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
      },
      "Apply Now"
    ), /* @__PURE__ */ React.createElement(
      Button,
      {
        onClick: () => handleUnsave(job.id),
        variant: "destructive",
        size: "icon"
      },
      /* @__PURE__ */ React.createElement(BookmarkCheck, { className: "h-4 w-4" })
    )))))
  )))), /* @__PURE__ */ React.createElement(Dialog, { open: !!selectedJob && !showApplicationDialog, onOpenChange: () => setSelectedJob(null) }, /* @__PURE__ */ React.createElement(DialogContent, { className: "max-w-3xl max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ React.createElement(DialogHeader, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 mb-2" }, /* @__PURE__ */ React.createElement("div", { className: "h-12 w-12 rounded-lg bg-indigo-100 flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Building2, { className: "h-6 w-6 text-indigo-600" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DialogTitle, { className: "text-2xl font-bold flex items-center gap-2" }, selectedJob?.title), /* @__PURE__ */ React.createElement(DialogDescription, { className: "text-lg" }, selectedJob?.company)))), selectedJob && /* @__PURE__ */ React.createElement("div", { className: "space-y-8 mt-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-3" }, /* @__PURE__ */ React.createElement(Badge, { className: "bg-green-100 text-green-700 hover:bg-green-200 border-none px-3 py-1" }, selectedJob.type), /* @__PURE__ */ React.createElement(Badge, { variant: "outline", className: "border-gray-200 px-3 py-1" }, selectedJob.category), /* @__PURE__ */ React.createElement(Badge, { variant: "secondary", className: "bg-gray-100 text-gray-700 hover:bg-gray-200 px-3 py-1" }, selectedJob.location)), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-50 rounded-lg dark:bg-gray-800" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-1 text-sm text-gray-500 uppercase" }, "Salary"), /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, selectedJob.salary)), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-50 rounded-lg dark:bg-gray-800" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-1 text-sm text-gray-500 uppercase" }, "Location"), /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, selectedJob.location)), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-50 rounded-lg dark:bg-gray-800" }, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-1 text-sm text-gray-500 uppercase" }, "Posted"), /* @__PURE__ */ React.createElement("p", { className: "font-medium" }, new Date(selectedJob.postedDate).toLocaleDateString()))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold mb-3 flex items-center" }, /* @__PURE__ */ React.createElement(FileText, { className: "h-5 w-5 mr-2 text-indigo-500" }), " Description"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed" }, selectedJob.description)), /* @__PURE__ */ React.createElement("div", { className: "grid md:grid-cols-2 gap-8" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold mb-3 flex items-center" }, /* @__PURE__ */ React.createElement(CheckCircle2, { className: "h-5 w-5 mr-2 text-indigo-500" }), " Requirements"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-2" }, selectedJob.requirements.map((req, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "flex items-start text-gray-600 dark:text-gray-300" }, /* @__PURE__ */ React.createElement("span", { className: "mr-2 mt-1.5 h-1.5 w-1.5 bg-indigo-500 rounded-full flex-shrink-0" }), req)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold mb-3 flex items-center" }, /* @__PURE__ */ React.createElement(User, { className: "h-5 w-5 mr-2 text-indigo-500" }), " Responsibilities"), /* @__PURE__ */ React.createElement("ul", { className: "space-y-2" }, selectedJob.responsibilities.map((resp, i) => /* @__PURE__ */ React.createElement("li", { key: i, className: "flex items-start text-gray-600 dark:text-gray-300" }, /* @__PURE__ */ React.createElement("span", { className: "mr-2 mt-1.5 h-1.5 w-1.5 bg-indigo-500 rounded-full flex-shrink-0" }), resp))))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => handleUnsave(selectedJob.id),
      variant: "outline",
      className: "flex-1 h-12 text-red-600 hover:text-red-700 hover:bg-red-50"
    },
    "Remove from Saved"
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => setShowApplicationDialog(true),
      className: "flex-[2] bg-indigo-600 hover:bg-indigo-700 text-white h-12 text-lg font-medium shadow-lg"
    },
    "Apply for this Position"
  ))))), /* @__PURE__ */ React.createElement(Dialog, { open: showApplicationDialog, onOpenChange: setShowApplicationDialog }, /* @__PURE__ */ React.createElement(DialogContent, { className: "max-w-4xl max-h-[95vh] overflow-y-auto p-0 gap-0" }, /* @__PURE__ */ React.createElement("div", { className: "bg-indigo-600 p-6 text-white" }, /* @__PURE__ */ React.createElement(DialogTitle, { className: "text-2xl font-bold mb-1" }, "Apply for ", selectedJob?.title), /* @__PURE__ */ React.createElement(DialogDescription, { className: "text-indigo-100" }, selectedJob?.company, " \u2022 ", selectedJob?.location)), /* @__PURE__ */ React.createElement("div", { className: "p-6 grid gap-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white border-b pb-2" }, /* @__PURE__ */ React.createElement(User, { className: "h-5 w-5 mr-2 text-indigo-600" }), " Personal Information"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, null, "Full Name"), /* @__PURE__ */ React.createElement(Input, { value: user?.name, disabled: true, className: "bg-gray-50" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, null, "Email Address"), /* @__PURE__ */ React.createElement(Input, { value: user?.email, disabled: true, className: "bg-gray-50" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { className: "flex items-center gap-1" }, "Phone Number ", /* @__PURE__ */ React.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Phone, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" }), /* @__PURE__ */ React.createElement(
    Input,
    {
      value: applicationData.phone,
      onChange: (e) => setApplicationData({ ...applicationData, phone: e.target.value }),
      className: "pl-10",
      placeholder: "+252 6..."
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, null, "Current Address"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(MapPin, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" }), /* @__PURE__ */ React.createElement(
    Input,
    {
      value: applicationData.address,
      onChange: (e) => setApplicationData({ ...applicationData, address: e.target.value }),
      className: "pl-10",
      placeholder: "City, Region"
    }
  ))))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white border-b pb-2" }, /* @__PURE__ */ React.createElement(LinkIcon, { className: "h-5 w-5 mr-2 text-indigo-600" }), " Professional Profiles"), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, null, "LinkedIn Profile"), /* @__PURE__ */ React.createElement(
    Input,
    {
      placeholder: "https://linkedin.com/in/...",
      value: applicationData.linkedin,
      onChange: (e) => setApplicationData({ ...applicationData, linkedin: e.target.value })
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, null, "Portfolio / Website"), /* @__PURE__ */ React.createElement(
    Input,
    {
      placeholder: "https://...",
      value: applicationData.portfolio,
      onChange: (e) => setApplicationData({ ...applicationData, portfolio: e.target.value })
    }
  )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white border-b pb-2" }, /* @__PURE__ */ React.createElement(Briefcase, { className: "h-5 w-5 mr-2 text-indigo-600" }), " Professional Details"), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, null, "Key Skills ", /* @__PURE__ */ React.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      value: applicationData.skills,
      onChange: (e) => setApplicationData({ ...applicationData, skills: e.target.value }),
      rows: 2,
      placeholder: "List your top skills (e.g. React, Project Management, Communication)"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, null, "Cover Letter ", /* @__PURE__ */ React.createElement("span", { className: "text-red-500" }, "*")), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      value: applicationData.coverLetter,
      onChange: (e) => setApplicationData({ ...applicationData, coverLetter: e.target.value }),
      rows: 5,
      placeholder: "Tell us why you are the best fit for this role...",
      className: "resize-none"
    }
  )))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold mb-4 flex items-center text-gray-800 dark:text-white border-b pb-2" }, /* @__PURE__ */ React.createElement(FileText, { className: "h-5 w-5 mr-2 text-indigo-600" }), " Resume / CV"), /* @__PURE__ */ React.createElement("div", { className: "border-2 border-dashed border-gray-200 rounded-lg p-6 text-center hover:bg-gray-50 transition-colors" }, /* @__PURE__ */ React.createElement(
    Input,
    {
      type: "file",
      id: "resume-upload",
      className: "hidden",
      onChange: handleFileUpload,
      accept: ".pdf,.doc,.docx"
    }
  ), /* @__PURE__ */ React.createElement(Label, { htmlFor: "resume-upload", className: "cursor-pointer" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "h-12 w-12 rounded-full bg-indigo-50 flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Upload, { className: "h-6 w-6 text-indigo-600" })), /* @__PURE__ */ React.createElement("span", { className: "font-medium text-indigo-600 hover:text-indigo-700" }, "Click to upload resume"), /* @__PURE__ */ React.createElement("span", { className: "text-sm text-gray-500" }, "PDF, DOC, DOCX up to 10MB"), applicationData.resumeName && /* @__PURE__ */ React.createElement("div", { className: "mt-2 flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm font-medium" }, /* @__PURE__ */ React.createElement(CheckCircle2, { className: "h-4 w-4" }), applicationData.resumeName))))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4 pt-4 border-t mt-4" }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setShowApplicationDialog(false), className: "flex-1 h-12" }, "Cancel"), /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: handleApply,
      className: "flex-1 h-12 bg-indigo-600 hover:bg-indigo-700 text-white",
      disabled: isSubmitting
    },
    isSubmitting ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Submitting...") : "Submit Application"
  ))))));
}
export {
  SavedJobsPage
};
