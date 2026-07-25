"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail } from "lucide-react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 overflow-hidden
      bg-gradient-to-b
      from-white via-slate-100 to-white
      dark:from-slate-950 dark:via-slate-900 dark:to-slate-950
      transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}

        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-500 font-semibold text-xl mb-3"
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight
            text-slate-900 dark:text-white"
          >
            Hasina
            <span className="text-cyan-500"> Akter</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-2xl lg:text-3xl font-bold flex flex-wrap gap-2"
          >
            <span className="text-slate-900 dark:text-white">
              I'm a
            </span>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Frontend Developer",
                2000,
                "Web Developer",
                2000,
                "Software Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-cyan-500"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-8 text-lg leading-8
            text-slate-600 dark:text-slate-300 max-w-xl"
          >
            I build modern, responsive and user-friendly web applications
            using React, Next.js, Node.js, Express and MongoDB.
            I love solving real-world problems and creating beautiful,
            high-performance web experiences.
          </motion.p>

          {/* Buttons */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex flex-wrap gap-5 mt-10"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="flex items-center gap-2
              bg-cyan-500 hover:bg-cyan-600
              text-white px-8 py-4 rounded-xl
              font-semibold shadow-xl"
            >
              <Download size={20} />
              Download Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="flex items-center gap-2
              border-2 border-cyan-500
              text-cyan-500
              hover:bg-cyan-500 hover:text-white
              px-8 py-4 rounded-xl transition"
            >
              <Mail size={20} />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Social Icons */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex gap-5 mt-10"
          >
                        <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              href="https://github.com/hasina-code"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full
              border-2 border-cyan-500
              flex items-center justify-center
              text-slate-700 dark:text-white
              hover:bg-cyan-500 hover:text-white
              transition-all duration-300"
            >
              <FaGithub size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/hasina-akter-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full
              border-2 border-cyan-500
              flex items-center justify-center
              text-slate-700 dark:text-white
              hover:bg-cyan-500 hover:text-white
              transition-all duration-300"
            >
              <FaLinkedin size={22} />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 360 }}
              whileTap={{ scale: 0.9 }}
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full
              border-2 border-cyan-500
              flex items-center justify-center
              text-slate-700 dark:text-white
              hover:bg-cyan-500 hover:text-white
              transition-all duration-300"
            >
              <FaFacebook size={22} />
            </motion.a>

          </motion.div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glow */}

            <div
              className="absolute -inset-6 rounded-full
              bg-cyan-500 blur-3xl opacity-30"
            />

            {/* Rotating Ring */}

            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -inset-3
              rounded-full border-2
              border-dashed border-cyan-500"
            />

            {/* Image */}

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
            >
              <Image
                src="/images/hasina (2).png"
                alt="Hasina Akter"
                width={450}
                height={450}
                priority
                className="
                relative
                rounded-full
                object-cover
                border-[6px]
                border-cyan-500
                shadow-2xl

                w-[320px]
                h-[320px]

                md:w-[400px]
                md:h-[400px]

                lg:w-[450px]
                lg:h-[450px]
                "
              />
            </motion.div>

          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}