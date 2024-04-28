import { List, ListItem, ListItemButton } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InboxName({ inbox, childIndx }) {
  const [names, setNames] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    handleNames();
  }, [childIndx]);

  // Get names for inboxes and which one to be rendered
  const handleNames = () => {
    setNames((currnames) => {
      return inbox.map((inbx, index) => {
        if (index === Number(childIndx)) {
          return {
            name: inbx.child.name,
            isSelected: true,
          };
        } else {
          return {
            name: inbx.child.name,
            isSelected: false,
          };
        }
      });
    });
  };

  // Toggle inbox when name is clicked
  const handleClickToggle = (index) => {
    navigate(`/inbox/${index}`);
  };

  return (
    <List
      sx={{
        display: "flex",
        justifyContent: "flexStart",
        alignItems: "center",
        paddingTop: "2.6rem",
      }}
    >
      {names.map((c, index) => {
        return (
          <ListItem key={index} sx={{ width: "8rem", padding: "0" }}>
            <ListItemButton
              onClick={() => handleClickToggle(index)}
              // onClick={() => handleToggle(c.name, index)}
              sx={{
                display: "flex",
                justifyContent: "center",
                border: "1px solid black",
                borderBottom: c.isSelected && "none",
              }}
            >
              {c.name}
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
