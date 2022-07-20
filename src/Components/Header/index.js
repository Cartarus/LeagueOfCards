import React from "react";
import { championsContext } from "../../ChampionsContext";
import "./Header.css";

function Header(params) {
  const { points } = React.useContext(championsContext);
  return (
    <>
      <header className="container">
        <p className="Title">Juego de Cartas</p>

        <p className="Score">Puntuacion: {points}</p>
      </header>
    </>
  );
}

export { Header };
