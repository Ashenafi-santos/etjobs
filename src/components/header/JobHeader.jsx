import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";
import { AiOutlineSearch } from "react-icons/ai";
import AuthContext from "../../context/AuthContext";

const JobHeader = ({ setSearch, applyChange }) => {
  const { getUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(getUser());
  }, [!user]);

  return (
    <div className="bg-secondaryLightBackground p-3">
      <nav className="flex justify-around items-center">
        <div className="logo">
          <Link to="/">
            <img src={Logo} className="w-[150px] h-auto" alt="logo" />
          </Link>
        </div>
        <form>
          <div className="search flex items-center gap-4  bg-secondaryLightBackground w-[500px] h-[50px] justify-between p-4 rounded-3xl shadow border ">
            <input
              type="text"
              name="search"
              id=""
              className="w-[500px] focus:outline-none rounded-3xl p-2 bg-secondaryLightBackground"
              placeholder="Location, Position, Skills"
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              type="submit"
              onClick={applyChange}
              className="bg-primary text-white p-1 rounded-full flex justify-center items-center"
            >
              <AiOutlineSearch size={24} className="cursor-pointer" />
            </button>
          </div>
        </form>
        <div className="auth flex gap-4">
          {user ? (
            <div className="flex gap-4">
              {user.user.role == "employer" && (
                <Link to="/post">
                  <button className="border p-3 rounded-2xl w-[140px] bg-white">
                    Post Job
                  </button>
                </Link>
              )}

              <Link to="/dashboard">
                <button className="border p-3 rounded-2xl w-[140px] text-white bg-primary">
                  Dashboard
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/signup">
                <button className="border p-3 rounded-2xl w-[140px] bg-white">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="border p-3 rounded-2xl w-[140px] text-white bg-primary">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default JobHeader;
