const express = require("express");
const app = express();
const path = require("path");
app.get("/login2",(req,res)=>{
    res.sendFile(path.join(__dirname,"login2.html"));
})
app.get("/page",(req,res)=>{
    res.sendFile(path.join(__dirname,"page.html"));
})
app.get("/blog3",(req,res)=>{
    res.sendFile(path.join(__dirname,"blog3.html"));
})
app.listen(3973  ,  ()=>{
    console.log("server running");
})

app.get("/second",(req,res)=>{
    res.send("Hello")
})