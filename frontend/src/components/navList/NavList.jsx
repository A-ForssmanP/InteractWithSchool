import List from "@mui/material/List";
import NavListItem from "../navListItem/NavListItem";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";

function NavList() {
  const listItems = [
    { id: crypto.randomUUID(), text: "Hem", ikon: <HomeIcon />, navPath: "/" },
    {
      id: crypto.randomUUID(),
      text: "Inkorg",
      ikon: <InboxIcon />,
      navPath: "inbox",
    },
  ];

  return (
    <List>
      {listItems.map((item) => {
        return <NavListItem key={item.id} item={item} />;
      })}
    </List>
  );
}

export default NavList;
