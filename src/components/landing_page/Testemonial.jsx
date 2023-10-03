import React from "react";
import TestCard from "./TestCard";

const Testemonial = () => {
  return (
    <div className="h-auto p-20 bg-primaryLightBackground flex flex-col gap-10 justify-center items-center w-full">
      <div className="test-header flex flex-col gap-5 items-center">
        <h1 className="text-4xl font-bold">Testimonials</h1>
        <p className="text-lg">Some of our customers testimonials</p>
      </div>
      <div className="test-cards flex gap-10 flex-wrap justify-center">
        <TestCard />
        <TestCard />
        <TestCard />
      </div>
    </div>
  );
};

export default Testemonial;
