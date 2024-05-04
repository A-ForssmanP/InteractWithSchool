import DatePicker from "react-datepicker";
import { useState } from "react";
import { Button, Box } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "react-datepicker/dist/react-datepicker.css";

function Callendar({ getDates, isDisabled }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateIsDone, setDateIsDone] = useState(false);
  // //set the span of the selected dates.
  // const onChange = (dates) => {
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };
  const handleClick = () => {
    const fromD = new Date(startDate).toDateString();
    const toD = new Date(endDate).toDateString();
    getDates(fromD, toD);
  };
  return (
    <div>
      <Box display="flex" justifyContent={"space-between"}>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          startDate={startDate}
          endDate={endDate}
          selectsStart
          // selectsRange
          // inline
          showIcon
          dateFormat="dd/MM/yyyy"
          calendarStartDay={1}
          showWeekNumbers
          disabled={isDisabled}
        />
        <p>Till</p>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          showIcon
          dateFormat="dd/MM/yyyy"
          calendarStartDay={1}
          showWeekNumbers
          disabled={isDisabled}
        />
        {dateIsDone ? (
          <CheckCircleOutlineIcon color="success" />
        ) : (
          <ErrorOutlineIcon color="disabled" />
        )}
      </Box>

      <Button
        variant="contained"
        fullWidth
        color="success"
        onClick={handleClick}
        disabled={isDisabled}
      >
        KLAR
        <DoneIcon sx={{ height: "1.1rem" }} />
      </Button>
    </div>
  );
}

export default Callendar;
