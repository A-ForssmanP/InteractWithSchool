import { List, ListItem, Typography } from "@mui/material";

function DashboardClassListItem({ list }) {
  // list && console.log(list);

  return (
    <div>
      <div>
        <h4>{list.student}</h4>
        <p>{list.class.className}</p>
      </div>
      <div>
        <div>
          <Typography>Lärare:</Typography>
          {list.class.teacher.firstName}
        </div>
        <List>
          {list.class.parents.map((parent) => {
            return <ListItem key={parent._id}>{parent.firstName}</ListItem>;
          })}
        </List>
      </div>
    </div>
  );
}

export default DashboardClassListItem;
