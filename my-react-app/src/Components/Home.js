import React, { useState } from "react";

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
        }}
      >
        <source src={videos[currentVideo]} type="video/mp4" />
      </video>

      {/* 📝 Text Overlay */}
      <div
  style={{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
    textAlign: "center",
    textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
  }}
>
  <h1 style={{ fontSize: "4rem", margin: "0", }}>zomato</h1>
  <h2 style={{ fontSize: "2.5rem", margin: "10px 0" }}>
    India’s #1 food delivery app
  </h2>
  <p style={{ fontSize: "1.5rem", margin: "10px 0" }}>
    Experience fast & easy online ordering
  </p>
  <p style={{ fontSize: "1.5rem", margin: "0" }}>
    on the Zomato app
  </p>
</div>


    </div>
  );
}

export default Home;








