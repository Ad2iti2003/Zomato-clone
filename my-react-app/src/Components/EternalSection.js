import React from "react";
import "../Components/EternalSection.css";

import zomato from "../Image/zomato.webp";
import blinkit from "../Image/blinkit.png";
import district from "../Image/district.png";
import hyperpure from "../Image/hyperpure.png";

const brands = [
  {
    img: zomato,
    title: "zomato",
    desc: "Get the app now to start ordering your favorite dishes!",
    bg: "pink",
  },
  {
    img: blinkit,
    title: "blinkit",
    desc: "Choose from 10,000+ products & get them delivered in minutes",
    bg: "yellow",
  },
  {
    img: district,
    title: "district",
    desc: "The best of events, movies, dining, and everything you love!",
    bg: "purple",
  },
  {
    img: hyperpure,
    title: "hyperpure",
    desc: "Offering complete supply chain solution for your restaurant",
    bg: "red",
  },
];

function EternalSection() {
  return (
    <div className="eternal-container">

      <h1 className="eternal-title">eternal</h1>

      <p className="eternal-subtitle">
        POWERING INDIA’S CHANGING LIFESTYLES
      </p>

      <div className="cards-container">
        {brands.map((item, index) => (
          <div key={index} className={`brand-card ${item.bg}`}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <span className="link">
              Check it out <span className="arrow">›</span>
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}

export default EternalSection;
