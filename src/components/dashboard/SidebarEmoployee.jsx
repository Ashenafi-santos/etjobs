import React, { useContext } from "react";
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
import MainEmployee from "./MainEmployee";
import ProfileEmployee from "./ProfileEmployee";

const SideNavbarEmployee = ({ setContent, user }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/jobs");
  };

  console.log(user);
  return (
    <div className="h-[100vh] p-5 flex flex-col justify-around bg-[#FFFAF9]">
      <div className="w-[250px] bg-white h-[600px] flex flex-col justify-between items-center shadow-primary shadow-2xl p-7 rounded-3xl">
        <div className="flex flex-col justify-between items-center gap-16">
          <div className="profile flex flex-col justify-center items-center gap-2">
            {user.profile_pic ? (
              <img
                src={`http://127.0.0.1:8000/storage/profile_pics/${user.profile_pic}`}
                className="rounded-full w-[150px] h-[150px]"
              />
            ) : (
              <CgProfile size={150} />
            )}
            <p className="text-2xl">
              {user.fname} {user.lname}
            </p>
            <h1>{user.category}</h1>
          </div>

          <div className="nav-list">
            <ul className="flex flex-col gap-1">
              <li>
                <button
                  className="p-2 hover:bg-primary hover:text-white rounded-2xl flex w-full items-center gap-2"
                  onClick={() => {
                    setContent(<MainEmployee />);
                  }}
                >
                  <BiSolidDashboard size={18} />
                  <p>Dashboard</p>
                </button>
              </li>
              <li>
                <button
                  className="p-2 hover:bg-primary hover:text-white rounded-2xl flex w-full items-center gap-2"
                  onClick={() => {
                    setContent(<ProfileEmployee />);
                  }}
                >
                  <BsPerson size={18} />
                  <p>Profile</p>
                </button>
              </li>
              <li>
                <Link
                  to="/jobs"
                  className="p-2 hover:bg-primary hover:text-white rounded-2xl flex items-center gap-2"
                >
                  <BsFillArrowRightCircleFill size={18} />
                  <p>Apply to a Job</p>
                </Link>
              </li>
              <li className="p-2  hover:bg-primary hover:text-white rounded-2xl flex  items-center gap-2">
                <BiSolidTrashAlt size={18} />
                <p>Delete Account</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="logout flex items-center gap-3">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 hover:text-[#f34a4a]"
          >
            <IoLogOutSharp size={24} />
            <p>Logout</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SideNavbarEmployee;
