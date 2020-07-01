import React from "react";
import ItemsDraw from "./itemsDraw";
class Items extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }
  render() {
    return (
      <div className="items">
        <ItemsDraw icon="x" text="dashboard" />
        <ItemsDraw icon="x" text="gestion des roles" />
        <ItemsDraw icon="x" text="gestion des users" />
        <ItemsDraw icon="x" text="tracabilité" />
        <ItemsDraw icon="x" text="aaaaaaaaaaaaaaaaaa" />
        <ItemsDraw icon="x" text="settings" />
      </div>
    );
  }
}

export default Items;
