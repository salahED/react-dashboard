import React, { useContext } from "react";
import ScreenContext from "../../context/ScreenContext";
import {
  GestionEntreprise,
  Gestionrole,
  Settings,
  Stats,
  Tableref,
  Tracabilite,
} from "../pages";
const Main = () => {
  const { screen } = useContext(ScreenContext);
  switch (screen.screen) {
    case "GestionEntreprise":
      console.log("gest");
      return <GestionEntreprise />;
    case "Gestionrole":
      return <Gestionrole />;
    case "Settings":
      return <Settings />;
    case "Stats":
      return <Stats />;
    case "Tableref":
      return <Tableref />;
    case "Tracabilite":
      return <Tracabilite />;
    default:
      return <Stats />;
  }
};

export default Main;
