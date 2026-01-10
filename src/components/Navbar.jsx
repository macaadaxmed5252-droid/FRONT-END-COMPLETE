import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "next-themes";
import { logout } from "../store/authSlice";
import { Button } from "./design-system/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "./design-system/dropdown-menu";
import { Briefcase, Home, Info, Mail, Sun, Moon, LogOut, User, Menu } from "lucide-react";
import { motion } from "motion/react";
function Navbar() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };
  const isActive = (path) => location.pathname === path;
  const jobseekerLinks = [
    { name: "Home", path: "/home", icon: Home },
    { name: "Find Jobs", path: "/find-jobs", icon: Briefcase },
    { name: "My Applications", path: "/my-applications", icon: Briefcase },
    // Tan soo hormari
    { name: "Saved Jobs", path: "/saved-jobs", icon: Briefcase },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: Mail }
  ];
  const adminLinks = [
    { name: "Applications", path: "/admin-applications", icon: Briefcase },
    { name: "All Jobs", path: "/all-jobs", icon: Briefcase },
    { name: "Reports", path: "/reports", icon: Briefcase },
    { name: "Messages", path: "/messages", icon: Mail }
  ];
  const getLinks = () => {
    if (!user) return [];
    switch (user.role) {
      case "jobseeker":
        return jobseekerLinks;
      case "admin":
        return adminLinks;
      default:
        return [];
    }
  };
  const links = getLinks();
  return /* @__PURE__ */ React.createElement(
    motion.nav,
    {
      initial: { y: -100 },
      animate: { y: 0 },
      className: "bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50"
    },
    /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between h-16" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Link, { to: "/home", className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(Briefcase, { className: "h-8 w-8 text-indigo-600 dark:text-indigo-400" }), /* @__PURE__ */ React.createElement("span", { className: "text-xl font-bold text-gray-900 dark:text-white" }, "JobBoard"))), /* @__PURE__ */ React.createElement("div", { className: "hidden md:flex items-center space-x-4" }, links.map((link) => /* @__PURE__ */ React.createElement(
      Link,
      {
        key: link.path,
        to: link.path,
        className: `px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive(link.path) ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`
      },
      link.name
    )), /* @__PURE__ */ React.createElement(
      Button,
      {
        variant: "ghost",
        size: "icon",
        onClick: () => setTheme(theme === "dark" ? "light" : "dark")
      },
      theme === "dark" ? /* @__PURE__ */ React.createElement(Sun, { className: "h-5 w-5" }) : /* @__PURE__ */ React.createElement(Moon, { className: "h-5 w-5" })
    ), /* @__PURE__ */ React.createElement(DropdownMenu, null, /* @__PURE__ */ React.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement(User, { className: "h-5 w-5" }), /* @__PURE__ */ React.createElement("span", null, user?.name))), /* @__PURE__ */ React.createElement(DropdownMenuContent, { align: "end" }, /* @__PURE__ */ React.createElement(DropdownMenuLabel, null, "My Account"), /* @__PURE__ */ React.createElement(DropdownMenuSeparator, null), /* @__PURE__ */ React.createElement(DropdownMenuItem, { onClick: () => navigate("/profile") }, /* @__PURE__ */ React.createElement(User, { className: "mr-2 h-4 w-4" }), "Profile"), /* @__PURE__ */ React.createElement(DropdownMenuItem, { onClick: handleLogout, className: "text-red-600" }, /* @__PURE__ */ React.createElement(LogOut, { className: "mr-2 h-4 w-4" }), "Logout")))), /* @__PURE__ */ React.createElement("div", { className: "md:hidden flex items-center" }, /* @__PURE__ */ React.createElement(Button, { variant: "ghost", size: "icon", onClick: () => setMobileMenuOpen(!mobileMenuOpen) }, /* @__PURE__ */ React.createElement(Menu, { className: "h-6 w-6" }))))),
    mobileMenuOpen && /* @__PURE__ */ React.createElement(
      motion.div,
      {
        initial: { opacity: 0, height: 0 },
        animate: { opacity: 1, height: "auto" },
        className: "md:hidden"
      },
      /* @__PURE__ */ React.createElement("div", { className: "px-2 pt-2 pb-3 space-y-1" }, links.map((link) => /* @__PURE__ */ React.createElement(
        Link,
        {
          key: link.path,
          to: link.path,
          onClick: () => setMobileMenuOpen(false),
          className: `block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path) ? "bg-indigo-600 text-white" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"}`
        },
        link.name
      )), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: () => {
            setTheme(theme === "dark" ? "light" : "dark");
            setMobileMenuOpen(false);
          },
          className: "w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
        },
        theme === "dark" ? "Light Mode" : "Dark Mode"
      ), /* @__PURE__ */ React.createElement(
        "button",
        {
          onClick: handleLogout,
          className: "w-full text-left px-3 py-2 rounded-md text-base font-medium text-red-600 hover:bg-gray-100 dark:hover:bg-gray-700"
        },
        "Logout"
      ))
    )
  );
}
export {
  Navbar
};
