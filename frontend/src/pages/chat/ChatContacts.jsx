import { Box, TextField } from "@mui/material";
import { useEffect, useState, useContext } from "react";
import ChatContactsList from "../../components/chatContactsList/ChatContactsList";
import { ChatContext } from "../../context";
import axios from "axios";

function ChatContacts() {
  const [contacts, setContacts] = useState({});
  const chatContext = useContext(ChatContext);

  useEffect(() => {
    setContacts(chatContext.chatData);
  }, [chatContext]);

  // useEffect(() => {
  //   getChatContacts();
  // }, []);
  // const getUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/chat/contact/all`;

  // //get  chat-contacts from db
  // const getChatContacts = async () => {
  //   try {
  //     const res = await axios(getUrl, { withCredentials: true });
  //     const { chatList } = res.data;
  //     setContacts(chatList);
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // };

  return (
    <Box
      border="3px solid red"
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
        <TextField
          id="outlined-basic"
          placeholder="Sök kontakt"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: { sm: 540 } }}
        />
      </Box>
      <div
        style={{
          border: "1px solid green",
          flex: "1",
          overflowY: "auto",
        }}
      >
        <ChatContactsList chatData={contacts} />
      </div>
    </Box>
  );
}

export default ChatContacts;
