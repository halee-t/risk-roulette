import React from "react";
import { Link } from "react-router-dom";

const Homeboy = () => {
  return (
    <div>
      <section className="flex gap-24 mx-[10rem]">
        <div className="flex flex-col w-[75%]">
          <h2 className="text-3xl semibold text-primary">
            Do you have what it takes to keep homeboy covered?
          </h2>
          <p className="text-lg mt-8">
            Homeboy has been having some very bad luck lately. Unfortunately for
            him, he was never taught about insurance growing up and has lived
            his life on the edge! Can you choose the correct insurance coverage
            to help him out in his disasterous situations?
          </p>
        </div>
        <div>
          <img />
          <div className="space-x-4">
            <Link
              to="/wheel"
              className="text-primary font-semibold hover:text-white hover:bg-primary transition duration-300 ease-in-out w-fit relative ring-2 ring-primary rounded-2xl py-2 px-4"
            >
              Dare To Play
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homeboy;
