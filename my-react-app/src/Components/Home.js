import React, { useState } from "react";
import { Button } from "@mui/material";
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const videos = [
  "/video.mp4",
  "/video2.mp4",
  "/video3.mp4",
  "/video4.mp4",
  "/video5.mp4",
];

function Home() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      
      {/* 🎥 Video */}
      <video
        key={currentVideo}
        
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.9,
          background: "black",
        }}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* 📝 Text Overlay */}
      <div
  style={{
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
  }}
>
  <h1 style={{ fontSize: "4rem", margin: "0", fontFamily:"serif", fontWeight:"bold"}}>zomato</h1>
  <h2 style={{ fontSize: "3rem" , fontWeight:"bold"}}>
    India’s #1
  </h2>
  <h2 style={{ fontSize: "3rem", fontWeight:"bold"}}>
    food delivery app
    
  </h2>
  <p style={{ fontSize: "1.5rem", margin: "10px 0" , fontWeight:"bold"}}>
    Experience fast & easy online ordering
  </p>
  <p style={{ fontSize: "1.5rem", margin: "0" , fontWeight:"bold"}}>
    on the Zomato app
  </p>
  <div style={{ marginTop: "20px", display: "flex", gap: "15px", justifyContent: "center" }}>
          <Button sx={{ p: 0 }}>
  <a
    href="https://play.google.com/store/apps/dev?id=7812834815367511165&hl=en_IN&pli=1&source_caller=ui&shortlink=iwz6g6kg&c=zomato_web_hp_android&pid=zomato_web_hp_android&deep_link_value=zomato://home&af_xp=social&af_force_deeplink=true"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      transition: "transform 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
    }}
  >
    <img
      src="https://financialfragrance.com/wp-content/uploads/2025/02/Google-Play-Download-Link-optimized.webp"
      alt="Get it on Google Play"
      style={{
        height: "60px",
        width: "180px",
        border: "2px solid white",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    />
  </a>
</Button>

<Button sx={{ p: 0 }}>
  <a
    href="https://apps.apple.com/in/app/zomato-food-delivery-dining/id434613896"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      transition: "transform 0.3s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0) scale(1)";
    }}
  >
    <img
      src="https://images.squarespace-cdn.com/content/v1/623c623b8dd1ae4ec873e13a/53eb5177-7a16-4a13-b9b6-2e36cbf8f855/App+Store.png"
      alt="Download on the App Store"
      style={{
        height: "60px",
        width: "180px",
        border: "2px solid white",
        borderRadius: "16px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
      }}
    />
  </a>
</Button>
        </div>

        <button style={{color: "white", marginTop: "30px", fontWeight: "bold", animation: "moveUpDown 1.5s ease-in-out infinite",}}>
          Scroll down <KeyboardDoubleArrowDownIcon/>

        </button>

</div>

<style>
{`
  @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(6px);
    }
    100% {
      transform: translateY(0);
    }
  }
`}
</style>

    </div>
  );
}

export default Home;








