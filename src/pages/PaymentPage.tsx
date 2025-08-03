import React from "react";
import { useAppSelector, useAppDispatch } from "../store/helpers";
import { clearCart } from "../store/slices/cartSlice";
import { goTo } from "../store/slices/navigationSlice";

export const PaymentPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, total } = useAppSelector((state) => state.cart);

  const handleConfirmOrder = () => {
    alert("Order placed successfully with Cash on Delivery!");
    dispatch(clearCart());
    dispatch(goTo("home"));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Review Your Order</h1>
      <ul className="mb-4">
        {items.map((item) => (
          <li key={item.product.id} className="flex justify-between my-2">
            <span>{item.product.title}</span>
            <span>
              {item.quantity} x ${item.product.price.toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <span className="text-xl font-bold">Total</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
      <button
        onClick={handleConfirmOrder}
        className="mt-6 bg-green-500 text-white py-2 px-4 rounded"
      >
        Confirm Order (COD)
      </button>
    </div>
  );
};
