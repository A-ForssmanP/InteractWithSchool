import ChatContactsListItem from "../chatContactsListItem/ChatContactsListItem";
import { List } from "@mui/material";

const contacts = new Array(24).fill({
  firstName: "Foo",
  lastName: "Bar",
  lastText:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus impedit fugiat necessitatibus! Blanditiis nemo pariatur incidunt porro fugit, doloremque a aliquam aspernatur ipsa, perferendis rerum accusamus voluptate sapiente soluta?",
});

function ChatContactsList() {
  return (
    <List
      sx={{
        border: "1px solid blue",
        maxWidth: { xs: 800, xl: 1000 },
        margin: "0 auto",
      }}
    >
      {contacts.map((contact, indx) => {
        return <ChatContactsListItem key={indx} contact={contact} />;
      })}
    </List>
  );
}

export default ChatContactsList;
