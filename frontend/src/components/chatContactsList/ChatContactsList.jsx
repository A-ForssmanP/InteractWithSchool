import {
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";

function ChatContactsList() {
  return (
    <List>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Namn" />
        </ListItemButton>
      </ListItem>
    </List>
  );
}

export default ChatContactsList;
