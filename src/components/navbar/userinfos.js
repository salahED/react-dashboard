import React from "react";
import img from "../../assets/images/man.png";
const UserInfos = (props) => {
  return (
    <div className="userinfos">
      <p>username</p>
      <img src={img} className="userimage"></img>
      <div className="dropdown">
        <a href="#">status : Online</a>
        <a href="#">parametres</a>
        <a href="#">Deconnexion</a>
      </div>
    </div>
  );
};
export default UserInfos;
