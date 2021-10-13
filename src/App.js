import React from "react";
import Homepage from "../src/Components/Homepage";
import Roadmap from "./Components/Roadmap";
import CardContext from "./context/card-context";
import cardData from '../src/context/cardData.json';

function App() {
  return (
    <>
      <CardContext.Provider value={cardData}>
        <Roadmap />
      </CardContext.Provider>
    </>
  );
}

export default App;
