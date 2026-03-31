import React from "react";

const PremiumDigitalTools = ({ setClickedBtn, clickedBtn, selectItem }) => {
  return (
    <div className="mt-30 w-full bg-base-100 mx-auto">
      <div className="text-center">
        <h1 className="text-[#101727] font-extrabold text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl ">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382]">
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex items-center shadow-sm w-fit rounded-full  mx-auto mt-4">
        <button
          onClick={() => setClickedBtn("product")}
          className={`btn rounded-l-full w-32 ${clickedBtn === "product" ? "btn-primary" : "bg-white"}`}
        >
          Products
        </button>
        <button
          onClick={() => setClickedBtn("cart")}
          className={`rounded-r-full btn w-32 ${clickedBtn === "cart" ? "btn-primary" : "bg-white"}`}
        >
          Cart({selectItem.length})
        </button>
      </div>
    </div>
  );
};

export default PremiumDigitalTools;
