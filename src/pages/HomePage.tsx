import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../store/helpers";
import { usePaginatedFetch } from "../hooks/usePaginatedFetch";
import { Pagination } from "../components/Pagination";
import { Loader } from "../components/common/Loader";
import { addToCart } from "../store/slices/cartSlice";
import { ShoppingCart, Star, Eye, Filter } from "lucide-react";
import type { Product } from "../models/Product";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { styles } = useAppSelector((state) => state.theme);

  const {
    displayData,
    loading,
    error,
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    goToPage,
    setItemsPerPage,
  } = usePaginatedFetch(10);

  if (loading && displayData.length === 0) return <Loader />;

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleViewProduct = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="space-y-8">
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500 text-white p-4 rounded-lg shadow-md"
        >
          <div className="flex items-center space-x-2">
            <span>⚠️</span>
            <span>{error}</span>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6 rounded-xl p-8"
      >
        <div className="space-y-4">
          <h1 className={styles.homepage.title}>Discover Amazing Products</h1>
          <p className={`${styles.homepage.paragraph} max-w-2xl mx-auto`}>
            Explore our carefully curated collection of premium products
            designed to enhance your lifestyle. Quality, style, and innovation
            in every item.
          </p>
          <button
            className={`${styles.homepage.button} mt-4 transition-transform duration-200`}
          >
            Shop Now
          </button>
        </div>
      </motion.div>

      {/* Filter and Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-between items-center bg-white rounded-lg p-4 shadow-sm border"
      >
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">
              Showing {displayData.length} of {totalItems} products
            </span>
          </div>
        </div>
        <div className="text-sm text-gray-600">
          Page {currentPage} of {totalPages}
        </div>
      </motion.div>

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="relative"
      >
        {displayData.length === 0 && !loading ? (
          <div className="text-center py-20 bg-white rounded-lg shadow-sm">
            <div className="space-y-4">
              <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto" />
              <p className="text-xl text-gray-500">No products found</p>
              <p className="text-gray-400">
                Try adjusting your search criteria
              </p>
            </div>
          </div>
        ) : (
          <div className={styles.homepage.grid}>
            {displayData.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`group transition-all duration-300 overflow-hidden ${styles.card.container}`}
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain transition-transform duration-300"
                  />

                  {/* Rating Badge */}
                  <div className="absolute top-2 left-2 bg-yellow-400 text-white px-2 py-1 text-xs font-bold rounded-md flex items-center space-x-1">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{(Math.random() * 2 + 3).toFixed(1)}</span>
                  </div>
                </div>

                {/* Product Info */}
                <div className={styles.card.textContainer}>
                  <div className="space-y-2">
                    <h3
                      className={`${styles.card.title} line-clamp-2 transition-colors`}
                    >
                      {product.title}
                    </h3>
                    <p className={`${styles.card.description} line-clamp`}>
                      {product.description}
                    </p>
                  </div>

                  {/* Price and Category */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={styles.card.price}>
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full capitalize">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2 pt-2">
                    <button
                      onClick={() => handleViewProduct(product.id)}
                      className="flex-1 bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-600 transition-colors text-sm font-medium flex items-center justify-center space-x-1"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View</span>
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium flex items-center justify-center"
                    >
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Loading Overlay */}
        {loading && displayData.length > 0 && (
          <div className="absolute inset-0 bg-white bg-opacity-90 backdrop-blur-sm flex items-center justify-center rounded-lg">
            <div className="flex flex-col items-center space-y-3">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
              <span className="font-medium text-gray-700">
                Loading more products...
              </span>
            </div>
          </div>
        )}
      </motion.div>

      {/* Pagination - Always Visible */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
          loading={loading}
          itemsPerPage={itemsPerPage}
          totalItems={totalItems}
          onItemsPerPageChange={setItemsPerPage}
        />
      </motion.div>
    </div>
  );
};
