import React from "react";
import heroImage from "../images/Group 77.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--image" src={heroImage}></img>
      <h1 className="hero--title">Online Experience</h1>
      <p className="hero--para">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
