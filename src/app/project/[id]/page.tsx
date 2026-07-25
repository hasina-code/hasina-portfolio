import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CheckCircle2, Lightbulb, Wrench } from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

// Generate static routes for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetails({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium text-sm shadow-sm hover:border-cyan-500 transition-all mb-8"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            {project.title}
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          {/* Project Banner Image */}
          <div className="relative h-[250px] md:h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md mb-8">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Action Buttons (Live & GitHub) */}
          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white font-semibold shadow-lg shadow-cyan-500/25 transition-all"
            >
              <ExternalLink size={18} />
              Live Project
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-semibold border border-slate-700 transition-all"
            >
              <FaGithub size={18} />
              GitHub Repository (Client)
            </a>
          </div>

          {/* Technology Stack */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Wrench className="text-cyan-500" size={22} />
              Main Technology Stack
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges Faced */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <CheckCircle2 className="text-cyan-500" size={22} />
              Challenges Faced
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800"
                >
                  <span className="h-2 w-2 rounded-full bg-cyan-500 mt-2 shrink-0" />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Plans */}
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
              <Lightbulb className="text-cyan-500" size={22} />
              Future Plans & Improvements
            </h2>
            <ul className="space-y-3">
              {project.future.map((plan, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800"
                >
                  <span className="h-2 w-2 rounded-full bg-purple-500 mt-2 shrink-0" />
                  <span>{plan}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </main>
  );
}