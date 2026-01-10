import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addJob } from "../../store/jobsSlice";
import { Button } from "../../components/design-system/button";
import { Input } from "../../components/design-system/input";
import { Label } from "../../components/design-system/label";
import { Textarea } from "../../components/design-system/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/design-system/select";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/design-system/card";
import { toast } from "sonner";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
function PostJobPage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "Full-time",
    category: "",
    salary: "",
    description: "",
    requirements: "",
    responsibilities: "",
    benefits: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSelectChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.location || !formData.category || !formData.salary || !formData.description) {
      toast.error("Please fill in all required fields");
      return;
    }
    const newJob = {
      id: Math.random().toString(36).substr(2, 9),
      employerId: user?.id,
      company: user?.name || "Unknown Company",
      // Fallback
      postedDate: (/* @__PURE__ */ new Date()).toISOString(),
      status: "pending",
      applicationsCount: 0,
      title: formData.title,
      location: formData.location,
      type: formData.type,
      category: formData.category,
      salary: formData.salary,
      description: formData.description,
      requirements: formData.requirements.split("\n").filter((line) => line.trim()),
      responsibilities: formData.responsibilities.split("\n").filter((line) => line.trim()),
      benefits: formData.benefits.split("\n").filter((line) => line.trim())
    };
    dispatch(addJob({ ...newJob, status: "pending" }));
    toast.success("Job posted successfully!");
    navigate("/employer/dashboard");
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", onClick: () => navigate("/employer/dashboard"), className: "mb-6" }, /* @__PURE__ */ React.createElement(ArrowLeft, { className: "h-4 w-4 mr-2" }), " Back to Dashboard"), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 }
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl" }, "Post a New Job")), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "title" }, "Job Title *"), /* @__PURE__ */ React.createElement(Input, { id: "title", name: "title", value: formData.title, onChange: handleChange, required: true, placeholder: "e.g. Senior Software Engineer" })), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "location" }, "Location *"), /* @__PURE__ */ React.createElement(Input, { id: "location", name: "location", value: formData.location, onChange: handleChange, required: true, placeholder: "e.g. Mogadishu, Remote" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "salary" }, "Salary Range *"), /* @__PURE__ */ React.createElement(Input, { id: "salary", name: "salary", value: formData.salary, onChange: handleChange, required: true, placeholder: "e.g. $800 - $1200 / month" }))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, null, "Job Type"), /* @__PURE__ */ React.createElement(Select, { value: formData.type, onValueChange: (val) => handleSelectChange("type", val) }, /* @__PURE__ */ React.createElement(SelectTrigger, null, /* @__PURE__ */ React.createElement(SelectValue, null)), /* @__PURE__ */ React.createElement(SelectContent, null, /* @__PURE__ */ React.createElement(SelectItem, { value: "Full-time" }, "Full-time"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Part-time" }, "Part-time"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Contract" }, "Contract"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Internship" }, "Internship")))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "category" }, "Category *"), /* @__PURE__ */ React.createElement(Select, { value: formData.category, onValueChange: (val) => handleSelectChange("category", val) }, /* @__PURE__ */ React.createElement(SelectTrigger, null, /* @__PURE__ */ React.createElement(SelectValue, { placeholder: "Select Category" })), /* @__PURE__ */ React.createElement(SelectContent, null, /* @__PURE__ */ React.createElement(SelectItem, { value: "Technology" }, "Technology"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Marketing" }, "Marketing"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Finance" }, "Finance"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Healthcare" }, "Healthcare"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Education" }, "Education"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Management" }, "Management"), /* @__PURE__ */ React.createElement(SelectItem, { value: "Customer Service" }, "Customer Service"))))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "description" }, "Job Description *"), /* @__PURE__ */ React.createElement(Textarea, { id: "description", name: "description", value: formData.description, onChange: handleChange, required: true, rows: 5, placeholder: "Describe the role and responsibilities..." })), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "requirements" }, "Requirements (One per line)"), /* @__PURE__ */ React.createElement(Textarea, { id: "requirements", name: "requirements", value: formData.requirements, onChange: handleChange, rows: 4, placeholder: "e.g. Bachelor's Degree\n3+ years experience" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "responsibilities" }, "Responsibilities (One per line)"), /* @__PURE__ */ React.createElement(Textarea, { id: "responsibilities", name: "responsibilities", value: formData.responsibilities, onChange: handleChange, rows: 4, placeholder: "e.g. Lead the team\nDevelop new features" })), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "benefits" }, "Benefits (One per line)"), /* @__PURE__ */ React.createElement(Textarea, { id: "benefits", name: "benefits", value: formData.benefits, onChange: handleChange, rows: 3, placeholder: "e.g. Health Insurance\nFlexible hours" })), /* @__PURE__ */ React.createElement(Button, { type: "submit", className: "w-full bg-indigo-600 hover:bg-indigo-700 text-white" }, "Post Job"))))
  )));
}
export {
  PostJobPage
};
