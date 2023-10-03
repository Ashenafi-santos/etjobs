import React from "react";
import { BsFillStarFill } from "react-icons/bs";
import { TestProfile } from "../../assets/images";
const TestCard = () => {
  return (
    <div className="px-10 py-5 bg-white rounded-3xl">
      <div className="profile w-[350px]  gap-5 flex flex-col justify-start items-start">
        <div className="flex items-center gap-3">
          <img src={TestProfile} alt="test" />
          <div>
            <h1>Imran Hossain</h1>
            <p>Product Designer</p>
          </div>
        </div>
        <div className="test">
          <p>
            I recently used your job website, and I'm thrilled with the
            experience. The user-friendly interface, extensive job listings,
            advanced search filters, and job alert feature streamlined my job
            search process.
          </p>
        </div>
        <div className="stars text-[#FFD700] flex gap-2">
          <BsFillStarFill size={24} />
          <BsFillStarFill size={24} />
          <BsFillStarFill size={24} />
          <BsFillStarFill size={24} />
          <BsFillStarFill size={24} />
        </div>
      </div>
    </div>
  );
};

export default TestCard;
