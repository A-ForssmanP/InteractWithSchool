import InboxName from "./inboxName/InboxName";
import InboxMessages from "./inboxMessages/InboxMessages";
import { Box } from "@mui/material";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Inbox() {
  // const [inbox, setInbox] = useState([
  //   {
  //     child: { name: "Barn 1", isSelected: true },
  //     messages: [
  //       {
  //         id: crypto.randomUUID(),
  //         from: "Skolan",
  //         title: "Veckobrev",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //         opened: false,
  //       },
  //       {
  //         id: crypto.randomUUID(),
  //         from: "Skolan",
  //         title: "Veckobrev",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //         opened: false,
  //       },
  //       {
  //         id: crypto.randomUUID(),
  //         from: "Förskolan",
  //         title: "Info",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //         opened: true,
  //       },
  //       {
  //         id: crypto.randomUUID(),
  //         from: "Rektor",
  //         title: "Insamling",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //         opened: true,
  //       },
  //     ],
  //   },
  //   {
  //     child: { name: "Barn 2", isSelected: false },
  //     messages: [
  //       {
  //         id: crypto.randomUUID(),
  //         from: "Fritids",
  //         title: "Info",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //         opened: true,
  //       },
  //       {
  //         id: crypto.randomUUID(),
  //         from: "Fritids",
  //         title: "Förtydligande Tidigare Utskick",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //         opened: true,
  //       },
  //     ],
  //   },
  //   {
  //     child: { name: "Barn 3", isSelected: false },
  //     messages: [
  //       {
  //         id: crypto.randomUUID(),
  //         from: "Rektor",
  //         title: "Kallelse",
  //         text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //         opened: false,
  //       },
  //     ],
  //   },
  // ]);
  const [inbox, setInbox] = useState([]);
  const studentIndx = useParams().child;
  console.log(inbox);
  // get data and set it to the inbox
  const getData = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_SERVER}/inbox`);
      setInbox(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  useState(() => {
    getData();
  }, []);

  //set the message status to be opened
  const messageOpened = (id) => {
    setInbox((currInbox) => {
      return currInbox.map((msg, indx) => {
        if (indx.toString() === studentIndx) {
          return {
            ...msg,
            messages: msg.messages.map((msg) => {
              if (msg.id === id) {
                return {
                  ...msg,
                  opened: true,
                };
              } else {
                return msg;
              }
            }),
          };
        } else {
          return msg;
        }
      });
    });
  };

  //Delete a message
  const deleteMessage = (id, index) => {
    setInbox((currInbox) => {
      return currInbox.map((msg, indx) => {
        if (indx === Number(index)) {
          return {
            ...msg,
            messages: msg.messages.filter((msg) => msg.id !== id),
          };
        } else {
          return msg;
        }
      });
    });
  };

  return (
    <Box>
      <InboxName inbox={inbox} studentIndx={studentIndx} />
      {/* <InboxMessages
        selectedInbox={inbox[studentIndx]}
        deleteMessage={deleteMessage}
        studentIndx={studentIndx}
        messageOpened={messageOpened}
      />  */}
    </Box>
  );
}

export default Inbox;
