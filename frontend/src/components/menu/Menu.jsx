import { Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountMenu from "../accountMenu/AccountMenu";
import NavList from "../navList/NavList";

function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  //navigate to home page
  const navigateHome = () => {
    navigate("/");
  };

  //close menu
  const closeMenu = () => {
    setIsVisible(false);
  };

  return (
    <Box component="aside" border="1px solid red" minWidth="15%">
      <Box
        component="nav"
        sx={{ display: { md: "none" }, position: "relative" }}
        textAlign={"center"}
      >
        <Button
          sx={{ position: "absolute", left: "0" }}
          onClick={() => setIsVisible(!isVisible)}
        >
          <MenuIcon />
        </Button>
        <Button onClick={navigateHome}>
          <HomeIcon />
        </Button>
      </Box>
      <Box
        component="nav"
        position={{ xs: "absolute", md: "static" }}
        left={"-100%"}
        width={{ xs: "100%", sm: "80%", md: "100%" }}
        bgcolor={"green"}
        sx={{
          transform: {
            xs: isVisible && "translateX(100%)",
            sm: isVisible && "translateX(125%)",
            md: "translateX(0%)",
          },
          transition: {
            xs: isVisible && "600ms ease-in-out",
            sm: isVisible && "800ms ease-in-out",
            md: "0ms",
          },
          zIndex: 200,
        }}
      >
        <AccountMenu />
        <NavList closeMenu={closeMenu} />
      </Box>
    </Box>
  );
}

export default Menu;
