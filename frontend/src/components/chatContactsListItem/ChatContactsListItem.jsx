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

function ChatContactsListItem({ chat, userData }) {
  const [contact, setContact] = useState({
    firstName: "undefined",
    lastName: "undefined",
  });
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`./${chat._id}`, {
      state: { ...chat, contact: contact, userData: userData },
    });
  };

  useEffect(() => {
    chat &&
      userData &&
      setContact(() => {
        const participants = chat.participants.filter(
          (person) => person.userId !== userData._id
        );
        const { firstName, lastName } = participants[0];
        return { firstName, lastName };
      });
  }, [chat]);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleClick}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: theme.palette.secondary.light }}></Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={contact.firstName + " " + contact.lastName}
            secondary={
              chat.messages.length
                ? chat.messages[chat.messages.length - 1]
                : "Ny chatt!"
            }
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
