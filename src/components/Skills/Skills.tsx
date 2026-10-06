"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Code2, Cpu, Wrench } from "lucide-react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPostman,
  SiJsonwebtokens,
  SiVercel,
} from "react-icons/si";

// 1. Orbit Icons Configuration (Calculated angles for perfectly balanced geometry)
const orbitIcons = [
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiNextdotjs className="text-slate-900 dark:text-white" />, name: "Next.js" },
  { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
  { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiTailwindcss className="text-cyan-500" />, name: "Tailwind" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
];

const marqueeSkills = [
  { name: "React", icon: <FaReact className="text-cyan-400 text-2xl" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-slate-900 dark:text-white text-2xl" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500 text-2xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-slate-900 dark:text-white text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-2xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500 text-2xl" /> },
  { name: "GitHub", icon: <FaGithub className="text-slate-900 dark:text-white text-2xl" /> },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-28 bg-slate-50 dark:bg-slate-950 transition-colors duration-300"
    >
      {/* Background Glows */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            <Cpu size={14} /> My Tech Stack
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight">
            Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">I Excel In</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I craft ultra-responsive, scalable, and highly performant web application architectures using modern full-stack tools.
          </p>
        </motion.div>

        {/* --- Interactive Orbit Wheel --- */}
        <div className="flex justify-center mt-16 md:mt-20">
          <div className="relative h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] md:h-[460px] md:w-[460px] flex items-center justify-center">
            
            {/* Outer Decorative Pulsing Rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-ping opacity-25 pointer-events-none" />
            <div className="absolute inset-4 rounded-full border border-slate-300 dark:border-slate-800" />
            <div className="absolute inset-[70px] rounded-full border border-dashed border-cyan-500/30" />

            {/* Rotating Orbit Container */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-0 w-full h-full"
            >
              {orbitIcons.map((item, index) => {
                const angle = (index / orbitIcons.length) * (2 * Math.PI);
                const radius = 175; // Orbit Radius in Pixel
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    {/* Counter-Rotate Icon Container so icons stay upright */}
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
                      whileHover={{ scale: 1.25 }}
                      className="group relative flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md cursor-pointer transition-colors hover:border-cyan-500/50"
                    >
                      <div className="text-2xl sm:text-3xl">{item.icon}</div>

                      {/* Tooltip */}
                      <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 px-2.5 py-1 rounded-md shadow-md border border-slate-200 dark:border-slate-700 whitespace-nowrap pointer-events-none">
                        {item.name}
                      </span>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>

            {/* Center Core Badge */}
            <div className="relative z-10 flex flex-col items-center justify-center h-28 w-28 sm:h-32 sm:w-32 rounded-full bg-white/80 dark:bg-slate-900/80 border-2 border-cyan-500 shadow-[0_0_50px_rgba(6,182,212,0.25)] backdrop-blur-xl">
              <Code2 size={38} className="text-cyan-500 animate-pulse" />
              <span className="mt-1 text-[11px] font-bold tracking-wider uppercase text-slate-800 dark:text-slate-200">
                Fullstack
              </span>
            </div>
          </div>
        </div>

        {/* --- Infinite Marquee Slider --- */}
        <div className="mt-24 overflow-hidden relative">
          {/* Edge Fade Gradients */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            whileHover={{ transition: { duration: 0 } }} // Optional Pause Effect Concept
            className="flex gap-5 w-max"
          >
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl bg-white dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 px-5 py-3 shadow-sm hover:shadow-md hover:border-cyan-500/40 transition-all duration-300"
              >
                {skill.icon}
                <span className="font-semibold text-sm text-slate-800 dark:text-slate-200 whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* --- Skill Category Grid --- */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Frontend */}
          <CategoryCard
            title="Frontend Development"
            color="text-cyan-500"
            borderColor="hover:border-cyan-500/50"
            icon={<Code2 className="text-cyan-500" size={24} />}
            delay={0.1}
          >
            <SkillItem icon={<FaReact className="text-cyan-400" />} text="React.js" rating="Advanced" />
            <SkillItem icon={<SiNextdotjs className="text-slate-900 dark:text-white" />} text="Next.js (App Router)" rating="Advanced" />
            <SkillItem icon={<SiTypescript className="text-blue-500" />} text="TypeScript" rating="Intermediate" />
            <SkillItem icon={<FaJs className="text-yellow-400" />} text="JavaScript (ES6+)" rating="Advanced" />
            <SkillItem icon={<SiTailwindcss className="text-cyan-500" />} text="Tailwind CSS" rating="Expert" />
            <SkillItem icon={<FaHtml5 className="text-orange-500" />} text="HTML5 & CSS3" rating="Expert" />
          </CategoryCard>

          {/* Backend */}
          <CategoryCard
            title="Backend & Database"
            color="text-green-500"
            borderColor="hover:border-green-500/50"
            icon={<Database className="text-green-500" size={24} />}
            delay={0.25}
          >
            <SkillItem icon={<FaNodeJs className="text-green-500" />} text="Node.js" rating="Intermediate" />
            <SkillItem icon={<SiExpress className="text-slate-900 dark:text-white" />} text="Express.js" rating="Intermediate" />
            <SkillItem icon={<SiMongodb className="text-green-600" />} text="MongoDB & Mongoose" rating="Intermediate" />
            <SkillItem icon={<SiJsonwebtokens className="text-purple-500" />} text="JWT Authentication" rating="Advanced" />
            <SkillItem icon={<Database className="text-blue-400" />} text="RESTful APIs" rating="Advanced" />
          </CategoryCard>

          {/* Dev Tools & Design */}
          <CategoryCard
            title="Tools & Environment"
            color="text-purple-500"
            borderColor="hover:border-purple-500/50"
            icon={<Wrench className="text-purple-500" size={24} />}
            delay={0.4}
          >
            <SkillItem icon={<FaGitAlt className="text-orange-500" />} text="Git Version Control" rating="Advanced" />
            <SkillItem icon={<FaGithub className="text-slate-900 dark:text-white" />} text="GitHub Workflows" rating="Advanced" />
            <SkillItem icon={<SiPostman className="text-orange-600" />} text="Postman API Testing" rating="Intermediate" />
            <SkillItem icon={<SiVercel className="text-slate-900 dark:text-white" />} text="Vercel Deployment" rating="Advanced" />
            <SkillItem icon={<FaFigma className="text-pink-500" />} text="Figma (UI/UX)" rating="Basic" />
          </CategoryCard>
        </div>
      </div>
    </section>
  );
}

// Sub-component: Category Card
function CategoryCard({
  title,
  color,
  borderColor,
  icon,
  children,
  delay,
}: {
  title: string;
  color: string;
  borderColor: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -6 }}
      className={`rounded-3xl border border-slate-200 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 p-7 shadow-xl backdrop-blur-xl transition-all duration-300 ${borderColor}`}
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-2xl bg-slate-100 dark:bg-slate-800">{icon}</div>
        <h3 className={`text-xl font-bold ${color}`}>{title}</h3>
      </div>
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}

// Sub-component: Skill Row Item
function SkillItem({
  icon,
  text,
  rating,
}: {
  icon: React.ReactNode;
  text: string;
  rating: string;
}) {
  return (
    <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800/50 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors">
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <span className="font-semibold text-sm text-slate-800 dark:text-slate-200">
          {text}
        </span>
      </div>
      <span className="text-[11px] font-medium text-slate-600 dark:text-slate-400 bg-slate-200/60 dark:bg-slate-700/50 px-2.5 py-0.5 rounded-full">
        {rating}
      </span>
    </div>
  );
}