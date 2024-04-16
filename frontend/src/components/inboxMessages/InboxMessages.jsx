import { List, ListItem, ListItemButton } from "@mui/material";
import { alignProperty } from "@mui/material/styles/cssUtils";

function InboxMessages({ message }) {
  return (
    <List>
      {message.map((msg, index) => {
        return (
          <ListItem key={index}>
            <ListItemButton
              component="nav"
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h3>{msg}</h3>
              <p sx={{ color: "red" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                dolorum vel quo quia quis quos provident ullam? Velit...
              </p>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default InboxMessages;
