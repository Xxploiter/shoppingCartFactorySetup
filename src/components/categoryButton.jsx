import React from "react";

function CategoryButton({ category, onClick }) {
  return (
    <button className="add-to-cart-button" onClick={onClick}>
      {category}
    </button>
  );
}

export default CategoryButton;