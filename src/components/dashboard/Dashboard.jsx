import React, { useContext, useEffect, useState } from "react";
import SideNavbar from "./SideNavbar";
import Main from "./Main";
import Profile from "./Profile";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const Dashboard = () => {
  const [content, setContent] = useState(<Main />);
  const { getUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const auser = getUser();

    if (!auser) {
      navigate("/login");
    }

    if (auser.user.role == "employee") {
      navigate("/dashboard-e");
    }

    setUser(getUser());
  }, []);

  if (user) {
    return (
      <>
        <div className="flex bg-primaryLightBackground">
          <SideNavbar setContent={setContent} user={user.user} />
          <div className="content bg-primaryLightBackground w-[100%] rounded-s-[50px] border-s border-[#707070]">
            {content}
          </div>
        </div>
      </>
    );
  }
};

export default Dashboard;
