import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id="home" className="p-4 h-[5rem] overflow-hidden mx-4">
      <div className="w-full flex flex-row items-center justify-between gap-8">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src="./logo.png" className="w-20 h-20 overflow-hidden" />
          </Link>
        </div>
        <div>
          <h1 className="text-2xl text-primary">Risk Roulette</h1>
        </div>

        {/* Nav Links */}
        <div className="space-x-4">
          <Link
            to="/wheel"
            className="text-primary font-semibold hover:text-white hover:bg-primary transition duration-300 ease-in-out w-fit relative ring-2 ring-primary rounded-2xl py-2 px-4"
          >
            Dare To Play
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
