import { Box } from "@mui/material";
import { useOutletContext } from "react-router-dom";
import ChatContactsList from "../../components/chatContactsList/ChatContactsList";
import ChatContactsSearch from "../../components/chatContactsSearch/ChatContactsSearch";

function ChatContacts() {
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
