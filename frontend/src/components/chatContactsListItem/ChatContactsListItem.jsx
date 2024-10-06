import {
  ListItem,
  ListItemButton,
  ListItemAvatar,
  ListItemText,
  Divider,
  Avatar,
  useTheme,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ChatContactsListItem({ chat, userData, chatListId }) {
  const [contact, setContact] = useState({
    firstName: "undefined",
    lastName: "undefined",
  });
  const [newChatEvent, setNewChatEvent] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`./${chat._id}`, {
      state: {
        ...chat,
        contact: contact,
        userData: userData,
        chatListId: chatListId,
      },
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
    checkNewEvents();
  }, [chat]);

  //check if user is shown new-events
  const checkNewEvents = () => {
    const userIsUpdated = chat.userShownNewEvent.some(
      (id) => id.toString() === userData._id
    );
    if (!userIsUpdated) {
      setNewChatEvent(true);
    }
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
            secondary={
              chat.messages.length
                ? chat.messages[chat.messages.length - 1].text
                : "Ny chatt!"
            }
            secondaryTypographyProps={{
              overflow: "hidden",
              noWrap: true,
            }}
          />
          {newChatEvent && <Typography color="green">Ny händelse</Typography>}
        </ListItemButton>
      </ListItem>
      <Divider />
    </>
  );
}

export default ChatContactsListItem;
