import { TextField } from "@mui/material";
import { useState } from "react";

function ChatContactsSearch() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

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
