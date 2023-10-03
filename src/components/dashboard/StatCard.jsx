import React from "react";
import { BsFillPersonFill } from "react-icons/bs";

const StatCard = ({ name, label }) => {
  return (
    <div className="flex gap-6 bg-primary border text-white border-[#707070] rounded-3xl px-5 py-3  w-[230px] hover:bg-secondaryBackground hover:text-primary">
      <div className="flex gap-3 flex-col">
        <h1 className="text-2xl">{label ? label : 0}</h1>
        <p className="text-[14px] font-light">{name}</p>
      </div>
      <div className="pro bg-secondaryBackground p-5 rounded-full border border-borderbg text-primary">
        <BsFillPersonFill size={24} />
      </div>
    </div>
  );
};

export default StatCard;
