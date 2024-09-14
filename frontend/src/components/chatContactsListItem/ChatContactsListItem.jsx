import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function ChatContactsListItem({ contact }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`./${contact.id}`);
  };
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: theme.palette.secondary.light }}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={contact.firstName + " " + contact.lastName}
            secondary={contact.lastText}
            secondaryTypographyProps={{
              overflow: "hidden",
              noWrap: true,
            }}
          />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}

export default ChatContactsListItem;
