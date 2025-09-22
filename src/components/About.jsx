import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28 scroll-mt-24 md:scroll-mt-30">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-title"
      >
        About
      </motion.h2>
      <div className="card p-6">
        <p className="opacity-80">
          I’m Vijini Jayathilaka, a 3rd-year undergraduate student at SLIIT, 
          pursuing a BSc (Hons) in Information Technology specializing in 
          Information Technology. I’m passionate about creating impactful 
          digital solutions, with a strong interest in web development, QA 
          Engineering, UI/UX design, and software engineering.</p>
          <p></p>
        <p>I have hands-on experience working on projects such as tour 
          management systems, inventory management systems, and mobile 
          applications, where I focus on building user-friendly and efficient 
          solutions. I enjoy exploring new technologies, solving problems, 
          and continuously improving my skills to grow as a professional.</p>
          <p></p>
        <p>My goal is to become a skilled IT professional who can contribute 
          to innovative projects and deliver solutions that make a difference.
        </p>
        <div className="mt-2 flex flex-wrap gap-3 justify-end">
          <a
            href="/vijini jayathilaka CV.pdf"
            download="vijini jayathilaka-CV.pdf"
            className="soft-btn"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
