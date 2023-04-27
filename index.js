//import dotenv
//config() loads .env file contents in to process.env
require("dotenv").config()
//import express in index.js
const express=require("express")
//import cors in index.js
const cors=require("cors")
//creating server application using express
const server=express()

//import connection.js
require('./db/connection')
//import router
const router=require('./routes/router')
//use router in server
server.use(router)

//using cors specify the origin to server that should share data
server.use(cors())
//use json parser in server application
server.use(express.json())
//create port to listen to your server app
const PORT=process.env.PORT||3000
//api test
server.get('/',(req,res)=>{
    res.status(200).json(" server started")
})
//run/listen server app in the specified port
server.listen(PORT,()=>{
    console.log(`server started at ${PORT}`);
})
