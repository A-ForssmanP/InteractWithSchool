import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  useTheme,
} from "@mui/material";

function ChatContactsListItem({ contact, index }) {
  const theme = useTheme();
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: theme.palette.secondary.light }}></Avatar>
          </ListItemAvatar>
          <ListItemText primary={contact.firstName + " " + contact.lastName} />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}

export default ChatContactsListItem;
