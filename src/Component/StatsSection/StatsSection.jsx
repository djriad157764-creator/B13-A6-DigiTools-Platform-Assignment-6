import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] mt-20 mb-30">
      <div className="w-full max-w-300 mx-auto grid grid-cols-3 py-15">
        <div className="text-center border-r-2 border-white/40">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            50k +
          </h1>
          <p className="font-medium text-[14px] sm:text-lg md:text-xl lg:text-2xl text-white/80">
            Active Users
          </p>
        </div>
        <div className="text-center border-r-2 border-white/40">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-2 sm:px-0">
            200 +
          </h1>
          <p className="font-medium text-[14px] sm:text-lg md:text-xl lg:text-2xl text-white/80">
            Premium Tools
          </p>
        </div>
        <div className="text-center">
          <h1 className="text-white font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            4.9
          </h1>
          <p className="font-medium text-[14px] sm:text-lg md:text-xl lg:text-2xl text-white/80">
            Rating
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
