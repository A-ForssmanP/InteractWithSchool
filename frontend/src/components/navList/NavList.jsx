import List from "@mui/material/List";
import NavListItem from "../navListItem/NavListItem";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import DateRangeIcon from "@mui/icons-material/DateRange";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavList({ toggleMenu }) {
  const [selected, setSelected] = useState("Hem");
  const navigate = useNavigate();

  const listItems = [
    { id: crypto.randomUUID(), text: "Hem", ikon: <HomeIcon />, navPath: "/" },
    {
      id: crypto.randomUUID(),
      text: "Inkorg",
      ikon: <InboxIcon />,
      navPath: "inkorg/0",
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

  // set selected menu item
  const handleSelected = (text) => {
    setSelected(text);
  };

  // handle item click
  const handleClick = (item) => {
    toggleMenu();
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
          />
        );
      })}
    </List>
  );
}

export default NavList;
