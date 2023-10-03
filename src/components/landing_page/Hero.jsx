import React from "react";
import { BusinessDeal } from "../../assets/images";
import { BsSearch } from "react-icons/bs";
const Hero = () => {
  return (
    <div className="h-auto bg-secondaryLightBackground p-10">
      <div className="hero-content flex justify-around">
        <div className="hero-text flex flex-col justify-center gap-5">
          <div className="hero-text flex flex-col gap-4 justify-center items-start ">
            <h1 className="text-5xl w-[500px] font-bold">
              Connecting Careers, Creating{" "}
              <span className="text-secondary">Futures.</span>
            </h1>
            <p className="text-lg font-light">
              Where Opportunities Meet Ambition.
            </p>
          </div>

          <div className="hero-search">
            <form action="/">
              <div className="inputs flex border justify-center items-center border-borderbg rounded-3xl bg-white">
                <input
                  type="text"
                  name="location"
                  placeholder="where"
                  className="p-2 focus:outline-none"
                />
                <div className="w-[1px] h-[40px] bg-[#707070]"></div>
                <input
                  type="text"
                  name="catagories"
                  className="p-4 focus:outline-none"
                  placeholder="what"
                />
                <button
                  type="submit"
                  className="border p-1 w-[60px] flex justify-center rounded-3xl bg-primary text-white"
                >
                  <BsSearch size={24} />
                </button>
              </div>
            </form>
          </div>
          <p>Thousands of jobs are here, find your new job today.</p>
        </div>
        <div className="hero-img">
          <img src={BusinessDeal} alt="deal" className="h-[500px]" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
