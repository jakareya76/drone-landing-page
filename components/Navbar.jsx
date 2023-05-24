"use client";

import { useState } from "react";

import { BiMenu } from "react-icons/bi";
import SubBar from "./SubBar";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => setToggleMenu(!toggleMenu);

  return (
    <header className="relative container mx-auto">
      <SubBar />
      <nav className="flex items-center justify-center px-5">
        <div className="w-full md:w-1/5 lg:w-1/2">
          <h3 className="text-2xl sm:text-3xl md:text-5xl">Drone</h3>
        </div>
        <div className="w-full mt-3 md:w-4/5 lg:w-1/2">
          <ul className="hidden md:flex md:items-center md:justify-around">
            <li className="text-red-500 cursor-pointer">Home</li>
            <li className="text-zinc-800 cursor-pointer hover:text-red-500">
              Consumer
            </li>
            <li className="text-zinc-800 cursor-pointer hover:text-red-500">
              Professional
            </li>
            <li className="text-zinc-800 cursor-pointer hover:text-red-500">
              Enterprise
            </li>
            <li className="text-zinc-800 cursor-pointer hover:text-red-500">
              Explore
            </li>
            <li className="text-zinc-800 cursor-pointer hover:text-red-500">
              Contact
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <BiMenu size={35} onClick={handleToggleMenu} />

          <div
            className={`w-[150px] bg-[#0b0614de] absolute right-6 py-5 mt-5 rounded ${
              toggleMenu ? "opacity-100 block" : "opacity-0 hidden"
            }`}
          >
            <ul className="text-white text-left px-5 space-y-2">
              <li>Home</li>
              <li>Consumer</li>
              <li>Professional</li>
              <li>Enterprise</li>
              <li>Explore</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
