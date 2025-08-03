import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../store/helpers";
import { setTheme } from "../../store/slices/themeSlice";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/config";
import type { Theme } from "../../theme/themes";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { activeTheme, styles } = useAppSelector((state) => state.theme);
  const { items } = useAppSelector((state) => state.cart);
  const { currentUser } = useAppSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const cartItemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/home");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

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
          onClick={() => navigate("/home")}
        >
          Hipster Inc.
        </h1>

        <nav className="hidden md:flex space-x-8">
          {(["home", "about", "contact"] as const).map((page) => (
            <button
              key={page}
              onClick={() => navigate(`/${page}`)}
              className="hover:opacity-80"
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </button>
          ))}
          <>
            <button
              onClick={() => navigate("/cart")}
              className="hover:opacity-80 relative flex items-center"
            >
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                />
              </svg>
              Cart
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -left-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cartItemCount}
                </span>
              )}
            </button>
          </>
          <div className="flex space-x-4">
            {currentUser ? (
              <>
                <button onClick={handleLogout} className="hover:opacity-80">
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/signin")}
                  className="hover:opacity-80"
                >
                  Signin
                </button>
              </>
            )}
          </div>
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
                        dispatch(setTheme(id));
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
