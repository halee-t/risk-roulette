import React from "react";

const Landing = () => {
  return (
    <>
      <div>
        <section className="mt-[16rem] mx-[10rem] flex-col justify-center items-center text-center min-h-screen">
          <div>
            <h1 className="text-7xl semibold">You Can't Stop a Disaster....</h1>
            <h1 className="text-7xl semibold">Are You Covered?</h1>
          </div>
          <div className="flex justify-center mt-[16rem]">
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
