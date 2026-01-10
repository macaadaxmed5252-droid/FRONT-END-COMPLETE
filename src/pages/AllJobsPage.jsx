import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, CardContent, CardHeader, CardTitle } from "../components/design-system/card";
import { Badge } from "../components/design-system/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/design-system/select";
import { Button } from "../components/design-system/button";
import { MapPin, DollarSign, Building2, Users, Trash2, Check, X } from "lucide-react";
import { motion } from "motion/react";
import { deleteJob, approveJob, rejectJob } from "../store/jobsSlice";
import { toast } from "sonner";
function AllJobsPage() {
  const { jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [filterStatus, setFilterStatus] = useState("all");
  const filteredJobs = filterStatus === "all" ? jobs : jobs.filter((job) => job.status === filterStatus);
  const getStatusBadge = (status) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      approved: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      rejected: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
    };
    return colors[status] || colors.pending;
  };
  const handleApprove = (id) => {
    dispatch(approveJob(id));
    toast.success("Job approved");
  };
  const handleReject = (id) => {
    dispatch(rejectJob(id));
    toast.success("Job rejected");
  };
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this job listing permanently?")) {
      dispatch(deleteJob(id));
      toast.success("Job deleted");
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      className: "mb-8"
    },
    /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "All Jobs"),
    /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, filteredJobs.length, " total ", filteredJobs.length === 1 ? "job" : "jobs")
  ), /* @__PURE__ */ React.createElement(Card, { className: "mb-6" }, /* @__PURE__ */ React.createElement(CardContent, { className: "pt-6" }, /* @__PURE__ */ React.createElement(Select, { value: filterStatus, onValueChange: setFilterStatus }, /* @__PURE__ */ React.createElement(SelectTrigger, { className: "w-full md:w-64" }, /* @__PURE__ */ React.createElement(SelectValue, { placeholder: "Filter by status" })), /* @__PURE__ */ React.createElement(SelectContent, null, /* @__PURE__ */ React.createElement(SelectItem, { value: "all" }, "All Status"), /* @__PURE__ */ React.createElement(SelectItem, { value: "pending" }, "Pending"), /* @__PURE__ */ React.createElement(SelectItem, { value: "approved" }, "Approved"), /* @__PURE__ */ React.createElement(SelectItem, { value: "rejected" }, "Rejected"))))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, filteredJobs.map((job, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: job.id,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.05 }
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(CardTitle, { className: "text-xl mb-2" }, job.title), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(Building2, { className: "h-4 w-4 mr-2" }), job.company)), /* @__PURE__ */ React.createElement(Badge, { className: getStatusBadge(job.status) }, job.status))), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement(Badge, { variant: "secondary" }, job.type), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-sm" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(MapPin, { className: "h-4 w-4 mr-2" }), job.location), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(DollarSign, { className: "h-4 w-4 mr-2" }), job.salary), /* @__PURE__ */ React.createElement("div", { className: "flex items-center text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement(Users, { className: "h-4 w-4 mr-2" }), job.applicationsCount, " Applications")), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-gray-500 dark:text-gray-400" }, "Posted: ", new Date(job.postedDate).toLocaleDateString()), /* @__PURE__ */ React.createElement("div", { className: "pt-4 flex gap-2 justify-end border-t mt-4" }, job.status === "pending" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Button, { size: "sm", className: "bg-green-600 hover:bg-green-700 text-white", onClick: () => handleApprove(job.id) }, /* @__PURE__ */ React.createElement(Check, { className: "h-3 w-3 mr-1" }), " Approve"), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "outline", className: "text-red-600 border-red-200 hover:bg-red-50", onClick: () => handleReject(job.id) }, /* @__PURE__ */ React.createElement(X, { className: "h-3 w-3 mr-1" }), " Reject")), job.status === "rejected" && /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "outline", onClick: () => handleApprove(job.id) }, "Approve"), job.status === "approved" && /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "outline", onClick: () => handleReject(job.id) }, "Reject"), /* @__PURE__ */ React.createElement(Button, { size: "sm", variant: "destructive", onClick: () => handleDelete(job.id) }, /* @__PURE__ */ React.createElement(Trash2, { className: "h-3 w-3" }))))))
  )))));
}
export {
  AllJobsPage
};
