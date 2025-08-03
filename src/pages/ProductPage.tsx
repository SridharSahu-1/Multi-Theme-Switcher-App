import React from "react";
import { useAppSelector, useAppDispatch } from "../store/helpers";
import { addToCart } from "../store/slices/cartSlice";
import { goTo } from "../store/slices/navigationSlice";
import { Loader } from "../components/common/Loader";

export const ProductPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selectedProductId } = useAppSelector((state) => state.navigation);
  const { products } = useAppSelector((state) => state.products);
  const { currentUser } = useAppSelector((state) => state.auth);

  const product = products.find((p) => p.id === selectedProductId);

  if (!product) return <Loader />;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleProceedToPayment = () => {
    if (currentUser) {
      dispatch(goTo("payment"));
    } else {
      alert("Please sign in to proceed to payment.");
      dispatch(goTo("signin"));
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        className="w-full max-w-md mb-6"
      />
      <p className="text-lg mb-4">{product.description}</p>
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
      <button
        onClick={handleProceedToPayment}
        className="bg-green-500 text-white py-2 px-4 rounded"
      >
        Proceed to Payment (COD)
      </button>
    </div>
  );
};
