const { configDotenv } = require('dotenv');
const express=require('express');
require('dotenv').config()
const PORT=process.env.PORT
const app=express()
app.get('/',(req,res)=>{
    res.send("hello")
})
app.get('/name',(req,res)=>{
    res.send("Devashish")
})
app.get('work',(req,res)=>{
    res.send("Emgineer")
})
app.listen(PORT,()=>{
    console.log("successfull");
})
