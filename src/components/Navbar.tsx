import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-4 h-[5rem] overflow-hidden mx-4">
      <div className="w-full flex flex-row items-center justify-between">
        {/* Logo */}
        <div>
          <a href="#home">
            <img src="./logo.png" className="w-20 h-20 overflow-hidden" />
          </a>
        </div>

        <div>
          <h1 className="text-2xl">Risk Roulette</h1>
        </div>

        {/* Nav Links */}
        <div className="space-x-4">
          <a
            href="#wheel"
            className="font-semibold hover:text-white transition duration-300 ease-in-out w-fit relative ring-2 ring-black rounded-2xl py-2 px-4"
          >
            Dare To Play
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
