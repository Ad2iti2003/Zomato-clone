import React from 'react'
import phone from "../Image/phone qr.png"
import { Button } from '@mui/material';

function Last() {
  return (
    <div style={{display:"flex", margin: "100px", border: "4px solid #f7e1e3", backgroundColor:"#fefafa"}}>
      <div style={{width:"50%"}}>
        <h1 style={{fontSize:"2.5rem", marginTop:"150px", marginLeft:"130px",fontWeight:"bold"}}>Download the app now!</h1>
        <p style={{fontSize:"1.5rem", marginLeft:"130px", marginRight:"50px"}}>
            Experience seamless online ordering only on the Zomato app
        </p>
        <div style={{marginLeft:"130px",marginTop:"30px"}}>
            <div><Button sx={{ p: 0 }}>
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
</Button></div>
            
        </div>
      </div>
      <div style={{width:"50%"}}>
        <img src={phone} style={{width:"500px", height:"500px",marginTop:"40px"}}/>
      </div>
    </div>
  )
}

export default Last
