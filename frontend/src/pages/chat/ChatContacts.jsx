import { Box, TextField } from "@mui/material";
import ChatContactsList from "../../components/chatContactsList/ChatContactsList";

function ChatContacts() {
  return (
    <Box
      border="3px solid red"
      width="100%"
      height={{ xs: "calc(100dvh - 36px)", md: "100dvh" }}
      display="flex"
      flexDirection="column"
    >
      <div style={{ padding: 14, display: "flex", justifyContent: "center" }}>
        <TextField
          id="outlined-basic"
          // label="sök kontakt"
          placeholder="Sök kontakt"
          variant="outlined"
          fullWidth
          sx={{ maxWidth: { sm: 540 } }}
        />
      </div>
      <div style={{ border: "1px solid green", flex: "1" }}>
        <ChatContactsList />
      </div>
    </Box>
  );
}

export default ChatContacts;
