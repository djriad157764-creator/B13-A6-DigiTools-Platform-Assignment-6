import React from "react";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#101727]">
      <div className="footer w-full pt-30 max-w-300 mx-auto sm:footer-horizontal  text-white p-10">
        <aside>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 cursor-pointer">
            DigiTools
          </h1>
          <p className="text-[#ffffffe5]">
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Product</h6>
          <a className="link link-hover text-[#ffffffe1]">Features</a>
          <a className="link link-hover text-[#ffffffe1]">Pricing</a>
          <a className="link link-hover text-[#ffffffe1]">Templates</a>
          <a className="link link-hover text-[#ffffffe1]">Integrations</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover text-[#ffffffe1]">About</a>
          <a className="link link-hover text-[#ffffffe1]">Blog</a>
          <a className="link link-hover text-[#ffffffe1]">Careers</a>
          <a className="link link-hover text-[#ffffffe1]">Press</a>
        </nav>
        <nav>
          <h6 className="footer-title">Resources</h6>
          <a className="link link-hover text-[#ffffffe1]">Documentation</a>
          <a className="link link-hover text-[#ffffffe1]">Help Center</a>
          <a className="link link-hover text-[#ffffffe1]">Community</a>
          <a className="link link-hover text-[#ffffffe1]">Contact</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>
          <div className="flex gap-3">
            <span className="bg-white p-2.5 rounded-full cursor-pointer">
              <FaInstagram className="w-5 h-5  text-black" />
            </span>
            <span className="bg-white p-2.5 rounded-full cursor-pointer">
              <CiFacebook className="w-5 h-5  text-black" />
            </span>
            <span className="bg-white p-2.5 rounded-full cursor-pointer">
              <LuTwitter className="w-5 h-5  text-black" />
            </span>
          </div>
        </nav>
      </div>

      <div className="border-b-2 border-gray-700 w-full max-w-300 mx-auto"></div>

      <div className="text-[#ffffffe1] md:flex px-5 text-center md:text-start  justify-between w-full max-w-300 mx-auto py-7.5">
        <div className="mb-4">
          <p>© 2026 Digitools. All rights reserved.</p>
        </div>
        <div className="flex gap-6 items-center text-[14px] sm:text-base justify-center">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
