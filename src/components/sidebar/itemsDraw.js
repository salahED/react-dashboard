import React, { useContext } from "react";
import ScreenContext from "../../context/ScreenContext";

const handleClick = (screenDispatch) => {
  screenDispatch({ type: "CHANGE_SCREEN", screen: "Stats" });
  console.log(" here i'm ", screenDispatch);
};
const ItemsDraw = (props) => {
  const screenDispatch = useContext(ScreenContext);
  return (
    <button
      onClick={
        // handleClick(screenDispatch)
        () => screenDispatch({ type: "CHANGE_SCREEN", screen: "Stats" })
      }
    >
      {props.text}
    </button>
  );
};

export default ItemsDraw;
