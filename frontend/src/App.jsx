import Stack from "@mui/material/Stack";
import theme from "..//themeCustom";
import { ThemeProvider } from "@emotion/react";
import { NewInboxCount } from "./context";
import Menu from "./components/menu/Menu";
import PagesWrapper from "./components/pagesWrapper/PagesWrapper";
import { useState } from "react";

function App() {
  const [newInboxMessage, setNewInboxMessage] = useState(0);
  return (
    <NewInboxCount.Provider value={{ newInboxMessage, setNewInboxMessage }}>
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
    </NewInboxCount.Provider>
  );
}

export default App;
