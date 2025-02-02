import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const Win: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen relative overflow-hidden">
      <img
        src="./happybg.png"
        className=" w-full h-auto object-cover overflow-hidden absolute top-0 right-0"
      />
      <section className="z-20 absolute top-[15%] left-[50%] transform -translate-x-[50%]">
        <h1 className="text-center text-white text-7xl semibold">You Won!</h1>
        <p className="text-center text-white text-3xl semibold mt-12">
          Wow! You really know how to cover your risks! Thanks for helping
          Franklin out!
        </p>
      </section>
      <div className="w-full px-[10rem] z-20 absolute bottom-[15%] flex justify-between text-white text-2xl">
        <Link
          to="/"
          className="underline underline-offset-4 hover:underline-offset-8"
        >
          Back To Home
        </Link>
        <Link
          to="/wheel"
          className="underline underline-offset-4 hover:underline-offset-8"
        >
          Play Again
        </Link>
      </div>
    </div>
  );
};

export default Win;
