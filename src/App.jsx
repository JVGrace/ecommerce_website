import React, { useState } from "react";
import VendorDashboard from "./components/VendorDashboard";
import CustomerDashboard from "./components/CustomerDashboard";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";
import "./styles/styles.css";

const App = () => {
  const [userType, setUserType] = useState("customer");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <header className="header">
        <h1>E-Commerce Platform</h1>
        <button onClick={() => setUserType(userType === "vendor" ? "customer" : "vendor")}>
          Switch to {userType === "vendor" ? "Customer" : "Vendor"} View
        </button>
      </header>
      <main>
        {userType === "vendor" ? (
          <VendorDashboard />
        ) : (
          <>
            <CustomerDashboard setUserType={setUserType} cart={cart} setCart={setCart} />
            <ProductList addToCart={addToCart} />
            <Cart cart={cart} removeFromCart={removeFromCart} />
          </>
        )}
      </main>
    </div>
  );
};

export default App;
