import InboxName from "../inboxName/InboxName";
import InboxMessages from "../inboxMessages/InboxMessages";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

function Inbox() {
  const [inbox, setInbox] = useState([
    {
      child: { name: "Barn 1", isSelected: true },
      message: {
        from: "Skolan",
        title: "Veckobrev",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
        opened: false,
      },
    },
    {
      child: { name: "Barn 2", isSelected: false },
      message: {
        from: "Fritids",
        title: "Info",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
        opened: true,
      },
    },
    {
      child: { name: "Barn 3", isSelected: false },
      message: {
        from: "Rektor",
        title: "Kallelse",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
        opened: false,
      },
    },
  ]);

  const [selectedInbox, setSelectedInbox] = useState(inbox[0]);

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

  // The messages
  // const message = [
  //   {
  //     from: "Skolan",
  //     title: "Veckobrev",
  //     message:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //     opened: false,
  //   },
  //   {
  //     from: "ddanny",
  //     title: "info",
  //     message:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //     opened: true,
  //   },
  //   {
  //     from: "kaffe",
  //     title: "Förtydligande",
  //     message:
  //       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
  //     opened: false,
  //   },
  // ];

  // Function for toggle which child is selected
  const handleToggle = (name) => {
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
  return (
    <Box>
      <InboxName inbox={inbox} handleToggle={handleToggle} />
      <InboxMessages selectedInbox={selectedInbox} />
    </Box>
  );
}

export default Inbox;
