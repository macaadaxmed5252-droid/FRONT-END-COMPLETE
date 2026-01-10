import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/design-system/card";
import { Briefcase, Users, CheckCircle, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../../components/design-system/button";
import { motion } from "motion/react";
function EmployerDashboard() {
  const { user } = useSelector((state) => state.auth);
  const { jobs, applications } = useSelector((state) => state.jobs);
  const myJobs = jobs.filter((job) => job.employerId === user?.id || user?.role === "employer" && job.company === user.name);
  const myJobIds = myJobs.map((j) => j.id);
  const myApplications = applications.filter((app) => myJobIds.includes(app.jobId));
  const stats = [
    { label: "Active Jobs", value: myJobs.length, icon: Briefcase, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Total Applications", value: myApplications.length, icon: Users, color: "text-purple-600", bg: "bg-purple-100" },
    { label: "Pending Review", value: myApplications.filter((a) => a.status === "pending").length, icon: Clock, color: "text-orange-600", bg: "bg-orange-100" },
    { label: "Hired Candidates", value: myApplications.filter((a) => a.status === "accepted").length, icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      className: "flex justify-between items-center mb-8"
    },
    /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white" }, "Employer Dashboard"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, "Welcome back, ", user?.name)),
    /* @__PURE__ */ React.createElement(Link, { to: "/employer/post-job" }, /* @__PURE__ */ React.createElement(Button, { className: "bg-indigo-600 hover:bg-indigo-700 text-white" }, "Post New Job"))
  ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" }, stats.map((stat, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: stat.label,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 }
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardContent, { className: "p-6 flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400" }, stat.label), /* @__PURE__ */ React.createElement("p", { className: "text-3xl font-bold text-gray-900 dark:text-white mt-2" }, stat.value)), /* @__PURE__ */ React.createElement("div", { className: `p-4 rounded-full ${stat.bg}` }, /* @__PURE__ */ React.createElement(stat.icon, { className: `h-6 w-6 ${stat.color}` }))))
  ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8" }, /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Recent Job Postings")), /* @__PURE__ */ React.createElement(CardContent, null, myJobs.length === 0 ? /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-center py-4" }, "No jobs posted yet.") : /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, myJobs.slice(0, 5).map((job) => /* @__PURE__ */ React.createElement("div", { key: job.id, className: "flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900 dark:text-white" }, job.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500" }, new Date(job.postedDate).toLocaleDateString(), " \u2022 ", job.type), /* @__PURE__ */ React.createElement("div", { className: "mt-1" }, /* @__PURE__ */ React.createElement("span", { className: `px-2 py-0.5 rounded-full text-xs ${job.status === "approved" ? "bg-green-100 text-green-800" : job.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}` }, job.status.charAt(0).toUpperCase() + job.status.slice(1)))), /* @__PURE__ */ React.createElement(Link, { to: `/employer/jobs/${job.id}` }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm" }, "Manage"))))), myJobs.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-4 text-center" }, /* @__PURE__ */ React.createElement(Link, { to: "/employer/jobs", className: "text-indigo-600 hover:underline text-sm font-medium" }, "View All Jobs")))), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Recent Applications")), /* @__PURE__ */ React.createElement(CardContent, null, myApplications.length === 0 ? /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-center py-4" }, "No applications received yet.") : /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, myApplications.slice(0, 5).map((app) => /* @__PURE__ */ React.createElement("div", { key: app.id, className: "flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-gray-900 dark:text-white" }, app.jobseekerName), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500" }, "Applied for: ", jobs.find((j) => j.id === app.jobId)?.title)), /* @__PURE__ */ React.createElement(Badge, { status: app.status })))), myApplications.length > 0 && /* @__PURE__ */ React.createElement("div", { className: "mt-4 text-center" }, /* @__PURE__ */ React.createElement(Link, { to: "/employer/applications", className: "text-indigo-600 hover:underline text-sm font-medium" }, "View All Applications")))))));
}
function Badge({ status }) {
  const styles = {
    pending: "bg-yellow-100 text-yellow-800",
    reviewed: "bg-blue-100 text-blue-800",
    accepted: "bg-green-100 text-green-800",
    rejected: "bg-red-100 text-red-800"
  };
  return /* @__PURE__ */ React.createElement("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${styles[status]}` }, status.charAt(0).toUpperCase() + status.slice(1));
}
export {
  EmployerDashboard
};
