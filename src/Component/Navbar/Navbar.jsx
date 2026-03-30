import { React, useState } from "react";

import { FiShoppingCart } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [activeB, setActiveB] = useState(false);

  return (
    <div className="navbar bg-base-100 w-full max-w-[1200px] shadow-sm mx-auto">
      <div className="navbar-start">
        <div className="relative">
          <div
            onClick={() => setActiveB(!activeB)}
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            {activeB ?
              <IoClose className="text-2xl" />
            : <IoMenu className="text-2xl" />}
          </div>
          {activeB && (
            <ul
              tabIndex="-1"
              className={`menu menu-sm lg:hidden absolute bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow`}
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
            </ul>
          )}
        </div>
        <a
          className="bg-gradient-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pb-2 cursor-pointer
          "
        >
          DigiTool
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-neutral/80">
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
        <a className="mr-4 cursor-pointer">
          <FiShoppingCart className="text-base" />
        </a>
        <a className="mr-4 cursor-pointer text-base font-semibold text-[#101727]">
          Login
        </a>
        <button className="btn btn-primary btn-sm sm:btn-md rounded-full">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
