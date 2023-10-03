import React, { useContext, useEffect, useState } from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import axios from "../../api/axios";
import MainContent from "./MainContent";

const Main = () => {
  const { getUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, [!user]);

  if (user) {
    return <MainContent user={user.user} />;
  }
};

export default Main;
