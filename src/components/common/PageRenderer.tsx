import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigation } from "../../contexts/NavigationContext";
import { AboutPage } from "../../pages/AboutPage";
import { ContactPage } from "../../pages/ContactPage";
import { HomePage } from "../../pages/HomePage";

export const PageRenderer: React.FC = () => {
  const { current } = useNavigation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        {current === "home" && <HomePage />}
        {current === "about" && <AboutPage />}
        {current === "contact" && <ContactPage />}
      </motion.div>
    </AnimatePresence>
  );
};
