import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Send, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  // Animation variants for container with blur effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        default: { type: "spring" },
        opacity: { ease: "linear" },
      },
    },
  };

  // Animation variants for individual items with blur
  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        filter: { duration: 0.7 },
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ willChange: "filter" }}
    >
      <motion.header
        variants={item}
        initial="hidden"
        animate="show"
        className="text-left mb-8"
        style={{ willChange: "filter" }}
      >
        <img
          src="/dp.jpeg"
          alt="Profile picture"
          width={100}
          height={100}
          className="rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Hello!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I'm Kevipulie David Iralu, I'm a Python Developer at{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Infosys
          </a>{" "}
          based in Melbourne, Australia. I specialize in building innovative
          solutions in the GIS, EdTech, and telecommunications industries. My
          technical expertise spans across Python, JavaScript, and React.js,
          with hands-on experience in Docker and back-end web development. By
          day, I work at Infosys, where I focus on delivering high-quality
          software solutions and contributing to various projects that drive
          efficiency and performance. In my spare time, I manage the technical
          aspects of an LMS at{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-700 hover:underline"
          >
            NagaEd
          </a>
          , ensuring that our Learning and Engagement team has the tools they
          need to succeed.
        </p>
      </motion.header>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="mb-8"
        style={{ willChange: "filter" }}
      >
        <motion.h2
          variants={item}
          className="text-lg font-semibold mb-4"
          style={{ willChange: "filter" }}
        >
          FIND ME ON
        </motion.h2>
        <div className="space-y-2">
          <motion.div variants={item} style={{ willChange: "filter" }}>
            <SocialLink
              href="#"
              icon={<Twitter className="w-5 h-5" />}
              label="Twitter"
            />
          </motion.div>
          <motion.div variants={item} style={{ willChange: "filter" }}>
            <SocialLink
              href="#"
              icon={<Github className="w-5 h-5" />}
              label="GitHub"
            />
          </motion.div>
          <motion.div variants={item} style={{ willChange: "filter" }}>
            <SocialLink
              href="#"
              icon={<Linkedin className="w-5 h-5" />}
              label="LinkedIn"
            />
          </motion.div>
          <motion.div variants={item} style={{ willChange: "filter" }}>
            <SocialLink
              href="#"
              icon={<Send className="w-5 h-5" />}
              label="Telegram"
            />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        style={{ willChange: "filter" }}
      >
        <motion.h2
          variants={item}
          className="text-lg font-semibold mb-4"
          style={{ willChange: "filter" }}
        >
          LATEST PROJECTS
        </motion.h2>
        <div className="space-y-2">
          <motion.div variants={item} style={{ willChange: "filter" }}>
            <ProjectLink
              href="#"
              icon={<FileText className="w-5 h-5" />}
              label="Feedbackjar"
              description="Open source feedback, roadmaps and changelogs"
            />
          </motion.div>
        </div>
      </motion.section>
    </motion.div>
  );
}

function SocialLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      to={href}
      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

function ProjectLink({
  href,
  icon,
  label,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  description: string;
}) {
  return (
    <Link
      to={href}
      className="flex items-start space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
    >
      {icon}
      <div>
        <span className="font-semibold">{label}</span>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          {description}
        </p>
      </div>
    </Link>
  );
}
