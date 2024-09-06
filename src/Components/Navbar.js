import React from "react";
import airbnbLogo from "../images/airbnb 1.png";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav--logo" src={airbnbLogo}></img>
    </nav>
  );
}
