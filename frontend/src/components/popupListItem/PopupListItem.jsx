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
  const [times, setTimes] = useState(item.times);
  const [changeTime, setChangeTime] = useState(false);
  // console.log(item);
  // console.log(item.times.from.split(":")[1]);
  // console.log(item.times.from);
  // console.log(from);
  // const [to, setTo] = useState({
  //   hour: item.times.to.split(":")[0],
  //   minute: item.times.to.split(":")[1],
  // });

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
        {!changeTime ? (
          <Box
            border={"1px solid lightgray"}
            borderRadius={1.2}
            sx={{ mr: 4, padding: [1.6] }}
          >
            {`${times.from} Till ${times.to}`}
          </Box>
        ) : (
          <Box>
            <Box display={"flex"}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                  defaultValue={dayjs().set("hour", "0").set("minute", 0)}
                  value={dayjs()
                    .hour(times.from.split(":")[0])
                    .minute(times.from.split(":")[1])}
                  ampm={false}
                />
                -
                <TimePicker
                  defaultValue={dayjs().set("hour", "0").set("minute", 0)}
                  value={dayjs()
                    .hour(times.to.split(":")[0])
                    .minute(times.to.split(":")[1])}
                  ampm={false}
                />
              </LocalizationProvider>
            </Box>
            <Button fullWidth={true}>Updatera tid</Button>
          </Box>
        )}
        <Button onClick={() => setChangeTime(!changeTime)}>
          {!changeTime ? "Ändra" : "Avbryt"}
        </Button>

        <IconButton>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Card>
  );
}

export default PopupListItem;
