import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

function Menu() {
  return (
    <Box component="aside" border="1px solid red" minWidth="15%">
      <Avatar
        sx={{ margin: "1rem auto 0 auto", width: "56px", height: "56px" }}
      ></Avatar>
    </Box>
  );
}

export default Menu;
