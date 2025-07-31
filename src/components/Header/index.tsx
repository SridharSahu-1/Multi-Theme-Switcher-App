import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { useNavigation } from "../../contexts/NavigationContext";
import type { Theme } from "../../theme/themes";

export const Header: React.FC = () => {
  const { activeTheme, setTheme, styles } = useTheme();
  const { goTo } = useNavigation();
  const [menuOpen, setMenuOpen] = useState(false);

  const themeOptions: { id: Theme; label: string }[] = [
    { id: "minimal", label: "Minimalist Light" },
    { id: "dark", label: "Structured Dark" },
    { id: "colorful", label: "Colorful Grid" },
  ];

  return (
    <header
      className={`fixed w-full z-50 shadow-md transition-colors ${styles.header.bg} ${styles.header.text}`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <h1
          className={`${styles.header.logo} cursor-pointer`}
          onClick={() => goTo("home")}
        >
          Hipster Inc.
        </h1>

        <nav className="hidden md:flex space-x-8">
          {(["home", "about", "contact"] as const).map((page) => (
            <button
              key={page}
              onClick={() => goTo(page)}
              className="hover:opacity-80"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
        </nav>

        <div className="relative">
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex items-center px-3 py-2 rounded-md focus:outline-none"
          >
            <span>Themes</span>
            <svg
              className={`w-4 h-4 ml-1 transition-transform ${
                menuOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${styles.header.dropdownBg}`}
              >
                <div className="py-1">
                  {themeOptions.map(({ id, label }) => (
                    <button
                      key={id}
                      onClick={() => {
                        setTheme(id);
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 text-sm ${
                        id === activeTheme ? "font-bold" : ""
                      } hover:bg-opacity-20 hover:bg-gray-500/20`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};
