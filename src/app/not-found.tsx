"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-950 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl font-extrabold text-cyan-500"
        >
          404
        </motion.h1>

        <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-400">
          Sorry, the page you're looking for doesn't exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-8 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold"
        >
          Go Home
        </Link>
      </motion.div>
    </main>
  );
}