import ListItem from "@mui/material/ListItem";
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";

function NavListItem({ item }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: "0", marginRight: ".6rem" }}>
          {item.ikon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
}

export default NavListItem;
