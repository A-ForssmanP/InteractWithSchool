import { Box } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import ChatContactsList from "../../components/chatContactsList/ChatContactsList";
import ChatContactsSearch from "../../components/chatContactsSearch/ChatContactsSearch";
import { ChatContext } from "../../context";

function ChatContacts() {
  const [contacts, setContacts] = useState({});
  const chatContext = useContext(ChatContext);

  useEffect(() => {
    setContacts(chatContext.chatData);
  }, [chatContext]);

  return (
    <Box
      width="100%"
      height={{ xs: "calc(100dvh - 36px)", md: "100dvh" }}
      display="flex"
      flexDirection="column"
    >
      <Box
        sx={{
          padding: { sm: 2 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ChatContactsSearch />
      </Box>
      <div
        style={{
          flex: "1",
          overflowY: "auto",
          scrollbarColor: "rgb(247,51,120) white",
        }}
      >
        <ChatContactsList chatData={contacts} />
      </div>
    </Box>
  );
}

export default ChatContacts;
