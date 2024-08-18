import Box from "@mui/material/Box";
import Pages from "../../pages/Pages";

function PagesWrapper({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Box
      component="main"
      minWidth="85%"
      height={"100vh"}
      paddingTop={{ xs: "36px", md: "0" }}
    >
      <Pages
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Box>
  );
}

export default PagesWrapper;
