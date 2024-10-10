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
import MessageIcon from "@mui/icons-material/Message";

function ChatContactsSearchResult({ result }) {
  const theme = useTheme();
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
        {result &&
          result.map((item, index) => {
            return (
              <ListItem key={index} sx={{ borderBottom: "1px solid grey" }}>
                <ListItemButton>
                  <ListItemAvatar>
                    <Avatar
                      sx={{ bgcolor: theme.palette.primary.main }}
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText primary={item.firstName} />
                  <MessageIcon sx={{ color: theme.palette.primary.main }} />
                </ListItemButton>
              </ListItem>
            );
          })}
      </Card>
    </List>
  );
}

export default ChatContactsSearchResult;
