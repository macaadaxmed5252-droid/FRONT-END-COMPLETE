import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../store/authSlice";
import { Button } from "../components/design-system/button";
import { Input } from "../components/design-system/input";
import { Label } from "../components/design-system/label";
import { Textarea } from "../components/design-system/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "../components/design-system/card";
import { User, Mail, Phone, MapPin, BookOpen, Briefcase, Award } from "lucide-react";
import { toast } from "sonner";
import { motion } from "motion/react";
function ProfilePage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    education: user?.education || "",
    experience: user?.experience || "",
    skills: user?.skills || ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile(formData));
    toast.success("Profile updated successfully!");
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      className: "mb-8"
    },
    /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "My Profile"),
    /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, "Manage your personal information")
  ), /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Profile Information")), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "name" }, /* @__PURE__ */ React.createElement(User, { className: "inline h-4 w-4 mr-2" }), "Full Name *"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "name",
      name: "name",
      value: formData.name,
      onChange: handleChange,
      required: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "email" }, /* @__PURE__ */ React.createElement(Mail, { className: "inline h-4 w-4 mr-2" }), "Email *"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "email",
      name: "email",
      type: "email",
      value: formData.email,
      onChange: handleChange,
      required: true,
      disabled: true
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "phone" }, /* @__PURE__ */ React.createElement(Phone, { className: "inline h-4 w-4 mr-2" }), "Phone Number"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "phone",
      name: "phone",
      value: formData.phone,
      onChange: handleChange
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "address" }, /* @__PURE__ */ React.createElement(MapPin, { className: "inline h-4 w-4 mr-2" }), "Address"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "address",
      name: "address",
      value: formData.address,
      onChange: handleChange
    }
  ))), user?.role === "jobseeker" && /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "education" }, /* @__PURE__ */ React.createElement(BookOpen, { className: "inline h-4 w-4 mr-2" }), "Education"), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      id: "education",
      name: "education",
      value: formData.education,
      onChange: handleChange,
      rows: 3,
      placeholder: "Your educational background..."
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "experience" }, /* @__PURE__ */ React.createElement(Briefcase, { className: "inline h-4 w-4 mr-2" }), "Work Experience"), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      id: "experience",
      name: "experience",
      value: formData.experience,
      onChange: handleChange,
      rows: 4,
      placeholder: "Your work experience..."
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "skills" }, /* @__PURE__ */ React.createElement(Award, { className: "inline h-4 w-4 mr-2" }), "Skills"), /* @__PURE__ */ React.createElement(
    Textarea,
    {
      id: "skills",
      name: "skills",
      value: formData.skills,
      onChange: handleChange,
      rows: 3,
      placeholder: "Your skills..."
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex gap-4" }, /* @__PURE__ */ React.createElement(Button, { type: "submit", className: "flex-1" }, "Save Changes"))))), /* @__PURE__ */ React.createElement(Card, { className: "mt-6" }, /* @__PURE__ */ React.createElement(CardHeader, null, /* @__PURE__ */ React.createElement(CardTitle, null, "Account Information")), /* @__PURE__ */ React.createElement(CardContent, { className: "space-y-2" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-gray-600 dark:text-gray-400" }, "Account Type:"), /* @__PURE__ */ React.createElement("span", { className: "font-semibold capitalize" }, user?.role)), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between" }, /* @__PURE__ */ React.createElement("span", { className: "text-gray-600 dark:text-gray-400" }, "User ID:"), /* @__PURE__ */ React.createElement("span", { className: "font-mono text-sm" }, user?.id))))));
}
export {
  ProfilePage
};
