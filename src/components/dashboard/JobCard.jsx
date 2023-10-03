import React, { useState } from "react";
import { BsCodeSlash } from "react-icons/bs";
import { GoKebabHorizontal } from "react-icons/go";
import { Code } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";

const JobCard = ({ job }) => {
  const [view, setView] = useState("hidden");
  const [adelete, setAdelete] = useState("hidden");
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
          <h1 className="text-xl">{job.required_position}</h1>
          <div className="flex gap-5">
            <p className="text-[14px]">{job.job_type}</p>
            <p className="text-[14px]">{job.location}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <button onClick={handleClick} className="text-primary">
          <GoKebabHorizontal size={24} />
        </button>
        <div className={`gap-2 bg-secondaryBackground ${view}`}>
          <button
            onClick={() => {
              navigate("/review", { state: job });
            }}
            className={`border p-2 bg-secondaryLightBackground`}
          >
            View
          </button>
          <button
            onClick={async () => {
              setAdelete("block");
            }}
            className={`border p-2 bg-secondary text-white`}
          >
            Delete
          </button>
        </div>
      </div>
      <div
        className={`disciption absolute ${adelete} bg-[rgba(200,200,200,0.7)] w-full h-full left-0 top-0 flex justify-center items-center z-50`}
      >
        <div className="border p-20 rounded-lg flex flex-col gap-5 justify-center items-center bg-primaryLightBackground">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold">Are You Sure?</h1>
            <p>Are you sure to delete the job?</p>
          </div>
          <div className="flex gap-5">
            <button
              onClick={async () => {
                await axios
                  .delete(`/api/employer/jobs/${job.id}`)
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
                    setAdelete("hidden");
                  })
                  .catch((e) => console.log(e));
              }}
              className="bg-primary text-white px-14 hover:bg-secondary py-3 rounded-3xl"
            >
              Yes
            </button>
            <button
              onClick={() => {
                setAdelete("hidden");
              }}
            >
              No
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobCard;
