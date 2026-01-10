import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { store } from "./store/store";
import { ThemeProvider } from "./components/ThemeProvider";
import { Toaster } from "./components/design-system/sonner";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { FindJobsPage } from "./pages/FindJobsPage";
import { SavedJobsPage } from "./pages/SavedJobsPage";
import { MyApplicationsPage } from "./pages/MyApplicationsPage";
import { ContactPage } from "./pages/ContactPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AdminApplicationsPage } from "./pages/AdminApplicationsPage";
import { AllJobsPage } from "./pages/AllJobsPage";
import { ReportsPage } from "./pages/ReportsPage";
import { MessagesPage } from "./pages/MessagesPage";
import { EmployerDashboard } from "./pages/employer/EmployerDashboard";
import { PostJobPage } from "./pages/employer/PostJobPage";
import { MyJobsPage } from "./pages/employer/MyJobsPage";
import { JobApplicationsPage } from "./pages/employer/JobApplicationsPage";
import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
function App() {
  return /* @__PURE__ */ React.createElement(Provider, { store }, /* @__PURE__ */ React.createElement(ThemeProvider, null, /* @__PURE__ */ React.createElement(BrowserRouter, null, /* @__PURE__ */ React.createElement(Toaster, null), /* @__PURE__ */ React.createElement(Routes, null, /* @__PURE__ */ React.createElement(Route, { path: "/login", element: /* @__PURE__ */ React.createElement(LoginPage, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/register", element: /* @__PURE__ */ React.createElement(RegisterPage, null) }), /* @__PURE__ */ React.createElement(Route, { element: /* @__PURE__ */ React.createElement(Layout, null) }, /* @__PURE__ */ React.createElement(Route, { path: "/", element: /* @__PURE__ */ React.createElement(Navigate, { to: "/home", replace: true }) }), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/home",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["jobseeker"] }, /* @__PURE__ */ React.createElement(HomePage, null))
    }
  ), /* @__PURE__ */ React.createElement(Route, { path: "/about", element: /* @__PURE__ */ React.createElement(AboutPage, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/contact", element: /* @__PURE__ */ React.createElement(ContactPage, null) }), /* @__PURE__ */ React.createElement(Route, { path: "/profile", element: /* @__PURE__ */ React.createElement(ProfilePage, null) }), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/find-jobs",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["jobseeker"] }, /* @__PURE__ */ React.createElement(FindJobsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/saved-jobs",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["jobseeker"] }, /* @__PURE__ */ React.createElement(SavedJobsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/my-applications",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["jobseeker"] }, /* @__PURE__ */ React.createElement(MyApplicationsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/employer/dashboard",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["employer"] }, /* @__PURE__ */ React.createElement(EmployerDashboard, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/employer/post-job",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["employer"] }, /* @__PURE__ */ React.createElement(PostJobPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/employer/jobs",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["employer"] }, /* @__PURE__ */ React.createElement(MyJobsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/employer/jobs/:jobId",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["employer"] }, /* @__PURE__ */ React.createElement(JobApplicationsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/employer/applications/:jobId",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["employer"] }, /* @__PURE__ */ React.createElement(JobApplicationsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/admin-applications",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["admin"] }, /* @__PURE__ */ React.createElement(AdminApplicationsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/all-jobs",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["admin"] }, /* @__PURE__ */ React.createElement(AllJobsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/reports",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["admin"] }, /* @__PURE__ */ React.createElement(ReportsPage, null))
    }
  ), /* @__PURE__ */ React.createElement(
    Route,
    {
      path: "/messages",
      element: /* @__PURE__ */ React.createElement(ProtectedRoute, { allowedRoles: ["admin"] }, /* @__PURE__ */ React.createElement(MessagesPage, null))
    }
  )), /* @__PURE__ */ React.createElement(Route, { path: "*", element: /* @__PURE__ */ React.createElement(Navigate, { to: "/home", replace: true }) })))));
}
export {
  App as default
};
