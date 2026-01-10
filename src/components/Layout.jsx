import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
function Layout() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);
  if (!isAuthenticated) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900" }, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement("main", { className: "flex-1" }, /* @__PURE__ */ React.createElement(Outlet, null)), /* @__PURE__ */ React.createElement(Footer, null));
}
export {
  Layout
};
