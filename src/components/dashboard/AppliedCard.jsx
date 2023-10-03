import React, { useState } from "react";
import { GoKebabHorizontal } from "react-icons/go";
import { Code } from "../../assets/images";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const AppliedCard = ({ job }) => {
  const [view, setView] = useState("hidden");
  const navigate = useNavigate();
  const handleClick = () => {
    if (view == "hidden") {
      setView("flex");
    } else {
      setView("hidden");
    }
  };
  return (
    <div className="flex justify-between px-10 border-b border-[#707070] py-4 items-center">
      <div className="flex gap-10 items-center">
        <img src={Code} alt="code" />
        <div className="dis">
          <h1 className="text-xl">{job.job_name}</h1>
        </div>
      </div>
      <div className="text-primary">
        <div className="flex flex-col justify-center items-center">
          <button onClick={handleClick} className="text-primary">
            <GoKebabHorizontal size={24} />
          </button>
          <div className={`gap-2 bg-secondaryBackground ${view}`}>
            <button
              onClick={() => {
                navigate("/review-application", { state: job });
              }}
              className={`border p-2 bg-secondaryLightBackground`}
            >
              View
            </button>
            <button
              onClick={async () => {
                await axios
                  .delete(`/api/application/${job.id}`)
                  .then((res) => {
                    toast.success("Successfully Deleted", {
                      position: "top-center",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    });
                    navigate("/dashboard");
                  })
                  .catch((e) => console.log(e));
              }}
              className={`border p-2 bg-secondary text-white`}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedCard;
