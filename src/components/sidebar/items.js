import React, { useContext } from "react";
import ScreenContext from "../../context/ScreenContext";
import ItemsDraw from "./itemsDraw";
const Items = () => {
  const screenDispatch = useContext(ScreenContext);

  return (
    <div className="items">
      <ItemsDraw
        icon="x"
        text="dashboard"
        onClick={() =>
          screenDispatch({ type: "CHANGE_SCREEN", screen: "Stats" })
        }
      />
      <ItemsDraw
        icon="x"
        text="gestion des roles"
        onClick={() =>
          screenDispatch({ type: "CHANGE_SCREEN", screen: "Gestionrole" })
        }
      />
      <ItemsDraw
        icon="x"
        text="gestion des tables de ref"
        onClick={() =>
          screenDispatch({ type: "CHANGE_SCREEN", screen: "Tableref" })
        }
      />
      <ItemsDraw
        icon="x"
        text="tracabilité"
        onClick={() =>
          screenDispatch({ type: "CHANGE_SCREEN", screen: "Tracabilite" })
        }
      />
      <ItemsDraw
        icon="x"
        text="gestion des entreprises"
        onClick={() =>
          screenDispatch({ type: "CHANGE_SCREEN", screen: "GestionEntreprise" })
        }
      />
      <ItemsDraw
        icon="x"
        text="settings"
        onClick={() =>
          screenDispatch({ type: "CHANGE_SCREEN", screen: "Settings" })
        }
      />
    </div>
  );
};

export default Items;
