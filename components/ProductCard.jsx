"use client";

import { useState } from "react";
import Image from "next/image";

const ProductCard = ({ product }) => {
  const [toggleText, setToggleText] = useState(false);

  return (
    <div className="py-8">
      <Image
        src={product.img}
        alt="product_image"
        width={480}
        height={360}
        loading="lazy"
        className="duration-300 hover:scale-95"
      />
      <h2 className="text-3xl py-4 px-2 ">{product.title}</h2>
      <p className="text-sm max-w-md px-2 text-[#606060]">
        {product.description.substring(1, toggleText ? 500 : 90)}
        {toggleText ? <></> : <span>...</span>}
      </p>
      <button
        className="mx-2 my-4 border-b-[3px] text-red-400 border-red-400"
        onClick={() => setToggleText(!toggleText)}
      >
        {toggleText ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};
export default ProductCard;
