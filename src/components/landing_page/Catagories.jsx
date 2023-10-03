import React from "react";
import CataCard from "./CataCard";
import { Design } from "../../assets/images";
import { Art } from "../../assets/images";
import { Code } from "../../assets/images";
import { Ad } from "../../assets/images";
import { Health } from "../../assets/images";
import { Tool } from "../../assets/images";
import { Bill } from "../../assets/images";
import { Link } from "react-router-dom";

const Catagories = () => {
  return (
    <div className="h-auto bg-secondaryLightBackground flex justify-center items-center">
      <div className="bg-secondary w-[400px] h-[400px] mt-[200px] left-[200px] blur-xl absolute "></div>
      <div className="bg-primary w-[400px] h-[400px] mb-[200px] right-[200px] blur-xl absolute "></div>
      <div className="caragories-content space-y-10">
        <h1 className="text-[30px] text-center">Find Popular Jobs</h1>
        <div className="cards grid max-sm:grid-cols-1 grid-cols-3 justify-items-center gap-10">
          <CataCard />
          <CataCard />
          <CataCard />
          <CataCard />
          <CataCard />
          <CataCard />
        </div>
        <div className="flex justify-center">
          <Link to="/jobs">
            <button className="border p-3 rounded-2xl w-[140px] text-white bg-primary">
              See More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
