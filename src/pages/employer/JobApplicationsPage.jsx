import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateApplicationStatus } from "../../store/jobsSlice";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/design-system/card";
import { Button } from "../../components/design-system/button";
import { ArrowLeft, Check, X, Phone, Download, MapPin, Briefcase as BriefcaseIcon, GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
function JobApplicationsPage() {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobs, applications } = useSelector((state) => state.jobs);
  const job = jobs.find((j) => j.id === jobId);
  const jobApplications = applications.filter((app) => app.jobId === jobId);
  const handleStatusUpdate = (appId, newStatus) => {
    dispatch(updateApplicationStatus({ id: appId, status: newStatus }));
    toast.success(`Candidate status updated to ${newStatus}`);
  };
  if (!job) {
    return /* @__PURE__ */ React.createElement("div", { className: "p-8 text-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-xl font-bold" }, "Job not found"), /* @__PURE__ */ React.createElement(Button, { onClick: () => navigate("/employer/jobs"), className: "mt-4" }, "Back to My Jobs"));
  }
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => navigate("/employer/jobs"), className: "mb-6" }, /* @__PURE__ */ React.createElement(ArrowLeft, { className: "h-4 w-4 mr-2" }), " Back to My Jobs"), /* @__PURE__ */ React.createElement("div", { className: "mb-8" }, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "Applications for ", job.title), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, "Total Applicants: ", jobApplications.length)), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-1 space-y-4" }, jobApplications.length === 0 ? /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardContent, { className: "p-6 text-center text-gray-500" }, "No applications yet.")) : jobApplications.map((app, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: app.id,
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.1 }
    },
    /* @__PURE__ */ React.createElement("a", { href: `#${app.id}`, className: "block" }, /* @__PURE__ */ React.createElement(Card, { className: "hover:shadow-md transition-shadow cursor-pointer border-l-4 border-l-indigo-500" }, /* @__PURE__ */ React.createElement(CardContent, { className: "p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900 dark:text-white" }, app.jobseekerName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500" }, new Date(app.appliedDate).toLocaleDateString())), /* @__PURE__ */ React.createElement(StatusBadge, { status: app.status })))))
  ))), /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-2 space-y-6" }, jobApplications.map((app) => /* @__PURE__ */ React.createElement(motion.div, { key: app.id, id: app.id, initial: { opacity: 0 }, animate: { opacity: 1 } }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, { className: "flex flex-row items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(CardTitle, null, app.jobseekerName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 mt-1" }, app.jobseekerEmail)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2" }, app.status === "pending" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "outline", className: "text-green-600 hover:text-green-700 hover:bg-green-50", onClick: () => handleStatusUpdate(app.id, "accepted") }, /* @__PURE__ */ React.createElement(Check, { className: "h-4 w-4 mr-1" }), " Accept"), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "outline", className: "text-red-600 hover:text-red-700 hover:bg-red-50", onClick: () => handleStatusUpdate(app.id, "rejected") }, /* @__PURE__ */ React.createElement(X, { className: "h-4 w-4 mr-1" }), " Reject")), app.status === "accepted" && /* @__PURE__ */ React.createElement(Button, { size: "sm", disabled: true, className: "bg-green-100 text-green-800 opacity-100" }, "Accepted"), app.status === "rejected" && /* @__PURE__ */ React.createElement(Button, { size: "sm", disabled: true, className: "bg-red-100 text-red-800 opacity-100" }, "Rejected"))), /* @__PURE__ */ React.createElement(CardContent, { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-600 dark:text-gray-300" }, /* @__PURE__ */ React.createElement(Phone, { className: "h-4 w-4" }), " ", app.jobseekerPhone), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-600 dark:text-gray-300" }, /* @__PURE__ */ React.createElement(MapPin, { className: "h-4 w-4" }), " ", app.address || "No address provided")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "font-semibold mb-2 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(GraduationCap, { className: "h-4 w-4" }), " Education"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-300 whitespace-pre-line" }, app.education)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "font-semibold mb-2 flex items-center gap-2" }, /* @__PURE__ */ React.createElement(BriefcaseIcon, { className: "h-4 w-4" }), " Experience"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-300 whitespace-pre-line" }, app.experience)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "font-semibold mb-2" }, "Skills"), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, app.skills.split(",").map((skill, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm text-gray-700 dark:text-gray-300" }, skill.trim())))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "font-semibold mb-2" }, "Resume"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-800 rounded border" }, /* @__PURE__ */ React.createElement(Download, { className: "h-4 w-4 text-gray-500" }), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-medium" }, app.resume), /* @__PURE__ */ React.createElement(Button, { variant: "link", size: "sm", className: "ml-auto" }, "Download"))), app.coverLetter && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "font-semibold mb-2" }, "Cover Letter"), /* @__PURE__ */ React.createElement("div", { className: "p-4 bg-gray-50 dark:bg-gray-800 rounded text-sm text-gray-600 dark:text-gray-300 italic" }, '"', app.coverLetter, '"'))))))))));
}
function StatusBadge({ status }) {
  const styles = {
    pending: "bg-yellow-100 text-yellow-800",
    reviewed: "bg-blue-100 text-blue-800",
    accepted: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800"
  };
  return /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${styles[status]}` }, status.charAt(0).toUpperCase() + status.slice(1));
}
export {
  JobApplicationsPage
};
