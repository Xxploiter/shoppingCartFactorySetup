import React from "react";
import Product from "./product";

function ProductsList({ products, onAddToCart }) {
  return (
    <div className="products-container">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
}

export default ProductsList;