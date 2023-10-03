import React from "react";
import { Kuraz } from "../../assets/images";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DiscriptionCard = ({ job, employee, setDiscription }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    if (employee) {
      if (employee.user.role == "employee") {
        navigate("/apply", { state: { job: job, employee: employee.user } });
        setDiscription("hidden");
      } else {
        toast.error("You have to register as an employee to Apply!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("You have to register as an employee to Apply!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="max-w-[900px] bg-white justify-center items-center p-10 rounded-3xl border border-[#707070]">
      <div className="card-section flex flex-col gap-5">
        <div className="logo flex items-center gap-6">
          <img src={Kuraz} alt="logo" className="w-[110px]" />
          <div className="flex flex-col gap-3">
            <h1 className="text-[34px]">{job.required_position}</h1>
            <button
              onClick={handleClick}
              className="bg-primary max-w-[200px] text-white p-3 rounded-lg"
            >
              Apply Now
            </button>
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
      <ToastContainer />
    </div>
  );
};

export default DiscriptionCard;
