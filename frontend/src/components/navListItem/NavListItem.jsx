import ListItem from "@mui/material/ListItem";
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavListItem({ item }) {
  const navigate = useNavigate();

  // function for navigate when button is clicked
  const handleClick = () => {
    navigate(item.navPath);
  };

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon sx={{ minWidth: "0", marginRight: ".6rem" }}>
          {item.ikon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
}

export default NavListItem;
