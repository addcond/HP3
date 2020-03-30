import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

function Main() {
  return (
    <>
      <div className="grid">
        <Link to="/characters" className="character">
          <div className="container">
            <img
              className="main-image"
              src="https://i.imgur.com/8nvYkNo.jpg"
              alt="Characters"
            />
            <div className="info">Characters</div>
          </div>
        </Link>
        <Link to="/houses" className="house">
          <div className="container">
            <img
              className="main-image"
              src="https://i.imgur.com/Dm2m9wW.jpg"
              alt="Houses"
            />
            <div className="info">Houses</div>
          </div>
        </Link>
        <Link to="/spells" className="spell">
          <div className="container">
            <img
              className="main-image"
              src="https://i.imgur.com/AH51ZKA.jpg"
              alt="Spells"
            />
            <div className="info">Spells</div>
          </div>
        </Link>
        <Link to="/hat" className="sorting">
          <div className="container">
            <img
              className="main-image"
              src="https://i.imgur.com/RNDfa55.jpg"
              alt="hat"
            />
            <div className="info">Sorting Hat</div>
          </div>
        </Link>
        <Link to="/duel" className="duel">
          <div className="container">
            <img
              className="main-image"
              src="https://www.geek.com/wp-content/uploads/2010/11/Harry_Potter_Infrared_Battling_Wand-560-x-455.jpg"
              alt="duel"
            />
            <div className="info">Duel</div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Main;
