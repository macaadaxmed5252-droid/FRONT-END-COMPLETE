import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon
} from "lucide-react";
import { cn } from "./utils";
import { buttonVariants } from "./button";
function Pagination({ className, ...props }) {
  return /* @__PURE__ */ React.createElement(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: cn("mx-auto flex w-full justify-center", className),
      ...props
    }
  );
}
function PaginationContent({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "ul",
    {
      "data-slot": "pagination-content",
      className: cn("flex flex-row items-center gap-1", className),
      ...props
    }
  );
}
function PaginationItem({ ...props }) {
  return /* @__PURE__ */ React.createElement("li", { "data-slot": "pagination-item", ...props });
}
function PaginationLink({
  className,
  isActive,
  size = "icon",
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "a",
    {
      "aria-current": isActive ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": isActive,
      className: cn(
        buttonVariants({
          variant: isActive ? "outline" : "ghost",
          size
        }),
        className
      ),
      ...props
    }
  );
}
function PaginationPrevious({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    PaginationLink,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pl-2.5", className),
      ...props
    },
    /* @__PURE__ */ React.createElement(ChevronLeftIcon, null),
    /* @__PURE__ */ React.createElement("span", { className: "hidden sm:block" }, "Previous")
  );
}
function PaginationNext({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    PaginationLink,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: cn("gap-1 px-2.5 sm:pr-2.5", className),
      ...props
    },
    /* @__PURE__ */ React.createElement("span", { className: "hidden sm:block" }, "Next"),
    /* @__PURE__ */ React.createElement(ChevronRightIcon, null)
  );
}
function PaginationEllipsis({
  className,
  ...props
}) {
  return /* @__PURE__ */ React.createElement(
    "span",
    {
      "aria-hidden": true,
      "data-slot": "pagination-ellipsis",
      className: cn("flex size-9 items-center justify-center", className),
      ...props
    },
    /* @__PURE__ */ React.createElement(MoreHorizontalIcon, { className: "size-4" }),
    /* @__PURE__ */ React.createElement("span", { className: "sr-only" }, "More pages")
  );
}
export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
};
