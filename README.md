# InteractWithSchool

A plattform for easy and effective interaction between students,parents and teachers.

FEATURES

- Inbox for reciving messages:

  FRONTEND:

  - The user can toggle between its children to see messages for each child.
  - User will be noticed when there is a new message and if the message has been opened or not.
  - The user can interact and click on the message in the inbox to se its full content.

    BACKEND:

  - Get route:
    Find the user in the db and then find the inboxes for the user´s students. Then send back the inbox(es) to the client.

  - Delete route:
    Delete a inbox message and send back the new inbox to the client.

  -Put route:
  Update a inbox message to have the status of open and then send back the updated inbox to the client.

*

- Register absence/ sickness:

  FRONTEND:

  - From the list, select the student you wish to register absence for. You will be re-directed to a new page where you complete the registration.
  - You select the reason, sick or other reason and the date. If you select "other reason", you will be asked to fill in the reason.
  - See feedback from teacher, regarded the absence.
  - See previously registed absence for the student.

  BACKEND:
  -Get route:
  Find the student(s) in the db and send it/them back to the client.

  -Put route :
  To add absence to a student, find the student by id.
  The data object,sent by client, will be added a .\_id and a .status of "to be examined" before its saved to the db.
  Finally a boolean of true is sent to the client for verification on the client.

*

- TimeSchedule:

  FRONTEND:

  - TimeSchedule for when the student needs caring.
  - The user first selects the student. If there is several students, select the student from a carousel-slider.
  - The user can both register and see dates that has been registrated.
  - When registrating, dates that allready has been registrated is markt with one color and dates that is under registration is markt with another.

  BACKEND:
  -Get route:
  Find the student(s)-data and send it back to the client.

  -Get route "/timeSchedule/:id" :
  Find a particular student schedule.
  Before quering the student in the db, the id sent in the URL is validated so it belongs to a valid student.
  If not valid the client will be sent a res.status of 404.
  If valid the server will send the student-data back to the client.

  -Post route:
  To post dates to a students-schedule.
  Just like sending a get request to "/timeSchedule/:id", before adding data to the db, the student is validated to be a student of the signed in user.
