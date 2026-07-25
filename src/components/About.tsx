"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Rocket,
  Sparkles,
  Heart,
} from "lucide-react";

export default function About() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ];

  return (
    <section
      id="about"
      className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
            Discover Me
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-slate-900 dark:text-white">
            About <span className="text-cyan-500">Me</span>
          </h2>
        </motion.div>


        <div className="grid lg:grid-cols-12 gap-12 items-center">


          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex flex-col items-center relative"
          >

            {/* Glow */}
            <div className="absolute w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full -z-10" />


           {/* Image Card */}
<motion.div
  animate={{ y: [-10, 10, -10] }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  className="relative p-[3px] rounded-[45px] bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-2xl"
>

  {/* Inner Card */}
  <div className="p-4 rounded-[42px] bg-white dark:bg-slate-900">

    <div className="overflow-hidden rounded-[35px]">

      <Image
        src="/images/hasina (2).png"
        alt="Hasina Akter"
        width={420}
        height={520}
        className="
          object-cover
          w-[360px]
          h-[450px]
          hover:scale-110
          transition-transform
          duration-700
        "
      />

    </div>

  </div>



  {/* Floating Badge */}
  <div
    className="
      absolute
      -bottom-4
      left-1/2
      -translate-x-1/2
      bg-gradient-to-r
      from-cyan-500
      to-blue-600
      text-white
      px-6
      py-2.5
      rounded-full
      text-xs
      font-bold
      shadow-xl
      tracking-wide
      uppercase
      whitespace-nowrap
    "
  >
    🚀 Jr. Full Stack Developer
  </div>


</motion.div>



            {/* Mini Cards */}

            <div className="grid grid-cols-3 gap-3 w-full mt-8">

              <MiniCard
                icon={<Code2 size={18} />}
                title="Frontend"
                desc="React / Next"
              />


              <MiniCard
                icon={<Database size={18} />}
                title="Backend"
                desc="Node / Mongo"
              />


              <MiniCard
                icon={<Rocket size={18} />}
                title="Goal"
                desc="Software Engineer"
              />

            </div>

          </motion.div>





          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-white dark:bg-slate-900/60 p-8 md:p-10 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl"
          >


            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">

              Hi, I'm{" "}

              <span className="text-cyan-500">
                Hasina Akter
              </span>

            </h3>




            <div className="mt-5 space-y-4 text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed">


              <p>
                My programming journey started with HTML, CSS, and
                JavaScript, where I learned the fundamentals of web
                development and built my foundation in creating websites.
                With curiosity and dedication, I continued exploring
                modern technologies and improved my skills step by step.
              </p>



              <p>
                After learning the basics, I started working with React,
                Next.js, and TypeScript to build modern, responsive, and
                interactive user interfaces. Later, I expanded my
                knowledge into backend development using Node.js,
                Express.js, and MongoDB, which helped me become a
                Full Stack Developer.
              </p>




              <p>
                I enjoy building modern, scalable, and user-friendly web
                applications. I love creating responsive designs,
                developing complete full-stack solutions, and solving
                real-world problems through technology. I enjoy
                transforming ideas into functional digital products with
                clean code and better user experiences.
              </p>





              <p className="flex items-start gap-3">

                <Heart className="w-5 h-5 mt-1 text-cyan-500 shrink-0" />

                <span>
                  Outside programming, I enjoy exploring new
                  technologies, reading documentation, watching tech
                  videos, and learning from developer communities. I
                  also enjoy creative activities that inspire my
                  imagination and help me stay motivated.
                </span>

              </p>




              <p>
                I am a passionate and dedicated learner who believes in
                continuous improvement. I enjoy taking on new challenges,
                learning new technologies, and improving my problem-solving
                skills. My goal is to become a skilled Software Engineer
                and contribute to impactful products.
              </p>


            </div>





            {/* Skills */}

            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">


              <div className="flex items-center gap-2 mb-4">

                <Sparkles
                  className="text-cyan-500"
                  size={18}
                />


                <h4 className="text-base font-bold text-slate-900 dark:text-white">

                  Technologies I Use

                </h4>

              </div>





              <div className="flex flex-wrap gap-2">


                {skills.map((skill) => (

                  <motion.span
                    key={skill}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >

                    {skill}

                  </motion.span>

                ))}


              </div>


            </div>


          </motion.div>


        </div>


      </div>

    </section>
  );
}





// Mini Card Component

function MiniCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {

  return (

    <div className="p-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center shadow-sm">


      <div className="flex justify-center text-cyan-500 mb-1">

        {icon}

      </div>


      <h5 className="text-xs font-bold text-slate-900 dark:text-white">

        {title}

      </h5>


      <p className="text-[11px] text-slate-500 mt-0.5">

        {desc}

      </p>


    </div>

  );

}