import React from 'react';
import { motion } from 'framer-motion';
import { useAppSelector } from '../store/hooks';

export const AboutPage: React.FC = () => {
  const { styles } = useAppSelector((state) => state.theme);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h1 className={styles.about.title}>About Hipster Inc.</h1>
      <p className={styles.about.paragraph}>
        We are a passionate team dedicated to bringing you unique and stylish products.
      </p>
      <p className={styles.about.paragraph}>
        Founded in 2016 and headquartered in Singapore, we believe in quality and craftsmanship.
      </p>
    </motion.div>
  );
};
