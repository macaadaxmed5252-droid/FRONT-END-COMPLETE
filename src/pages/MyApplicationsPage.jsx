import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "../components/design-system/card";
import { Badge } from "../components/design-system/badge";
import { FileText, Calendar, Building2, MapPin, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
function MyApplicationsPage() {
  const { applications } = useSelector((state) => state.jobs);
  const { jobs } = useSelector((state) => state.jobs);
  const { user } = useSelector((state) => state.auth);
  const myApplications = applications.filter((app) => app.jobseekerId === user?.id);
  const getJobDetails = (jobId) => jobs.find((j) => j.id === jobId);
  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "rejected":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      case "reviewed":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      className: "mb-8"
    },
    /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "My Applications"),
    /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, myApplications.length, " ", myApplications.length === 1 ? "application" : "applications", " submitted")
  ), myApplications.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-12" }, /* @__PURE__ */ React.createElement(FileText, { className: "h-16 w-16 mx-auto text-gray-400 mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400 text-lg" }, "No applications yet")) : /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, myApplications.map((application, index) => {
    const job = getJobDetails(application.jobId);
    return /* @__PURE__ */ React.createElement(
      motion.div,
      {
        key: application.id,
        initial: { opacity: 0, x: -20 },
        animate: { opacity: 1, x: 0 },
        transition: { delay: index * 0.05 }
      },
      /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(CardTitle, { className: "text-xl mb-2" }, job?.title), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400 mb-2" }, /* @__PURE__ */ React.createElement(Building2, { className: "h-4 w-4 mr-2" }), job?.company), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(MapPin, { className: "h-4 w-4 mr-2" }), job?.location)), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col gap-2 items-end" }, /* @__PURE__ */ React.createElement(Badge, { className: getStatusColor(application.status) }, application.status), application.adminContacted && /* @__PURE__ */ React.createElement(Badge, { variant: "default", className: "bg-blue-600 text-white" }, /* @__PURE__ */ React.createElement(MessageCircle, { className: "h-3 w-3 mr-1" }), "Admin Contacted You")))), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-sm text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(Calendar, { className: "h-4 w-4 mr-2" }), "Applied on ", new Date(application.appliedDate).toLocaleDateString())))
    );
  }))));
}
export {
  MyApplicationsPage
};
