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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonBack from "../buttonBack/ButtonBack";

function ChatWindow() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { id: crypto.randomUUID(), author: "user", text: "Kaffe är gott!" },
    { id: crypto.randomUUID(), author: "user", text: "Det är klart!" },
  ]);

  return (
    <Box
      border={"5px solid black"}
      height={{ xs: "calc(100dvh - 36px)", md: "100dvh" }}
      display="flex"
      flexDirection="column"
    >
      <div
        style={{
          border: "1px solid red",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
          <Avatar sx={{ bgcolor: theme.palette.secondary.light }} />
          <Typography>Namn</Typography>
        </div>
        <ButtonBack handleClick={() => navigate("..")} />
      </div>
      <div
        style={{
          border: "1px solid red",
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ flex: 1, border: "1px solid blue" }}>
          <List>
            {messages.map((msg) => {
              return <ListItem key={msg.id}>{msg.text}</ListItem>;
            })}
          </List>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
          }}
        >
          <TextField
            id="outlined-textarea"
            // label="Multiline Placeholder"
            placeholder="Skriv ett meddelande"
            multiline
            fullWidth
          />
          <Button sx={{ marginTop: "auto", transform: "translateY(-20%)" }}>
            <SendIcon />
          </Button>
        </div>
      </div>
    </Box>
  );
}

export default ChatWindow;
