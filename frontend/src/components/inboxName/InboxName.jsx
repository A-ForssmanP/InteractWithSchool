import { List, ListItem, ListItemButton } from "@mui/material";

function InboxName({ name }) {
  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "flexStart",
        alignItems: "center",
        paddingTop: "2.6rem",
      }}
    >
      {name.map((n, index) => {
        return (
          <ListItem key={index} sx={{ width: "8rem", padding: "0" }}>
            <ListItemButton
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid black",
              }}
            >
              {n}
            </ListItemButton>
          </ListItem>
        );
      })}
      <ListItem
        sx={{
          marginTop: "auto",
          padding: "0",
          borderBottom: "1px solid black",
        }}
      ></ListItem>
    </List>
  );
}

export default InboxName;
