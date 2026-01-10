import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addContactMessage } from "../store/jobsSlice";
import { Button } from "../components/design-system/button";
import { Input } from "../components/design-system/input";
import { Label } from "../components/design-system/label";
import { Textarea } from "../components/design-system/textarea";
import { Card, CardContent } from "../components/design-system/card";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";
function ContactPage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    subject: "",
    message: ""
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }
    const message = {
      id: Math.random().toString(36).substr(2, 9),
      ...formData,
      date: (/* @__PURE__ */ new Date()).toISOString(),
      status: "unread"
    };
    dispatch(addContactMessage(message));
    toast.success("Message sent successfully! Admin will contact you soon.");
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      subject: "",
      message: ""
    });
  };
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Office",
      details: ["KM4 Street, Hodan District", "Mogadishu, Somalia"],
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@jobboard.so", "support@jobboard.so"],
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+252 61 234 5678", "+252 61 987 6543"],
      color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
    }
  ];
  return /* @__PURE__ */ React.createElement("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 font-sans" }, /* @__PURE__ */ React.createElement("section", { className: "relative h-[400px] flex items-center justify-center overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-0" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "https://i.pinimg.com/736x/cd/5d/40/cd5d400c39e3891914066593b96d610c.jpg",
      alt: "Customer support representative",
      className: "w-full h-full object-cover"
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 bg-indigo-900/80 mix-blend-multiply" })), /* @__PURE__ */ React.createElement("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white" }, /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    },
    /* @__PURE__ */ React.createElement("h1", { className: "text-4xl md:text-6xl font-extrabold mb-6 tracking-tight" }, "Get In Touch"),
    /* @__PURE__ */ React.createElement("p", { className: "text-xl md:text-2xl text-indigo-100 font-light max-w-2xl mx-auto" }, "We'd love to hear from you. Our friendly team is here to chat.")
  ))), /* @__PURE__ */ React.createElement("section", { className: "py-20 -mt-10 relative z-20 px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8" }, /* @__PURE__ */ React.createElement("div", { className: "lg:col-span-1 space-y-6" }, contactInfo.map((info, index) => /* @__PURE__ */ React.createElement(
    motion.div,
    {
      key: info.title,
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.2 + index * 0.1 }
    },
    /* @__PURE__ */ React.createElement(Card, { className: "border-none shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800" }, /* @__PURE__ */ React.createElement(CardContent, { className: "p-6 flex items-start space-x-4" }, /* @__PURE__ */ React.createElement("div", { className: `w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}` }, /* @__PURE__ */ React.createElement(info.icon, { className: "h-6 w-6" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-lg font-bold text-gray-900 dark:text-white mb-2" }, info.title), info.details.map((detail, i) => /* @__PURE__ */ React.createElement("p", { key: i, className: "text-gray-600 dark:text-gray-400 text-sm" }, detail)))))
  )), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      transition: { delay: 0.5 }
    },
    /* @__PURE__ */ React.createElement(Card, { className: "border-none shadow-lg bg-gradient-to-br from-indigo-600 to-purple-700 text-white overflow-hidden relative" }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 right-0 p-4 opacity-10" }, /* @__PURE__ */ React.createElement(Clock, { className: "w-24 h-24" })), /* @__PURE__ */ React.createElement(CardContent, { className: "p-6 relative z-10" }, /* @__PURE__ */ React.createElement("h3", { className: "text-xl font-bold mb-4 flex items-center" }, /* @__PURE__ */ React.createElement(Clock, { className: "mr-2 h-5 w-5" }), " Business Hours"), /* @__PURE__ */ React.createElement("div", { className: "space-y-3 text-indigo-100" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between border-b border-indigo-400/30 pb-2" }, /* @__PURE__ */ React.createElement("span", null, "Saturday - Thursday"), /* @__PURE__ */ React.createElement("span", { className: "font-semibold" }, "8:00 AM - 6:00 PM")), /* @__PURE__ */ React.createElement("div", { className: "flex justify-between pt-1" }, /* @__PURE__ */ React.createElement("span", null, "Friday"), /* @__PURE__ */ React.createElement("span", { className: "bg-white/20 px-2 py-0.5 rounded text-sm" }, "Closed")))))
  )), /* @__PURE__ */ React.createElement(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.4 },
      className: "lg:col-span-2"
    },
    /* @__PURE__ */ React.createElement(Card, { className: "border-none shadow-2xl bg-white dark:bg-gray-800 overflow-hidden" }, /* @__PURE__ */ React.createElement("div", { className: "h-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" }), /* @__PURE__ */ React.createElement(CardContent, { className: "p-8 md:p-10" }, /* @__PURE__ */ React.createElement("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2" }, "Send us a Message"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 dark:text-gray-400 mb-8" }, "Fill out the form below and we'll get back to you shortly."), /* @__PURE__ */ React.createElement("form", { onSubmit: handleSubmit, className: "space-y-6 " }, /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 " }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "name", className: "text-gray-700 dark:text-gray-300" }, "Your Name *"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "name",
        name: "name",
        value: formData.name,
        onChange: handleChange,
        className: "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500",
        placeholder: "John Doe",
        required: true
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "email", className: "text-gray-700 dark:text-gray-300" }, "Email Address *"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "email",
        name: "email",
        type: "email",
        value: formData.email,
        onChange: handleChange,
        className: "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500",
        placeholder: "john@example.com",
        required: true
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "phone", className: "text-gray-700 dark:text-gray-300" }, "Phone Number"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "phone",
        name: "phone",
        value: formData.phone,
        onChange: handleChange,
        className: "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500",
        placeholder: "+252..."
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "subject", className: "text-gray-700 dark:text-gray-300" }, "Subject *"), /* @__PURE__ */ React.createElement(
      Input,
      {
        id: "subject",
        name: "subject",
        value: formData.subject,
        onChange: handleChange,
        className: "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500",
        placeholder: "How can we help?",
        required: true
      }
    ))), /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, /* @__PURE__ */ React.createElement(Label, { htmlFor: "message", className: "text-gray-700 dark:text-gray-300" }, "Message *"), /* @__PURE__ */ React.createElement(
      Textarea,
      {
        id: "message",
        name: "message",
        rows: 6,
        value: formData.message,
        onChange: handleChange,
        className: "bg-gray-50 dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:ring-2 focus:ring-indigo-500 resize-none",
        placeholder: "Type your message here...",
        required: true
      }
    )), /* @__PURE__ */ React.createElement(Button, { type: "submit", className: "w-full md:w-auto px-8 py-3 text-lg font-medium bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg transform transition hover:-translate-y-0.5" }, /* @__PURE__ */ React.createElement(Send, { className: "mr-2 h-5 w-5" }), "Send Message"))))
  )))), /* @__PURE__ */ React.createElement("section", { className: "bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "w-full h-[400px] relative grayscale hover:grayscale-0 transition-all duration-700" }, /* @__PURE__ */ React.createElement(
    "iframe",
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15947.536762334882!2d45.31816225!3d2.0469343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d5843b0c5f2b8a7%3A0xc3f1f3b0b8b8b8b8!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2sus!4v1652345678901!5m2!1sen!2sus",
      width: "100%",
      height: "100%",
      style: { border: 0 },
      allowFullScreen: true,
      loading: "lazy",
      className: "absolute inset-0"
    }
  ))));
}
export {
  ContactPage
};
