import React, { Component } from "react";
import PlayerCard from "./PlayerCardComponent";
import AskCards from "./AskCardsComponent";
import "../App.css";
class PlayerDeck extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cards: ["C2", "8D", "8H"],
    };
  }

  render() {
    return (
      <>
        <div className="player-deck">
          <AskCards cards={this.state.cards} />
          <div className="myCards">
            <PlayerCard card="2C" />
            <PlayerCard card="10H" />
            <PlayerCard card="3C" />
          </div>
        </div>
      </>
    );
  }
}

export default PlayerDeck;
