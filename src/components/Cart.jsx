import React from "react";

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-2">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="space-y-4">
          {cart.map((product, index) => (
            <li key={index} className="border p-4 rounded shadow-md">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-green-600 font-bold">${product.price}</p>
              <button className="bg-red-500 text-white px-4 py-2 mt-2" onClick={() => removeFromCart(index)}>
                Remove from Cart
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
