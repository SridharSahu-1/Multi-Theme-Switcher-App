import React from "react";
import { motion } from "framer-motion";
import type { Product } from "../../models/Product";
import { useAppSelector, useAppDispatch } from "../../store/helpers";
import { goToProduct } from "../../store/slices/navigationSlice";

interface CardProps {
  product: Product;
}

export const Card: React.FC<CardProps> = ({ product }) => {
  const dispatch = useAppDispatch();
  const { styles } = useAppSelector((state) => state.theme);

  const handleClick = () => {
    dispatch(goToProduct(product.id));
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, type: "spring" }}
      onClick={handleClick}
      className={`overflow-hidden transition-all cursor-pointer hover:scale-105 ${styles.card.container}`}
    >
      <div className="aspect-square w-full overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="object-cover w-full h-full"
        />
      </div>
      <div className={styles.card.textContainer}>
        <h3 className={styles.card.title}>{product.title}</h3>
        <p className={styles.card.description}>
          {product.description.slice(0, 60)}…
        </p>
        <p className={styles.card.price}>${product.price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};
