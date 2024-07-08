import ListItem from "@mui/material/ListItem";
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavListItem({ item, handleClick }) {
  return (
    <ListItem disablePadding sx={{ color: "white" }}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon
          sx={{ minWidth: "0", marginRight: ".6rem", color: "white" }}
        >
          {item.ikon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
}

export default NavListItem;
