import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
function ThemeProvider({ children }) {
  return /* @__PURE__ */ React.createElement(NextThemesProvider, { attribute: "class", defaultTheme: "light", enableSystem: true }, children);
}
export {
  ThemeProvider
};
