import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "../components/design-system/card";
import { Briefcase, Users, Building2, CheckCircle, XCircle, Clock, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
function ReportsPage() {
  const { jobs, applications } = useSelector((state) => state.jobs);
  const stats = {
    totalJobs: jobs.length,
    approvedJobs: jobs.filter((j) => j.status === "approved").length,
    pendingJobs: jobs.filter((j) => j.status === "pending").length,
    rejectedJobs: jobs.filter((j) => j.status === "rejected").length,
    totalApplications: applications.length,
    acceptedApplications: applications.filter((a) => a.status === "accepted").length,
    pendingApplications: applications.filter((a) => a.status === "pending").length,
    rejectedApplications: applications.filter((a) => a.status === "rejected").length
  };
  const statCards = [
    { label: "Total Jobs", value: stats.totalJobs, icon: Briefcase, color: "text-blue-600" },
    { label: "Approved Jobs", value: stats.approvedJobs, icon: CheckCircle, color: "text-green-600" },
    { label: "Pending Jobs", value: stats.pendingJobs, icon: Clock, color: "text-yellow-600" },
    { label: "Rejected Jobs", value: stats.rejectedJobs, icon: XCircle, color: "text-red-600" },
    { label: "Total Applications", value: stats.totalApplications, icon: Users, color: "text-purple-600" },
    { label: "Accepted Applications", value: stats.acceptedApplications, icon: CheckCircle, color: "text-green-600" },
    { label: "Pending Applications", value: stats.pendingApplications, icon: Clock, color: "text-yellow-600" },
    { label: "Rejected Applications", value: stats.rejectedApplications, icon: XCircle, color: "text-red-600" }
  ];
  const jobsByCategory = jobs.reduce((acc, job) => {
    acc[job.category] = (acc[job.category] || 0) + 1;
    return acc;
  }, {});
  const jobsByType = jobs.reduce((acc, job) => {
    acc[job.type] = (acc[job.type] || 0) + 1;
    return acc;
  }, {});
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      className: "mb-8"
    },
    /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "Reports & Analytics"),
    /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, "Platform statistics and insights")
  ), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" }, statCards.map((stat, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: stat.label,
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { delay: index * 0.05 }
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardContent, { className: "pt-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1" }, stat.label), /* @__PURE__ */ React.createElement("p", { className: "text-3xl font-bold text-gray-900 dark:text-white" }, stat.value)), /* @__PURE__ */ React.createElement("div", { className: `p-3 rounded-full bg-gray-100 dark:bg-gray-800 ${stat.color}` }, /* @__PURE__ */ React.createElement(stat.icon, { className: "h-6 w-6" })))))
  ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.4 }
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Jobs by Category")), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, Object.entries(jobsByCategory).map(([category, count]) => /* @__PURE__ */ React.createElement("div", { key: category, className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-gray-700 dark:text-gray-300" }, category), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "bg-indigo-600 h-2 rounded-full",
        style: { width: `${count / jobs.length * 100}%` }
      }
    )), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold w-8 text-right" }, count)))))))
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.5 }
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Jobs by Type")), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, Object.entries(jobsByType).map(([type, count]) => /* @__PURE__ */ React.createElement("div", { key: type, className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-gray-700 dark:text-gray-300" }, type), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement("div", { className: "w-32 bg-gray-200 dark:bg-gray-700 rounded-full h-2" }, /* @__PURE__ */ React.createElement(
      "div",
      {
        className: "bg-purple-600 h-2 rounded-full",
        style: { width: `${count / jobs.length * 100}%` }
      }
    )), /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold w-8 text-right" }, count)))))))
  )), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.6 },
      className: "mt-6"
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Platform Performance")), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement(TrendingUp, { className: "h-12 w-12 mx-auto mb-2 text-green-600" }), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-gray-900 dark:text-white" }, stats.totalApplications > 0 ? Math.round(stats.acceptedApplications / stats.totalApplications * 100) : 0, "%"), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-400" }, "Success Rate")), /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement(Users, { className: "h-12 w-12 mx-auto mb-2 text-blue-600" }), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-gray-900 dark:text-white" }, stats.totalJobs > 0 ? (stats.totalApplications / stats.totalJobs).toFixed(1) : 0), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-400" }, "Avg Applications/Job")), /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement(Building2, { className: "h-12 w-12 mx-auto mb-2 text-purple-600" }), /* @__PURE__ */ React.createElement("p", { className: "text-2xl font-bold text-gray-900 dark:text-white" }, Object.keys(jobsByCategory).length), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-400" }, "Active Categories")))))
  )));
}
export {
  ReportsPage
};
