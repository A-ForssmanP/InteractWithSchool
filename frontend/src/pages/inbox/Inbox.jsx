import InboxName from "./inboxName/InboxName";
import InboxMessages from "./inboxMessages/InboxMessages";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  //handle whos messages to render
  const handleInboxRender = () => {
    setSelectedInbox(() => {
      const selected = inbox.filter((msg) => msg.child.isSelected === true);
      return selected[0];
    });
  };

  useEffect(() => {
    handleInboxRender();
  }, [inbox]);

  // Function for toggle which child is selected
  const handleToggle = (name, index) => {
    navigate(`/inbox/${index}`);
    setInbox((currInbox) => {
      return currInbox.map((msg) => {
        if (msg.child.name === name) {
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
  const deleteMessage = (id) => {
    setInbox((currInbox) => {
      return currInbox.map((msg) => {
        if (msg.child.isSelected) {
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
      <InboxName inbox={inbox} handleToggle={handleToggle} />
      <InboxMessages
        selectedInbox={selectedInbox}
        deleteMessage={deleteMessage}
        setInbox={handleToggle}
      />
    </Box>
  );
}

export default Inbox;
