import React from "react";
import { Kuraz } from "../../assets/images";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

const CataCard = ({ icon, header, discription }) => {
  return (
    <div className="bg-white w-[350px] hover:shadow-xl hover:shadow-primary p-8 z-10 gap-10 flex flex-col justify-center rounded-xl shadow ">
      <div className="flex justify-center flex-col items-start gap-5">
        <div className="flex gap-[20px]">
          <p className="bg-[#F7F7FE] px-4 py-1 rounded-md">Full Time</p>
          <p className="bg-[#F7F7FE] px-4 py-1 rounded-md">Development</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">FullStack Developer</h1>
          <p className="font-light">Kuraz Technology</p>
        </div>
        <div className="flex gap-[20px]">
          <div className="flex items-center gap-2">
            <MdLocationOn size={18} />
            <p>Remote</p>
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineClockCircle size={18} />
            <p>24 hours ago</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex gap-5 items-center">
        <img src={Kuraz} alt="" />
        <p className="text-2xl">
          ETB 12k-14k <span className="text-[14px] font-light">/Month</span>
        </p>
      </div>
    </div>
  );
};

export default CataCard;
