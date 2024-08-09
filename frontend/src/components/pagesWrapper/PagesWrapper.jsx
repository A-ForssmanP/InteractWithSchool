import Box from "@mui/material/Box";
import Pages from "../../pages/Pages";

function PagesWrapper({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Box component="main" minWidth="85%" height={"100vh"}>
      <Pages
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Box>
  );
}

export default PagesWrapper;
