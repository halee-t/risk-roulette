import React from "react";
import { Link } from "react-router-dom";

const Homeboy = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row gap-8 md:gap-24 mx-[2rem] md:mx-[10rem] -mt-[10rem]">
        <div className="flex flex-col md:w-[75%]">
          <h2 className="text-xl md:text-3xl semibold text-primary">
            Do you have what it takes to keep Franklin covered?
          </h2>
          <p className="text-base md:text-lg mt-8">
            Franklin is a good-natured guy who loves life, but has a knack for
            getting himself into disastrous situations. Whether it's being in
            the wrong place at the wrong time, his reckless decisions, or
            forgetting to clean out the dyer lint trap, Franky has one thing in
            common: bad luck follows him around like a shadow.
          </p>
          <p className="text-base md:text-lg mt-8">
            Insurance? That's a word Franklins heard about but never paid much
            attention to. He's pretty sure it's something adults talk about, but
            every time someone mentions it, Franky just nods and moves on. As
            far as he's concerned, his life is all about living in the moment
            and dealing with the messes later. However, his friends keep hinting
            that he might be one accident away from a serious financial
            disaster, and maybe it's time he took insurance seriously.
          </p>
          <p className="text-base md:text-lg mt-8">
            Can you choose the correct insurance coverage to help him out in his
            disasterous situations?
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8">
          <img src="./HomeBoy.png" />
          <div className="">
            <Link
              to="/wheel"
              className="text-2xl font-semibold hover:text-white hover:bg-primary transition duration-300 ease-in-out w-fit relative ring-2 ring-primary rounded-3xl py-2 px-4"
            >
              Dare To Play?
            </Link>
          </div>
        </div>
      </section>
      <section className="h-24 md:h-52"></section>
    </div>
  );
};

export default Homeboy;
