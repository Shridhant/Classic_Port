import React, { ReactNode } from "react";
import "../index.css";
import Navigation from "../components/Navigation";

import { AnimatePresence } from "framer-motion";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black text-gray-900 dark:text-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-10">
          <Navigation />
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {children}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PageLayout;
