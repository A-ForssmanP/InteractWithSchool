import Stack from "@mui/material/Stack";
import theme from "..//themeCustom";
import { ThemeProvider } from "@emotion/react";
import { NewInboxCount } from "./context";
import Menu from "./components/menu/Menu";
import PagesWrapper from "./components/pagesWrapper/PagesWrapper";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newInboxMessage, setNewInboxMessage] = useState(0);

  const newInboxCountUrl = `${
    import.meta.env.VITE_EXPRESS_SERVER
  }/inbox/new_messages`;

  useEffect(() => {
    if (!isAuthenticated) {
      return setNewInboxMessage(0);
    }
    getNewInboxMessage();
  }, [isAuthenticated]);

  //get number of new inbox messages
  const getNewInboxMessage = async () => {
    try {
      const res = await axios.get(newInboxCountUrl, { withCredentials: true });
      const { newMessages } = res.data;
      setNewInboxMessage(newMessages);
    } catch (err) {}
  };

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
