import {
  Box,
  Avatar,
  useTheme,
  Typography,
  Button,
  TextField,
  List,
  ListItem,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../buttonBack/ButtonBack";
import ChatWindowMessage from "../chatWindowMessage/ChatWindowMessage";

function ChatWindow() {
  const theme = useTheme();
  const navigate = useNavigate();
  const lastMessageRef = useRef(null);
  const [newText, setNewText] = useState("");
  console.log(lastMessageRef);
  const [messages, setMessages] = useState([
    {
      id: crypto.randomUUID(),
      author: "user",
      text: "Kaffe är gott!",
      sendTime: "20.43",
    },
    {
      id: crypto.randomUUID(),
      author: "user",
      text: "Det är klart!",
      sendTime: "21.00",
    },
    {
      id: crypto.randomUUID(),
      author: "contact",
      text: "Fika!",
      sendTime: 21.05,
    },
    {
      id: crypto.randomUUID(),
      author: "contact",
      text: "Fika!",
      sendTime: 21.05,
    },
    {
      id: crypto.randomUUID(),
      author: "contact",
      text: "Fika!",
      sendTime: 21.05,
    },
    {
      id: crypto.randomUUID(),
      author: "contact",
      text: "Fika!",
      sendTime: 21.05,
    },
    {
      id: crypto.randomUUID(),
      author: "contact",
      text: "Fika!",
      sendTime: 21.05,
    },
    {
      id: crypto.randomUUID(),
      author: "contact",
      text: "Fika!",
      sendTime: 21.05,
    },
    {
      id: crypto.randomUUID(),
      author: "contact",
      text: "Fika!",
      sendTime: 21.05,
    },
    {
      id: crypto.randomUUID(),
      author: "contact",
      text: "Fika!",
      sendTime: 21.05,
    },
  ]);

  useEffect(() => {
    //scroll down to last message
    lastMessageRef.current && lastMessageRef.current.scrollIntoView();
  }, [messages]);

  //handle send message
  const handleSend = (msg) => {
    const date = new Date();
    const currMin = date.getMinutes();
    const currentTime = `${date.getHours()}.${date.getMinutes()}`;
    console.log(currMin.length);
    setMessages((curr) => {
      return [
        ...curr,
        {
          id: crypto.randomUUID(),
          author: "user",
          text: msg,
          sendTime: currentTime,
        },
      ];
    });
    setNewText("");
  };

  //handle submiting a message
  const handleSubmit = (e) => {
    e.preventDefault();
    newText.length && handleSend(newText);
  };

  return (
    <Box
      border={"5px solid black"}
      height={{ xs: "calc(100dvh - 36px)", md: "100dvh" }}
      display="flex"
      flexDirection="column"
    >
      <Box
        sx={{
          border: "1px solid red",
          display: "flex",
          flexDirection: { xs: "column-reverse", sm: "row" },
          justifyContent: { sm: "space-between" },
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            gap: 6,
          }}
        >
          <Avatar sx={{ bgcolor: theme.palette.secondary.light }} />
          <Typography>Namn</Typography>
        </div>
        <ButtonBack handleClick={() => navigate("..")} />
      </Box>
      <div
        style={{
          border: "3px solid green",
          flex: 1,
          maxHeight: "calc(100% - 43px)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            flex: 1,
            border: "4px solid blue",
            height: "calc(100% - 56px)",
          }}
        >
          <List
            sx={{
              border: "3px solid red",
              height: "100%",
              flexShrink: 1,
              maxHeight: "100%",
              overflow: "auto",
            }}
          >
            {messages.map((msg) => {
              return <ChatWindowMessage key={msg.id} message={msg} />;
            })}
            <div ref={lastMessageRef}></div>
          </List>
        </div>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="outlined-textarea"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            // label="Multiline Placeholder"
            placeholder="Skriv ett meddelande"
            multiline
            fullWidth
          />
          <Button
            type="submit"
            sx={{ marginTop: "auto", transform: "translateY(-20%)" }}
          >
            <SendIcon />
          </Button>
        </form>
      </div>
    </Box>
  );
}

export default ChatWindow;
