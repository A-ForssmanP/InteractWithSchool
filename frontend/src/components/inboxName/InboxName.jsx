import { List, ListItem, ListItemButton } from "@mui/material";

function InboxName({ inbox, handleToggle }) {
  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "flexStart",
        alignItems: "center",
        paddingTop: "2.6rem",
      }}
    >
      {inbox.map((c, index) => {
        return (
          <ListItem key={index} sx={{ width: "8rem", padding: "0" }}>
            <ListItemButton
              onClick={() => handleToggle(c.child.name)}
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid black",
                borderBottom: c.child.isSelected && "none",
              }}
            >
              {c.child.name}
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
