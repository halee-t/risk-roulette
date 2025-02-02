import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

const GameOver: React.FC = () => {
  return (
    <div className="min-w-screen min-h-screen relative overflow-hidden">
      <img
        src="./sadbg.png"
        className=" w-full h-auto object-cover overflow-hidden absolute top-0 right-0"
      />
      <section className="z-20 absolute top-[15%] left-[50%] transform -translate-x-[50%]">
        <h1 className="text-center text-white text-7xl semibold">You Lost</h1>
        <p className="text-center text-white text-xl semibold mt-12">
          There is no reward that outweighs the risk of no coverage. Do better
          for yourself, do better for Franklin.
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
          Try Again
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
