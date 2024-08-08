import { List, ListItem, ListItemButton, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function InboxName({ inbox, studentIndx }) {
  const [names, setNames] = useState([]);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    handleNames();
  }, [inbox, studentIndx]);

  // Get names for inboxes and which one to be rendered
  const handleNames = () => {
    setNames((currnames) => {
      return inbox.map((inbx, index) => {
        if (index === Number(studentIndx)) {
          return {
            name: inbx.name,
            isSelected: true,
          };
        } else {
          return {
            name: inbx.name,
            isSelected: false,
          };
        }
      });
    });
  };

  // Toggle inbox when name is clicked
  const handleClickToggle = (index) => {
    navigate(`/inkorg/${index}`);
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
              sx={{
                display: "flex",
                justifyContent: "center",
                border:
                  c.isSelected && `1px solid ${theme.palette.primary.dark}`,
                // borderBottom: c.isSelected && "none",
                background: c.isSelected
                  ? theme.palette.primary.light
                  : theme.palette.primary.main,
                borderBottom: c.isSelected
                  ? "none"
                  : `1px solid ${theme.palette.primary.dark}`,
                fontSize: { xs: 18, xxl: 25 },
                color: c.isSelected && "rgb(40,10,40)",
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
