import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";
import { Header } from "../Header";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { styles, activeTheme } = useTheme();

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
        <div className={styles.layout.container}>{children}</div>
      </motion.main>
    </>
  );
};
