"use client";

import { motion } from "framer-motion";
import { FolderGit2 } from "lucide-react";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 bg-slate-50 dark:bg-slate-950"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Section Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >

          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-xs font-bold uppercase tracking-[3px] text-cyan-500">

            <FolderGit2 size={15} />

            My Projects

          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">

            Featured

            <span className="text-cyan-500">
              {" "}Projects
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-600 dark:text-slate-400">

            Here are some of my favorite full-stack projects built with
            modern web technologies. Each project demonstrates my
            problem-solving skills and passion for creating clean,
            responsive, and user-friendly applications.

          </p>

        </motion.div>

        {/* Projects Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .2,
              }}
            >

              <ProjectCard project={project} />

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}