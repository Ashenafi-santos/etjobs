import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import ProfileContent from "./ProfileContent";
import ProfileContentEmployee from "./ProfileContentEmployee";

const ProfileEmployee = () => {
  const { getUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, [!user]);

  if (user) {
    return <ProfileContentEmployee user={user.user} />;
  }
};

export default ProfileEmployee;
