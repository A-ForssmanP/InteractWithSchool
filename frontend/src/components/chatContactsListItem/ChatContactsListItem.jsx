import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
} from "@mui/material";

function ChatContactsListItem() {
  return (
    <>
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemAvatar>
            <Avatar></Avatar>
          </ListItemAvatar>
          <ListItemText primary="Namn" />
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}

export default ChatContactsListItem;
