import { useState } from "react";
import RangeDatePicker from "../rangeDatepicker/RangeDatePicker";
import TimePickerResponsive from "../timePickerResponsive/TimePickerResponsive";
import { Box, Button, Stack } from "@mui/material";
import { set, getMinutes, getHours } from "date-fns";

function DayTimePicker() {
  const [selected, setSelected] = useState([]);
  const [timeValue, setTimeValue] = useState({});
  const [toBeExamined, setToBeExamined] = useState([]);

  const buttonDisabled = timeValue && timeValue.from && timeValue.to;
  console.log(toBeExamined);
  // add the selected days to the selected array
  const addSelectedDates = (arr) => {
    setSelected((curr) => {
      return [...curr, ...arr];
    });
  };

  // add the time to the selected dates
  const addTime = () => {
    setSelected((curr) => {
      return curr.map((date) => {
        return {
          date: date,
          times: timeValue,
          id: crypto.randomUUID(),
        };
      });
    });
  };

  // handle timeInput when it changes
  const timeValueChange = (timeValue, value) => {
    setTimeValue((curr) => {
      return {
        ...curr,
        [timeValue]: value,
      };
    });
  };

  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Box width={"fit-content"}>
        <Stack
          spacing={0}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <RangeDatePicker addSelectedDates={addSelectedDates} />
          <Box>
            <TimePickerResponsive
              labelText={"FRÅN"}
              handleChange={timeValueChange}
              timeValue="from"
            />
            <TimePickerResponsive
              labelText={"TILL"}
              handleChange={timeValueChange}
              timeValue="to"
            />
            <Box mt={0.6}>
              <Button
                variant="contained"
                disabled={!buttonDisabled}
                onClick={addTime}
                fullWidth
              >
                Tid
              </Button>
            </Box>
          </Box>
        </Stack>
        <Button>Granska</Button>
      </Box>
    </Box>
  );
}

export default DayTimePicker;
