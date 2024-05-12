require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})

const port = process.env.SERVER_PORT
const corsOptions = {origin: process.env.VITE_SERVER, optionsSuccessStatus: 200}


app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Welcome to server!!')
  })

  app.get("/inbox", (req,res) => {
    res.send("fdfd")
  })

app.listen(port,()=>{
console.log(`SERVER IS UP AND RUNNING ON PORT ${port}!`)
})