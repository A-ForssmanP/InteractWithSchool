require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose');
const User = require("./models/user")
const Student = require("./models/student")
const InboxMessage = require("./models/inboxMessage")
const Schedule = require("./models/schedule")


mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})

const port = process.env.SERVER_PORT
const corsOptions = {origin: process.env.VITE_SERVER, optionsSuccessStatus: 200}
const userId  = process.env.USER_ID

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors(corsOptions))

app.get('/', (req, res) => {
    res.send('Welcome to server!!')
  })

  app.get("/inbox", async (req,res) => {
    try {
    const user = await User.findById(userId).populate("students","firstName")
    const inbox = []
    for(let student of user.students) {
      const messages = await InboxMessage.find({studentId: student})
      inbox.push({name: student.firstName, messages: messages})
    }
    res.send(inbox)
  } catch(err) {
    throw new Error(err)
  }
  })

  app.delete("/inbox/:id/delete",async (req,res) => {
    try {
    const {id} = req.params
    const deletedMessage = await InboxMessage.findByIdAndDelete(id)
    const student = deletedMessage.studentId.toString()
    const messages = await InboxMessage.find({studentId: student})
    res.send(messages)
    } catch (err) {
      throw new Error(err)
    }
  })

  app.put("/inbox/:id/update",async (req,res) => {
    try {
          const {id} = req.params
   const updatedMessage = await InboxMessage.findByIdAndUpdate(id,{opened:true})
   const student = updatedMessage.studentId.toString()
    const messages = await InboxMessage.find({studentId: student})
    res.send(messages)
    } catch(err) {
      throw new Error(err)
    }

  })

  app.get("/absence", async(req,res) => {
    try {
      const user = await User.findById(userId).populate("students");
      res.send(user.students)
    } catch(err) {
      throw new Error(err)
    }
  })

  app.put("/absence/:id/register", async (req,res) => {
    try {
      const {data} = req.body
      const {id} = req.params
      const student = await Student.findById(id)
      data._id = new mongoose.Types.ObjectId
      data.status= "Granskas"
      student.absence.prevAbsences.push(data)
      student.save()
      res.send(true)
    } catch(err) {
      res.send(err)
      throw new Error(err)
      
    }
  })

  app.post("/timeSchedule/:id", async (req,res) => {
    try {
      const {data} = req.body;
    const {id} = req.params
    const populated = await Student.findById(id).populate("schedule")
    const studentSchema = populated.schedule
    studentSchema.scheduledDays.push(...data)
    studentSchema.save()
    res.send("GOT DATA")
    } catch (err) {
      throw new Error(err)
    }
  })

app.listen(port,()=>{
console.log(`SERVER IS UP AND RUNNING ON PORT ${port}!`)
})