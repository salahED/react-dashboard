import React, { useReducer } from "react";
import Title from "./title";
import ScreenContext from "../../context/ScreenContext";
import ScreensReducer from "../../reducers/ScreensReducer";
import "../../assets/css/components/dashboard.css";
import Main from "./MainPage";
const Dashboard = () => {
  const initialState = { screen: "Stats" };
  const [screen, screenDispatch] = useReducer(ScreensReducer, initialState);

  return (
    // <ScreenContext.Provider value={{ screen, screenDispatch }}>
    <div className="dashboard">
      <Title />
      <Main />
    </div>
    // </ScreenContext.Provider>
  );
};
export default Dashboard;
