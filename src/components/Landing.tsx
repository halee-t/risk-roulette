import React from "react";
import BackgroundMusic from "./BackgroundMusic";

const Landing = () => {
  return (
    <>
      <div>
        <section className="mt-[16rem] mx-[10rem] flex flex-col gap-64 items-center text-center min-h-screen">
          <div>
            <h1 className="text-7xl semibold">You Can't Stop a Disaster....</h1>
            <h1 className="text-7xl semibold">Are You Covered?</h1>
          </div>
          <div className="flex justify-center">
            <img
              src="./downarrow.png"
              className="w-16 object-fit overflow-hidden"
            />
          </div>
        </section>
      </div>
      
    </>
  );
};

export default Landing;
