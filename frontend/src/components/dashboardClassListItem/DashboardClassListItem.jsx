import { List, ListItem, Typography } from "@mui/material";

function DashboardClassListItem({ list }) {
  // list && console.log(list);

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
          }}
        >
          <Typography>Lärare:</Typography>
          {list.class.teacher.firstName}
        </div>
        <List
          sx={{
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
