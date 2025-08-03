import React from "react";
import { Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useAppSelector } from "../../store/helpers";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout: React.FC = () => {
  const { styles, activeTheme } = useAppSelector((state) => state.theme);

  return (
    <>
      <Header />
      <motion.main
        key={activeTheme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className={`pt-20 transition-colors ${styles.layout.bg} ${styles.layout.text} ${styles.layout.font}`}
      >
        <div className={styles.layout.container}>
          {activeTheme === "dark" && <Sidebar />}
          <div className={activeTheme === "dark" ? "flex-1 p-6" : ""}>
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Outlet />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.main>
    </>
  );
};
