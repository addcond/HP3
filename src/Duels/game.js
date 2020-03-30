import React from "react";
import store from "./store";
import Duel from "./duel";
import "./styles.css";

function Game() {

  return (
    <>
      <div className="Game">
          <Duel />
      </div>
    </>
  );
}

export default Game;
