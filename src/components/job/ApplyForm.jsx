import React, { useState } from "react";
import { BiLocationPlus, BiPhone } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";

const ApplyForm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  if (!state.job) {
    navigate("/jobs");
  }
  const job = state.job;
  const employee = state.employee;
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [region, setRegion] = useState("");
  const [address, setAddress] = useState("");
  const [disc, setdisc] = useState("");
  const [cv, setCv] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (cv) {
      const fData = new FormData();
      fData.append("cv", cv);
      fData.append("employer_id", job.employer_id);
      fData.append("employee_id", employee.id);
      fData.append("job_id", job.id);
      fData.append("fname", fname);
      fData.append("lname", lname);
      fData.append("email", email);
      fData.append("phone", phone);
      fData.append("region", region);
      fData.append("location", address);
      fData.append("discr", disc);
      fData.append("job_name", job.required_position);

      console.log(phone, region, email, job.employer_id, job.id, employee.id);
      await axios
        .post(`/api/application/upload`, fData)
        .then((res) => {
          toast.success("Successfully Applied", {
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
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <div className="flex bg-secondaryLightBackground flex-col justify-center items-center h-[100vh]">
      <div>
        <h1 className="text-3xl font-bold">Job Application Form</h1>
        <p>Fill out the following form properly</p>
      </div>
      <div>
        <form onSubmit={handleSubmit} className="flex flex-col p-5 gap-5 ">
          <div className="multi-input flex gap-11">
            <div className="input gap-3 border p-2 rounded-lg border-borderbg flex justify-center items-center">
              <input
                type="text"
                required
                placeholder="First Name"
                value={fname}
                onChange={(e) => setFname(e.target.value)}
              />
              <div className="border-e border-primary h-[70%] border-2"></div>
              <BsPerson />
            </div>
            <div className="input gap-3 border p-2 rounded-lg border-borderbg flex justify-center items-center">
              <input
                type="text"
                required
                placeholder="Last Name"
                value={lname}
                onChange={(e) => setLname(e.target.value)}
              />
              <div className="border-e border-primary h-[70%] border-2"></div>
              <BsPerson />
            </div>
          </div>
          <div className="multi-input flex gap-11">
            <div className="input gap-3 border p-2 rounded-lg border-borderbg flex justify-center items-center">
              <input
                type="email"
                required
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="border-e border-primary h-[70%] border-2"></div>
              <MdEmail />
            </div>
            <div className="input gap-3 border p-2 rounded-lg border-borderbg flex justify-center items-center">
              <input
                type="text"
                required
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <div className="border-e border-primary h-[70%] border-2"></div>
              <BiPhone />
            </div>
          </div>
          <div className="input gap-3 border p-2 rounded-lg border-borderbg flex justify-center items-center">
            <input
              type="text"
              placeholder="Region"
              required
              className="w-[90%]"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            />
            <div className="border-e border-primary border-2"></div>
            <BiLocationPlus />
          </div>
          <div className="input gap-3 border p-2 rounded-lg border-borderbg flex justify-center items-center">
            <input
              type="text"
              placeholder="Address"
              required
              className="w-[90%]"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <div className="border-e border-primary border-2"></div>
            <BiLocationPlus />
          </div>
          <div className="input gap-3 border p-2 rounded-lg border-borderbg flex justify-center items-center">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Addtional Information"
              className="w-full"
              value={disc}
              onChange={(e) => setdisc(e.target.value)}
            ></textarea>
          </div>
          <div className="input flex flex-col gap-3 py-4">
            <label htmlFor="cv">Upload your cv</label>
            <input
              className="border p-2 rounded-xl"
              type="file"
              name=""
              id=""
              placeholder="upload your CV"
              required
              onChange={(e) => setCv(e.target.files[0])}
            />
          </div>

          <div className="w-full flex gap-3 justify-end">
            <button
              className="bg-white p-2 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                navigate("/jobs");
              }}
            >
              Back
            </button>
            <button
              type="submit"
              className="bg-primary text-white p-2 rounded-lg"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ApplyForm;
