import ChatContactsListItem from "../chatContactsListItem/ChatContactsListItem";
import { List } from "@mui/material";

function ChatContactsList({ contacts }) {
  return (
    <List
      sx={{
        border: "1px solid blue",
        maxWidth: { xs: 800, xl: 1000 },
        margin: "0 auto",
      }}
    >
      {contacts.map((contact, indx) => {
        return (
          <ChatContactsListItem key={indx} contact={{ ...contact, id: indx }} />
        );
      })}
    </List>
  );
}

export default ChatContactsList;
