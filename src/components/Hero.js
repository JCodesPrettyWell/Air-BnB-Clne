import React from "react";
import ReactDOM from "react-dom";
import grid from "../images/Group77.png";
import "../style.css";

export default function Hero() {
  return (
    <main className="main">
      <img className="grid" src={grid} alt="grid"></img>
      <h1 className="heading">Online Experiences</h1>
      <h3>
        Join unique interactive activities led by one-of-a-king hosts-all
        without leaving home.
      </h3>
    </main>
  );
}
