import type React from "react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileText,
  Rss,
  Wind,
  Database,
  Pen,
  Mail,
  Zap,
  Inbox,
  Twitter,
  LinkIcon,
} from "lucide-react";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold mb-4">Projects</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        I've worked on tons of little projects over the years but these are the
        ones that I'm most proud of. Many of them are open-source, so if you see
        something that piques your interest, check out the code and contribute
        if you have ideas for how it can be improved.
      </p>
      <div className="space-y-6">
        <ProjectItem
          icon={<FileText className="w-6 h-6" />}
          title="Feedbackjar"
          description="Open source feedback, roadmaps and changelogs"
        />
        <ProjectItem
          icon={<Rss className="w-6 h-6" />}
          title="Feedful"
          description="Modern news reader in tweetdeck style"
        />
        <ProjectItem
          icon={<Wind className="w-6 h-6" />}
          title="Hawa"
          description="A simple white noise app which sits in the menubar"
        />
        <ProjectItem
          icon={<Database className="w-6 h-6" />}
          title="Pocketbase Nuxt"
          description="A starter template for Nuxt.js with Pocketbase"
        />
        <ProjectItem
          icon={<Pen className="w-6 h-6" />}
          title="Sketch to UI"
          description="Convert bad hand drawn UI sketch to code using GPT 4 Vision model"
        />
        <ProjectItem
          icon={<Mail className="w-6 h-6" />}
          title="Formdata"
          description="Relay form data to your email for free"
        />
        <ProjectItem
          icon={<Zap className="w-6 h-6" />}
          title="Simple Online Tools"
          description="Simple online tools for everyday use"
        />
        <ProjectItem
          icon={<Inbox className="w-6 h-6" />}
          title="Imbox"
          description="Temporary inbox as a chrome extension"
        />
        <ProjectItem
          icon={<Twitter className="w-6 h-6" />}
          title="Bring back the bird"
          description="Chrome extension to replace the new Twitter logo with the original bird"
        />
        <ProjectItem
          icon={<LinkIcon className="w-6 h-6" />}
          title="Onelink"
          description="An experimental link-in-bio tool, where the data lives in the URL"
        />
      </div>
    </motion.div>
  );
}

function ProjectItem({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Link to="#" className="flex items-start space-x-4 group">
      <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded-lg group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
        {icon}
      </div>
      <div>
        <h2 className="font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {title}
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </Link>
  );
}
