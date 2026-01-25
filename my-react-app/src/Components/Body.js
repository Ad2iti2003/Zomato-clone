import React from "react";
import "./Body.css";

import burger from "../Image/buger.png";
import pastry from "../Image/pastry.jpg";
import pizza from "../Image/pizza.webp";

function Body() {
  return (
    
    <section className="body">
      {/* Floating Images */}
      <img src={burger} alt="Burger" className="food burger" />
      <img src={pizza} alt="Pizza" className="food pizza" />
      <img src={pastry} alt="pastry" className="food momos" />

      {/* Center Content */}
      <div className="body-content">
        <h1>
          Better food for <br /> more people
        </h1>
        <p>
          For over a decade, we’ve enabled our customers to discover new
          tastes, delivered right to their doorstep
        </p>
      </div>

      {/* Stats Card */}
      <div className="stats">
        <div className="stat">
          <h3>3,00,000+</h3>
          <span>restaurants</span>
        </div>
        <div className="stat">
          <h3>800+</h3>
          <span>cities</span>
        </div>
        <div className="stat">
          <h3>3 billion+</h3>
          <span>orders delivered</span>
        </div>
      </div>
    </section>
  
  );
}

export default Body;





