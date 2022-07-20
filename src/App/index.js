import React from "react";
import "./App.css";
import { ChampionsProvider } from "../ChampionsContext";
import { AppUi } from "../App/AppUi";

function App() {

  return (
    <ChampionsProvider>
      <AppUi/>
    </ChampionsProvider>
  );
}

export default App;
