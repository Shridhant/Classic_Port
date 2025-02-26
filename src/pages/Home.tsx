"use client";

import type React from "react";
import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin, Send, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <header className="text-left mb-8">
        <img
          src="/dp.jpeg"
          alt="Profile picture"
          width={100}
          height={100}
          className="rounded-full mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">Hello!</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I'm Fayaz, I work as a software, product engineer and designer from
          Bengaluru, India. I specialize in building web applications and sites
          using Javascript, React, Vue & Node. I've procrastinated building this
          website for years but finally it's here, I've carved out my own little
          nook on the internet to share my silly experiments, nifty projects,
          and thoughts (mostly about tech and design).
        </p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          By day, I'm a Product Engineer at{" "}
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Chatwoot (YC S21)
          </a>
          , and by night (and weekends), I'm busy tinkering with some random
          tool or app that I am building.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">FIND ME ON</h2>
        <div className="space-y-2">
          <SocialLink
            href="#"
            icon={<Twitter className="w-5 h-5" />}
            label="Twitter"
          />
          <SocialLink
            href="#"
            icon={<Github className="w-5 h-5" />}
            label="GitHub"
          />
          <SocialLink
            href="#"
            icon={<Linkedin className="w-5 h-5" />}
            label="LinkedIn"
          />
          <SocialLink
            href="#"
            icon={<Send className="w-5 h-5" />}
            label="Telegram"
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold mb-4">LATEST PROJECTS</h2>
        <div className="space-y-2">
          <ProjectLink
            href="#"
            icon={<FileText className="w-5 h-5" />}
            label="Feedbackjar"
            description="Open source feedback, roadmaps and changelogs"
          />
        </div>
      </section>
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
