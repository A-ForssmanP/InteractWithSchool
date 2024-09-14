import ChatContactsListItem from "../chatContactsListItem/ChatContactsListItem";
import { List } from "@mui/material";

const contacts = new Array(24).fill({
  firstName: "Foo",
  lastName: "Bar",
});

function ChatContactsList() {
  return (
    <List sx={{ border: "1px solid blue" }}>
      {contacts.map((contact, indx) => {
        return (
          <ChatContactsListItem key={indx} contact={contact} index={indx} />
        );
      })}
    </List>
  );
}

export default ChatContactsList;
