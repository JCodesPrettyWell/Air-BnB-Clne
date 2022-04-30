import React from "react";
import ReactDOM from "react-dom";
import logo from "../images/airbnb.png";
import "../style.css";

export default function Navbar() {
  return (
    <nav>
      <img src={logo} className="nav--logo" />
    </nav>
  );
}
