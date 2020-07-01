import React from "react";
import Dashboard from "../components/dashboard/dashboard";
import Sidebar from "../components/sidebar/sidebar";
import Navbar from "../components/navbar/navbar";
import "../assets/css/maincss.css";
function App() {
  return (
    <div className="container">
      <Sidebar />
      <div className="content">
        <Navbar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
