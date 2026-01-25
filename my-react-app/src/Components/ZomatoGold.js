import React from "react";
import "../Components/ZomatoGold.css";

import coin from "../Image/coin.png";
import discount from "../Image/delivery.png";
import delivery from "../Image/discount.png";

function ZomatoGold() {
  return (
    <div className="gold-container">

      {/* Floating coins */}
      <img src={coin} className="coin coin-left" />
      <img src={coin} className="coin coin-right" />
      <img src={coin} className="coin coin-bottom" />

      <div className="gold-content">

        <h4 className="zomato">zomato</h4>

        <h1 className="gold-title">
          G0LD
        </h1>

        <p className="subtitle">
          India’s Top Savings <br />
          Program for Food Lovers
        </p>

        <div className="benefits-title">
          ⭐ GOLD BENEFITS ⭐
        </div>

        <div className="benefits">

          <div className="benefit-card">
            <img src={delivery} />
            <div>
              <h3>Free Delivery</h3>
              <p>At all restaurants within 7 km</p>
            </div>
          </div>

          <div className="benefit-card">
            <img src={discount} />
            <div>
              <h3>Up to 30% extra off</h3>
              <p>At 20,000+ partner restaurants</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default ZomatoGold;
