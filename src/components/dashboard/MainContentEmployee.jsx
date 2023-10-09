import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import axios from "../../api/axios";
import DiscriptionCard from "../job/DiscriptionCard";
import { AiOutlineClose } from "react-icons/ai";
import Discrip from "./Discrip";

const MainContentEmployee = ({ user }) => {
  const { state } = useLocation();
  const [jobs, setJobs] = useState([]);
  const [discription, setDiscription] = useState("hidden");
  const [disj, setDisj] = useState(state);
  const navigate = useNavigate();
  console.log(state);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get(`/api/employee/applied/${user.id}`);
      console.log(Object.entries(res.data.jobs));
      setJobs(Object.entries(res.data.jobs));
    };
    getJobs();
  }, []);

  return (
    <div className="">
      <div className="flex flex-col justify-center items-center bg-[#FFFAF9]">
        <div className="w-full flex justify-end p-10">
          <Link to="/jobs" className="bg-white px-9 py-2  shadow-xl rounded-xl">
            Home
          </Link>
        </div>
        <div className="shadow-lg w-[800px] h-[800px] p-8 space-y-5 rounded-3xl bg-[#F6EFEE]">
          <div>
            <div className="flex justify-between border p-5 rounded-2xl bg-[#D6D6D6]">
              <h1>Applied Jobs</h1>
              <h1>Status</h1>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {jobs.map((job, index) => (
              <div
                key={index}
                className={`flex justify-between border font-bold p-5 rounded-2xl ${
                  job[1].status == "Accepted"
                    ? "bg-primaryLightBackground"
                    : job[1].status == "Rejected"
                    ? "bg-secondaryBackground "
                    : "bg-white"
                }`}
              >
                <p>{job[1].job_name}</p>
                <div className="flex gap-6 items-center">
                  <button
                    className={`border p-2 bg-secondary text-white`}
                    onClick={() => {
                      navigate("/dashboard-e-disc", { state: job[1].job_id });
                    }}
                  >
                    View
                  </button>
                  <p>{job[1].status}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentEmployee;
