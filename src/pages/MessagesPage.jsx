import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { markMessageAsRead } from "../store/jobsSlice";
import { Card, CardContent } from "../components/design-system/card";
import { Badge } from "../components/design-system/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/design-system/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/design-system/select";
import { Mail, MailOpen, Phone, Calendar } from "lucide-react";
import { motion } from "motion/react";
function MessagesPage() {
  const { contactMessages } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");
  const filteredMessages = filterStatus === "all" ? contactMessages : contactMessages.filter((msg) => msg.status === filterStatus);
  const handleMessageClick = (message) => {
    setSelectedMessage(message);
    if (message.status === "unread") {
      dispatch(markMessageAsRead(message.id));
    }
  };
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: -20 },
      animate: { opacity: 1, y: 0 },
      className: "mb-8"
    },
    /* @__PURE__ */ React.createElement("h1", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "Contact Messages"),
    /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, filteredMessages.length, " ", filteredMessages.length === 1 ? "message" : "messages")
  ), /* @__PURE__ */ React.createElement(Card, { className: "mb-6" }, /* @__PURE__ */ React.createElement(CardContent, { className: "pt-6" }, /* @__PURE__ */ React.createElement(Select, { value: filterStatus, onValueChange: setFilterStatus }, /* @__PURE__ */ React.createElement(SelectTrigger, { className: "w-full md:w-64" }, /* @__PURE__ */ React.createElement(SelectValue, { placeholder: "Filter by status" })), /* @__PURE__ */ React.createElement(SelectContent, null, /* @__PURE__ */ React.createElement(SelectItem, { value: "all" }, "All Messages"), /* @__PURE__ */ React.createElement(SelectItem, { value: "unread" }, "Unread"), /* @__PURE__ */ React.createElement(SelectItem, { value: "read" }, "Read"))))), filteredMessages.length === 0 ? /* @__PURE__ */ React.createElement("div", { className: "text-center py-12" }, /* @__PURE__ */ React.createElement(Mail, { className: "h-16 w-16 mx-auto text-gray-400 mb-4" }), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400 text-lg" }, "No messages found")) : /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, filteredMessages.map((message, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: message.id,
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: index * 0.05 }
    },
    /* @__PURE__ */ React.createElement(
      Card,
      {
        className: `cursor-pointer hover:shadow-lg transition-shadow ${message.status === "unread" ? "border-l-4 border-l-indigo-600" : ""}`,
        onClick: () => handleMessageClick(message)
      },
      /* @__PURE__ */ React.createElement(CardContent, { className: "pt-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-start justify-between" }, /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-2 mb-2" }, message.status === "unread" ? /* @__PURE__ */ React.createElement(Mail, { className: "h-5 w-5 text-indigo-600" }) : /* @__PURE__ */ React.createElement(MailOpen, { className: "h-5 w-5 text-gray-400" }), /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-semibold text-gray-900 dark:text-white" }, message.name), message.status === "unread" && /* @__PURE__ */ React.createElement(Badge, { variant: "default" }, "New")), /* @__PURE__ */ React.createElement("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2" }, "Subject: ", message.subject), /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Mail, { className: "h-4 w-4 mr-1" }), message.email), message.phone && /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Phone, { className: "h-4 w-4 mr-1" }), message.phone), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(Calendar, { className: "h-4 w-4 mr-1" }), new Date(message.date).toLocaleDateString())))))
    )
  )))), /* @__PURE__ */ React.createElement(Dialog, { open: !!selectedMessage, onOpenChange: () => setSelectedMessage(null) }, /* @__PURE__ */ React.createElement(DialogContent, { className: "max-w-2xl" }, /* @__PURE__ */ React.createElement(DialogHeader, null, /* @__PURE__ */ React.createElement(DialogTitle, null, "Message from ", selectedMessage?.name)), selectedMessage && /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-2 gap-4" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300" }, "Email"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, selectedMessage.email)), selectedMessage.phone && /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300" }, "Phone"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400" }, selectedMessage.phone))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" }, "Subject"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-900 dark:text-white" }, selectedMessage.subject)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1" }, "Message"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-600 dark:text-gray-400 whitespace-pre-wrap" }, selectedMessage.message)), /* @__PURE__ */ React.createElement("div", { className: "text-sm text-gray-500 dark:text-gray-400" }, "Received on ", new Date(selectedMessage.date).toLocaleString())))));
}
export {
  MessagesPage
};
