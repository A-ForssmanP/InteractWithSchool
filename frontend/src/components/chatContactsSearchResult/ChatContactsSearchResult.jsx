import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Card,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ChatContext } from "../../context";
import MessageIcon from "@mui/icons-material/Message";

function ChatContactsSearchResult({ result }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { chatData } = useContext(ChatContext);

  // find chat from users chat-list
  const findChatById = (id) => {
    const foundChat = chatData.chats.filter((chat) => chat._id === id);
    return foundChat[0];
  };

  //get data about chating parent
  const parentData = (chat) => {
    const parentData = chat.participants.filter(
      (participant) => participant.userId !== chatData.userData._id
    );
    return parentData[0];
  };

  const handleClick = (chatId) => {
    const chat = findChatById(chatId);
    const parent = parentData(chat);
    navigate(`/chatt/${chatId}`, {
      state: {
        ...chat,
        contact: parent,
        userData: chatData.userData,
        chatListId: chatData.chatListId,
      },
    });
  };

  return (
    <List
      sx={{
        position: "absolute",
        top: { xs: 50, sm: 65 },
        width: "100%",
        maxWidth: { sm: 540 },
        zIndex: 100,
      }}
    >
      <Card sx={{ bgcolor: theme.palette.grey[50] }}>
        {result.length ? (
          result.map((item, index) => {
            return (
              <ListItem key={index} sx={{ borderBottom: "1px solid grey" }}>
                <ListItemButton onClick={() => handleClick(item.chatId)}>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ bgcolor: theme.palette.primary.main }}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.name} />
                  <MessageIcon sx={{ color: theme.palette.primary.main }} />
                </ListItemButton>
              </ListItem>
            );
          })
        ) : (
          <ListItem>
            <ListItemText primary={"Ingen kontakt hittad..."} />
          </ListItem>
        )}
      </Card>
    </List>
  );
}

export default ChatContactsSearchResult;
