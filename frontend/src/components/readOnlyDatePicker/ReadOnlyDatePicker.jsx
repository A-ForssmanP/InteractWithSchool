import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function ReadOnlyDatePicker() {
  const [startDate, setStartDate] = useState(null);
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          placeholderText="This is readOnly"
          readOnly
          inline
          calendarStartDay={1}
          showWeekNumbers
        />
      </LocalizationProvider>
    </Box>
  );
}

export default ReadOnlyDatePicker;
