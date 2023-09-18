import React, { useContext, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { IoPersonOutline } from "react-icons/io5";
import { HiLockClosed } from "react-icons/hi2";
import axios from "../../api/axios";
import AuthContext from "../../context/AuthContext";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    login({ username, password });
  };

  return (
    <>
      <Header />
      <div className="h-[700px]">
        <div className="bg-[#F8F9FA] flex justify-center items-center h-full border-b border-black">
          <div className="card p-6 rounded-2xl bg-[#E8EDEB] w-[400px] h-auto flex flex-col justify-center items-center">
            <h1 className="text-[#0FB357] text-[30px] font-bold">WELLCOME</h1>
            <h1 className="text-[25px]">Login to your account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="input flex mt-[30px] justify-center items-center p-4 gap-5 border-b border-black">
                <IoPersonOutline size={24} />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="bg-[#E8EDEB] focus:outline-none"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="input flex justify-center items-center p-4 gap-5 border-b border-black">
                <HiLockClosed size={24} />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="bg-[#E8EDEB] focus:outline-none"
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
                  className="bg-[#0FB357] w-full text-white font-semibold p-1 rounded-md "
                >
                  LOGIN
                </button>
              </div>
              <div className="flex justify-center">
                <a href="">Forget password?</a>
              </div>
              <div className="flex justify-center items-center gap-3">
                <p>Don't have an account?</p>
                <a href="/signup" className="text-[#0FB357] font-semibold ">
                  Sign Up
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

export default Login;
