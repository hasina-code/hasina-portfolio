"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  technologies: string[];
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl"
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />
      </div>

      {/* Content */}

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-4 text-slate-600 dark:text-slate-400 leading-7 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-500"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Button */}

        <Link href={`/project/${project.id}`}>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            View Details
            <ArrowRight size={18} />
          </motion.button>
        </Link>

      </div>
    </motion.div>
  );
}