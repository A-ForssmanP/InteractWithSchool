import { Box, TextField } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import ChatContactsList from "../../components/chatContactsList/ChatContactsList";
import axios from "axios";

function ChatContacts() {
  const [contacts, setContacts] = useState(
    new Array(24).fill({
      firstName: "Foo",
      lastName: "Bar",
      lastText:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus impedit fugiat necessitatibus! Blanditiis nemo pariatur incidunt porro fugit, doloremque a aliquam aspernatur ipsa, perferendis rerum accusamus voluptate sapiente soluta?",
    })
  );

  useEffect(() => {
    getChatContacts();
  });

  const getUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/chat/contact/all`;

  //get  chat-contacts from db
  const getChatContacts = async () => {
    const res = await axios(getUrl, { withCredentials: true });
    const { chatList } = res.data;
    console.log(chatList);
  };

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
          // label="sök kontakt"
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
        <ChatContactsList contacts={contacts} />
      </div>
    </Box>
  );
}

export default ChatContacts;
