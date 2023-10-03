import React, { useContext, useState } from "react";
import Header from "../header/Header";
import Footer from "../Footer";
import { IoPersonOutline } from "react-icons/io5";
import { HiLockClosed } from "react-icons/hi2";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";

const LoginEmployee = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login_employee } = useContext(AuthContext);
  const { errors } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    login_employee({ email, password });
    if (login_employee({ email, password })) {
      if (!errors) {
        setTimeout(() => {
          navigate("/jobs");
        }, 3000);
        console.log(errors);
      } else {
      }
    }
  };

  return (
    <>
      <Header />
      <div className="h-[700px]">
        <div className="bg-secondaryLightBackground flex justify-center items-center h-full ">
          <div className="card p-6 rounded-2xl bg-primaryLightBackground w-[500px] h-auto flex flex-col justify-center items-center">
            <h1 className="text-primary text-[30px] font-bold">WELLCOME</h1>
            <h1 className="text-[25px]">Login to your candidate account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="input flex mt-[30px] justify-center items-center p-4 gap-5 border-b border-black">
                <MdEmail size={24} />
                <input
                  type="text"
                  name="eamil"
                  placeholder="Email"
                  className="bg-primaryLightBackground focus:outline-none"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input flex justify-center items-center p-4 gap-5 border-b border-black">
                <HiLockClosed size={24} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-primaryLightBackground focus:outline-none"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="check-box flex gap-3 justify-center items-center">
                <input type="checkbox" />
                <p>Remember Me</p>
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-primary w-full text-white font-semibold p-1 rounded-md "
                >
                  LOGIN
                </button>
              </div>
              <div className="flex justify-center">
                <a href="">Forget password?</a>
              </div>
              <div className="flex justify-center items-center gap-3">
                <p>Log in as Employer</p>
                <a href="/login" className="text-secondary font-semibold ">
                  Click Here
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginEmployee;
