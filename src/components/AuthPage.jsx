import React, { useState } from "react";
import { useApp } from "../context/AppContext";
import { Button } from "./design-system/button";
import { Input } from "./design-system/input";
import { Label } from "./design-system/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./design-system/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./design-system/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./design-system/select";
import { Briefcase } from "lucide-react";
const AuthPage = () => {
  const { login, register } = useApp();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerRole, setRegisterRole] = useState("job-seeker");
  const [registerCompany, setRegisterCompany] = useState("");
  const [error, setError] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (!loginEmail || !loginPassword) {
      setError("Please fill in all fields");
      return;
    }
    const success = login(loginEmail, loginPassword);
    if (!success) {
      setError("Invalid email or password");
    }
  };
  const handleRegister = (e) => {
    e.preventDefault();
    setError("");
    if (!registerEmail || !registerPassword || !registerName) {
      setError("Please fill in all fields");
      return;
    }
    if (registerRole === "employer" && !registerCompany) {
      setError("Company name is required for employers");
      return;
    }
    const success = register(registerEmail, registerPassword, registerName, registerRole, registerCompany);
    if (!success) {
      setError("Email already exists");
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement(Card, { className: "w-full max-w-md" }, /* @__PURE__ */ React.createElement(CardHeader, { className: "space-y-1 text-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-center mb-4" }, /* @__PURE__ */ React.createElement("div", { className: "bg-indigo-600 p-3 rounded-full" }, /* @__PURE__ */ React.createElement(Briefcase, { className: "w-8 h-8 text-white" }))), /* @__PURE__ */ React.createElement(CardTitle, null, "Job Board System"), /* @__PURE__ */ React.createElement(CardDescription, null, "Sign in or create an account to continue")), /* @__PURE__ */ React.createElement(CardContent, null, /* @__PURE__ */ React.createElement(Tabs, { defaultValue: "login", className: "w-full" }, /* @__PURE__ */ React.createElement(TabsList, { className: "grid w-full grid-cols-2" }, /* @__PURE__ */ React.createElement(TabsTrigger, { value: "login" }, "Login"), /* @__PURE__ */ React.createElement(TabsTrigger, { value: "register" }, "Register")), /* @__PURE__ */ React.createElement(TabsContent, { value: "login" }, /* @__PURE__ */ React.createElement("form", { onSubmit: handleLogin, className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "login-email" }, "Email"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "login-email",
      type: "email",
      placeholder: "email@example.com",
      value: loginEmail,
      onChange: (e) => setLoginEmail(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "login-password" }, "Password"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "login-password",
      type: "password",
      placeholder: "Enter your password",
      value: loginPassword,
      onChange: (e) => setLoginPassword(e.target.value)
    }
  )), error && /* @__PURE__ */ React.createElement("p", { className: "text-red-500 text-sm" }, error), /* @__PURE__ */ React.createElement(Button, { type: "submit", className: "w-full" }, "Login"), /* @__PURE__ */ React.createElement("div", { className: "mt-4 p-3 bg-gray-100 rounded-md text-sm" }, /* @__PURE__ */ React.createElement("p", { className: "font-semibold mb-2" }, "Demo Accounts:"), /* @__PURE__ */ React.createElement("p", null, "Job Seeker: jobseeker@example.com"), /* @__PURE__ */ React.createElement("p", null, "Employer: employer@example.com"), /* @__PURE__ */ React.createElement("p", null, "Admin: admin@example.com"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 mt-1" }, "Password: any")))), /* @__PURE__ */ React.createElement(TabsContent, { value: "register" }, /* @__PURE__ */ React.createElement("form", { onSubmit: handleRegister, className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "register-name" }, "Full Name"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "register-name",
      placeholder: "Your name",
      value: registerName,
      onChange: (e) => setRegisterName(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "register-email" }, "Email"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "register-email",
      type: "email",
      placeholder: "email@example.com",
      value: registerEmail,
      onChange: (e) => setRegisterEmail(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "register-password" }, "Password"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "register-password",
      type: "password",
      placeholder: "Create a password",
      value: registerPassword,
      onChange: (e) => setRegisterPassword(e.target.value)
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "register-role" }, "I am a"), /* @__PURE__ */ React.createElement(Select, { value: registerRole, onValueChange: (value) => setRegisterRole(value) }, /* @__PURE__ */ React.createElement(SelectTrigger, { id: "register-role" }, /* @__PURE__ */ React.createElement(SelectValue, null)), /* @__PURE__ */ React.createElement(SelectContent, null, /* @__PURE__ */ React.createElement(SelectItem, { value: "job-seeker" }, "Job Seeker"), /* @__PURE__ */ React.createElement(SelectItem, { value: "employer" }, "Employer")))), registerRole === "employer" && /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "register-company" }, "Company Name"), /* @__PURE__ */ React.createElement(
    Input,
    {
      id: "register-company",
      placeholder: "Your company",
      value: registerCompany,
      onChange: (e) => setRegisterCompany(e.target.value)
    }
  )), error && /* @__PURE__ */ React.createElement("p", { className: "text-red-500 text-sm" }, error), /* @__PURE__ */ React.createElement(Button, { type: "submit", className: "w-full" }, "Create Account")))))));
};
export {
  AuthPage
};
