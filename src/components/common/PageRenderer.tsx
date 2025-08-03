import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAppSelector } from "../../store/helpers";
import { AboutPage } from "../../pages/AboutPage";
import { ContactPage } from "../../pages/ContactPage";
import { HomePage } from "../../pages/HomePage";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";
import { ProductPage } from "../../pages/ProductPage";
import { CartPage } from "../../pages/CartPage";
import { PaymentPage } from "../../pages/PaymentPage";

export const PageRenderer: React.FC = () => {
  const { current } = useAppSelector((state) => state.navigation);

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
        {current === "signin" && <SignInPage />}
        {current === "signup" && <SignUpPage />}
        {current === "product" && <ProductPage />}
        {current === "cart" && <CartPage />}
        {current === "payment" && <PaymentPage />}
      </motion.div>
    </AnimatePresence>
  );
};
