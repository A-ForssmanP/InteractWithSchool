const mongoose = require("mongoose");
const User = require("./models/user")
const Student = require("./models/student");
const InboxMessage = require("./models/inboxMessage")

mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})



const insertNewUserandStudent = async () => {
  const students = [
    {firstName:"First",lastName:"Student"},
    {firstName:"Second",lastName:"Student"},
    {firstName:"Third",lastName:"Student"}
  ]

  try {
    const u = new User({firstName:"Demo", lastName:"User",password:"Kaffe"})
    await Student.insertMany(students)
    const stnts = await Student.find({})
    stnts.forEach((s,indx)=>{
      if(indx === 0 || indx === 2) {
        s.absence.isAbsence = false
      } else {
        s.absence.isAbsence = true
      }
        s.save()
    })
    u.students.push(...stnts)
    
        await u.save()
    } catch (err) {
        console.log(err)
    }
}

//insert inboxMessages to dB
const insertInboxMessages = async () => {
  const inboxStudentOne = [
 {from: "skolan",title:"Veckobrev", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?"},
 {from: "skolan",title:"Veckobrev", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?"},
 {from: "Förskolan",title:"Info", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?"},
 {from: "Rektor",title:"Insamling", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?"}
  ]
  const inboxStudentTwo = [
 {from: "Fritids",title:"Info", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?"},
 {from: "Fritids",title:"Förtydligande tidigare utskick", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?"},
 
  ]
  const inboxStudentThree = [
 {from: "Rektor",title:"Kallelse", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?"}
  ]
  const firstStudent = await Student.find({firstName:"First"})
  inboxStudentOne.forEach((msg)=>{
    const inboxMsg = new InboxMessage(msg)
    inboxMsg.studentId = firstStudent
    inboxMsg.save()
  })
}



// Insert data to dB
 const insertData = async () => {
  await insertNewUserandStudent()
  await insertInboxMessages()
 }

 insertData()