import React, { useReducer } from "react";
import ScreenContext from "../context/ScreenContext.js";
import ScreensReducer from "../reducers/ScreensReducer";
import Dashboard from "../components/dashboard/dashboard";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import "../assets/css/maincss.css";
const App = () => {
  const initialState = { screen: "Stats" };
  const [screen, screenDispatch] = useReducer(ScreensReducer, initialState);
  return (
    <div className="container">
      <Sidebar />
      <ScreenContext.Provider value={{ screen, screenDispatch }}>
        <div className="content">
          <Navbar />
          <Dashboard />
        </div>
      </ScreenContext.Provider>
    </div>
  );
};
export default App;
