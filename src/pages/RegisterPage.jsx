import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login, registerUser } from "../store/authSlice";
import { Button } from "../components/design-system/button";
import { Input } from "../components/design-system/input";
import { Label } from "../components/design-system/label";
import { Textarea } from "../components/design-system/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/design-system/card";
import { Briefcase, Building2, User } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger } from "../components/design-system/tabs";
function RegisterPage() {
  const [role, setRole] = useState("jobseeker");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    education: "",
    experience: "",
    skills: "",
    companyName: "",
    // For employer
    companyDescription: "",
    // For employer
    website: ""
    // For employer
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password) {
      toast.error("Please fill in all required fields");
      return;
    }
    if (role === "employer" && !formData.companyName) {
      toast.error("Company Name is required for employers");
      return;
    }
    const user = {
      id: Math.random().toString(36).substr(2, 9),
      role,
      ...formData,
      // Use company name as main name for employer if provided, else use personal name
      name: role === "employer" ? formData.companyName || formData.name : formData.name
    };
    dispatch(registerUser(user));
    dispatch(login(user));
    toast.success(`Registration successful! Welcome, ${role === "employer" ? "Partner" : "Job Seeker"}!`);
    navigate(role === "employer" ? "/employer/dashboard" : "/home");
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "w-full max-w-2xl"
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, { className: "space-y-1 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-center mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full" }, role === "employer" ? /* @__PURE__ */ React.createElement(Building2, { className: "h-12 w-12 text-indigo-600 dark:text-indigo-400" }) : /* @__PURE__ */ React.createElement(Briefcase, { className: "h-12 w-12 text-indigo-600 dark:text-indigo-400" }))), /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl" }, "Create Account"), /* @__PURE__ */ React.createElement(CardDescription, null, role === "employer" ? "Register as an Employer" : "Register as a Job Seeker")), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement(Tabs, { defaultValue: "jobseeker", value: role, onValueChange: (v) => setRole(v), className: "w-full" }, /* @__PURE__ */ React.createElement(TabsList, { className: "grid w-full grid-cols-2" }, /* @__PURE__ */ React.createElement(TabsTrigger, { value: "jobseeker", className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(User, { className: "h-4 w-4" }), " Job Seeker"), /* @__PURE__ */ React.createElement(TabsTrigger, { value: "employer", className: "flex items-center gap-2" }, /* @__PURE__ */ React.createElement(Building2, { className: "h-4 w-4" }), " Employer")))), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "name" }, role === "employer" ? "Contact Person Name *" : "Full Name *"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "name",
        name: "name",
        value: formData.name,
        onChange: handleChange,
        required: true
      }
    )), role === "employer" && /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "companyName" }, "Company Name *"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "companyName",
        name: "companyName",
        value: formData.companyName,
        onChange: handleChange,
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "email" }, "Email *"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "email",
        name: "email",
        type: "email",
        value: formData.email,
        onChange: handleChange,
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "password" }, "Password *"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "password",
        name: "password",
        type: "password",
        value: formData.password,
        onChange: handleChange,
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "phone" }, "Phone Number"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "phone",
        name: "phone",
        value: formData.phone,
        onChange: handleChange
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "address" }, role === "employer" ? "Company Address" : "Address"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "address",
        name: "address",
        value: formData.address,
        onChange: handleChange
      }
    ))), role === "jobseeker" ? /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "education" }, "Education"), /* @__PURE__ */ React.createElement(
      Textarea,
      {
        id: "education",
        name: "education",
        placeholder: "e.g. Bachelor's in Computer Science, University of Mogadishu, 2020",
        value: formData.education,
        onChange: handleChange,
        rows: 2
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "experience" }, "Work Experience"), /* @__PURE__ */ React.createElement(
      Textarea,
      {
        id: "experience",
        name: "experience",
        placeholder: "e.g. Software Developer at Tech Co, 2020-2023",
        value: formData.experience,
        onChange: handleChange,
        rows: 3
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "skills" }, "Skills"), /* @__PURE__ */ React.createElement(
      Textarea,
      {
        id: "skills",
        name: "skills",
        placeholder: "e.g. React, TypeScript, Node.js, Python",
        value: formData.skills,
        onChange: handleChange,
        rows: 2
      }
    ))) : /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "companyDescription" }, "Company Description"), /* @__PURE__ */ React.createElement(
      Textarea,
      {
        id: "companyDescription",
        name: "companyDescription",
        placeholder: "Tell us about your company...",
        value: formData.companyDescription,
        onChange: handleChange,
        rows: 3
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "website" }, "Website"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "website",
        name: "website",
        placeholder: "https://example.com",
        value: formData.website,
        onChange: handleChange
      }
    ))), /* @__PURE__ */ React.createElement(Button, { type: "submit", className: "w-full" }, role === "employer" ? "Create Employer Account" : "Create Job Seeker Account"), /* @__PURE__ */ React.createElement("div", { className: "text-center text-sm" }, /* @__PURE__ */ React.createElement("span", { className: "text-gray-600 dark:text-gray-400" }, "Already have an account? "), /* @__PURE__ */ React.createElement(Link, { to: "/login", className: "text-indigo-600 hover:underline" }, "Sign In")))))
  ));
}
export {
  RegisterPage
};
