import React, { useContext, useEffect, useState } from "react";
import SideNavbar from "./SideNavbar";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import MainEmployee from "./MainEmployee";
import SideNavbarEmployee from "./SidebarEmoployee";

const DashboardEmployee = () => {
  const [content, setContent] = useState(<MainEmployee />);
  const { getUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const auser = getUser();
    if (!auser) {
      navigate("/");
    }

    if (auser.user.role == "employer") {
      navigate("/dashboard");
    }
    setUser(getUser());
  }, []);

  if (user) {
    return (
      <div className="bg-[#FFFAF9]">
        <div className="flex bg-[#FFFAF9] justify-center w-[90%]">
          <SideNavbarEmployee setContent={setContent} user={user.user} />
          <div className="content bg-[#FFFAF9] w-[100%] rounded-s-[50px]">
            {content}
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardEmployee;
