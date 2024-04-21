import InboxName from "../inboxName/InboxName";
import InboxMessages from "../inboxMessages/InboxMessages";
import { Box } from "@mui/material";
import { useState } from "react";

function Inbox() {
  //object with the child/childrens name and if the child is selected
  const [child, setChild] = useState([
    { name: "Tea", isSelected: true },
    { name: "Meja", isSelected: false },
    { name: "Melwin", isSelected: false },
  ]);

  // The messages
  const message = [
    {
      from: "Skolan",
      title: "Veckobrev",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
      opened: false,
    },
    {
      from: "ddanny",
      title: "info",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
      opened: true,
    },
    {
      from: "kaffe",
      title: "Förtydligande",
      message:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil deleniti nostrum doloremque, ipsum eum, dolores quaerat quasi ea modi sunt voluptatum, est consectetur nisi placeat! Perspiciatis, veniam excepturi. Nemo, vitae?",
      opened: false,
    },
  ];
  // Function for toggle which child is selected
  const handleToggle = (name) => {
    setChild((currChild) => {
      return currChild.map((c) => {
        if (c.name === name) {
          return {
            ...c,
            isSelected: true,
          };
        } else {
          return {
            ...c,
            isSelected: false,
          };
        }
      });
    });
  };
  return (
    <Box>
      <InboxName child={child} handleToggle={handleToggle} />
      <InboxMessages message={message} />
    </Box>
  );
}

export default Inbox;
