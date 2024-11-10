import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import ChatContactsList from "../../components/chatContactsList/ChatContactsList";
import ChatContactsSearch from "../../components/chatContactsSearch/ChatContactsSearch";
import { Alert } from "@mui/material";
import { useState } from "react";

function ChatContacts() {
  const [showAlert, setShowAlert] = useState(true);
  const outletContext = useOutletContext();

  return (
    <Box
      width="100%"
      height={{ xs: "calc(100dvh - 36px)", md: "100dvh" }}
      display="flex"
      flexDirection="column"
    >
      <ChatContactsSearch
        chatList={outletContext[2].chats}
        userId={outletContext[2]?.userData?._id}
      />
      {showAlert && (
        <Alert
          severity="info"
          onClose={() => {
            setShowAlert(false);
          }}
          sx={{
            width: "100%",
            maxWidth: { xs: 800, xl: 1000 },
            margin: "0 auto",
          }}
        >
          Testa att live-chatta genom att logga in med 2 användare på varsin
          enhet eller använd olika webbläsare.
        </Alert>
      )}
      <div
        style={{
          flex: "1",
          overflowY: "auto",
          scrollbarColor: "rgb(247,51,120) white",
        }}
      >
        <ChatContactsList
          chatData={outletContext[2]}
          selectChatById={outletContext[1]}
        />
      </div>
    </Box>
  );
}

export default ChatContacts;
