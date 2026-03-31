import React from "react";

const Cart = ({ cartData, selectItem, setSelectItem }) => {
  const handleRemoveBtn = () => {
    const filteredItem = selectItem.filter((item) => item.id !== cartData.id);
    setSelectItem(filteredItem);
  };

  return (
    <div className="bg-base-200  p-[22px] flex justify-between items-center mb-4 rounded-2xl mt-6">
      <div className="flex items-center gap-4">
        <div className="p-[14px] border-2 rounded-full w-fit border-[#F2F2F2] bg-white ">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src={cartData.image}
            alt=""
          />
        </div>
        <div className="">
          <h1 className="text-xl font-semibold mb-2">{cartData.name}</h1>
          <p className="text-[#627382]">${cartData.price}</p>
        </div>
      </div>
      <div className="">
        <button
          onClick={handleRemoveBtn}
          className="text-[#FF3980] font-bold cursor-pointer"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Cart;
