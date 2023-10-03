import React, { useState } from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import { BiCircle } from "react-icons/bi";
import { BsFillPersonFill, BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { AiFillEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const RegisterEmployee = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfimation] = useState("");
  const navigate = useNavigate();

  const [v, setV] = useState("password");
  const [v2, setV2] = useState("password");

  const toggleV = () => {
    if (v == "password") {
      setV("text");
    } else {
      setV("password");
    }
  };
  const toggleV2 = () => {
    if (v2 == "password") {
      setV2("text");
    } else {
      setV2("password");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === password_confirmation) {
      const data = {
        fname,
        lname,
        email,
        phone,
        password,
        password_confirmation,
      };

      const res = await axios
        .post("/api/employee/register", data)
        .then((res) => {
          toast.success("Successfully created Login to your Account", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/login");
        })
        .catch((e) => {
          toast.error("Email already taken", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        });
    } else {
      toast.error("Password don't match!", {
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
    <>
      <Header />
      <div className="h-[900px]">
        <div className="bg-secondaryLightBackground flex justify-center items-center h-full border-b border-black">
          <div className="card p-6 rounded-2xl bg-primaryLightBackground w-[600px] h-auto flex flex-col justify-center items-center">
            <h1 className="text-primary text-[30px] font-bold">WELLCOME</h1>
            <h1 className="text-[18px]">
              Create your account and apply for jobs
            </h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 ">
              <div className="py-4">
                <p className="font-bold">Personal Details</p>
                <p className="text-[14px]">
                  Please fill out the required information in the field below
                </p>
              </div>
              <div className=" flex-col justify-center items-center space-x-2 space-y-4">
                <div className="flex justify-center items-center gap-3">
                  <div className="input flex justify-center items-center gap-5 border-b border-borderbg">
                    <BsFillPersonFill size={24} />
                    <input
                      type="text"
                      className="p-2 bg-primaryLightBackground"
                      placeholder="First Name"
                      required
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div className="input flex items-center gap-5 border-b border-borderbg">
                    <BsFillPersonFill size={24} />
                    <input
                      type="text"
                      className="p-2 bg-primaryLightBackground"
                      placeholder="Last Name"
                      required
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="input flex items-center gap-5 border-b border-borderbg">
                    <MdEmail size={24} />
                    <input
                      type="email"
                      className=" p-2 bg-primaryLightBackground"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input flex items-center gap-5 border-b border-borderbg">
                    <BsTelephone size={24} />
                    <input
                      type="number"
                      className="p-2 bg-primaryLightBackground"
                      placeholder="Contact Number"
                      required
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="py-4">
                <p className="font-bold">Security Details</p>
                <p className="text-[14px]">
                  Please fill out the security information in the field below
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-5">
                <div className="input flex items-center gap-5 border-b border-borderbg">
                  <CiLock size={24} />
                  <input
                    type={v2}
                    className="p-2 bg-primaryLightBackground"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <AiFillEye onClick={toggleV2} />
                </div>
                <div className="input flex items-center gap-5 border-b border-borderbg">
                  <CiLock size={24} />
                  <input
                    type={v}
                    className="p-2 bg-primaryLightBackground"
                    placeholder="Confirm Password"
                    required
                    onChange={(e) => setPasswordConfimation(e.target.value)}
                  />
                  <AiFillEye onClick={toggleV} />
                </div>
              </div>
              <div>
                <button
                  type="sumit"
                  className="bg-primary w-full text-white font-semibold p-2 rounded-md "
                >
                  Lets get started
                </button>
              </div>

              <div className="flex justify-center items-center gap-3 mt-4">
                <p>Sign Up as a Empolyer</p>
                <a href="/signup" className="text-primary font-semibold ">
                  Click Here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      <Footer />
    </>
  );
};

export default RegisterEmployee;
