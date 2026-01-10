import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./design-system/card";
import { Badge } from "./design-system/badge";
import { Button } from "./design-system/button";
import { MapPin, Building2, Clock, DollarSign, Bookmark } from "lucide-react";
import { useApp } from "../context/AppContext";
const JobCard = ({ job, onViewDetails, showStatus = false }) => {
  const { currentUser, savedJobs, saveJob, unsaveJob } = useApp();
  const isSaved = savedJobs.some(
    (sj) => sj.userId === currentUser?.id && sj.jobId === job.id
  );
  const handleSaveToggle = (e) => {
    e.stopPropagation();
    if (isSaved) {
      unsaveJob(job.id);
    } else {
      saveJob(job.id);
    }
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  const getDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const today = /* @__PURE__ */ new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1e3 * 60 * 60 * 24));
    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
  };
  return /* @__PURE__ */ React.createElement(Card, { className: "hover:shadow-lg transition-shadow cursor-pointer", onClick: () => onViewDetails(job) }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-start" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement(CardTitle, { className: "mb-2" }, job.title), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-600 mb-2" }, /* @__PURE__ */ React.createElement(Building2, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, job.company))), currentUser?.role === "job-seeker" && /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon",
      onClick: handleSaveToggle,
      className: isSaved ? "text-indigo-600" : ""
    },
    /* @__PURE__ */ React.createElement(Bookmark, { className: "w-5 h-5", fill: isSaved ? "currentColor" : "none" })
  ))), /* @__PURE__ */ React.createElement(CardContent, { className: "space-y-3" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-2" }, /* @__PURE__ */ React.createElement(Badge, { variant: "secondary" }, /* @__PURE__ */ React.createElement(MapPin, { className: "w-3 h-3 mr-1" }), job.location), /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, job.type), /* @__PURE__ */ React.createElement(Badge, { variant: "outline" }, job.category)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-600" }, /* @__PURE__ */ React.createElement(DollarSign, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, job.salary)), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 text-gray-500 text-sm" }, /* @__PURE__ */ React.createElement(Clock, { className: "w-4 h-4" }), /* @__PURE__ */ React.createElement("span", null, getDaysAgo(job.postedDate))), showStatus && /* @__PURE__ */ React.createElement(Badge, { className: getStatusColor(job.status) }, job.status.charAt(0).toUpperCase() + job.status.slice(1)), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 line-clamp-2" }, job.description)));
};
export {
  JobCard
};
