import { React, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import "../../App.css";

const Navbar = ({ selectItem }) => {
  // useState Use for nav Menu bar hide and Close icon show
  const [activeB, setActiveB] = useState(false);

  return (
    <div className="shadow-sm sticky top-0 z-10 bg-white/30 backdrop-blur-3xl">
      <div className="navbar rounded-b-lg w-full max-w-300  mx-auto">
        <div className="navbar-start">
          <div className="relative">
            <div
              onClick={() => setActiveB(!activeB)}
              tabIndex={0}
              role="button"
              className="btn btn-ghost animate-bottom-to-top animation-delay-4 lg:hidden"
            >
              {activeB ?
                <IoClose className="text-2xl" />
              : <IoMenu className="text-2xl" />}
            </div>

            <ul
              tabIndex="-1"
              className={`menu menu-sm ${activeB ? "show" : ""}  ${activeB ? "" : "-translate-x-60"} transition-transform duration-700 lg:hidden absolute bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow`}
            >
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Testimonials</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
              <button className="btn btn-primary  btn-sm rounded-full">
                Get Started
              </button>
            </ul>
          </div>
          <a
            className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl animate-right-to-left font-bold pb-2 cursor-pointer 
          "
          >
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 show font-semibold text-neutral/80">
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Testimonials</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-4 animate-left-to-right animation-delay-2 cursor-pointer relative">
            <FiShoppingCart className="text-2xl " />
            {selectItem.length !== 0 && (
              <div className="bg-primary absolute -top-1 -right-2  rounded-full flex justify-center items-center text-[10px] w-4 h-4">
                <p className="font-bold text-gray-200">{selectItem.length}</p>
              </div>
            )}
          </div>

          <a className="mr-4 animate-left-to-right cursor-pointer text-lg font-semibold text-[#101727]">
            Login
          </a>
          <button className="btn animate-right-to-left btn-primary hidden lg:block sm:btn-md rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
