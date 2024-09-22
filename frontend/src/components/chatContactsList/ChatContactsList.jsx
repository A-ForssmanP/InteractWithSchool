import { useEffect, useState } from "react";
import ChatContactsListItem from "../chatContactsListItem/ChatContactsListItem";
import { List } from "@mui/material";

function ChatContactsList({ chatData }) {
  const [chatListData, setChatListData] = useState([]);

  useEffect(() => {
    chatData.chats && setChatListData(chatData.chats);
    console.log(chatData);
  }, [chatData]);

  return (
    <List
      sx={{
        border: "1px solid blue",
        maxWidth: { xs: 800, xl: 1000 },
        margin: "0 auto",
      }}
    >
      {chatListData.map((chat) => {
        // console.log(chat);
        return (
          <ChatContactsListItem
            key={chat._id}
            chat={chat}
            userData={chatData.userData}
          />
        );
      })}
    </List>
  );
}

export default ChatContactsList;
