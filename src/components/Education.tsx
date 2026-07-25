"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  School,
  BookOpen,
} from "lucide-react";

const education = [
  {
    title: "Degree (Pass Course)",
    institution: "Companiganj Government College",
    university: "National University",
    duration: "Present",
    status: "Currently Pursuing",
    icon: GraduationCap,
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    institution: "Kabirhat Government College",
    university: "Science",
    duration: "2021",
    status: "Completed",
    icon: BookOpen,
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Secondary School Certificate (SSC)",
    institution: "Batya Mowdud Ahmed High School",
    university: "Science",
    duration: "2019",
    status: "Completed",
    icon: School,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-24 bg-white dark:bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 text-cyan-500 text-xs font-bold uppercase tracking-[3px]">
            Education
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Academic
            <span className="text-cyan-500"> Journey</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-slate-600 dark:text-slate-400 leading-8">
            My educational journey has helped me build a strong
            foundation for becoming a professional Full Stack Developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">
          {/* Center Line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-14">
            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -80 : 80,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.2,
                  }}
                  className={`relative flex items-center ${
                    index % 2 === 0
                      ? "md:justify-start"
                      : "md:justify-end"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute left-6 z-20 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full border-4 border-white dark:border-slate-950 shadow-xl ${item.bg} md:left-1/2`}
                  >
                    <Icon className={`h-7 w-7 ${item.color}`} />
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                    }}
                    className={`ml-20 w-full rounded-3xl border border-slate-200 bg-white p-8 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:ml-0 md:w-[46%] ${
                      index % 2 === 0
                        ? "md:mr-8"
                        : "md:ml-8"
                    }`}
                  >
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${item.bg} ${item.color}`}
                    >
                      {item.status}
                    </span>
                    <h3 className="mt-4 text-2xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 font-semibold text-cyan-500">
                      {item.institution}
                    </p>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">
                      {item.university}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <GraduationCap className="h-4 w-4" />
                      {item.duration}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}