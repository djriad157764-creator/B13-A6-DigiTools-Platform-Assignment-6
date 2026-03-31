import React, { use } from "react";
import TransparentCard from "./TransparentCard";

const TransparentPricing = ({ planPromise }) => {
  const dataPromise = use(planPromise);
  const plantData = dataPromise.pricing_plans;

  return (
    <div className="bg-[#F9FAFC] px-4 sm:px-6">
      <div className="py-[12px] w-full max-w-[1200px] mx-auto ">
        <div className="text-center mt-10">
          <h1 className="text-[#101727] font-extrabold text-2xl mb-4 sm:text-3xl md:text-4xl lg:text-5xl ">
            Simple, Transparent Pricing
          </h1>
          <p className="text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        {/* card container  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 mt-10 mb-[120px]">
          {plantData.map((cardData, index) => (
            <TransparentCard key={index} cardData={cardData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransparentPricing;
