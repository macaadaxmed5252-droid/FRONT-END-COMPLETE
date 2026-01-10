import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./design-system/dialog";
import { Badge } from "./design-system/badge";
import { Button } from "./design-system/button";
import { MapPin, Building2, Clock, DollarSign, Briefcase } from "lucide-react";
import { useApp } from "../context/AppContext";
const JobDetailsModal = ({ job, isOpen, onClose, onApply }) => {
  const { currentUser, applications } = useApp();
  if (!job) return null;
  const hasApplied = applications.some(
    (app) => app.jobId === job.id && app.applicantId === currentUser?.id
  );
  const getDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const today = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
  };
  return /* @__PURE__ */ React.createElement(Dialog, { open: isOpen, onOpenChange: onClose }, /* @__PURE__ */ React.createElement(DialogContent, { className: "max-w-3xl max-h-[90vh] overflow-y-auto" }, /* @__PURE__ */ React.createElement(DialogHeader, null, /* @__PURE__ */ React.createElement(DialogTitle, { className: "text-2xl" }, job.title)), /* @__PURE__ */ React.createElement("div", { className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-600" }, /* @__PURE__ */ React.createElement(Building2, { className: "w-5 h-5" }), /* @__PURE__ */ React.createElement("span", null, job.company)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-600" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-5 h-5" }), /* @__PURE__ */ React.createElement("span", null, job.location)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-600" }, /* @__PURE__ */ React.createElement(Clock, { className: "w-5 h-5" }), /* @__PURE__ */ React.createElement("span", null, getDaysAgo(job.postedDate))), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-600" }, /* @__PURE__ */ React.createElement(DollarSign, { className: "w-5 h-5" }), /* @__PURE__ */ React.createElement("span", null, job.salary))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, job.type), /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, job.category), /* @__PURE__ */ React.createElement(Badge, { variant: "secondary" }, /* @__PURE__ */ React.createElement(Briefcase, { className: "w-3 h-3 mr-1" }), job.applicationsCount, " applicants")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Job Description"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600" }, job.description)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Requirements"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc list-inside space-y-1 text-gray-600" }, job.requirements.map((req, index) => /* @__PURE__ */ React.createElement("li", { key: index }, req)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Responsibilities"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc list-inside space-y-1 text-gray-600" }, job.responsibilities.map((resp, index) => /* @__PURE__ */ React.createElement("li", { key: index }, resp)))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold mb-2" }, "Benefits"), /* @__PURE__ */ React.createElement("ul", { className: "list-disc list-inside space-y-1 text-gray-600" }, job.benefits.map((benefit, index) => /* @__PURE__ */ React.createElement("li", { key: index }, benefit)))), currentUser?.role === "job-seeker" && onApply && /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-4 border-t" }, hasApplied ? /* @__PURE__ */ React.createElement(Button, { disabled: true, className: "flex-1" }, "Already Applied") : /* @__PURE__ */ React.createElement(Button, { onClick: () => onApply(job), className: "flex-1" }, "Apply Now"), /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: onClose }, "Close")))));
};
export {
  JobDetailsModal
};
