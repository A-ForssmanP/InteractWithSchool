import { Box, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountMenu from "../accountMenu/AccountMenu";
import NavList from "../navList/NavList";

function Menu() {
  const [handleMenu, setHandleMenu] = useState({
    isVisible: false,
    isSmoothTrans: true,
  });

  const navigate = useNavigate();

  //navigate to home page
  const navigateHome = () => {
    handleMenu.isVisible && toggleMenu(false);
    navigate("/");
  };

  //toogle menu
  const toggleMenu = (isSmooth) => {
    setHandleMenu((currToggle) => {
      return {
        isVisible: !currToggle.isVisible,
        isSmoothTrans: isSmooth,
      };
    });
  };

  return (
    <Box
      component="aside"
      // border="1px solid red"
      minWidth="15%"
      sx={{
        bgcolor: "rgba(25,118,210,1)",
        borderRadius: { md: "0px 2.5rem 2.5rem 0px" },
      }}
    >
      <Box
        component="nav"
        sx={{
          display: { md: "none" },
          position: "relative",
        }}
        textAlign={"center"}
      >
        <Button
          sx={{ position: "absolute", left: "0", color: "rgb(255,255,255)" }}
          onClick={() => toggleMenu(true)}
        >
          <MenuIcon />
        </Button>
        <Button sx={{ color: "rgb(255,255,255)" }} onClick={navigateHome}>
          <HomeIcon />
        </Button>
      </Box>
      <Box
        component="nav"
        position={{ xs: "absolute", md: "static" }}
        left={"-100%"}
        width={{ xs: "100%", sm: "80%", md: "100%" }}
        bgcolor="rgba(25,118,210,1)"
        marginTop={{ md: 4 }}
        paddingTop={{ xs: 1.4, md: 0 }}
        sx={{
          transform: {
            xs: handleMenu.isVisible && "translateX(100%)",
            sm: handleMenu.isVisible && "translateX(125%)",
            md: "translateX(0%)",
          },
          transition: {
            xs: handleMenu.isSmoothTrans && "600ms ease-in-out",
            sm: handleMenu.isSmoothTrans && "800ms ease-in-out",
            md: "0ms",
          },
          zIndex: 200,
          borderRadius: { sm: "0 2rem 2rem 0", md: "0" },
        }}
      >
        <AccountMenu />
        <NavList toggleMenu={() => toggleMenu(false)} />
      </Box>
    </Box>
  );
}

export default Menu;
