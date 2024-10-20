import { Box } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import { useOutletContext } from "react-router-dom";
import ChatContactsList from "../../components/chatContactsList/ChatContactsList";
import ChatContactsSearch from "../../components/chatContactsSearch/ChatContactsSearch";
import { ChatContext } from "../../context";

function ChatContacts() {
  // const [contacts, setContacts] = useState({});
  // const chatContext = useContext(ChatContext);
  const outletContext = useOutletContext();

  // useEffect(() => {
  //   setContacts(chatContext.chatData);
  // }, [chatContext]);

  return (
    <Box
      width="100%"
      height={{ xs: "calc(100dvh - 36px)", md: "100dvh" }}
      display="flex"
      flexDirection="column"
    >
      <ChatContactsSearch
        // chatList={contacts.chats}
        chatList={outletContext[4].chats}
        // userId={contacts?.userData?._id}
        userId={outletContext[4]?.userData?._id}
      />
      <div
        style={{
          flex: "1",
          overflowY: "auto",
          scrollbarColor: "rgb(247,51,120) white",
        }}
      >
        <ChatContactsList
          chatData={outletContext[4]}
          // chatData={contacts}
          addChat={outletContext[1]}
          selectChatById={outletContext[3]}
        />
      </div>
    </Box>
  );
}

export default ChatContacts;
