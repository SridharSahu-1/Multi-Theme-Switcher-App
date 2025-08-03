import React from "react";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/helpers";

export const ContactPage: React.FC = () => {
  const { styles } = useAppSelector((state) => state.theme);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className={styles.contact.title}>Contact Us</h1>
      <p className={styles.contact.paragraph}>
        Email: hr@hipster-inc.com | Phone: +65 8231 4107
      </p>

      <div className={`max-w-2xl mx-auto ${styles.contact.form}`}>
        <form className="space-y-6">
          {["name", "email"].map((field) => (
            <input
              key={field}
              type={field === "email" ? "email" : "text"}
              name={field}
              placeholder={`Your ${
                field.charAt(0).toUpperCase() + field.slice(1)
              }`}
              className={styles.contact.input}
            />
          ))}
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            className={styles.contact.input}
          />
          <button type="submit" className={styles.contact.button}>
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  );
};
