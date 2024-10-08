import { useEffect, useState } from "react";
import ChatContactsListItem from "../chatContactsListItem/ChatContactsListItem";
import { List } from "@mui/material";

function ChatContactsList({ chatData }) {
  const [chatListData, setChatListData] = useState([]);

  useEffect(() => {
    chatData.chats && setChatListData(chatData.chats);
  }, [chatData]);

  return (
    <List
      sx={{
        maxWidth: { xs: 800, xl: 1000 },
        margin: "0 auto",
      }}
    >
      {chatListData.map((chat) => {
        return (
          <ChatContactsListItem
            key={chat._id}
            chat={chat}
            userData={chatData.userData}
            chatListId={chatData.chatListId}
          />
        );
      })}
    </List>
  );
}

export default ChatContactsList;
