// import React, { useState } from "react";

// const VendorDashboard = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({
//     title: "",
//     description: "",
//     price: "",
//     category: "",
//     image: "",
//   });
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   const addOrUpdateProduct = () => {
//     if (!newProduct.title || !newProduct.price) {
//       alert("Title and Price are required");
//       return;
//     }

//     if (editingIndex !== null) {
//       const updatedProducts = [...products];
//       updatedProducts[editingIndex] = newProduct;
//       setProducts(updatedProducts);
//       setEditingIndex(null);
//     } else {
//       setProducts([...products, { ...newProduct, id: Date.now() }]);
//     }

//     setNewProduct({ title: "", description: "", price: "", category: "", image: "" });
//   };

//   const editProduct = (index) => {
//     setNewProduct(products[index]);
//     setEditingIndex(index);
//   };

//   const deleteProduct = (index) => {
//     setProducts(products.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-6 max-w-3xl mx-auto">
//       <h1 className="text-2xl font-bold mb-4">Vendor Dashboard</h1>
//       <div className="space-y-2 mb-4">
//         <input className="border p-2 w-full" name="title" value={newProduct.title} onChange={handleInputChange} placeholder="Product Title" />
//         <input className="border p-2 w-full" name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Description" />
//         <input className="border p-2 w-full" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" type="number" />
//         <input className="border p-2 w-full" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category" />
//         <input className="border p-2 w-full" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="Image URL" />
//         <button className="bg-blue-500 text-white px-4 py-2" onClick={addOrUpdateProduct}>{editingIndex !== null ? "Update" : "Add"} Product</button>
//       </div>

//       <h2 className="text-xl font-bold mb-2">Product List</h2>
//       <ul className="space-y-4">
//         {products.map((product, index) => (
//           <li key={product.id} className="border p-4 rounded shadow-md">
//             <h3 className="text-lg font-semibold">{product.title}</h3>
//             <p>{product.description}</p>
//             <p className="text-green-600 font-bold">${product.price}</p>
//             <p className="text-gray-600">{product.category}</p>
//             {product.image && <img src={product.image} alt={product.title} className="w-32 h-32 object-cover" />}
//             <div className="mt-2 space-x-2">
//               <button className="bg-yellow-500 text-white px-4 py-1" onClick={() => editProduct(index)}>Edit</button>
//               <button className="bg-red-500 text-white px-4 py-1" onClick={() => deleteProduct(index)}>Delete</button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VendorDashboard;
import React, { useState, useEffect } from "react";

const VendorDashboard = ({ setUserType }) => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
  });
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const addOrUpdateProduct = () => {
    if (!newProduct.title || !newProduct.price) {
      alert("Title and Price are required");
      return;
    }

    if (editingIndex !== null) {
      const updatedProducts = [...products];
      updatedProducts[editingIndex] = newProduct;
      setProducts(updatedProducts);
      setEditingIndex(null);
    } else {
      setProducts([...products, { ...newProduct, id: Date.now() }]);
    }

    setNewProduct({ title: "", description: "", price: "", category: "", image: "" });
  };

  const editProduct = (index) => {
    setNewProduct(products[index]);
    setEditingIndex(index);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Vendor Dashboard</h1>
      <button className="bg-gray-500 text-white px-4 py-2 mb-4" onClick={() => setUserType("customer")}>
        Switch to Customer View
      </button>
      <div className="space-y-2 mb-4">
        <input className="border p-2 w-full" name="title" value={newProduct.title} onChange={handleInputChange} placeholder="Product Title" />
        <input className="border p-2 w-full" name="description" value={newProduct.description} onChange={handleInputChange} placeholder="Description" />
        <input className="border p-2 w-full" name="price" value={newProduct.price} onChange={handleInputChange} placeholder="Price" type="number" />
        <input className="border p-2 w-full" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category" />
        <input className="border p-2 w-full" name="image" value={newProduct.image} onChange={handleInputChange} placeholder="Image URL" />
        <button className="bg-blue-500 text-white px-4 py-2" onClick={addOrUpdateProduct}>{editingIndex !== null ? "Update" : "Add"} Product</button>
      </div>

      <h2 className="text-xl font-bold mb-2">Product List</h2>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={product.id} className="border p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p>{product.description}</p>
            <p className="text-green-600 font-bold">${product.price}</p>
            <p className="text-gray-600">{product.category}</p>
            {product.image && <img src={product.image} alt={product.title} className="w-32 h-32 object-cover" />}
            <div className="mt-2 space-x-2">
              <button className="bg-yellow-500 text-white px-4 py-1" onClick={() => editProduct(index)}>Edit</button>
              <button className="bg-red-500 text-white px-4 py-1" onClick={() => deleteProduct(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VendorDashboard;
