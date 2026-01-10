import React from "react";
"use client";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
function Collapsible({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(CollapsiblePrimitive.Root, { "data-slot": "collapsible", ...props });
}
function CollapsibleTrigger({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    CollapsiblePrimitive.CollapsibleTrigger,
    {
      "data-slot": "collapsible-trigger",
      ...props
    }
  );
}
function CollapsibleContent({
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    CollapsiblePrimitive.CollapsibleContent,
    {
      "data-slot": "collapsible-content",
      ...props
    }
  );
}
export {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
};
