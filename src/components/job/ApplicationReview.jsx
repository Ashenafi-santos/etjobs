import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { Kuraz } from "../../assets/images";
import { ToastContainer, toast } from "react-toastify";
import fileDownload from "js-file-download";

const ApplicationReview = () => {
  const { state } = useLocation();
  const applied = state;
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getjobs = async () => {
      await axios
        .get(`/api/jobs/${applied.job_id}`)
        .then((res) => {
          setJob(res.data.jobs);
        })
        .catch((e) => {
          console.log(e);
        });
    };
    getjobs();
  }, []);
  if (job) {
    return (
      <div className="flex items-center justify-evenly h-[100vh] ">
        <div className="job-dis">
          <div className="max-w-[900px] bg-white justify-center items-center p-10 rounded-3xl">
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
        <div className="app-info flex flex-col gap-7">
          <h1 className="text-3xl">Canidate Information</h1>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg">Personal Infromation</h1>
            <div className="flex gap-20">
              <div>
                <h1 className="font-bold">First Name</h1>
                <p className="bg-primaryLightBackground px-10 py-4 rounded-xl font-semibold">
                  {applied.fname}
                </p>
              </div>
              <div>
                <h1 className="font-bold">Last Name</h1>
                <p className="bg-primaryLightBackground px-10 py-4 rounded-xl font-semibold">
                  {applied.lname}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg">Address</h1>
            <div className="flex gap-20">
              <div>
                <h1 className="font-bold">Street</h1>
                <p className="bg-primaryLightBackground px-10 py-4 rounded-xl font-semibold">
                  {applied.location}
                </p>
              </div>
              <div>
                <h1 className="font-bold">Location</h1>
                <p className="bg-primaryLightBackground px-10 py-4 rounded-xl font-semibold">
                  {applied.region}
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-lg">Contact Information</h1>
            <div className="flex gap-20">
              <div>
                <h1 className="font-bold">Email</h1>
                <p className="bg-primaryLightBackground px-10 py-4 rounded-xl font-semibold">
                  {applied.email}
                </p>
              </div>
              <div>
                <h1 className="font-bold">Phone</h1>
                <p className="bg-primaryLightBackground px-10 py-4 rounded-xl font-semibold">
                  {applied.phone}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="text-lg">About the Canidate</h1>
              <div>
                <p
                  className="bg-primaryLightBackground px-10 py-4 rounded-xl font-semibold"
                  s
                >
                  {applied.discr}
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={async () => {
                  await axios
                    .get(`/api/application/getcv/${applied.cv}`, {
                      responseType: "blob",
                    })
                    .then((res) => {
                      fileDownload(res.data, "cv.pdf");
                    });
                }}
                className="bg-primary text-white px-10 py-4 rounded-md"
              >
                Open CV
              </button>
            </div>
            <div className="bg-secondary w-full p-4 top-0 right-0 flex justify-center fixed">
              <div className="flex gap-10">
                <button
                  onClick={async () => {
                    await axios
                      .put(`/api/application/accept/${applied.id}`)
                      .then((res) => {
                        toast.success("Application Accepted", {
                          position: "top-center",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                        navigate("/jobs");
                      });
                  }}
                  className="bg-primary text-white px-10 py-4 font-bold rounded-xl"
                >
                  Accept
                </button>
                <button
                  onClick={async () => {
                    await axios
                      .put(`/api/application/reject/${applied.id}`)
                      .then((res) => {
                        toast.success("Application Declied", {
                          position: "top-center",
                          autoClose: 3000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });
                        navigate("/jobs");
                      });
                  }}
                  className="bg-white  px-10 py-4 font-bold rounded-xl"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default ApplicationReview;
