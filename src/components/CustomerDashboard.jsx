
import React, { useState, useEffect } from "react";

const CustomerDashboard = ({ setUserType, cart = [], setCart }) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    if (typeof setCart !== "function") {
      console.error("Error: setCart is not a function.");
      return;
    }
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Customer Dashboard</h1>
      <button onClick={() => setUserType("vendor")}>Switch to Vendor View</button>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelry</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="women's clothing">Women's Clothing</option>
      </select>

      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p>{product.image && (
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-cover"
                />
              )}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerDashboard;
