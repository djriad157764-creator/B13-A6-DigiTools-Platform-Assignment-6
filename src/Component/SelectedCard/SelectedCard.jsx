import React from "react";
import Cart from "../Cart/Cart";

const SelectedCard = ({ selectItem, setSelectItem }) => {
  const handleProceedBtn = () => {
    setSelectItem([]);
  };

  return (
    <div className="w-full max-w-[1200px] mt-10 mx-auto p-10 border-2 mb-[120px] border-base-100 rounded-2xl">
      <div className="">
        <h1>your Cart</h1>
      </div>
      <div className="">
        {selectItem.map((cartData) => (
          <Cart
            setSelectItem={setSelectItem}
            selectItem={selectItem}
            key={cartData.id}
            cartData={cartData}
          />
        ))}
      </div>
      <div className="mt-6">
        <div className="flex justify-between items-center mb-6">
          <p className="text-[#627382]">Total :</p>
          <p className="text-2xl font-bold">$70</p>
        </div>
        <button
          onClick={handleProceedBtn}
          className="btn btn-primary w-full rounded-full font-bold"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;
