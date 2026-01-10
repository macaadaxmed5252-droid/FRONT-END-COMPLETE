import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateApplicationStatus, markAdminContacted } from "../store/jobsSlice";
import { Button } from "../components/design-system/button";
import { Card, CardContent } from "../components/design-system/card";
import { Badge } from "../components/design-system/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/design-system/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/design-system/select";
import { FileText, Mail, Phone, MapPin, Check, X, MessageCircle, Bell } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
function AdminApplicationsPage() {
  const { applications, jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const filteredApplications = filterStatus === "all" ? applications : applications.filter((app) => app.status === filterStatus);
  const getJobTitle = (jobId) => jobs.find((j) => j.id === jobId)?.title || "Unknown Job";
  const handleStatusUpdate = (applicationId, newStatus) => {
    dispatch(updateApplicationStatus({ id: applicationId, status: newStatus }));
    if (newStatus === "accepted") {
      toast.success("Application accepted! Applicant will be notified.");
    } else if (newStatus === "rejected") {
      toast.error("Application rejected.");
    }
    setSelectedApplication(null);
  };
  const handleContact = (applicationId) => {
    dispatch(markAdminContacted(applicationId));
    toast.success("Contact notification sent to applicant");
  };
  const getStatusBadge = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      reviewed: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      accepted: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return colors[status] || colors.pending;
  };
  const pendingCount = applications.filter((a) => a.status === "pending").length;
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      className: "mb-8"
    },
    /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "Job Applications"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, filteredApplications.length, " ", filteredApplications.length === 1 ? "application" : "applications")), pendingCount > 0 && /* @__PURE__ */ React.createElement(Badge, { className: "bg-red-500 text-white flex items-center gap-2 px-4 py-2" }, /* @__PURE__ */ React.createElement(Bell, { className: "h-4 w-4" }), pendingCount, " New Application", pendingCount !== 1 ? "s" : ""))
  ), /* @__PURE__ */ React.createElement(Card, { className: "mb-6" }, /* @__PURE__ */ React.createElement(CardContent, { className: "pt-6" }, /* @__PURE__ */ React.createElement(Select, { value: filterStatus, onValueChange: setFilterStatus }, /* @__PURE__ */ React.createElement(SelectTrigger, { className: "w-full md:w-64" }, /* @__PURE__ */ React.createElement(SelectValue, { placeholder: "Filter by status" })), /* @__PURE__ */ React.createElement(SelectContent, null, /* @__PURE__ */ React.createElement(SelectItem, { value: "all" }, "All Applications"), /* @__PURE__ */ React.createElement(SelectItem, { value: "pending" }, "Pending"), /* @__PURE__ */ React.createElement(SelectItem, { value: "reviewed" }, "Reviewed"), /* @__PURE__ */ React.createElement(SelectItem, { value: "accepted" }, "Accepted"), /* @__PURE__ */ React.createElement(SelectItem, { value: "rejected" }, "Rejected"))))), filteredApplications.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-12" }, /* @__PURE__ */ React.createElement(FileText, { className: "h-16 w-16 mx-auto text-gray-400 mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400 text-lg" }, "No applications found")) : /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, filteredApplications.map((application, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: application.id,
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.05 }
    },
    /* @__PURE__ */ React.createElement(
      Card,
      {
        className: `cursor-pointer hover:shadow-lg transition-shadow ${application.status === "pending" ? "border-l-4 border-l-yellow-500" : ""}`,
        onClick: () => setSelectedApplication(application)
      },
      /* @__PURE__ */ React.createElement(CardContent, { className: "pt-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2" }, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white" }, application.jobseekerName), application.status === "pending" && /* @__PURE__ */ React.createElement(Badge, { className: "bg-yellow-500 text-white" }, /* @__PURE__ */ React.createElement(Bell, { className: "h-3 w-3 mr-1" }), "New"), application.adminContacted && /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, /* @__PURE__ */ React.createElement(MessageCircle, { className: "h-3 w-3 mr-1" }), "Contacted")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2" }, "Applied for: ", /* @__PURE__ */ React.createElement("span", { className: "font-semibold" }, getJobTitle(application.jobId))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Mail, { className: "h-4 w-4 mr-1" }), application.jobseekerEmail), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Phone, { className: "h-4 w-4 mr-1" }), application.jobseekerPhone)), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500 mt-2" }, "Applied on ", new Date(application.appliedDate).toLocaleDateString())), /* @__PURE__ */ React.createElement(Badge, { className: getStatusBadge(application.status) }, application.status)))
    )
  )))), /* @__PURE__ */ React.createElement(Dialog, { open: !!selectedApplication, onOpenChange: () => setSelectedApplication(null) }, /* @__PURE__ */ React.createElement(DialogContent, { className: "max-w-3xl max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ React.createElement(DialogHeader, null, /* @__PURE__ */ React.createElement(DialogTitle, null, "Application Details")), selectedApplication && /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, selectedApplication.status === "pending" && /* @__PURE__ */ React.createElement("div", { className: "bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Bell, { className: "h-5 w-5 text-yellow-600" }), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold text-yellow-800 dark:text-yellow-200" }, "This person has applied for a job - Please review and take action"))), selectedApplication.adminContacted && /* @__PURE__ */ React.createElement("div", { className: "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(MessageCircle, { className: "h-5 w-5 text-blue-600" }), /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold text-blue-800 dark:text-blue-200" }, "You have contacted this applicant"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Job Position"), /* @__PURE__ */ React.createElement("p", { className: "text-lg text-indigo-600 dark:text-indigo-400" }, getJobTitle(selectedApplication.jobId))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Applicant Information"), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("strong", null, "Name:"), " ", selectedApplication.jobseekerName), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Mail, { className: "h-4 w-4 mr-2" }), selectedApplication.jobseekerEmail), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Phone, { className: "h-4 w-4 mr-2" }), selectedApplication.jobseekerPhone), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(MapPin, { className: "h-4 w-4 mr-2" }), selectedApplication.address))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Education"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, selectedApplication.education)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Work Experience"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, selectedApplication.experience)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Skills"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, selectedApplication.skills)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Cover Letter"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400 whitespace-pre-wrap" }, selectedApplication.coverLetter)), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-4" }, !selectedApplication.adminContacted && /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => handleContact(selectedApplication.id),
      variant: "outline",
      className: "flex-1"
    },
    /* @__PURE__ */ React.createElement(MessageCircle, { className: "mr-2 h-4 w-4" }),
    "Mark as Contacted"
  ), selectedApplication.status === "pending" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => handleStatusUpdate(selectedApplication.id, "accepted"),
      className: "flex-1 bg-green-600 hover:bg-green-700"
    },
    /* @__PURE__ */ React.createElement(Check, { className: "mr-2 h-4 w-4" }),
    "Accept"
  ), /* @__PURE__ */ React.createElement(
    Button,
    {
      onClick: () => handleStatusUpdate(selectedApplication.id, "rejected"),
      variant: "destructive",
      className: "flex-1"
    },
    /* @__PURE__ */ React.createElement(X, { className: "mr-2 h-4 w-4" }),
    "Reject"
  )))))));
}
export {
  AdminApplicationsPage
};
