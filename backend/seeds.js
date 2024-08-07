const mongoose = require("mongoose");
const User = require("./models/user")
const Student = require("./models/student");
const InboxMessage = require("./models/inboxMessage")
const Schedule = require("./models/schedule")
const Note = require("./models/note")
const SchoolClass = require("./models/schoolClass")
const generateRandomName = require("./utils/generateRandomName")

const bcrypt = require("bcryptjs")

mongoose.connect('mongodb://127.0.0.1:27017/interactWithSchool').then(()=>{
  console.log("CONNECTED TO DB!")
}).catch((err)=>{
  throw new Error(err)
})


// create school class document
const createSchoolClass = async (className) => {
  //get random name for teacher
  const teacherName = generateRandomName(1,1)
  const teacher = {firstName:teacherName[0]}
  //create SchoolClass document
  const schoolClass = new SchoolClass({className:className,teacher:teacher})
  // create mock parents 
  const parentNames = generateRandomName(6,10)
  const mockParents = parentNames.map((name)=>{
    return {
      firstName:name,
      lastName:"MockParent"
    }
  })
  schoolClass.parents.push(...mockParents)
  schoolClass.save()
}

//insert school classes
const insertSchoolClasses = () => {
  createSchoolClass("1A")
  createSchoolClass("2C")
  createSchoolClass("5B")
}

// create and insert user and student document
const insertNewUserandStudent = async () => {
  // generate names for students by random
  const names = generateRandomName(6,6)
  const students = names.map((name)=>{
    return {
      firstName: name,
      lastName:"Student"
    }
  })
  // const students = [
  //   {firstName:"First",lastName:"Student"},
  //   {firstName:"Second",lastName:"Student"},
  //   {firstName:"Third",lastName:"Student"}
  // ]

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
     // hash the password
    const salt1 = await bcrypt.genSalt(10)
    const hashedPassword1 = await bcrypt.hash("demo1",salt1)
    const u1 = new User({_id: "665341b1b835c5660d42c0fb" ,firstName:"Demo1", lastName:"User",username:"Demo1",password:hashedPassword1})
     
    const salt2 = await bcrypt.genSalt(10)
    const hashedPassword2 = await bcrypt.hash("demo2",salt2)
    const u2 = new User({_id: "665341b1b835c5660d42c0ff" ,firstName:"Demo2", lastName:"User",username:"Demo2",password:hashedPassword2})
   
    await Student.insertMany(students)
    const stnts = await Student.find({})

    // seed student with absence and push to the right parent 
    stnts.forEach((stud,indx)=>{
      if(indx === 0 || indx === 3) {
        stud.absence.prevAbsences = absenceSeeds.firstStud
        stud.save()
        indx === 0 && u1.students.push(stud)
        indx === 3 && u2.students.push(stud)
      } else if( indx === 1 || indx === 4) {
        stud.absence.prevAbsences = absenceSeeds.secondStud
        stud.save()
        indx === 1 && u1.students.push(stud)
        indx === 4 && u2.students.push(stud)
      } else {
        indx === 2 && u1.students.push(stud)
        indx === 5 && u2.students.push(stud)
      }
    })

//     stnts[0].absence.prevAbsences = absenceSeeds.firstStud
//     stnts[1].absence.prevAbsences = absenceSeeds.secondStud

//  stnts[0].absence.prevAbsences = absenceSeeds.firstStud
//  stnts[0].save()
//  stnts[1].absence.prevAbsences = absenceSeeds.secondStud
//  stnts[1].save()
    // u1.students.push(...stnts)
    
      u1.save()
      u2.save()
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
  const inboxFirst = [
 {from: "skolan",title:"Veckobrev", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:true},
 {from: "skolan",title:"Veckobrev", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:true},
 {from: "Förskolan",title:"Info", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false},
 {from: "Rektor",title:"Insamling", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false}
  ]
  const inboxSecond = [
 {from: "Fritids",title:"Info", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false},
 {from: "Fritids",title:"Förtydligande tidigare utskick", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false},
  ]
  const inboxThird = [
 {from: "Rektor",title:"Kallelse", text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?", opened:false}
  ]

try {
  const students = await Student.find()

  students.forEach((student,indx) => {
    if(indx === 0 || indx === 3) {
      createMessage(inboxFirst,student)
    } else if( indx === 1 || indx === 4) {
      createMessage(inboxSecond,student)
    } else if(indx === 2 || indx === 5) {
      createMessage(inboxThird,student)
    }
  })
  // createMessage(inboxFirstStudent,students[0])
  // createMessage(inboxSecondStudent,students[1])
  // createMessage(inboxThirdStudent,students[2])

  //   const firstStudent = await Student.findOne({firstName:"First"})
  // const secondStudent = await Student.findOne({firstName:"Second"})
  // const thirdStudent = await Student.findOne({firstName:"Third"})

  // createMessage(inboxFirstStudent,firstStudent)
  // createMessage(inboxSecondStudent,secondStudent)
  // createMessage(inboxThirdStudent,thirdStudent)
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

// create and insert note-document to db
const insertNote = async () => {
  try {
    const user = await User.findById("665341b1b835c5660d42c0fb")
    const note = new Note({authorId:user,text:""})
    note.save()
  } catch(err) {
    throw new Error(err.message)
  }
}

const putStudentInAClass = async () => {
      //find all school classes
      let classes = await SchoolClass.find();
      //find all students 
      const students = await Student.find()
      // put student in a class by random
      students.forEach((student)=>{
        const randomNum = Math.floor(Math.random()*classes.length);
        student.schoolClass = classes[randomNum].id
        student.save()
        // remove selected school class from classes array to prevent duplication
        classes = classes.filter(sclass => sclass !== classes[randomNum] )
      })
}

// connect user to its childrens classes
const connectUserToClass = async () => {
  //find user and populate "students"
  const user = await User.findOne().populate("students")
  // for each students, push user to parents field in the students school class 
    user.students.forEach(async (student) => {
      //find student class
      const studentClass = await SchoolClass.findOne({_id:student.schoolClass})
      //push users firstName to parents array
      studentClass.parents.push({firstName:user.firstName,lastName:user.lastName})
      studentClass.save()
    })
}

// Insert data to dB
 const insertData = async () => {
  insertSchoolClasses()
  await insertNewUserandStudent()
  await insertInboxMessages()
  await insertSchedule()
  await insertNote()
  await putStudentInAClass()
  await connectUserToClass()
  console.log("Data inserted to DB!")
 }

 //insert Data to db
  insertData()

// delete absences
// const deleteAbsences = async () => {
//   const students = await Student.find({})
//   students.forEach(s => {
//     s.absence.prevAbsences = []
//     s.save()
//   })
// }

// deleteAbsences()

// const deleteAllCollections = async () => {
//   const connection = mongoose.connection;
//   try {
//     await connection.collection("students").drop()
//     await connection.collection("schedules").drop()
//     await connection.collection("inboxmessages").drop()
//     await connection.collection("users").drop()

//     console.log("ALL COLLECTIONS DELETED!")

//   } catch(err) {
//     throw new Error(err)
//   }
// }



// drop all collections 
// deleteAllCollections()