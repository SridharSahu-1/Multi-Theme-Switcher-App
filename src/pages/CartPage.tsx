import React from "react";
import { useAppSelector, useAppDispatch } from "../store/helpers";
import { removeFromCart, updateQuantity } from "../store/slices/cartSlice";
import { goTo } from "../store/slices/navigationSlice";
import { useNavigate } from "react-router-dom";

export const CartPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items, total } = useAppSelector((state) => state.cart);
  const { currentUser } = useAppSelector((state) => state.auth);

  const handleRemoveFromCart = (id: number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleProceedToPayment = () => {
    if (currentUser) {
      navigate("/payment")
    } else {
      alert("Please sign in to proceed to payment.");
      dispatch(goTo("signin"));
    }
  };

  if (items.length === 0) {
    return (
      <div className="container flex flex-col justify-center items-center px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <p>Your cart is empty.</p>
        <button
          onClick={() => {
            navigate("/home");
          }}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:scale-105"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between border-b pb-4"
          >
            <div className="flex items-center space-x-4">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.product.title}</h3>
                <p className="text-gray-600">
                  ${item.product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() =>
                  handleUpdateQuantity(item.product.id, item.quantity - 1)
                }
                className="bg-gray-200 px-2 py-1 rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() =>
                  handleUpdateQuantity(item.product.id, item.quantity + 1)
                }
                className="bg-gray-200 px-2 py-1 rounded"
              >
                +
              </button>
              <button
                onClick={() => handleRemoveFromCart(item.product.id)}
                className="bg-red-500 text-white px-2 py-1 rounded ml-4"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-between items-center">
        <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
        <button
          onClick={handleProceedToPayment}
          className="bg-green-500 text-white py-2 px-4 rounded"
        >
          Proceed to Payment (COD)
        </button>
      </div>
    </div>
  );
};
