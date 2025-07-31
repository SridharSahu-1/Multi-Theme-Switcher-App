import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { useFetch } from '../hooks/useFetch';
import { useTheme } from '../contexts/ThemeContext';
import { Loader } from '../components/common/Loader';
import { Card } from '../components/Card';
import type { Product } from '../models/Product';

export const HomePage: React.FC = () => {
  const { data: products, loading, error } = useFetch<Product[]>(
    'https://fakestoreapi.com/products?limit=8'
  );
  const { styles } = useTheme();

  if (loading) return <Loader />;
  return (
    <>
      {error && (
        <div className="bg-red-500 text-white p-4 rounded-md mb-6">{error}</div>
      )}

      <h1 className={styles.homepage.title}>Our Products</h1>
      <p className={styles.homepage.paragraph}>
        Discover a curated selection of our finest products.
      </p>
      <button className={styles.homepage.button}>Shop Now</button>

      <div className={`mt-12 ${styles.homepage.grid}`}>
        <AnimatePresence>
          {products?.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
