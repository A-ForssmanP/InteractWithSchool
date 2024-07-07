import List from "@mui/material/List";
import NavListItem from "../navListItem/NavListItem";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";
import CancelScheduleSendIcon from "@mui/icons-material/CancelScheduleSend";
import DateRangeIcon from "@mui/icons-material/DateRange";

function NavList({ toggleMenu }) {
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

  return (
    <List sx={{ pl: { xs: ".28rem", md: "0" } }}>
      {listItems.map((item) => {
        return (
          <NavListItem key={item.id} item={item} toggleMenu={toggleMenu} />
        );
      })}
    </List>
  );
}

export default NavList;
