import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "../components/design-system/button";
import { Card, CardContent } from "../components/design-system/card";
import { ImageWithFallback } from "../components/images/ImageWithFallback";
import { Briefcase, Users, Building2, TrendingUp, Search, Award, Clock, MapPin } from "lucide-react";
import { motion } from "motion/react";
function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const { jobs } = useSelector((state) => state.jobs);
  const stats = [
    { label: "Active Jobs", value: jobs.filter((j) => j.status === "approved").length, icon: Briefcase, color: "text-blue-600" },
    { label: "Companies", value: "50+", icon: Building2, color: "text-green-600" },
    { label: "Job Seekers", value: "1000+", icon: Users, color: "text-purple-600" },
    { label: "Success Rate", value: "85%", icon: TrendingUp, color: "text-orange-600" }
  ];
  const featuredJobs = jobs.filter((j) => j.status === "approved").slice(0, 6);
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen" }, /* @__PURE__ */ React.createElement("section", { className: "relative bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-900 dark:to-purple-900 text-white overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 opacity-10" }, /* @__PURE__ */ React.createElement(
    ImageWithFallback,
    {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBvZmZpY2V8ZW58MXx8fHwxNzY3NjU2MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      alt: "Business team",
      className: "w-full h-full object-cover"
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6 }
    },
    /* @__PURE__ */ React.createElement("h1", { className: "text-4xl md:text-6xl font-bold mb-6" }, "Find Your Dream Job in Somalia"),
    /* @__PURE__ */ React.createElement("p", { className: "text-xl md:text-2xl mb-8 text-indigo-100" }, "Connecting talented professionals with amazing opportunities across the nation"),
    user?.role === "jobseeker" && /* @__PURE__ */ React.createElement("div", { className: "flex flex-wrap gap-4" }, /* @__PURE__ */ React.createElement(Link, { to: "/find-jobs" }, /* @__PURE__ */ React.createElement(Button, { size: "lg", className: "bg-white text-indigo-600 hover:bg-gray-100" }, /* @__PURE__ */ React.createElement(Search, { className: "mr-2 h-5 w-5" }), "Browse Jobs")), /* @__PURE__ */ React.createElement(Link, { to: "/saved-jobs" }, /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "outline", className: "bg-transparent border-white text-white hover:bg-white hover:text-indigo-600" }, "Saved Jobs")))
  ), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6, delay: 0.2 },
      className: "hidden lg:block"
    },
    /* @__PURE__ */ React.createElement(
      ImageWithFallback,
      {
        src: "https://images.unsplash.com/photo-1523287562758-66c7fc58967f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBzdWNjZXNzfGVufDF8fHx8MTc2NzYzMjU5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
        alt: "Career success",
        className: "rounded-lg shadow-2xl"
      }
    )
  )))), /* @__PURE__ */ React.createElement("section", { className: "py-12 bg-white dark:bg-gray-800" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6" }, stats.map((stat, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: stat.label,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 }
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardContent, { className: "pt-6 text-center" }, /* @__PURE__ */ React.createElement(stat.icon, { className: `h-12 w-12 mx-auto mb-4 ${stat.color}` }), /* @__PURE__ */ React.createElement("p", { className: "text-3xl font-bold text-gray-900 dark:text-white" }, stat.value), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400 mt-2" }, stat.label)))
  ))))), /* @__PURE__ */ React.createElement("section", { className: "py-16 bg-gray-50 dark:bg-gray-900" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-12" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4" }, "Featured Jobs"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, "Explore the latest job opportunities")), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, featuredJobs.map((job, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: job.id,
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: index * 0.1 }
    },
    /* @__PURE__ */ React.createElement(Card, { className: "hover:shadow-lg transition-shadow" }, /* @__PURE__ */ React.createElement(CardContent, { className: "pt-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between mb-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "font-semibold text-lg text-gray-900 dark:text-white mb-1" }, job.title), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, job.company)), /* @__PURE__ */ React.createElement("span", { className: "px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-full text-xs" }, job.type)), /* @__PURE__ */ React.createElement("div", { className: "space-y-2 text-sm text-gray-600 dark:text-gray-400" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(MapPin, { className: "h-4 w-4 mr-2" }), job.location), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Award, { className: "h-4 w-4 mr-2" }), job.salary), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Clock, { className: "h-4 w-4 mr-2" }), "Posted ", new Date(job.postedDate).toLocaleDateString())), user?.role === "jobseeker" && /* @__PURE__ */ React.createElement(Button, { className: "w-full mt-4" }, "View Details")))
  ))), user?.role === "jobseeker" && /* @__PURE__ */ React.createElement("div", { className: "text-center mt-12" }, /* @__PURE__ */ React.createElement(Link, { to: "/find-jobs" }, /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "outline" }, "View All Jobs"))))), /* @__PURE__ */ React.createElement("section", { className: "py-16 bg-gradient-to-br from-indigo-600 to-purple-700 text-white" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-bold mb-4" }, "Ready to Take the Next Step?"), /* @__PURE__ */ React.createElement("p", { className: "text-xl mb-8 text-indigo-100" }, "Join thousands of professionals finding their perfect match"), /* @__PURE__ */ React.createElement("div", { className: "flex justify-center gap-4" }, /* @__PURE__ */ React.createElement(Link, { to: "/about" }, /* @__PURE__ */ React.createElement(Button, { size: "lg", variant: "outline", className: "bg-white text-indigo-600 hover:bg-gray-100" }, "Learn More")), /* @__PURE__ */ React.createElement(Link, { to: "/contact" }, /* @__PURE__ */ React.createElement(Button, { size: "lg", className: "bg-indigo-800 hover:bg-indigo-900" }, "Contact Us"))))));
}
export {
  HomePage
};
