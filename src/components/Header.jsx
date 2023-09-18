import React, { useContext } from "react";
import { Logo } from "../assets/images";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="bg-[#F8F9FA] p-3">
      <nav className="flex justify-around items-center">
        <div className="logo">
          <img src={Logo} className="w-[150px] h-auto" alt="logo" />
        </div>

        <div className="nav-list">
          <ul className="flex gap-7">
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>Catagories</li>
            <li>Pages</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <div className="auth flex gap-4">
          {user ? (
            <h1>{user.email}</h1>
          ) : (
            <div>
              <button className="border p-3 rounded-full w-[150px] bg-white">
                Post
              </button>
              <Link to="/login">
                <button className="border p-3 rounded-full w-[150px] bg-[#0CB657]">
                  Sign Up/Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
