import List from "@mui/material/List";
import NavListItem from "../navListItem/NavListItem";
import InboxIcon from "@mui/icons-material/Inbox";

function NavList() {
  const listItems = [
    { id: crypto.randomUUID, text: "Inkorg", ikon: <InboxIcon /> },
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
