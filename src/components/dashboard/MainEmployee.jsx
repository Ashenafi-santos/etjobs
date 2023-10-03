import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import MainContentEmployee from "./MainContentEmployee";

const MainEmployee = () => {
  const { getUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, [!user]);

  if (user) {
    return <MainContentEmployee user={user.user} />;
  }
};

export default MainEmployee;
