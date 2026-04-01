import React, { use } from "react";
import TransparentCard from "./TransparentCard";

const TransparentPricing = ({ planPromise }) => {
  const dataPromise = use(planPromise);
  const plantData = dataPromise.pricing_plans;

  return (
    <div className="bg-[#F9FAFC] px-4 sm:px-6">
      <div className="py-3 w-full max-w-300 mx-auto ">
        <div className="text-center mt-10">
          <h1 className="text-[#101727] font-extrabold text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl ">
            Simple, Transparent 
            <span className="ml-1 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
              Pricing
            </span>
          </h1>
          <p className="text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* card container  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 mb-30">
          {plantData.map((cardData, index) => (
            <TransparentCard key={index} cardData={cardData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;
