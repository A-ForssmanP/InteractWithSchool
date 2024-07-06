import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
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
    //reset the time value
    if (reset) {
      setValue(dayjs().set("hour", 24).set("minutes", 0));
    }
  }, [reset]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        value={value}
        ampm={false}
        label={labelText}
        onChange={(newValue) => {
          const date = new Date(newValue);
          const timeExtracted = date.toLocaleTimeString().slice(0, 5);
          const updatedValue = timeExtracted;
          handleChange(timeKey, updatedValue);
        }}
        disabled={isDisabled}
      />
    </LocalizationProvider>
  );
}

export default TimePickerResponsive;
