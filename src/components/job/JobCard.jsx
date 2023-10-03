import React, { Suspense, useContext, useEffect, useState } from "react";
import { Kuraz } from "../../assets/images";
import axios from "../../api/axios";
import { AiOutlineClose } from "react-icons/ai";
import DiscriptionCard from "./DiscriptionCard";
import AuthContext from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobCard = ({ job }) => {
  const [employer, setEmployer] = useState(null);
  const [discription, setDiscription] = useState("hidden");
  const [employee, setEmployee] = useState(null);
  const { getUser } = useContext(AuthContext);
  const getEmployer = async () => {
    const res = await axios.get(`/api/employer/${job.employer_id}`);
    setEmployer(res.data.employer);
    setEmployee(getUser());
  };
  useEffect(() => {
    getEmployer();
  }, []);

  if (employer) {
    const employerName = employer.name;
    const position = job.required_position;
    const location = job.location;
    const time = job.create_at;
    const details = job.details;
    return (
      <div className="flex flex-col w-[500px] bg-white gap-5 justify-center px-7 py-3 rounded-3xl shadow">
        <div className="card-info flex gap-5">
          <div className="logo">
            <img src={Kuraz} alt="logo" className="max-w-[120px]" />
          </div>
          <div className="job-dis flex flex-col gap-5">
            <div>
              <h1 className="text-[24px]">{position}</h1>
              <p>{employerName}</p>
              <p>{location}</p>
            </div>
            <div className="max-w-[300px]">
              <p>{details.substring(0, 120)}...</p>
            </div>
          </div>
        </div>
        <div className="skills flex gap-5">
          <p className="bg-primaryLightBackground p-2 rounded-lg">
            UI designer
          </p>
          <p className="bg-primaryLightBackground p-2 rounded-lg">Figma</p>
          <p className="bg-primaryLightBackground p-2 rounded-lg">
            Landing Page
          </p>
        </div>
        <div className="status flex justify-between items-center">
          <p>{time}</p>
          <button
            className="bg-primary text-white px-5 py-2 rounded-lg"
            onClick={async () => {
              setDiscription("block");
              await axios.post(`/api/visited/${job.id}`);
            }}
          >
            Apply
          </button>
        </div>
        <div
          className={`disciption absolute ${discription} bg-[rgba(200,200,200,0.7)] w-full h-full left-0 top-0 flex justify-center items-center z-50`}
        >
          <div>
            <button
              className="w-full flex justify-end"
              onClick={() => {
                setDiscription("hidden");
              }}
            >
              <AiOutlineClose size={30} />
            </button>
            <DiscriptionCard
              employee={employee}
              job={job}
              setDiscription={setDiscription}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default JobCard;
