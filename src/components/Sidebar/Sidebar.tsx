import React from "react";
import { motion } from "framer-motion";

export const Sidebar: React.FC = () => {
  return (
    <motion.aside 
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-64 bg-gray-800 border-r border-gray-700 p-6 hidden lg:block flex-shrink-0 h-screen sticky top-20"
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Dashboard</h2>
      <nav className="space-y-2">
        <a 
          href="#" 
          className="block py-2 px-3 rounded-md hover:bg-gray-700 text-gray-300 transition-colors duration-200"
        >
          Analytics
        </a>
        <a 
          href="#" 
          className="block py-2 px-3 rounded-md hover:bg-gray-700 text-gray-300 transition-colors duration-200"
        >
          Reports
        </a>
        <a 
          href="#" 
          className="block py-2 px-3 rounded-md hover:bg-gray-700 text-gray-300 transition-colors duration-200"
        >
          Settings
        </a>
      </nav>
    </motion.aside>
  );
};
