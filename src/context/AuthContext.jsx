import axios from "../api/axios";
// import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { createContext, useState } from "react";
// import jwtDecode from "jwt-decode";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async ({ username, password }) => {
    const res = await axios.post("/api/auth/login", {
      email: username,
      password,
    });
    console.log(res.data.user);
    setUser(res.data.user);
  };

  return (
    <AuthContext.Provider value={{ login, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
