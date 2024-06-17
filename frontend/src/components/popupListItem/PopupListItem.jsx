import {
  List,
  ListItem,
  IconButton,
  ListItemText,
  Card,
  Button,
  Box,
  colors,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";

function PopupListItem({ item }) {
  const [from, setFrom] = useState(
    dayjs().set("hour", 6).set("minute", 5).format("YYYY-MM-DDTHH:mm")
  );
  console.log(item);
  console.log(item.times.from.split(":")[1]);
  console.log(item.times.from);
  console.log(from);
  const [to, setTo] = useState({
    hour: item.times.to.split(":")[0],
    minute: item.times.to.split(":")[1],
  });

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

  const day = weekdays[dayjs(item.date).day() - 1];
  const date = dayjs(item.date).date();
  const month = months[dayjs(item.date).month()];
  // const { from, to } = item.times;
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

        <Box
          border={"1px solid lightgray"}
          borderRadius={1.2}
          sx={{ mr: 4, padding: [1.6] }}
        >{`${from.split("T")[1].split(":")[0]}:${to.minute}`}</Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            defaultValue={dayjs().set("hour", 5).set("minute", 5)}
            ampm={false}
          />
          <TimePicker defaultValue={dayjs()} ampm={false} />
        </LocalizationProvider>

        <Button>Ändra</Button>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Card>
  );
}

export default PopupListItem;
