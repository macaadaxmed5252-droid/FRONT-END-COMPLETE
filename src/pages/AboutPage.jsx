import React from "react";
import { Card, CardContent } from "../components/design-system/card";
import { Target, Eye, Award, Users, Briefcase, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To connect talented professionals with meaningful career opportunities across Somalia, fostering economic growth and professional development."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become Somalia's leading job board platform, creating a bridge between employers and job seekers through innovative technology."
    },
    {
      icon: Award,
      title: "Our Values",
      description: "Integrity, transparency, excellence, and commitment to empowering both employers and job seekers in achieving their goals."
    }
  ];

  const stats = [
    { icon: Briefcase, label: "Jobs Posted", value: "5000+" },
    { icon: Users, label: "Active Users", value: "10,000+" },
    { icon: TrendingUp, label: "Success Rate", value: "85%" },
    { icon: Award, label: "Partner Companies", value: "200+" }
  ];

  const features = [
    { title: "Easy to Use", description: "Simple, intuitive platform designed for everyone, regardless of technical skill." },
    { title: "Local Focus", description: "Specifically tailored for the unique dynamics of the Somali job market." },
    { title: "Verified Jobs", description: "All job postings are manually reviewed to check for authenticity and quality." },
    { title: "Free for Job Seekers", description: "Browse, search, and apply to unlimited jobs completely at no cost." },
    { title: "Quick Matches", description: "Advanced matching algorithms connect the right people to the right roles instantly." },
    { title: "24/7 Support", description: "Dedicated customer support team ready to assist you whenever you need help." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-sans">

      {/* HERO */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://i.pinimg.com/736x/85/64/e8/8564e8b5a10bda960ff3b96027636c7a.jpg"
          alt="Somali professionals collaborating"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 to-black/70 mix-blend-multiply"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">About JobBoard Somalia</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
              Empowering careers and connecting opportunities across the Horn of Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg dark:prose-invert max-w-none text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Our Story</h2>
            <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              <p>
                Founded in 2020, <span className="text-indigo-600 dark:text-indigo-400 font-semibold">JobBoard Somalia</span> emerged from a simple yet powerful idea: to create a platform that makes job searching and hiring easier, faster, and more efficient for everyone in Somalia.
              </p>
              <p>
                We recognized the challenges that both job seekers and employers face in the traditional hiring process. Job seekers struggled to find relevant opportunities, while employers found it difficult to reach qualified candidates. We built this platform to bridge that gap with modern technology.
              </p>
              <p>
                Today, we're proud to be one of Somalia's most trusted job platforms, serving thousands of users and helping build careers that matter.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Drives Us</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Our core principles guiding every step.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-none shadow-2xl hover:shadow-3xl transition-shadow duration-300 bg-white dark:bg-gray-800 overflow-hidden group">
                  <CardContent className="p-8 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center mb-6 mx-auto transform group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <value.icon className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 relative bg-indigo-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-indigo-200 text-xl">Making a tangible difference in the Somali job market</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-24 h-24 border-2 border-indigo-400/30 rounded-full flex items-center justify-center mx-auto mb-6 bg-indigo-800/50 backdrop-blur-sm group-hover:border-white/50 transition-colors">
                  <stat.icon className="h-10 w-10 text-indigo-300 group-hover:text-white transition-colors" />
                </div>
                <p className="text-4xl font-extrabold mb-2 text-white tracking-tight">{stat.value}</p>
                <p className="text-indigo-200 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-24 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Distinguishing features that make us the best choice</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <div className="h-full p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 hover:bg-white dark:hover:bg-gray-700 hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-gray-200 dark:hover:border-gray-600">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export { AboutPage };
