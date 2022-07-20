import React from "react";
import { championsContext } from "../../ChampionsContext";
import "./Header.css";

function Header(params) {
  const { points } = React.useContext(championsContext);
  return (
    <>
      <header className="container">
        <p className="Title">League of Cards</p>

        <p className="Score">Score: {points}</p>
      </header>
    </>
  );
}

export { Header };
