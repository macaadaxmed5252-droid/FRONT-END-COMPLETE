import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./design-system/dialog";
import { Button } from "./design-system/button";
import { Textarea } from "./design-system/textarea";
import { Label } from "./design-system/label";
import { useApp } from "../context/AppContext";
import { toast } from "sonner";
const ApplyModal = ({ job, isOpen, onClose }) => {
  const { applyForJob } = useApp();
  const [resume, setResume] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!resume.trim() || !coverLetter.trim()) {
      toast.error("Please fill in all fields");
      return;
    }
    if (job) {
      applyForJob(job.id, resume, coverLetter);
      toast.success("Application submitted successfully!");
      setResume("");
      setCoverLetter("");
      onClose();
    }
  };
  if (!job) return null;
  return /* @__PURE__ */ React.createElement(Dialog, { open: isOpen, onOpenChange: onClose }, /* @__PURE__ */ React.createElement(DialogContent, { className: "max-w-2xl" }, /* @__PURE__ */ React.createElement(DialogHeader, null, /* @__PURE__ */ React.createElement(DialogTitle, null, "Apply for ", job.title)), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "resume" }, "Resume / CV"), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      id: "resume",
      placeholder: "Paste your resume or CV here...",
      value: resume,
      onChange: (e) => setResume(e.target.value),
      rows: 6,
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "cover-letter" }, "Cover Letter"), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      id: "cover-letter",
      placeholder: "Tell us why you're a great fit for this position...",
      value: coverLetter,
      onChange: (e) => setCoverLetter(e.target.value),
      rows: 6,
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "flex gap-2 pt-4" }, /* @__PURE__ */ React.createElement(Button, { type: "submit", className: "flex-1" }, "Submit Application"), /* @__PURE__ */ React.createElement(Button, { type: "button", variant: "outline", onClick: onClose }, "Cancel")))));
};
export {
  ApplyModal
};
