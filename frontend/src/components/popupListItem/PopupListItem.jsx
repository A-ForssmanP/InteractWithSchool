import {
  ListItem,
  IconButton,
  ListItemText,
  Card,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { useState } from "react";

function PopupListItem({ item, handleTimeUpdate, handleDelete }) {
  const [times, setTimes] = useState(item.times);
  const [pickerValues, setPickerValues] = useState(times);
  const [changeTime, setChangeTime] = useState(false);

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

  // update time
  const updateTime = (id) => {
    setTimes(pickerValues);
    handleTimeUpdate(id, pickerValues);
    setChangeTime(false);
  };

  //handle change
  const handleChange = (newValue, valToUpd, handleDelete) => {
    const date = new Date(newValue);
    const timeExtracted = date.toLocaleTimeString().slice(0, 5);
    setPickerValues((curr) => {
      return {
        ...curr,
        [valToUpd]: timeExtracted,
      };
    });
  };

  return (
    <Card sx={{ mb: 0.4 }}>
      <ListItem>
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
                    .hour(pickerValues.from.split(":")[0])
                    .minute(pickerValues.from.split(":")[1])}
                  ampm={false}
                  onChange={(newValue) => handleChange(newValue, "from")}
                />
                -
                <TimePicker
                  defaultValue={dayjs().set("hour", "0").set("minute", 0)}
                  value={dayjs()
                    .hour(pickerValues.to.split(":")[0])
                    .minute(pickerValues.to.split(":")[1])}
                  ampm={false}
                  onChange={(newValue) => handleChange(newValue, "to")}
                />
              </LocalizationProvider>
            </Box>
            <Button
              fullWidth={true}
              onClick={() => updateTime(item.id, "from")}
            >
              Updatera tid
            </Button>
          </Box>
        )}
        <Button onClick={() => setChangeTime(!changeTime)}>
          {!changeTime ? "Ändra" : "Avbryt"}
        </Button>

        <IconButton onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </ListItem>
    </Card>
  );
}

export default PopupListItem;
