import Box from "@mui/material/Box";
import Inbox from "../inbox/Inbox";

function PagesWrapper() {
  return (
    <Box component="main" border="1px solid red" minWidth="85%">
      <Inbox />
    </Box>
  );
}

export default PagesWrapper;
