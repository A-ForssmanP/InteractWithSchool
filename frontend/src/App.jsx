import Stack from "@mui/material/Stack";
import Menu from "./components/menu/Menu";
import PagesWrapper from "./components/pagesWrapper/PagesWrapper";
import theme from "../colorPalette";
import { ThemeProvider } from "@emotion/react";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        minHeight="100vh"
        sx={{ position: "relative" }}
      >
        <Menu />
        <PagesWrapper />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
