import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { Link } from "react-router-dom";
import { Logo } from "../../assets/images";

const Header = () => {
  const { getUser } = useContext(AuthContext);
  const [sstate, setSstate] = useState("hidden");
  const [lstate, setLstate] = useState("hidden");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, [!user]);

  const toggel = () => {
    if (sstate === "hidden") {
      setSstate("flex");
    } else {
      setSstate("hidden");
    }
  };

  const ltoggel = () => {
    if (lstate === "hidden") {
      setLstate("flex");
    } else {
      setLstate("hidden");
    }
  };

  return (
    <div className="bg-secondaryLightBackground p-3">
      <nav className="flex justify-around items-center">
        <div className="logo">
          <Link to="/">
            <img src={Logo} className="w-[150px] h-auto" alt="logo" />
          </Link>
        </div>

        <div className="nav-list">
          <ul className="flex gap-7">
            <li>
              <Link to="/jobs">Browse Jobs</Link>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>About</li>
            <li>
              <Link to="/post">Post a Job</Link>
            </li>
          </ul>
        </div>
        <div className="auth flex gap-4">
          {user ? (
            <div className="flex gap-4">
              <Link to="/post">
                <button className="border p-3 rounded-2xl w-[140px] bg-white">
                  Post Job
                </button>
              </Link>
              <Link to="/dashboard">
                <button className="border p-3 rounded-2xl w-[140px] text-white bg-primary">
                  Dashboard
                </button>
              </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to="/signup" onMouseEnter={toggel} onMouseLeave={toggel}>
                <button className="border p-3 rounded-2xl w-[140px] bg-white">
                  Sign Up
                </button>
                <div
                  className={`flex flex-col gap-2 mt-3 ${sstate} absolute z-50`}
                >
                  <Link
                    to="/signup-e"
                    className="bg-white p-2 border rounded-xl"
                  >
                    Sign Up as employee
                  </Link>
                  <Link to="/signup" className="bg-white p-2 border rounded-xl">
                    Sign Up as employer
                  </Link>
                </div>
              </Link>
              <Link to="/login" onMouseEnter={ltoggel} onMouseLeave={ltoggel}>
                <button className="border p-3 rounded-2xl w-[140px] text-white bg-primary">
                  Login
                </button>

                <div
                  className={`flex flex-col gap-2 mt-3 ${lstate} absolute z-50`}
                >
                  <Link
                    to="/login-e"
                    className="bg-white p-2 border rounded-xl"
                  >
                    Login as employee
                  </Link>
                  <Link to="/login" className="bg-white p-2 border rounded-xl">
                    Login as employer
                  </Link>
                </div>
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
