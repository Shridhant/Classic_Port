import type React from "react";
import { Link } from "react-router-dom";
import { Home, FileText, Briefcase, User, Cloud, BookOpen } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="flex space-x-4 bg-gray-100 dark:bg-black/50 backdrop-blur-lg rounded-2xl p-4 mt-2 border border-white/10 fixed top-0 left-1/2 transform -translate-x-1/2">
      <NavIcon href="/" icon={<Home className="w-6 h-6" />} />
      <NavIcon href="/about" icon={<User className="w-6 h-6" />} />
      <NavIcon href="/projects" icon={<Briefcase className="w-6 h-6" />} />
      <NavIcon href="/blogs" icon={<FileText className="w-6 h-6" />} />
    </nav>
  );
}

function NavIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link
      to={href}
      className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
    >
      {icon}
    </Link>
  );
}
