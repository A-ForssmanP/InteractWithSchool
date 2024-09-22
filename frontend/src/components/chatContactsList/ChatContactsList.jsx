import { useEffect, useState } from "react";
import ChatContactsListItem from "../chatContactsListItem/ChatContactsListItem";
import { List } from "@mui/material";

function ChatContactsList({ list, userId }) {
  const [chatList, setChatList] = useState([]);

  useEffect(() => {
    list && setChatList(list);
  }, [list]);

  return (
    <List
      sx={{
        border: "1px solid blue",
        maxWidth: { xs: 800, xl: 1000 },
        margin: "0 auto",
      }}
    >
      {chatList.map((chat) => {
        // console.log(chat);
        return (
          <ChatContactsListItem key={chat._id} chat={chat} userId={userId} />
        );
      })}
    </List>
  );
}

export default ChatContactsList;
