import List from "@mui/material/List";
import NavListItem from "../navListItem/NavListItem";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import DateRangeIcon from "@mui/icons-material/DateRange";
import MessageIcon from "@mui/icons-material/Message";
import { Badge } from "@mui/material";
import { NewInboxCount } from "../../context";
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NavList({ closeMenu, isAuthenticated }) {
  const [isSelected, setIsSelected] = useState("Hem");
  const navigate = useNavigate();
  const newMessage = useContext(NewInboxCount);

  const listItems = [
    { id: crypto.randomUUID(), text: "Hem", ikon: <HomeIcon />, navPath: "/" },
    {
      id: crypto.randomUUID(),
      text: "Inkorg",
      ikon: (
        <Badge
          badgeContent={isAuthenticated ? newMessage.newInboxMessage : 0}
          color="error"
        >
          <InboxIcon />
        </Badge>
      ),
      navPath: "inkorg/0",
    },
    {
      id: crypto.randomUUID(),
      text: "Chatt",
      ikon: <MessageIcon />,
      navPath: "chatt",
    },
    {
      id: crypto.randomUUID(),
      text: "Frånvaro",
      ikon: <CancelScheduleSendIcon />,
      navPath: "fronvaro",
    },
    {
      id: crypto.randomUUID(),
      text: "Tid-Schema",
      ikon: <DateRangeIcon />,
      navPath: "tidsschema",
    },
  ];

  useEffect(() => {
    if (!isAuthenticated) {
      setIsSelected("Hem");
    }
  }, [isAuthenticated]);

  // set selected menu item
  const handleSelected = (text) => {
    setIsSelected(text);
  };

  // handle item click
  const handleClick = (item) => {
    if (!isAuthenticated) {
      return;
    }
    closeMenu();
    navigate(item.navPath);
    handleSelected(item.text);
  };

  return (
    <List sx={{ pl: { xs: ".28rem", md: "0" } }}>
      {listItems.map((item) => {
        return (
          <NavListItem
            key={item.id}
            item={item}
            handleClick={() => handleClick(item)}
            isSelected={isSelected === item.text}
          />
        );
      })}
    </List>
  );
}

export default NavList;
