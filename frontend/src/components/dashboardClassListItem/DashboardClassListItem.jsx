import {
  List,
  ListItem,
  Typography,
  Divider,
  useTheme,
  ListItemText,
  IconButton,
  Button,
  Card,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function DashboardClassListItem({ list, showPopup, userId }) {
  const theme = useTheme();

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h4>{list.student}</h4>
        <p>{list.class.className}</p>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <Typography>Lärare:</Typography>

          <Typography>{list.class.teacher.firstName}</Typography>
          <Button onClick={() => showPopup(list.class.teacher)} sx={{ p: "0" }}>
            <AddCircleIcon
              sx={{
                background: "white",
                color: "green",
              }}
            />
          </Button>
        </div>
        <Typography
          borderTop={`1px solid ${theme.palette.grey[400]}`}
          pt={1}
          textAlign={"center"}
        >
          Föräldrar:
        </Typography>
        <List
          sx={{
            display: "flex",
            flexDirection: { sm: "column" },
            overflowX: { xs: "scroll", sm: "visible" },
            overflowY: { sm: "auto" },
            maxHeight: { sm: "70dvh", lg: "80dvh" },
          }}
        >
          {list.class.parents.map((parent) => {
            if (parent._id !== userId) {
              return (
                <ListItem
                  key={parent._id}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "relative",
                    width: "100%",
                    // borderBottom: "1px solid grey",
                    // borderBottom: `1px solid ${theme.palette.secondary.main}`,
                    "&::after": {
                      sm: {
                        content: '""',
                        height: "1px",
                        width: "60%",
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        background: theme.palette.grey[300],
                      },
                    },
                  }}
                  secondaryAction={
                    <IconButton
                      onClick={() => showPopup(parent)}
                      edge="end"
                      aria-label="öppna"
                    >
                      <AddCircleIcon
                        sx={{
                          background: "white",
                          color: "green",
                        }}
                      />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary={`${parent.firstName}.${parent.lastName[0]}`}
                  />
                </ListItem>
              );
            }
          })}
        </List>
      </div>
    </div>
  );
}

export default DashboardClassListItem;
