import React from "react";
import BannerImage from "../../assets/banner.png";
import { IoPlayOutline } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="w-full max-w-300 mx-auto px-5  lg:flex items-center mt-20 justify-between">
      {/* banner left */}

      <div className="mb-5">
        <div className="flex items-center px-4 py-3 bg-[#E1E7FF] w-fit rounded-4xl mb-4">
          <div className="w-3.5 h-3.5 flex justify-center items-center  bg-blue-300 rounded-full mr-2">
            <div className="w-3 h-3 flex justify-center items-center  bg-blue-400 rounded-full ">
              <div className="w-2 h-2 flex justify-center items-center  bg-blue-600 rounded-full">
                <div className="w-1 h-1 flex justify-center items-center  bg-blue-900 rounded-full"></div>
              </div>
            </div>
          </div>
          <a className="text-base font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ">
            New: AI-Powered Tools Available
          </a>
        </div>
        <div className="mb-4">
          <h1 className="font-extrabold text-4xl lg:leading-20 sm:text-5xl md:text-6xl lg:text-7xl text-[#101727]">
            Supercharge Your <br className="hidden md:block" /> Digital Workflow
          </h1>
        </div>
        <div className="mb-4">
          <p className="text-lg text-[#627382]">
            Access premium AI tools, design assets, templates, and productivity{" "}
            <br className="hidden md:block" />
            <br className="hidden" />
            software—all in one place. Start creating faster today.
            <br className="hidden md:block" />
            Explore Products
          </p>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <button className="btn btn-primary hover:scale-[1.05] duration-500 transition-transform rounded-full hover:bg-blue-800 ">
            Explore Products
          </button>
          <button className="btn text-blue-700 border hover:scale-[1.01] duration-500 transition hover:bg-blue-600 hover:text-white border-blue-600 rounded-full">
            <IoPlayOutline className="text-xl" />
            Watch Demo
          </button>
        </div>
      </div>

      {/* banner right */}

      <div className="">
        <img className="mx-auto" src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
