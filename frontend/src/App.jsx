import Stack from "@mui/material/Stack";
import Menu from "./components/menu/Menu";
import PagesWrapper from "./components/pagesWrapper/PagesWrapper";

function App() {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      minHeight="100vh"
      sx={{ position: "relative" }}
    >
      <Menu />
      <PagesWrapper />
    </Stack>
  );
}

export default App;
