import React, { Component } from "react";
import "../App.css";

function RenderAskCards({ cards }) {
  if (cards != null) {
    const cards_all = cards.map((card) => {
      return (
        <img className="player-card" src={`/img/${card}.jpg`} alt="CARD"></img>
      );
    });

    return (
      <div>
        <h4>
          <strong>Comments</strong>
        </h4>
        <ul className="list-unstyled">{cards_all}</ul>
      </div>
    );
  } else {
    return <div></div>;
  }
}

function AskCards(props) {
  return (
    <>
      <RenderAskCards cards={props.cards}></RenderAskCards>
    </>
  );
}

export default AskCards;
