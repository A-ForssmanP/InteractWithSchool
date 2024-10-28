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
import { useNavigate, useOutletContext } from "react-router-dom";
import MessageIcon from "@mui/icons-material/Message";

function ChatContactsSearchResult({ result }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const outletContext = useOutletContext();
  const selectChatById = outletContext[1];

  const handleClick = (chatId) => {
    selectChatById(chatId);
    navigate(`/chatt/${chatId}`);
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
