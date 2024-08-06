import {
  List,
  ListItem,
  Typography,
  Divider,
  useTheme,
  ListItemText,
  IconButton,
  Button,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function DashboardClassListItem({ list }) {
  const theme = useTheme();
  // list && console.log(list);
  console.log(theme);
  return (
    <div>
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
          <Button sx={{ p: "0" }}>
            <AddCircleIcon
              sx={{
                background: "white",
                color: "green",
              }}
            />
          </Button>
        </div>
        <Typography
          borderBottom={`1px solid ${theme.palette.grey[400]}`}
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
          }}
        >
          {list.class.parents.map((parent) => {
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
                  <IconButton edge="end" aria-label="öppna">
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
          })}
        </List>
      </div>
    </div>
  );
}

export default DashboardClassListItem;
