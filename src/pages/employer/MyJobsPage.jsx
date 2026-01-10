import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteJob } from "../../store/jobsSlice";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/design-system/card";
import { Button } from "../../components/design-system/button";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Trash2, Users } from "lucide-react";
import { motion } from "motion/react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../../components/design-system/dialog";
function MyJobsPage() {
  const { user } = useSelector((state) => state.auth);
  const { jobs } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [jobToDelete, setJobToDelete] = useState(null);
  const myJobs = jobs.filter((job) => job.employerId === user?.id || user?.role === "employer" && job.company === user.name);
  const handleDelete = () => {
    if (jobToDelete) {
      dispatch(deleteJob(jobToDelete));
      toast.success("Job listing removed successfully");
      setJobToDelete(null);
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center justify-between mb-8" }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => navigate("/employer/dashboard"), className: "flex items-center" }, /* @__PURE__ */ React.createElement(ArrowLeft, { className: "h-4 w-4 mr-2" }), " Back to Dashboard"), /* @__PURE__ */ React.createElement(Link, { to: "/employer/post-job" }, /* @__PURE__ */ React.createElement(Button, { className: "bg-indigo-600 hover:bg-indigo-700 text-white" }, "Post New Job"))), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl" }, "My Job Listings")), /* @__PURE__ */ React.createElement(CardContent, null, myJobs.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-10" }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 mb-4" }, "You haven't posted any jobs yet."), /* @__PURE__ */ React.createElement(Link, { to: "/employer/post-job" }, /* @__PURE__ */ React.createElement(Button, null, "Post Your First Job"))) : /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, myJobs.map((job) => /* @__PURE__ */ React.createElement(
      motion.div,
      {
        key: job.id,
        layout: true,
        className: "border rounded-lg p-4 bg-white dark:bg-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm"
      },
      /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-gray-900 dark:text-white" }, job.title), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-500 mb-1" }, job.location, " \u2022 ", job.type), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement("span", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Users, { className: "h-3 w-3 mr-1" }), " ", job.applicationsCount, " Applications"), /* @__PURE__ */ React.createElement("span", { className: `px-2 py-0.5 rounded-full text-xs ${job.status === "approved" ? "bg-green-100 text-green-800" : job.status === "rejected" ? "bg-red-100 text-red-800" : "bg-yellow-100 text-yellow-800"}` }, job.status === "approved" ? "Active" : job.status === "rejected" ? "Rejected" : "Pending"))),
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Link, { to: `/employer/applications/${job.id}` }, /* @__PURE__ */ React.createElement(Button, { variant: "outline", size: "sm", className: "flex items-center" }, /* @__PURE__ */ React.createElement(Users, { className: "h-4 w-4 mr-2" }), " View Applications")), /* @__PURE__ */ React.createElement(
        Button,
        {
          variant: "destructive",
          size: "sm",
          onClick: () => setJobToDelete(job.id)
        },
        /* @__PURE__ */ React.createElement(Trash2, { className: "h-4 w-4" })
      ))
    )))))
  ), /* @__PURE__ */ React.createElement(Dialog, { open: !!jobToDelete, onOpenChange: (open) => !open && setJobToDelete(null) }, /* @__PURE__ */ React.createElement(DialogContent, null, /* @__PURE__ */ React.createElement(DialogHeader, null, /* @__PURE__ */ React.createElement(DialogTitle, null, "Delete Job Listing"), /* @__PURE__ */ React.createElement(DialogDescription, null, "Are you sure you want to delete this job listing? This action cannot be undone.")), /* @__PURE__ */ React.createElement(DialogFooter, null, /* @__PURE__ */ React.createElement(Button, { variant: "outline", onClick: () => setJobToDelete(null) }, "Cancel"), /* @__PURE__ */ React.createElement(Button, { variant: "destructive", onClick: handleDelete }, "Delete"))))));
}
export {
  MyJobsPage
};
