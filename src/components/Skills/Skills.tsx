"use client";

import { motion } from "framer-motion";
import { Database, Code2 } from "lucide-react";

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

const orbitIcons = [
  {
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    style: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    style: "top-14 right-10",
  },
  {
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    style: "bottom-16 right-10",
  },
  {
    icon: <FaNodeJs className="text-green-500 text-4xl" />,
    style: "top-1/2 -right-5 -translate-y-1/2",
  },
  {
    icon: <FaJs className="text-yellow-400 text-4xl" />,
    style: "top-1/2 -left-5 -translate-y-1/2",
  },
  {
    icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
    style: "bottom-14 left-10",
  },
  {
    icon: <SiMongodb className="text-green-600 text-4xl" />,
    style: "bottom-0 left-1/2 -translate-x-1/2",
  },
  {
    icon: <SiNextdotjs className="text-black dark:text-white text-4xl" />,
    style: "top-14 left-10",
  },
];

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-2xl" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="text-black dark:text-white text-2xl" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-blue-500 text-2xl" />,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-2xl" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500 text-2xl" />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-green-500 text-2xl" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="text-black dark:text-white text-2xl" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-600 text-2xl" />,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-500 text-2xl" />,
  },
  {
    name: "GitHub",
    icon: <FaGithub className="text-black dark:text-white text-2xl" />,
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 bg-slate-50 dark:bg-slate-950"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-[140px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/15 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-cyan-500">
            My Skills
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
            Technologies
            <span className="text-cyan-500"> I Use</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">
            I build modern, scalable, and responsive web applications using
            powerful frontend, backend, and development tools.
          </p>

          <div className="flex justify-center mt-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="relative h-[380px] w-[380px] md:h-[450px] md:w-[450px]"
            >
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border border-cyan-500/30" />

              {/* Middle Ring */}
              <div className="absolute inset-[60px] rounded-full border border-purple-500/30" />

              {/* Center Circle */}
              <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white dark:bg-slate-900 border border-cyan-500 shadow-2xl">
                <Code2 size={40} className="text-cyan-500" />
              </div>

              {/* Orbit Icons */}
              {orbitIcons.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.2,
                  }}
                  className={`absolute ${item.style}`}
                >
                  <div className="rounded-full bg-white dark:bg-slate-900 p-3 border border-slate-200 dark:border-slate-700 shadow-lg">
                    {item.icon}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Premium Skills Marquee */}
          <div className="mt-20 overflow-hidden">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex gap-6 w-max"
            >
              {[...skills, ...skills].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.08,
                    y: -8,
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-2xl
                    p-[1px]
                    bg-gradient-to-r
                    from-cyan-500
                    via-blue-500
                    to-purple-500
                  "
                >
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      bg-white
                      dark:bg-slate-900
                      px-6
                      py-4
                      backdrop-blur-xl
                    "
                  >
                    {skill.icon}
                    <span className="font-semibold text-slate-800 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Categories */}
          <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {/* Frontend */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl text-left"
            >
              <h3 className="text-2xl font-bold text-cyan-500 mb-6">Frontend</h3>
              <div className="space-y-4">
                <SkillItem icon={<FaReact />} text="React" />
                <SkillItem icon={<SiNextdotjs />} text="Next.js" />
                <SkillItem icon={<SiTypescript />} text="TypeScript" />
                <SkillItem icon={<FaJs />} text="JavaScript" />
                <SkillItem icon={<SiTailwindcss />} text="Tailwind CSS" />
                <SkillItem icon={<FaHtml5 />} text="HTML5" />
                <SkillItem icon={<FaCss3Alt />} text="CSS3" />
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl text-left"
            >
              <h3 className="text-2xl font-bold text-green-500 mb-6">Backend</h3>
              <div className="space-y-4">
                <SkillItem icon={<FaNodeJs />} text="Node.js" />
                <SkillItem icon={<SiExpress />} text="Express.js" />
                <SkillItem icon={<SiMongodb />} text="MongoDB" />
                <SkillItem icon={<SiJsonwebtokens />} text="JWT" />
                <SkillItem icon={<Database />} text="REST API" />
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-xl text-left"
            >
              <h3 className="text-2xl font-bold text-purple-500 mb-6">Tools</h3>
              <div className="space-y-4">
                <SkillItem icon={<FaGitAlt />} text="Git" />
                <SkillItem icon={<FaGithub />} text="GitHub" />
                <SkillItem icon={<SiPostman />} text="Postman" />
                <SkillItem icon={<SiVercel />} text="Vercel" />
                <SkillItem icon={<FaFigma />} text="Figma" />
                <SkillItem icon={<Code2 />} text="VS Code" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Helper Component for Category Skill Items
function SkillItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
      <span className="text-xl text-cyan-500">{icon}</span>
      <span className="font-medium text-slate-700 dark:text-slate-200">{text}</span>
    </div>
  );
}