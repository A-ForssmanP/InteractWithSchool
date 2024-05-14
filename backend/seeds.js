const mongoose = require("mongoose");
const User = require("./models/user")
const Student = require("./models/student");
const InboxMessage = require("./models/inboxMessage")

mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})


// create and insert user and student document
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

// create and point message to parent document
const createMessage = async (inbox, studentId) => {
  const inboxToInsert = inbox.map((msg) => {
    return {
      ...msg,
      studentId: studentId
    }
  });
  try {
 await InboxMessage.insertMany(inboxToInsert)   
  } catch(err) {
    throw new Error(err)
  }
  
}

//insert inboxMessages to dB
const insertInboxMessages = async () => {
  const inboxFirstStudent = [
 {from: "skolan",title:"Veckobrev", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:true},
 {from: "skolan",title:"Veckobrev", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:true},
 {from: "Förskolan",title:"Info", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false},
 {from: "Rektor",title:"Insamling", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false}
  ]
  const inboxSecondStudent = [
 {from: "Fritids",title:"Info", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false},
 {from: "Fritids",title:"Förtydligande tidigare utskick", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false},
  ]
  const inboxThirdStudent = [
 {from: "Rektor",title:"Kallelse", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false}
  ]

try {
    const firstStudent = await Student.findOne({firstName:"First"})
  const secondStudent = await Student.findOne({firstName:"Second"})
  const thirdStudent = await Student.findOne({firstName:"Third"})

  createMessage(inboxFirstStudent,firstStudent)
  createMessage(inboxSecondStudent,secondStudent)
  createMessage(inboxThirdStudent,thirdStudent)
} catch(err) {
  throw new Error(err)
}

}



// Insert data to dB
 const insertData = async () => {
  // await insertNewUserandStudent()
  await insertInboxMessages()
  console.log("Data inserted to DB!")
 }

 insertData()