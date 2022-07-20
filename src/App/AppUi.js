import React from "react";
import { AlertVictory } from "../Components/AlertVictory";
import { Board } from "../Components/Board";
import { Header } from "../Components/Header";


function AppUi() {
    
  return (
    <React.Fragment>
      <Header/>
      <Board/>
      <AlertVictory/>
    </React.Fragment>
  );
}

export { AppUi };
