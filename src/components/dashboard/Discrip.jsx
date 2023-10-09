import React, { useEffect, useState } from "react";
import { Kuraz } from "../../assets/images";
import axios from "../../api/axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Discrip = () => {
  const { state } = useLocation();
  const [job, setJob] = useState(null);
  const naviagte = useNavigate();
  useEffect(() => {
    const getJob = async () => {
      await axios.get(`/api/jobs/${state}`).then((res) => {
        setJob(res.data.jobs);
      });
    };
    getJob();
  }, []);

  if (job) {
    return (
      <div
        className={`disciption absolute  bg-[rgba(200,200,200,0.7)] w-full flex-col h-full left-0 top-0 flex  z-50`}
      >
        <div className="flex p-5 z-50 justify-self-start-start ">
          <button
            onClick={() => {
              naviagte("/dashboard-e");
              console.log("ss");
            }}
            className="bg-primary px-4 py-2 text-white rounded-xl"
          >
            Dashboard
          </button>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="max-w-[900px] bg-white justify-center items-center p-10 rounded-3xl border border-[#707070]">
            <div className="card-section flex flex-col gap-5">
              <div className="logo flex items-center gap-6">
                <img src={Kuraz} alt="logo" className="w-[110px]" />
                <div className="flex flex-col gap-3">
                  <h1 className="text-[34px]">{job.required_position}</h1>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div>
                  <h1 className="text-2xl font-bold">Job Detais</h1>
                </div>
                <div className="flex w-full gap-28">
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl">Job type</h1>
                      <p className="font-bold bg-primaryLightBackground  text-center p-2 rounded-lg">
                        {job.job_type}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl">Catagory</h1>
                      <p className="font-bold bg-primaryLightBackground  text-center p-2 rounded-lg">
                        {job.category}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl">Expriance Level</h1>
                      <p className="font-bold bg-primaryLightBackground text-center p-2 rounded-lg">
                        {job.experience}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl">Education</h1>
                      <p className="font-bold bg-primaryLightBackground  text-center p-2 rounded-lg">
                        {job.education}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl">Salary</h1>
                      <p className="font-bold bg-primaryLightBackground text-center p-2 rounded-lg">
                        {job.salary}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1 className="text-xl">Shift and Schedule</h1>
                      <p className="font-bold bg-primaryLightBackground w-[100px] text-center p-2 rounded-lg">
                        {job.shift}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-5">
                  <div>
                    <h1 className="text-2xl  font-bold">Job Description</h1>
                  </div>

                  <div>
                    <p className="text-lg max-w-[600px]">{job.details}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Discrip;
