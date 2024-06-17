import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Card,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";

function PopupListItem({ item }) {
  const weekdays = ["Mån", "Tis", "Ons", "Tors", "Fre"];
  const months = [
    "Jan",
    "Feb",
    "Mars",
    "Apr",
    "Maj",
    "Juni",
    "Juli",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];
  console.log(item);
  const day = weekdays[dayjs(item.date).day() - 1];
  const date = dayjs(item.date).date();
  const month = months[dayjs(item.date).month()];
  const { from, to } = item.times;
  return (
    <Card sx={{ mb: 0.4 }}>
      <ListItem
      // secondaryAction={
      //   <IconButton edge="end" aria-label="delete">
      //     <DeleteIcon />
      //   </IconButton>
      // }
      >
        <ListItemText primary={`${day} ${date} ${month}`} />
        <Card>{to}</Card>
        <Button>Ändra</Button>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Card>
  );
}

export default PopupListItem;
