import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { getHours, getMinutes } from "date-fns";
import { useEffect } from "react";

function TimePickerResponsive({
  labelText,
  handleChange,
  timeKey,
  reset,
  isDisabled,
}) {
  const [value, setValue] = useState(dayjs().set("hour", 24).set("minutes", 0));

  useEffect(() => {
    //reset the value
    if (reset) {
      console.log(reset);
      setValue(dayjs().set("hour", 24).set("minutes", 0));
    }
  }, [reset]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        // defaultValue={dayjs("")}
        value={value}
        ampm={false}
        label={labelText}
        onChange={(newValue) => {
          const hours = getHours(newValue.$d);
          const minutes = getMinutes(newValue.$d);
          const updatedValue = hours + ":" + minutes;
          handleChange(timeKey, updatedValue);
        }}
        disabled={isDisabled}
      />
    </LocalizationProvider>
  );
}

export default TimePickerResponsive;
