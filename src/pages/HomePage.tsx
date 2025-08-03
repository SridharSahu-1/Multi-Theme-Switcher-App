import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { fetchProducts } from '../store/slices/productsSlice';
import { Loader } from '../components/common/Loader';
import { Card } from '../components/Card';

export const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, loading, error } = useAppSelector((state) => state.products);
  const { styles } = useAppSelector((state) => state.theme);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
          {products.map((p) => (
            <Card key={p.id} product={p} />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
