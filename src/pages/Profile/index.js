import React, { useEffect } from "react";
import Inventory from "./Inventory/index";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Button, message } from "antd";

const Profile = () => {
  const navigate = useNavigate();
  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        message.success("Logout Successful");
        navigate("/login");
        localStorage.removeItem("user");
      })
      .catch((error) => {
        message.error(error.message);
      });
  };
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <div className="w-screen text-right"><Button type="primary" danger onClick={() => logout()}>Logout</Button></div>
      
      <Inventory />
    </div>
  );
};

export default Profile;
