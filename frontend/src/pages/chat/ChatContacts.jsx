import { Box, TextField } from "@mui/material";
import Axios from "axios";
import { useEffect, useState } from "react";
import ChatContactsList from "../../components/chatContactsList/ChatContactsList";
import axios from "axios";

function ChatContacts() {
  const [contacts, setContacts] = useState(
    {}
    // new Array(24).fill({
    //   firstName: "Foo",
    //   lastName: "Bar",
    //   lastText:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident natus impedit fugiat necessitatibus! Blanditiis nemo pariatur incidunt porro fugit, doloremque a aliquam aspernatur ipsa, perferendis rerum accusamus voluptate sapiente soluta?",
    // })
  );

  useEffect(() => {
    getChatContacts();
    console.log(contacts);
  }, []);

  const getUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/chat/contact/all`;

  //get  chat-contacts from db
  const getChatContacts = async () => {
    try {
      const res = await axios(getUrl, { withCredentials: true });
      const { chatList } = res.data;
      setContacts(chatList);
    } catch (err) {
      console.log(err.message);
    }
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
        <ChatContactsList
          list={contacts.chats && contacts.chats}
          userId={contacts.userId && contacts.userId}
        />
      </div>
    </Box>
  );
}

export default ChatContacts;
