import ListItem from "@mui/material/ListItem";
import { ListItemIcon, ListItemText, ListItemButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavListItem({ item, handleClick, isSelected }) {
  return (
    <ListItem
      disablePadding
      sx={{
        color: {
          xs: "rgb(255,255,255)",
          md: isSelected && "rgba(25,118,210,1)",
        },
        bgcolor: { md: isSelected && "white" },
        borderRadius: { md: isSelected && "4rem 10px 10px 4rem" },
        boxShadow: { md: isSelected && "1px 1px 2px 0px lightgrey" },
        "&:hover": {
          background: { md: !isSelected && "rgba(255,255,255,.1)" },
        },
      }}
    >
      <ListItemButton onClick={handleClick}>
        <ListItemIcon
          sx={{
            minWidth: "0",
            marginRight: ".6rem",
            color: {
              xs: "white",
              md: isSelected ? "rgba(25,118,210,1)" : "white",
            },
          }}
        >
          {item.ikon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
}

export default NavListItem;
