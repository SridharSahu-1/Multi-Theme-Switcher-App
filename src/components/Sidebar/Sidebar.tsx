import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <motion.aside
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-64 bg-gray-800 border-r border-gray-700 p-6 hidden lg:block flex-shrink-0 h-screen sticky top-20"
    >
      <h2 className="text-lg font-semibold text-gray-100 mb-4">Dashboard</h2>
      <nav className="flex flex-col gap-2 items-start">
        {(["home", "about", "contact"] as const).map((page) => (
          <button
            key={page}
            onClick={() => navigate(`/${page}`)}
            className="hover:opacity-80"
          >
            {page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        ))}
      </nav>
    </motion.aside>
  );
};
