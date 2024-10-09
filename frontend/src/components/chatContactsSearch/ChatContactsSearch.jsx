import { TextField } from "@mui/material";
import { useState, useEffect } from "react";

function ChatContactsSearch() {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log("kaffe");
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [searchText]);

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
