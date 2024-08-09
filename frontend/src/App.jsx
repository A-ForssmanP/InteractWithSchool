import Stack from "@mui/material/Stack";
import theme from "..//themeCustom";
import { ThemeProvider } from "@emotion/react";
import { NewInboxCount } from "./context";
import Menu from "./components/menu/Menu";
import PagesWrapper from "./components/pagesWrapper/PagesWrapper";
import { useEffect, useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newInboxMessage, setNewInboxMessage] = useState(0);

  useEffect(() => {
    if (!isAuthenticated) {
      return setNewInboxMessage(0);
    }
  }, [isAuthenticated]);

  return (
    <NewInboxCount.Provider value={{ newInboxMessage, setNewInboxMessage }}>
      <ThemeProvider theme={theme}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          height={{ sm: "100dvh" }}
          sx={{ position: "relative" }}
        >
          <Menu isAuthenticated={isAuthenticated} />
          <PagesWrapper
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated}
          />
        </Stack>
      </ThemeProvider>
    </NewInboxCount.Provider>
  );
}

export default App;
