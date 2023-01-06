import React from "react";
import Logo from "../images/logo-bookmark.svg"
const Navbar = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="relative container mx-auto p-6">
        <div className="flex items-center justify-between">
          <div className="">
            <img src={Logo} alt="" />
          </div>
          <div className="hidden md:flex  space-x-6">
            <a href="/" className="hover:text-sky-500 hover:underline hover:underline-offset-8">Home</a>
            <a href="/" className="hover:text-sky-500 hover:underline hover:underline-offset-8">About us</a>
            <a href="/" className="hover:text-sky-500 hover:underline hover:underline-offset-8">Trending</a>
            <a href="/" className="hover:text-sky-500 hover:underline hover:underline-offset-8">Community</a>
          </div>
          <div className="hidden md:flex space-x-6">
          <a href="/" className="hidden md:block  px-4 py-1 text-white text-medium baseline rounded bg-sky-500 hover:bg-white hover:text-sky-500 hover:outline hover:outline-2">Login</a>
          <a href="/" className="hidden md:block px-4 py-1 text-white text-medium baseline rounded bg-sky-500 hover:bg-white hover:text-sky-500 hover:outline hover:outline-2">Sign Up</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
