const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.send("beckend run successfully");
})

app.listen(5000,()=>{
    console.log("Server run in port 5000");
})