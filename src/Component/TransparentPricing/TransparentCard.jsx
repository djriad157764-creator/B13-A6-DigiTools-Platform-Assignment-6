import React from "react";
import { GiCheckMark } from "react-icons/gi";

const TransparentCard = ({ cardData }) => {
  // cardData Destructure
  const { name, cta_text, description, features, interval, price, badge } =
    cardData;
  return (
    // Main Section Card
    <div
      className={`card relative animate-left-to-right card-li transition duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer  shadow-sm ${badge ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white " : "bg-base-100 "}`}
    >
      <div className="card-body flex flex-col">
        <div className="flex-1 flex-col">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">{name}</h2>
            <p className={` ${!badge && "text-[#627382]"}`}>{description}</p>
          </div>
          <div className="mb-6">
            <span className="text-[40px] font-bold">${price}</span>
            <span className={` ${!badge && "text-[#627382] text-xl"}`}>
              /{interval}
            </span>
          </div>

          <ul className="mt-6 flex flex-col gap-2 text-xs">
            {features.map((el, index) => (
              <li
                key={index}
                className={`flex  items-center gap-2 ${!badge && "text-[#627382]"}`}
              >
                <GiCheckMark className={` ${!badge && "text-[#30B868]"}`} />
                {el}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-2">
          <button
            className={`btn rounded-full  ${badge ? "text-primary" : "btn-primary"} btn-block`}
          >
            {cta_text}
          </button>
        </div>
      </div>
      <div className=" flex justify-center ">
        {badge ?
          <span className="badge absolute w-[40%] tracking-widest -top-3 bg-[#FEF3C6] border-0 font-medium badge-sm text-[#BB4D00] badge-warning">
            {badge}
          </span>
        : ""}
      </div>
    </div>
  );
};

export default TransparentCard;
