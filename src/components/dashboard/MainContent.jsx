import React, { useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import axios from "../../api/axios";
import AppliedCard from "./AppliedCard";

const MainContent = ({ user }) => {
  const [totalJobs, setTotalJobs] = useState("");
  const [totalVisited, setTotalVisited] = useState("");
  const [totalApplied, setTotalApplied] = useState("");
  const [jobs, setJobs] = useState([]);
  const [applied, setApplied] = useState([]);

  useEffect(() => {
    const getStatus = async () => {
      const res = await axios.get(`/api/status/${user.id}`);
      setTotalJobs(res.data.total);
      setTotalApplied(res.data.applied);
      setTotalVisited(res.data.visited);
    };
    const getJobs = async () => {
      const res = await axios.get(`/api/jobs/employer/${user.id}`);
      setJobs(Object.entries(res.data.jobs));
    };

    const getApplied = async () => {
      const res = await axios.get(`/api/jobs/employer/applied/${user.id}`);
      setApplied(Object.entries(res.data.jobs));
    };
    getStatus();
    getJobs();
    getApplied();
  }, []);
  if (jobs) {
    return (
      <div className="flex flex-col h-[100vh]">
        <div className="header p-5 flex justify-end ">
          <div className="flex gap-5 items-center">
            <div className="flex">
              <IoIosNotificationsOutline size={24} />
              <p>Notification</p>
            </div>
            <Link to="/jobs">
              <button className="bg-[#FFFFFF] p-2 rounded-2xl w-[100px]">
                Home
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-between flex-col gap-[100px]">
          <div className="flex justify-center">
            <div className="dashboard flex flex-col gap-10">
              <h1 className="text-3xl">Dashboard</h1>
              <div className="stat flex gap-10">
                <StatCard name={"Total Visited"} label={totalVisited} />
                <StatCard name={"Total Applied"} label={totalApplied} />
                <StatCard name={"Total Visited"} label={totalApplied} />
                <StatCard name={"Total Jobs"} label={totalJobs} />
              </div>
            </div>
          </div>

          <div className="functionality flex justify-center gap-16  ">
            <div className="jobs border border-[#707070] w-[500px] rounded-2xl bg-secondaryBackground">
              <h1 className="text-center p-2 text-2xl border-b border-[#707070]">
                Jobs
              </h1>
              <div className="overflow-y-scroll max-h-[400px]">
                {jobs.map((job, index) => (
                  <JobCard key={index} job={job[1]} />
                ))}
              </div>
            </div>
            <div className="jobs border border-[#707070] w-[500px] rounded-2xl bg-secondaryBackground">
              <div className="jobs border  border-[#707070] w-[500px] rounded-2xl bg-secondaryBackground">
                <h1 className="text-center p-2 text-2xl border-b border-[#707070]">
                  Applied
                </h1>
                <div className="overflow-y-scroll max-h-[400px]">
                  {applied.map((applied, index) => (
                    <AppliedCard job={applied[1]} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default MainContent;
