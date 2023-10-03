import { ToastContainer, toast } from "react-toastify";
import axios from "../api/axios";
import { createContext, useState } from "react";
// import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [errors, setErrors] = useState({});

  const login = async ({ email, password }) => {
    await axios
      .post("/api/employer/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      })
      .catch((e) => {
        // setErrors(e.response.data);
        toast.error("Invalid Credential!", {
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
  };

  const getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  const login_employee = async ({ email, password }) => {
    await axios
      .post("/api/employee/login", {
        email,
        password,
      })
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem("user", JSON.stringify(res.data));
        }
      })
      .catch((e) => {
        setErrors(e.response.data);
        toast.error("Invalid Credential!", {
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
  };

  const logout = () => {
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ login, getUser, logout, login_employee }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  );
};

export default AuthContext;
