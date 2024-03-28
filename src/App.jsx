import React from "react";
import "./App.css";
import PokemonGame from "./PokemonGame/PokemonGame";
import StartGameButton from "./StartGameButton/StartGameButton";

const App = () => {
  function startGame() {
    window.location.reload();
  }
  return (
    <>
      <h1 className="main-title">Pokemon Go Card Game</h1>
      <PokemonGame />
      <StartGameButton onClick={startGame} buttonTitle={"Start Game"} />
    </>
  );
};

export default App;