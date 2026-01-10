import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/authSlice";
import { Button } from "../components/design-system/button";
import { Input } from "../components/design-system/input";
import { Label } from "../components/design-system/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/design-system/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/design-system/tabs";
import { Briefcase, Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { users } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const FIXED_ADMIN_PASSWORD = "Admin@2026";
  const handleLogin = (role) => {
    if (!email || !password) {
      toast.error("Please enter email and password");
      return;
    }
    if (role === "admin") {
      if (password !== FIXED_ADMIN_PASSWORD) {
        toast.error("Password-ka Admin-ka waa khalad!");
        return;
      }
      const adminUser = {
        id: "admin-123",
        role: "admin",
        name: "Admin User",
        email
      };
      dispatch(login(adminUser));
      toast.success(`Welcome back, Admin!`);
      navigate("/admin-applications");
      return;
    }
    const foundUser = users.find((u) => u.email === email && u.password === password && u.role === role);
    if (foundUser) {
      dispatch(login(foundUser));
      toast.success(`Welcome back, ${foundUser.name}!`);
      navigate(foundUser.role === "employer" ? "/employer/dashboard" : "/home");
    } else {
      toast.error("Invalid email or password");
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-4" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.5 },
      className: "w-full max-w-md"
    },
    /* @__PURE__ */ React.createElement(Card, null, /* @__PURE__ */ React.createElement(CardHeader, { className: "space-y-1 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-center mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "p-3 bg-indigo-100 dark:bg-indigo-900 rounded-full" }, /* @__PURE__ */ React.createElement(Briefcase, { className: "h-12 w-12 text-indigo-600 dark:text-indigo-400" }))), /* @__PURE__ */ React.createElement(CardTitle, { className: "text-2xl font-bold" }, "Welcome Back"), /* @__PURE__ */ React.createElement(CardDescription, null, "Sign in to your account")), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Tabs, { defaultValue: "jobseeker", className: "w-full" }, /* @__PURE__ */ React.createElement(TabsList, { className: "grid w-full grid-cols-2" }, /* @__PURE__ */ React.createElement(TabsTrigger, { value: "jobseeker" }, "Job Seeker"), /* @__PURE__ */ React.createElement(TabsTrigger, { value: "admin" }, "Admin")), ["jobseeker", "admin"].map((role) => /* @__PURE__ */ React.createElement(TabsContent, { key: role, value: role, className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2 pt-4" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: `email-${role}` }, "Email"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: `email-${role}`,
        type: "email",
        placeholder: "your@email.com",
        value: email,
        onChange: (e) => setEmail(e.target.value)
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: `password-${role}` }, "Password"), /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
      Input,
      {
        id: `password-${role}`,
        type: showPassword ? "text" : "password",
        placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
        value: password,
        onChange: (e) => setPassword(e.target.value),
        className: "pr-10"
      }
    ), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "button",
        onClick: () => setShowPassword(!showPassword),
        className: "absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition-colors"
      },
      showPassword ? /* @__PURE__ */ React.createElement(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ React.createElement(Eye, { className: "h-4 w-4" })
    ))), /* @__PURE__ */ React.createElement(
      Button,
      {
        className: "w-full",
        onClick: () => handleLogin(role)
      },
      "Sign In as ",
      role === "jobseeker" ? "Job Seeker" : "Admin"
    ), role === "jobseeker" && /* @__PURE__ */ React.createElement("div", { className: "text-center text-sm" }, /* @__PURE__ */ React.createElement("span", { className: "text-gray-600 dark:text-gray-400" }, "Don't have an account? "), /* @__PURE__ */ React.createElement(Link, { to: "/register", className: "text-indigo-600 hover:underline font-medium" }, "Register")), role === "admin" && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-center text-gray-500 italic" }, "Admin access only - Use the secure fixed password."))))))
  ));
}
var LoginPage_default = LoginPage;
export {
  LoginPage,
  LoginPage_default as default
};
