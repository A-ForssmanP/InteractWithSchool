import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatContactsListItem({ chat, userId }) {
  const [contact, setContact] = useState({
    firstName: "undefined",
    lastName: "undefined",
  });
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`./${chat._id}`);
  };

  useEffect(() => {
    chat &&
      userId &&
      setContact(() => {
        const participants = chat.participants.filter(
          (person) => person.userId !== userId
        );
        const { firstName, lastName } = participants[0];
        return { firstName, lastName };
      });
  }, [chat]);
  // const contact = chat.participants.filter((person) => person.id !== userId);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: theme.palette.secondary.light }}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={contact.firstName + " " + contact.lastName}
            secondary={chat.lastText}
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
