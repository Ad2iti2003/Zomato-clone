import React from 'react';
import phone from "../Image/phone.webp";
import healthy from "../Image/healthy.webp";
import veg from "../Image/veg.webp";
import party from "../Image/party.avif";
import gift from "../Image/gift.png";
import gourmet from "../Image/gourmet.png";
import offers from "../Image/offer.avif";
import train from "../Image/train.webp";
import collections from "../Image/collections.png";
import "../Components/About.css"

const featuresLeft = [
  { img: healthy, title: "Healthy" },
  { img: veg, title: "Veg Mode" },
  { img: party, title: "Plan a Party" },
  { img: gift, title: "Gift Cards" },
];

const featuresRight = [
  { img: gourmet, title: "Gourmet" },
  { img: offers, title: "Offers" },
  { img: train, title: "Food on Train" },
  { img: collections, title: "Collections" },
];

function About() {
  return (
    <div className="about-section" style={{ backgroundColor: "#fbfbfb", minHeight: "100vh", padding: "80px" }}>
      
      <h1 style={{
        color: "#ef4f5f",
        maxWidth: "500px",
        fontSize: "3rem",
        fontWeight: "bold",
        margin: "auto",
        textAlign: "center"
      }}>
        What’s waiting for you on the app?
      </h1>

      <p style={{
        maxWidth: "350px",
        margin: "20px auto",
        textAlign: "center",
        fontSize: "1.2rem"
      }}>
        Our app is packed with features that enable you to experience food delivery like never before
      </p>

      <section
        className="features"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "80px",
          marginTop: "60px",
        }}
      >
        {/* LEFT */}
        <div className="features-column" >
          {featuresLeft.map((item, index) => (
            <div className="feature-card" key={index}>
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {/* PHONE */}
        <div className="phone-container">
          <img src={phone} alt="Phone" width="260" />
        </div>

        {/* RIGHT */}
        <div className="features-column">
          {featuresRight.map((item, index) => (
            <div className="feature-card" key={index} >
              <img src={item.img} alt={item.title}/>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;


