import { TextField, Box } from "@mui/material";
import { useState, useEffect } from "react";
import ChatContactsSearchResult from "../chatContactsSearchResult/ChatContactsSearchResult";

function ChatContactsSearch({ chatList, userId }) {
  const [searchText, setSearchText] = useState("");
  const [names, setNames] = useState([]);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    !searchText && setSearchResult([]);
    if (searchText && chatList && userId) {
      const delayDebounceFn = setTimeout(() => {
        searchContact();
      }, 1000);
      return () => clearTimeout(delayDebounceFn);
    }
  }, [searchText]);

  useEffect(() => {
    chatList && getNames();
  }, [chatList]);

  // get first name of person and the chats id
  const getNames = () => {
    const nameList = chatList.map((chat) => {
      const nameArray = chat.participants.filter(
        (user) => user.userId !== userId
      );
      return { chatId: chat._id, firstName: nameArray[0].firstName };
    });
    setNames(nameList);
  };

  //search contact
  const searchContact = () => {
    const result = names.filter((name) => {
      const nameSequece = name.firstName.slice(0, searchText.length);
      if (nameSequece.toLowerCase() === searchText.toLowerCase()) {
        return name;
      }
    });
    setSearchResult(result);
  };
  return (
    <Box
      sx={{
        padding: { sm: 2 },
        display: "flex",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <TextField
        id="outlined-basic"
        placeholder="Sök kontakt"
        variant="outlined"
        fullWidth
        sx={{ maxWidth: { sm: 540 } }}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <ChatContactsSearchResult result={searchResult} />
    </Box>
  );
}

export default ChatContactsSearch;
