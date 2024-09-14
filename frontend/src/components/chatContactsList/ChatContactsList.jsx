import ChatContactsListItem from "../chatContactsListItem/ChatContactsListItem";
import { List } from "@mui/material";

function ChatContactsList() {
  return (
    <List sx={{ border: "1px solid blue", height: "100%", overflowY: "auto" }}>
      <ChatContactsListItem />
    </List>
  );
}

export default ChatContactsList;
