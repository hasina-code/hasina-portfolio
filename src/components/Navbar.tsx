"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState("home");

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((item) =>
        document.getElementById(item.id)
      );

      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-xl border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-4xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Hasina
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setActive(item.id)}
                className={`relative text-[17px] font-semibold transition-all duration-300

                ${
                  active === item.id
                    ? "text-cyan-400"
                    : "text-gray-300 hover:text-cyan-400"
                }

                after:absolute
                after:left-0
                after:-bottom-2
                after:h-[2px]
                after:bg-cyan-400
                after:transition-all
                after:duration-300

                ${
                  active === item.id ? "after:w-full" : "after:w-0 hover:after:w-full"
                }
              `}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">
          {mounted && (
            <button
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              className="w-14 h-14 rounded-full border-2 border-cyan-400 flex items-center justify-center bg-slate-800 hover:shadow-lg hover:shadow-cyan-500/40 transition"
            >
              {theme === "dark" ? (
                <Sun className="w-6 h-6 text-yellow-400 animate-slow-spin" />
              ) : (
                <Moon className="w-6 h-6 text-white" />
              )}
            </button>
          )}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      {open && (
        <div className="lg:hidden bg-slate-900 border-t border-cyan-500/20">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActive(item.id);
                setOpen(false);
              }}
              className={`block px-6 py-4 transition

              ${
                active === item.id
                  ? "text-cyan-400 bg-slate-800"
                  : "text-gray-300 hover:text-cyan-400 hover:bg-slate-800"
              }
            `}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}