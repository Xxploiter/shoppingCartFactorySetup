import React, { useState, useEffect } from "react";
import ProductsList from "../components/productList";
import CategoryButton from "../components/categoryButton";

function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        const categoryList = data.reduce((unique, product) => {
          if (!unique.includes(product.category)) {
            unique.push(product.category);
          }
          return unique;
        }, []);
        setCategories(categoryList);
      });
  }, []);

  const handleAddToCart = (product) => {
    console.log(`Added ${product.title} to cart`);
    // Implement cart functionality here
  };

  const handleFilterByCategory = (category) => {
    console.log(`Filtering by ${category}`);
    // Implement category filtering here
  };

  return (
    <div>
      <h1>Products</h1>
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onClick={() => handleFilterByCategory(category)}
        />
      ))}
      <ProductsList products={products} onAddToCart={handleAddToCart} />
    </div>
  );
}

export default ProductsPage;