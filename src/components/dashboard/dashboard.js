import React from "react";
import Title from "./title";
import "../../assets/css/components/dashboard.css";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="dashboard">
        <Title />
      </div>
    );
  }
}
export default Dashboard;
