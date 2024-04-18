import InboxName from "../inboxName/InboxName";
import InboxMessages from "../inboxMessages/InboxMessages";
import { Box } from "@mui/material";

function Inbox() {
  const name = ["Tea", "Meja", "Melwin"];
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
  return (
    <Box>
      <InboxName name={name} />
      <InboxMessages message={message} />
    </Box>
  );
}

export default Inbox;
