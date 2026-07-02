import React from "react";

const ProductsCard = ({ product, del }) => {
  return (
    <div className="p-2  border-2 rounded flex flex-col gap-4">
      <div className="w-50 h-50">
        <img className="w-40 h-40" src={product.image} />
      </div>
      <div>
        <h1 className="font-semibold">{product.title.substring(0, 8)}</h1>
        <p className="text-xs">{product.category}</p>
        <p className="text-green-600">{product.price}</p>
      </div>
      <button onClick={() => del(product.id)} className="p-2 bg-red-600">
        Delete
      </button>
    </div>
  );
};

export default ProductsCard;
