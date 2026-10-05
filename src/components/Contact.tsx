"use client";

import React, { useState } from "react";
import { Mail, Phone, MessageSquare, Send, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const subject = formData.subject || `Portfolio message from ${fullName || formData.email}`;
    const body = [
      `Name: ${fullName || "Not provided"}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");

    window.location.href = `mailto:hasina.akter171407@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-linear-to-b from-white via-slate-50 to-white py-24 transition-colors duration-500 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
            Get In Touch
          </span>
          <h2 className="mt-4 text-4xl font-extrabold text-slate-900 dark:text-white md:text-5xl">
            Let&apos;s <span className="text-cyan-500">Connect</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300 md:text-base">
            Have a project in mind, a collaboration idea, or just want to say hello? <br />
            My inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 lg:col-span-5"
          >

            <motion.a
              href="mailto:hasina.akter171407@gmail.com"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="rounded-lg bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">EMAIL</p>
                <p className="mt-0.5 break-all text-sm font-medium text-slate-800 dark:text-slate-200">hasina.akter171407@gmail.com</p>
              </div>
            </motion.a>

            <motion.a
              href="tel:+8801822903392"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="rounded-lg bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">PHONE</p>
                <p className="mt-0.5 text-sm font-medium text-slate-800 dark:text-slate-200">+880 1822903392</p>
              </div>
            </motion.a>

            <motion.a
              href="https://wa.me/8801822903392"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="rounded-lg bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                <MessageSquare size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">WHATSAPP</p>
                <p className="mt-0.5 text-sm font-medium text-slate-800 dark:text-slate-200">+880 1822903392</p>
              </div>
            </motion.a>

            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=Noakhali%2C%20Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Noakhali, Bangladesh in Google Maps"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.99 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-cyan-500/50 dark:border-slate-800 dark:bg-slate-900/60"
            >
              <div className="rounded-lg bg-cyan-500/10 p-2.5 text-cyan-600 dark:text-cyan-400">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">LOCATION</p>
                <p className="mt-0.5 text-sm font-medium text-slate-800 dark:text-slate-200">Noakhali, Bangladesh</p>
              </div>
            </motion.a>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://github.com/hasina-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <FaGithub size={18} />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hasina-akter-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-cyan-500 hover:bg-cyan-500 hover:text-white dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-300"
              >
                <FaLinkedin size={18} />
                LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900/60 md:p-8 lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Inputs */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-first-name" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">First Name</label>
                  <input
                    id="contact-first-name"
                    type="text"
                    name="firstName"
                    autoComplete="given-name"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
                <div>
                  <label htmlFor="contact-last-name" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">Last Name</label>
                  <input
                    id="contact-last-name"
                    type="text"
                    name="lastName"
                    autoComplete="family-name"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">Email Address</label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label htmlFor="contact-subject" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  placeholder="Project Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 transition placeholder:text-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-white transition duration-200 hover:bg-cyan-600"
              >
                <Send size={16} />
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}