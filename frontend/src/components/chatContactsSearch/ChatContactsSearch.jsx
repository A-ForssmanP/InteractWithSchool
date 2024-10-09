import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

function ChatContactsSearch({ chatList, userId }) {
  const [searchText, setSearchText] = useState("");
  const [names, setNames] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  // console.log(chatList);
  // console.log(userId);
  useEffect(() => {
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
  const searchContact = () => {};
  return (
    <TextField
      id="outlined-basic"
      placeholder="Sök kontakt"
      variant="outlined"
      fullWidth
      sx={{ maxWidth: { sm: 540 } }}
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
}

export default ChatContactsSearch;
