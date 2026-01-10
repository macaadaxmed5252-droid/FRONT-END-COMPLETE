import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
function ProtectedRoute({ children, allowedRoles }) {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  if (!isAuthenticated || !user) {
    return /* @__PURE__ */ React.createElement(Navigate, { to: "/login", replace: true });
  }
  if (!allowedRoles.includes(user.role)) {
    return /* @__PURE__ */ React.createElement(Navigate, { to: "/home", replace: true });
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, children);
}
export {
  ProtectedRoute
};
