// src/components/About.jsx
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
const WORDS = ["Designer.", "Developer.", "Freelancer."];

function Typewriter() {
  const [idx, setIdx] = useState(0); // index of current word
  const [sub, setSub] = useState(""); // current substring
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = WORDS[idx];
    const typing = 100;
    const deleting = 50;
    const hold = 1000;
    let t;

    if (!del && sub.length < word.length) {
      t = setTimeout(() => setSub(word.slice(0, sub.length + 1)), typing);
    } else if (!del && sub.length === word.length) {
      t = setTimeout(() => setDel(true), hold);
    } else if (del && sub.length > 0) {
      t = setTimeout(() => setSub(word.slice(0, sub.length - 1)), deleting);
    } else if (del && sub.length === 0) {
      setDel(false);
      setIdx((idx + 1) % WORDS.length);
    }

    return () => clearTimeout(t);
  }, [sub, del, idx]);

  return (
    <span>
      <span className="gradient-text">{sub}</span>
      <span className="ml-0.5 inline-block w-[2px] h-[1em] bg-current animate-pulse" />
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      ></motion.h2>

      <div className="grid gap-8 md:grid-cols-2 items-center">
        {/* Left side: text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Name tag */}
          <div className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur px-3 py-1 shadow-md">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-medium">Vijini Jayathilaka</span>
          </div>

          {/* Typing line */}
          <p className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            <strong>I’m </strong>
            <Typewriter />
          </p>

          {/* Description */}
          <div className="card p-6">
            <p className="opacity-80">
              Hi, I’m Vijini! I’m a 3rd-year undergraduate at SLIIT, pursuing a BSc (Hons) in 
              Information Technology. I’m passionate about software development, UI/UX design, 
              and building innovative projects that solve real-world problems. My portfolio 
              showcases my academic projects, technical skills, and creative work as I continue 
              to grow as an IT professional.
            </p>
          </div>
          <div className="flex gap-4 mt-4  s ">
            <a
              href="https://github.com/vijini123"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/vijini-jayathilaka-042740264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="https://www.instagram.com/_v_i_j_i_n_i_?igsh=MXZnano3NWF0djlibw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              <Instagram size={22} />
            </a>
            <a
              href="https://www.facebook.com/vijinijayathilaka?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl border border-white/10 hover:bg-black/5 dark:hover:bg-white/5 transition"
            >
              <Facebook size={22} />
            </a>
          </div>
          {/* Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-3 justify-center items-center">
            <a href="#contact" className="primary-btn">
              Hire Me
            </a>
            <a
              href="\vijini jayathilaka CV.pdf"
              download="vijini jayathilaka-CV.pdf"
              className="soft-btn"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        {/* Right side: image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 0.75 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src="/vijini.jpg"
            alt="vijini jayathilaka"
            className="w-full max-w-md mx-auto rounded-3xl border border-white/10 shadow-2xl object-cover"
          />
          <div className="absolute -z-10 -inset-6 blur-3xl opacity-40 bg-gradient-to-tr from-brand-400 to-brand-700 rounded-[36px]" />
        </motion.div>
      </div>
    </section>
  );
}
