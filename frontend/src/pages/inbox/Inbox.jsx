import InboxName from "./inboxName/InboxName";
import InboxMessages from "./inboxMessages/InboxMessages";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Inbox() {
  const [inbox, setInbox] = useState([
    {
      child: { name: "Barn 1", isSelected: true },
      messages: [
        {
          id: crypto.randomUUID(),
          from: "Skolan",
          title: "Veckobrev",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
          opened: false,
        },
        {
          id: crypto.randomUUID(),
          from: "Skolan",
          title: "Veckobrev",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
          opened: false,
        },
        {
          id: crypto.randomUUID(),
          from: "Förskolan",
          title: "Info",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
          opened: true,
        },
        {
          id: crypto.randomUUID(),
          from: "Rektor",
          title: "Insamling",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
          opened: true,
        },
      ],
    },
    {
      child: { name: "Barn 2", isSelected: false },
      messages: [
        {
          id: crypto.randomUUID(),
          from: "Fritids",
          title: "Info",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
          opened: true,
        },
        {
          id: crypto.randomUUID(),
          from: "Fritids",
          title: "Förtydligande Tidigare Utskick",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
          opened: true,
        },
      ],
    },
    {
      child: { name: "Barn 3", isSelected: false },
      messages: [
        {
          id: crypto.randomUUID(),
          from: "Rektor",
          title: "Kallelse",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
          opened: false,
        },
      ],
    },
  ]);

  const [selectedInbox, setSelectedInbox] = useState(inbox[0]);
  const childIndx = useParams().child;

  useEffect(() => {
    setInbox((currInbox) => {
      return currInbox.map((msg) => {
        if (msg.child.name === currInbox[childIndx].child.name) {
          return {
            ...msg,
            child: { ...msg.child, isSelected: true },
          };
        } else {
          return {
            ...msg,
            child: { ...msg.child, isSelected: false },
          };
        }
      });
    });
    handleInboxRender();
  }, [childIndx]);

  //handle whos messages to render
  const handleInboxRender = () => {
    setSelectedInbox(inbox[childIndx]);
  };

  //Function for deleting message
  // const deleteMessage = (id) => {
  //   setSelectedInbox((currSelected) => {
  //     return {
  //       ...currSelected,
  //       messages: currSelected.messages.filter((msg) => msg.id !== id),
  //     };
  //   });
  // };
  const deleteMessage = (id, index) => {
    const newInbox = setInbox((currInbox) => {
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

    console.log(newInbox);
    // setSelectedInbox(newInbox[childIndx]);
  };

  return (
    <Box>
      <InboxName inbox={inbox} childIndx={childIndx} />
      <InboxMessages
        selectedInbox={selectedInbox}
        deleteMessage={deleteMessage}
        // setInbox={handleToggle}
        childIndx={childIndx}
      />
    </Box>
  );
}

export default Inbox;
