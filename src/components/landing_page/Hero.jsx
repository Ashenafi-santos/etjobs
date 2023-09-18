import React from "react";

const Hero = () => {
  return (
    <div className="h-[500px] bg-[#F8F9FA] flex justify-center items-center">
      <div className="hero-content flex flex-col justify-center  gap-20 items-center">
        <div className="hero-text text-center">
          <h1 className="text-[70px]">Connecting Careers, Creating Futures.</h1>
          <p>Where Opportunities Meet Ambition.</p>
        </div>

        <div className="hero-search">
          <form action="/">
            <div className="inputs w-[800px] p-1 gap-4 border-black  rounded-2xl border-2 bg-white flex justify-center items-center">
              <input
                type="text"
                name="location"
                placeholder="Where are you looking for?"
                className="w-[300px] p-4 focus:outline-none"
              />
              <div className="w-[1px] h-[40px] bg-[#707070]"></div>
              <input
                type="text"
                name="catagories"
                className="w-[300px] p-4 focus:outline-none"
                placeholder="Catagory"
              />
              <button
                type="submit"
                className="border h-[50px] rounded-full w-[130px] text-[20px] bg-[#0CB657]"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
