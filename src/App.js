import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PlayerDeck from "./components/PlayerDeckComponent";
import Banner from "./components/BannerComponent";

function App() {
  return (
    <div>
      <Banner />
      <PlayerDeck />
    </div>
  );
}

export default App;
