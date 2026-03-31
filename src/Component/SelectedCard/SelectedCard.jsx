import React from "react";
import Cart from "../Cart/Cart";
import { toast } from "react-toastify";
import { FaOpencart } from "react-icons/fa";
import { IoCheckmarkSharp } from "react-icons/io5";

const SelectedCard = ({ selectItem, setSelectItem }) => {
  const totalPrice = selectItem.reduce((sum, item) => sum + item.price, 0);

  const handleProceedBtn = () => {
    setSelectItem([]);
    toast.info(
      <div className="flex items-center gap-2">
        <span>
          <IoCheckmarkSharp className="text-green-600 text-xl" />
        </span>
        <div>
          <span className="font-bold text-green-600">${totalPrice}</span>
          <span className="ml-1">Payment Successful!</span>
        </div>
      </div>,
    );
  };

  return (
    <>
      {selectItem.length === 0 ?
        <div className="w-full max-w-[1200px] space-y-3 mt-10 mx-auto p-10 border-2 mb-[120px] border-base-200 rounded-2xl flex flex-col justify-center items-center ">
          <div className="text-5xl sm:text-6xl md:text-7xl text-gray-400 animate-pulse">
            <FaOpencart />
          </div>
          <div className="space-y-2 text-center">
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-600 ">
              Your Cart Empty
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-md">
              Looks like you haven't added any items yet.
              <br className="hidden md:block" />
              Browse our products and find something you'll love!
            </p>
          </div>
        </div>
      : <div className="w-full max-w-[1200px] mt-10 mx-auto p-2 sm:p-6 md:p-10 border-2 mb-[120px] border-base-200 rounded-2xl">
          <div className="">
            <h1 className="font-bold text-2xl">your Cart</h1>
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
              <p className="text-2xl font-bold">${totalPrice}</p>
            </div>
            <button
              onClick={handleProceedBtn}
              className="btn btn-primary w-full rounded-full font-bold"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      }
    </>
  );
};

export default SelectedCard;
