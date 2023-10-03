import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import axios from "../../api/axios";

const MainContentEmployee = ({ user }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get(`/api/employee/applied/${user.id}`);
      console.log(Object.entries(res.data.jobs));
      setJobs(Object.entries(res.data.jobs));
    };
    getJobs();
  }, []);

  // console.log(jobs);
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
                className="flex justify-between border p-5 rounded-2xl bg-white"
              >
                <p>{job[1].job_name}</p>
                <p>{job[1].status}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContentEmployee;
