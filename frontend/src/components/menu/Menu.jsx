import Box from "@mui/material/Box";
import AccountMenu from "../accountMenu/AccountMenu";
import NavList from "../navList/NavList";

function Menu() {
  return (
    <Box component="aside" border="1px solid red" minWidth="15%">
      <Box component="nav">
        <AccountMenu />
        <NavList />
      </Box>
    </Box>
  );
}

export default Menu;
