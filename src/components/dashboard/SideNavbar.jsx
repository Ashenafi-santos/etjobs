import React, { useContext, useState } from "react";
import { Logo } from "../../assets/images";
import { CgProfile } from "react-icons/cg";
import { BiSolidDashboard, BiSolidTrashAlt } from "react-icons/bi";
import { BsFillArrowRightCircleFill, BsPerson } from "react-icons/bs";
import { IoLogOutSharp } from "react-icons/io5";
import { AiFillSetting } from "react-icons/ai";
import Profile from "./Profile";
import Main from "./Main";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "../../api/axios";

const SideNavbar = ({ setContent, user }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [adelete, setAdelete] = useState("hidden");
  const [alogout, setAlogout] = useState("hidden");

  return (
    <div>
      <div className="w-[250px] bg-primaryLightBackground h-[100vh] flex flex-col justify-between items-center p-7">
        <div className="logo">
          <img src={Logo} alt="logo" className="w-[150px] h-auto" />
        </div>
        <div className="flex flex-col justify-between items-center gap-16">
          <div className="profile flex flex-col justify-center items-center gap-4">
            {user.profile_pic ? (
              <img
                src={`http://127.0.0.1:8000/storage/profile_pics/${user.profile_pic}`}
                className="rounded-full w-[150px] h-[150px]"
              />
            ) : (
              <CgProfile size={150} />
            )}
            <p>{user.company_name}</p>
          </div>

          <div className="nav-list">
            <ul className="flex flex-col gap-1">
              <li>
                <button
                  className="p-4 hover:bg-primary hover:text-white rounded-2xl flex w-full items-center gap-3"
                  onClick={() => {
                    setContent(<Main />);
                  }}
                >
                  <BiSolidDashboard size={18} />
                  <p>Dashboard</p>
                </button>
              </li>
              <li>
                <button
                  className="p-4 hover:bg-primary hover:text-white rounded-2xl flex w-full items-center gap-3"
                  onClick={() => {
                    setContent(<Profile />);
                  }}
                >
                  <BsPerson size={18} />
                  <p>Profile</p>
                </button>
              </li>
              <li>
                <Link
                  to="/post"
                  className="p-4 hover:bg-primary hover:text-white rounded-2xl flex items-center gap-3"
                >
                  <BsFillArrowRightCircleFill size={18} />
                  <p>Submit a Job</p>
                </Link>
              </li>
              <li className="p-4 hover:bg-primary hover:text-white rounded-2xl flex justify-center items-center gap-3">
                <AiFillSetting size={18} />
                <p>Account Setting</p>
              </li>
              <li className="p-4  hover:bg-primary hover:text-white rounded-2xl flex  items-center gap-3">
                <button
                  onClick={() => {
                    setAdelete("block");
                  }}
                  className="flex gap-3"
                >
                  <BiSolidTrashAlt size={18} />
                  <p>Delete Account</p>
                </button>
              </li>
            </ul>
          </div>
          <div
            className={`disciption absolute ${adelete} bg-[rgba(200,200,200,0.7)] w-full h-full left-0 top-0 flex justify-center items-center z-50`}
          >
            <div className="border p-20 rounded-lg flex flex-col gap-5 justify-center items-center bg-primaryLightBackground">
              <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold">Are You Sure?</h1>
                <p>
                  Are you sure to delete the account? All the data will be lost
                </p>
              </div>
              <div className="flex gap-5">
                <button
                  onClick={async () => {
                    await axios.delete(`/api/employer/${user.id}`);
                    logout();
                    navigate("/jobs");
                  }}
                  className="bg-primary text-white px-14 hover:bg-secondary py-3 rounded-3xl"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setAdelete("hidden");
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="logout flex items-center gap-3">
          <button
            onClick={() => {
              setAlogout("block");
            }}
            className="flex items-center gap-3 hover:text-[#f34a4a]"
          >
            <IoLogOutSharp size={24} />
            <p>Logout</p>
          </button>
        </div>
        <div
          className={`disciption absolute ${alogout} bg-[rgba(200,200,200,0.7)] w-full h-full left-0 top-0 flex justify-center items-center z-50`}
        >
          <div className="border p-20 rounded-lg flex flex-col gap-5 justify-center items-center bg-primaryLightBackground">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-3xl font-bold">Are You Sure?</h1>
              <p>Are you sure to you want to log out?</p>
            </div>
            <div className="flex gap-5">
              <button
                onClick={async () => {
                  logout();
                  navigate("/jobs");
                }}
                className="bg-primary text-white px-14 hover:bg-secondary py-3 rounded-3xl"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setAlogout("hidden");
                }}
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
