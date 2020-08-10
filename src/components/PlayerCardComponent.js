import React, { Component } from "react";
import "../App.css";
class PlayerCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <img
          className="player-card"
          src={`/img/${this.props.card}.jpg`}
          alt="CARD"
        ></img>
      </>
    );
  }
}

export default PlayerCard;
