import { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { getHours, getMinutes } from "date-fns";

function TimePickerResponsive({ labelText, handleChange, timeValue }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        defaultValue={dayjs("")}
        ampm={false}
        label={labelText}
        onChange={(newValue) => {
          const hours = getHours(newValue.$d);
          const minutes = getMinutes(newValue.$d);
          const value = hours + ":" + minutes;
          handleChange(timeValue, value);
        }}
      />
    </LocalizationProvider>
  );
}

export default TimePickerResponsive;
