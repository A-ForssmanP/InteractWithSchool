import Stack from "@mui/material/Stack";
import theme from "..//themeCustom";
import { ThemeProvider } from "@emotion/react";
import { newInboxCount } from "./context";
import Menu from "./components/menu/Menu";
import PagesWrapper from "./components/pagesWrapper/PagesWrapper";
import { useState } from "react";

function App() {
  const [newInboxMCount, setNewInboxMCount] = useState(0);
  return (
    <newInboxCount.Provider value={{ newInboxCount, setNewInboxMCount }}>
      <ThemeProvider theme={theme}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          height={{ sm: "100dvh" }}
          sx={{ position: "relative" }}
        >
          <Menu />
          <PagesWrapper />
        </Stack>
      </ThemeProvider>
    </newInboxCount.Provider>
  );
}

export default App;
