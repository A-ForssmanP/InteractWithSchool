import InboxName from "../inboxName/InboxName";
import InboxMessages from "../inboxMessages/InboxMessages";
import { Box } from "@mui/material";

function Inbox() {
  const name = ["Tea", "Meja", "Melwin"];
  const message = ["veckoBrev", "info", "Förtydligande"];
  return (
    <Box>
      <InboxName name={name} />
      <InboxMessages message={message} />
    </Box>
  );
}

export default Inbox;
