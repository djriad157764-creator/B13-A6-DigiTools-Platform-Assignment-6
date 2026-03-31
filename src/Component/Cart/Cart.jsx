import React from "react";
import { toast } from "react-toastify";

const Cart = ({ cartData, selectItem, setSelectItem }) => {
  const handleRemoveBtn = () => {
    const filteredItem = selectItem.filter((item) => item.id !== cartData.id);
    setSelectItem(filteredItem);
    toast.warning(
      <div>
        <span className="font-extrabold text-lg text-error">
          {cartData.name}{" "}
        </span>
        Remove from Cart
      </div>,
    );
  };

  return (
    <div className="bg-neutral-50 p-4 sm:p-[22px] flex justify-between items-center mb-4 rounded-2xl mt-6">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="p-[14px] border-2 rounded-full w-fit border-[#F2F2F2] bg-white ">
          <img
            className="w-5 h-5 sm:w-8 sm:h-8 object-cover rounded-full"
            src={cartData.image}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-[14px] font-extrabold sm:text-xl sm:font-semibold mb-2">
            {cartData.name}
          </h1>
          <p className="text-[#627382]">${cartData.price}</p>
        </div>
      </div>
      <div className="">
        <button
          onClick={handleRemoveBtn}
          className="text-[#FF3980] text-[12px] sm:text-base font-bold cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
