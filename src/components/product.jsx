import React from "react";

function Product({ product, onAddToCart }) {
  return (
    <div className="product-card">
        <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      {/* <p>{product.description}</p> */}
      <p className="product-price">${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

export default Product;