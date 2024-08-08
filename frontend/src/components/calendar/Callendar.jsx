import DatePicker from "react-datepicker";
import { useState } from "react";
import { Button, Box } from "@mui/material";

import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

import "react-datepicker/dist/react-datepicker.css";

function Callendar({
  getDates,
  isDisabled,
  fieldIsDone,
  isDone,
  fieldIsNotDone,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleClick = () => {
    const fromD = new Date(startDate).toDateString();
    const toD = new Date(endDate).toDateString();
    getDates(fromD, toD);
    fieldIsDone("dates");
  };

  return (
    <div>
      <Box
        display="flex"
        justifyContent={"space-between"}
        alignItems="center"
        flexDirection={{ xs: "column", sm: "row" }}
        gap={{ xs: 1, sm: 0 }}
        pt={{ xs: 1, sm: 0 }}
      >
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          startDate={startDate}
          endDate={endDate}
          selectsStart
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
        {isDone ? (
          <>
            <Button onClick={() => fieldIsNotDone("dates")}>Ändra</Button>
            <CheckCircleOutlineIcon color="success" />
          </>
        ) : (
          <ErrorOutlineIcon color="disabled" />
        )}
      </Box>

      {!isDone && (
        <Button
          sx={{ margin: "1rem 0" }}
          variant="contained"
          fullWidth
          color="success"
          onClick={handleClick}
        >
          KLAR
        </Button>
      )}
    </div>
  );
}

export default Callendar;
