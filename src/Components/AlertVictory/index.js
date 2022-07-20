import React from "react";
import { championsContext } from "../../ChampionsContext";
import "./AlertVictory.css" 

function AlertVictory(params) {
  const { victory } = React.useContext(championsContext);

function onClick() {
    window.location.reload()
}

  if (victory) {
    return (
      <div className="ChangeAltert-bg">
        <div className="ChangeAlert-container">
          <p className="text-alert-victory">Victory</p>
          <button
            className="victory-button "
            onClick={() => onClick(false)}
          >
            Jugar de Nuevo
          </button>
        </div>
      </div>
    );
  }
}

export{AlertVictory}
