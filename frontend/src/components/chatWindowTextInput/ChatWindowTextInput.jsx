import { useState } from "react";
import { Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function ChatWindowTextInput({ handleSend }) {
  const [newText, setNewText] = useState("");

  // // //handle submiting a message
  const handleSubmit = (e) => {
    e.preventDefault();
    newText.length && handleSend(newText, setNewText);
  };

  return (
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
        placeholder="Skriv ett meddelande"
        multiline
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          marginTop: "auto",
          height: 56,
        }}
      >
        <SendIcon />
      </Button>
    </form>
  );
}

export default ChatWindowTextInput;
