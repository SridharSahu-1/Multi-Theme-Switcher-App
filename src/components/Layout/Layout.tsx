import React from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../../store/hooks";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
          {activeTheme === 'dark' && <Sidebar />}
          <div className={activeTheme === 'dark' ? 'flex-1 p-6' : ''}>
            {children}
          </div>
        </div>
      </motion.main>
    </>
  );
};
