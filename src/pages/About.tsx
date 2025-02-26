"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">About Me</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        I'm a software engineer and designer with a passion for creating
        beautiful and functional web applications. With years of experience in
        JavaScript, React, Vue, and Node.js, I've worked on a wide range of
        projects from small startups to large enterprises.
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        When I'm not coding, you can find me exploring new technologies,
        contributing to open-source projects, or writing about my experiences in
        tech. I believe in lifelong learning and constantly pushing the
        boundaries of what's possible in web development.
      </p>
      <p className="text-gray-600 dark:text-gray-400">
        Feel free to reach out if you want to collaborate on a project or just
        chat about tech!
      </p>
    </motion.div>
  );
}
