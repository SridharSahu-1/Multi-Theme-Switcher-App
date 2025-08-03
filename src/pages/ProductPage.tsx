import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../store/helpers";
import { addToCart } from "../store/slices/cartSlice";
import { Loader } from "../components/common/Loader";
import {
  ShoppingCart,
  Heart,
  Star,
  ArrowLeft,
  Plus,
  Minus,
  Shield,
  Truck,
  RotateCcw,
} from "lucide-react";
import { fetchProductById } from "../services/api";
import type { Product } from "../models/Product";

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { products } = useAppSelector((state) => state.products);
  const { currentUser } = useAppSelector((state) => state.auth);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isInWishlist, setIsInWishlist] = useState(false);

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) {
        navigate("/home");
        return;
      }

      setLoading(true);
      try {
        // First try to find in existing products
        const existingProduct = products.find((p) => p.id === parseInt(id));

        if (existingProduct) {
          setProduct(existingProduct);
        } else {
          // Fetch from API if not found in store
          const fetchedProduct = await fetchProductById(parseInt(id));
          setProduct(fetchedProduct);
        }
      } catch (error) {
        console.error("Error loading product:", error);
        navigate("/home");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id, products, navigate]);

  if (loading) return <Loader />;
  if (!product) {
    navigate("/home");
    return null;
  }

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleProceedToPayment = () => {
    if (currentUser) {
      handleAddToCart();
      navigate("/payment");
    } else {
      alert("Please sign in to proceed to payment.");
      navigate("/signin");
    }
  };

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const toggleWishlist = () => {
    setIsInWishlist(!isInWishlist);
  };

  const productImages = [product.image, product.image, product.image];

  const features = [
    { icon: Shield, text: "2 Year Warranty" },
    { icon: Truck, text: "Free Shipping" },
    { icon: RotateCcw, text: "30 Day Returns" },
  ];

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate("/home")}
        className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Products</span>
      </motion.button>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-4"
        >
          {/* Main Image */}
          <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border">
            <img
              src={productImages[selectedImage]}
              alt={product.title}
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          {/* Product Title and Rating */}
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>
              <button
                onClick={toggleWishlist}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Heart
                  className={`w-6 h-6 transition-colors ${
                    isInWishlist ? "fill-red-500 text-red-500" : "text-gray-400"
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < 4
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(4.2) • 127 reviews</span>
            </div>

            <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium capitalize">
              {product.category}
            </span>
          </div>

          {/* Price */}
          <div className="space-y-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-4xl font-bold text-blue-600">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-xl text-gray-500 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                17% OFF
              </span>
            </div>
            <p className="text-sm text-gray-600">Inclusive of all taxes</p>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Description</h3>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Features</h3>
            <div className="grid grid-cols-1 gap-3">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Thumbnail Images */}
          <div className="flex space-x-2">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`aspect-square w-20 rounded-lg border-2 p-2 transition-all ${
                  selectedImage === index
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.title} ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </button>
            ))}
          </div>

          {/* Quantity Selector */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-xl font-semibold w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 pt-4">
            <div className="flex space-x-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={handleProceedToPayment}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Buy Now
              </button>
            </div>

            <p className="text-center text-sm text-gray-600">
              Total:{" "}
              <span className="font-semibold">
                ${(product.price * quantity).toFixed(2)}
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
