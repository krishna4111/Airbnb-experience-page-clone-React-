import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import Contact from "./Components/Contact";
import img from "./images/image 12.png";

const array1 = [
  {
    image: "image 12.png",
    rating: 5.0,
    reviewCount: 6,
    country: "IND",
    title: "practice for swimming by best trainer",
    price: "Rs. 135",
    openSpots: 0,
  },

  {
    image: "wedding-photography 1.png",
    rating: 5.0,
    reviewCount: 30,
    country: "IND",
    title: "Learn wedding photography",
    price: "Rs. 124",
    openSpots: 1,
  },
  {
    image: "mountain-bike 1.png",
    rating: 5.0,
    reviewCount: 60,
    country: "IND",
    title: "group mountain bikes",
    price: "Rs. 50",
    openSpots: 1,
  },
];

export default function App() {
  const cardElements = array1.map((ele) => {
    return <Card {...ele} />;
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section>{cardElements}</section>
    </div>
  );
}
