import React from "react";
import Logo from "./logo";
import Items from "./items";
import "../../assets/css/components/sidebar.css";
const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <Logo />
      <Items />
    </div>
  );
};
export default Sidebar;
