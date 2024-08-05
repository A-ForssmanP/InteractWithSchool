import { List, ListItem, Typography } from "@mui/material";

function DashboardClassListItem({ list }) {
  // list && console.log(list);

  return (
    <div
      style={
        {
          // border: "4px solid blue",
          // display: "flex",
          // alignItems: "center",
          // flexDirection: "column",
        }
      }
    >
      <div
        style={{
          // border: "2px solid yellow",
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
            // border: "2px solid yellow",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography>Lärare:</Typography>
          {list.class.teacher.firstName}
        </div>
        <List
          sx={{
            // border: "2px solid purple",
            display: "flex",
            flexDirection: { sm: "column" },
            overflowX: { xs: "scroll", sm: "visible" },
          }}
        >
          {list.class.parents.map((parent) => {
            return (
              <ListItem
                key={parent._id}
                sx={{
                  border: "1px solid yellow",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {parent.firstName}
              </ListItem>
            );
          })}
        </List>
      </div>
    </div>
  );
}

export default DashboardClassListItem;
