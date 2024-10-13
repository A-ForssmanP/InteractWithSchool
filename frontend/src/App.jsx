import Stack from "@mui/material/Stack";
import theme from "..//themeCustom";
import { ThemeProvider } from "@emotion/react";
import { NewInboxCount, ChatContext } from "./context";
import Menu from "./components/menu/Menu";
import PagesWrapper from "./components/pagesWrapper/PagesWrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newInboxMessage, setNewInboxMessage] = useState(0);
  const [chatData, setChatData] = useState({});
  const [newChatMessages, setNewChatMessages] = useState(0);

  const socket = io();
  console.log(socket);
  const newInboxCountUrl = `${
    import.meta.env.VITE_EXPRESS_SERVER
  }/inbox/new_messages`;

  useEffect(() => {
    if (!isAuthenticated) {
      setNewChatMessages(0);
      return setNewInboxMessage(0);
    }
    getNewInboxMessage();
    getChatData();
    connectToSocket();
  }, [isAuthenticated]);

  useEffect(() => {
    chatData.userData && getNewChatMessages();
  }, [chatData]);

  // connect to socket
  const connectToSocket = () => {
    socket.on("connection", () => {
      console.log("Connected!");
    });
  };

  //get number of new inbox messages
  const getNewInboxMessage = async () => {
    try {
      const res = await axios.get(newInboxCountUrl, { withCredentials: true });
      const { newMessages } = res.data;
      setNewInboxMessage(newMessages);
    } catch (err) {}
  };

  //get number of new chat messages
  const getNewChatMessages = () => {
    const userId = chatData.userData._id;
    let newMsgCount = 0;
    chatData.chats.forEach((chat) => {
      const isShownToUser = chat.userShownNewEvent.some((id) => id === userId);
      if (!isShownToUser) {
        newMsgCount++;
      }
    });
    if (newMsgCount > 0) {
      setNewChatMessages(newMsgCount);
    }
  };

  //get  chat-contacts from db
  const getChatData = async () => {
    const getUrl = `${import.meta.env.VITE_EXPRESS_SERVER}/chat/contact/all`;
    try {
      const res = await axios(getUrl, { withCredentials: true });
      const { chatList } = res.data;
      setChatData(chatList);
    } catch (err) {
      console.log(err.message);
    }
  };

  // update chatData
  const updateChatData = (newData) => {
    setChatData(newData);
  };

  // find chat between user and selected-parent
  const findChatId = (parentId) => {
    if (chatData.chats) {
      const chat = chatData.chats.filter((chat) => {
        return chat.participants.some(
          (participan) => participan.userId === parentId
        );
      });
      return chat[0]._id;
    }
  };

  return (
    <ChatContext.Provider
      value={{ chatData, findChatId, updateChatData, newChatMessages }}
    >
      <NewInboxCount.Provider value={{ newInboxMessage, setNewInboxMessage }}>
        <ThemeProvider theme={theme}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            height={{ sm: "100dvh" }}
            sx={{ position: "relative" }}
          >
            <Menu isAuthenticated={isAuthenticated} />
            <PagesWrapper
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          </Stack>
        </ThemeProvider>
      </NewInboxCount.Provider>
    </ChatContext.Provider>
  );
}

export default App;
