import Stack from "@mui/material/Stack";
import Menu from "./components/menu/Menu";
import PagesWrapper from "./components/pagesWrapper/PagesWrapper";

function App() {
  return (
    <Stack direction="row" height="100vh">
      <Menu />
      <PagesWrapper />
    </Stack>
  );
}

export default App;
