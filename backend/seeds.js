const mongoose = require("mongoose");
const User = require("./models/user")
const Student = require("./models/student");
const InboxMessage = require("./models/inboxMessage")
const Schedule = require("./models/schedule")

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

  const absenceSeeds = {
    firstStud: [{
      reason: 'Sjukdom',
      textReason: 'Hemma pga sjukdom',
      dates: { fromDate: 'Mon May 20 2024', toDate: 'Fri May 24 2024' },
      status: 'Granskas',
      _id: new mongoose.Types.ObjectId()
    },{
      reason: 'Sjukdom',
      textReason: 'Hemma pga sjukdom',
      dates: { fromDate: 'Web Jun 5 2024', toDate: 'Fri Jun 6 2024' },
      status: 'Godkänd',
      _id: new mongoose.Types.ObjectId()
    },{
      reason: 'Annan',
      textReason: 'Behöver vara ledig för besök hos tandläkaren.',
      dates: { fromDate: 'Tue Jun 25 2024', toDate: 'Tue Jun 25 2024' },
      status: 'Godkänd',
      _id: new mongoose.Types.ObjectId()
    },{
      reason: 'Annan',
      textReason: 'Resa utomlands',
      dates: { fromDate: 'Mon July 22 2024', toDate: 'Fri Aug 2 2024' },
      status: 'Godkänd',
      _id: new mongoose.Types.ObjectId()
    }
  ],
  secondStud: [{
    reason: 'Annan',
    textReason: 'Avslutning på träning som börjar tidigt.',
    dates: { fromDate: 'Tue Jun 13 2024', toDate: 'Tue Jun 13 2024' },
    status: 'Granskas',
    _id: new mongoose.Types.ObjectId()
  },{
    reason: 'Sjukdom',
    textReason: 'Hemma pga sjukdom',
    dates: { fromDate: 'Web Jun 5 2024', toDate: 'Fri Jun 6 2024' },
    status: 'Godkänd',
    _id: new mongoose.Types.ObjectId()
  }]

  }

  try {
    const u = new User({_id: "665341b1b835c5660d42c0fb" ,firstName:"Demo", lastName:"User",password:"Kaffe"})
    await Student.insertMany(students)
    const stnts = await Student.find({})
 stnts[0].absence.prevAbsences = absenceSeeds.firstStud
 stnts[0].save()
 stnts[1].absence.prevAbsences = absenceSeeds.secondStud
 stnts[1].save()
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


const insertSchedule = async () => {
  try {
    const students = await Student.find()
  students.forEach((student) => {

    //get caring type by random
    const getCaringType = () => {
      const caringEnum = ["Fritids", "Förskola"]
      const randomIndex = Math.floor(Math.random()*2)
      return caringEnum[randomIndex]
    }

    const caringType = getCaringType()
    const schedule = new Schedule({caring:caringType})
    student.schedule = schedule;
    schedule.save()
    student.save()
  })} catch(err) {
    throw new Error(err)
  }
  
 
}



// Insert data to dB
 const insertData = async () => {
  await insertNewUserandStudent()
  await insertInboxMessages()
  await insertSchedule()
  console.log("Data inserted to DB!")
 }

// delete absences
const deleteAbsences = async () => {
  const students = await Student.find({})
  students.forEach(s => {
    s.absence.prevAbsences = []
    s.save()
  })
}



// deleteAbsences()

const deleteAllCollections = async () => {
  const connection = mongoose.connection;
  try {
   await connection.collection("students").drop()
   await connection.collection("schedules").drop()
   await connection.collection("inboxmessages").drop()
    await connection.collection("users").drop()

    console.log("ALL COLLECTIONS DELETED!")

  } catch(err) {
    throw new Error(err)
  }
}

//insert Data to db
insertData()

// drop all collections 
// deleteAllCollections()