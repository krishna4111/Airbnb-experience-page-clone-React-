import React from "react";
import star from "../images/Star 1.png";
export default function Card(props) {
  console.log(props);
  const { image, rating, reviewCount, country, title, price, openSpots } =
    props;
  return (
    <div className="card--overall">
      <div className="card">
        {openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
        <img className="card--image" src={require(`../images/${image}`)}></img>
        <div className="card--status">
          <img className="card--star" src={star}></img>
          <span>{rating}</span>
          <span className="gray">({reviewCount}) . </span>
          <span className="gray">{country}</span>
        </div>
        <p className="card--title">{title}</p>
        <p className="card--price">
          <b>From {price} </b>/ person
        </p>
      </div>
    </div>
  );
}
