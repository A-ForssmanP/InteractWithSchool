require('dotenv').config()
const express = require("express")
const app = express()

const port = process.env.SERVER_PORT



app.get('/', (req, res) => {
    res.send('Welcome to server!!')
  })

app.listen(port,()=>{
console.log(`SERVER IS UP AND RUNNING ON PORT ${port}!`)
})