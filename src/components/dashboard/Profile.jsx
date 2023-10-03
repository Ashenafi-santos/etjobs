import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/AuthContext";
import ProfileContent from "./ProfileContent";

const Profile = () => {
  const { getUser } = useContext(AuthContext);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, [!user]);

  if (user) {
    return <ProfileContent user={user.user} />;
  }
};

export default Profile;
