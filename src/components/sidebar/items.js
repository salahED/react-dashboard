import React, { useContext } from "react";
// import ScreenContext from "../../context/ScreenContext";
import ItemsDraw from "./itemsDraw";
const Items = () => {
  // const screenDispatch = useContext(ScreenContext);

  return (
    <div className="items">
      <ItemsDraw
        icon="x"
        text="dashboard"
        screen="Stats"
        // onClick={() =>
        //   screenDispatch({ type: "CHANGE_SCREEN", screen: "Stats" })
        // }
      />
      <ItemsDraw
        icon="x"
        text="gestion des roles"
        screen="Gestionrole"
        // onClick={() => {
        //   console.log("sssssssssssssssss");
        //   screenDispatch({ type: "CHANGE_SCREEN", screen: "Gestionrole" });
        // }}
      />
      <ItemsDraw
        icon="x"
        text="gestion des tables de ref"
        screen="Tableref"
        // onClick={() =>
        //   screenDispatch({ type: "CHANGE_SCREEN", screen: "Tableref" })
        // }
      />
      <ItemsDraw
        icon="x"
        text="tracabilité"
        screen="Tracabilite"
        // onClick={() =>
        //   screenDispatch({ type: "CHANGE_SCREEN", screen: "Tracabilite" })
        // }
      />
      <ItemsDraw
        icon="x"
        text="gestion des entreprises"
        screen="GestionEntreprise"
        // onClick={() =>
        //   screenDispatch({ type: "CHANGE_SCREEN", screen: "GestionEntreprise" })
        // }
      />
      <ItemsDraw
        icon="x"
        text="settings"
        screen="Settings"
        // onClick={() =>
        //   screenDispatch({ type: "CHANGE_SCREEN", screen: "Settings" })
        // }
      />
    </div>
  );
};

export default Items;
