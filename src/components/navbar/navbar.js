import React from "react";
import Notifications from "./notification";
import UserInfos from "./userinfos";
import "../../assets/css/components/navbar.css";
const Navbar = (props) => {
  return (
    <div className="navbar">
      <Notifications />
      <UserInfos />
    </div>
  );
};
export default Navbar;
