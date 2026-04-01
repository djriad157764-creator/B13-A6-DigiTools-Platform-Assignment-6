import React, { useState } from "react";
import CardList from "./CardList";
import { FcCheckmark } from "react-icons/fc";
import { toast } from "react-toastify";

const Card = ({ cardData, selectItem, setSelectItem }) => {
  // cardData Destructure
  const { description, image, features, period, tag, tagType, name, price } =
    cardData;

  // useState Use for Buy Now Button Text and Bg Change
  const [buyNowBtnClicked, setBuyNowBtnClicked] = useState(false);

  // some Method Use for Check selectItem Array Data
  const isAlreadyInCart = selectItem.some((item) => item.id === cardData.id);

  // handle Buy Btn
  const handleBuyBtn = () => {
    setBuyNowBtnClicked(true);
    if (isAlreadyInCart) {
      toast.error("card already added ");
      return;
    }
    setSelectItem([...selectItem, cardData]);
    toast.success(
      <div>
        <span className="font-extrabold text-lg text-warning"> {name}</span>{" "}
        Added Successful
      </div>,
    );
  };

  const btnClicked = buyNowBtnClicked || isAlreadyInCart;

  return (
    <div className="bg-white zoom-in transition duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer  shadow-sm relative flex flex-col  rounded-2xl  p-6  border border-neutral-100 space-y-4">
      <div className="flex-1">
        <div className="p-3.5 animate-right-to-left animation-delay-4 border-2 rounded-full w-fit border-[#F2F2F2]">
          <img
            className="w-8 h-8 object-cover rounded-full"
            src={image}
            alt=""
          />
        </div>
        <div className="mb-4">
          <h1 className=" font-bold text-2xl mb-4 animate-left-to-right animation-delay-4">
            {name}
          </h1>
          <p
            className="text-[#627382]
           animate-right-to-left animation-delay-4"
          >
            {description}
          </p>
        </div>
        <div className="mb-4">
          <span className="font-bold text-2xl animate-left-to-right animation-delay-4">
            ${price}
          </span>
          <span className="text-[#627382] animate-right-to-left animation-delay-4">
            /{period}
          </span>
        </div>
        <div className="">
          <ul className="text-[#627382] card-list">
            {features.map((item, ind) => (
              <CardList key={ind} item={item} />
            ))}
          </ul>
        </div>
      </div>
      <div className="">
        <button
          onClick={handleBuyBtn}
          className={`btn rounded-full w-full text-white ${
            btnClicked ?
              "bg-green-500 hover:bg-green-600"
            : "btn-primary hover:btn-secondary transition-colors duration-400"
          }`}
        >
          {btnClicked ?
            <p className="flex items-center gap-1">
              <FcCheckmark className="text-xl" /> Added to cart
            </p>
          : "Buy Now"}
        </button>
      </div>

      <div
        className={`${tag === "best seller" && "bg-[#FEF3C6] text-[#BB4D00]"} w-fit absolute top-2.5 right-2.5 px-3 py-1.5 rounded-full ${tag === "popular" && "bg-[#E1E7FF]"} ${tag === "new" && "bg-[#DBFCE7] text-[#0A883E]"} `}
      >
        <span
          className={`font-medium  ${tag === "popular" && "bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent "} `}
        >
          {tagType}
        </span>
      </div>
    </div>
  );
};

export default Card;
