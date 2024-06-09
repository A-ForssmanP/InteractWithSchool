import { useEffect, useState } from "react";
import RangeDatePicker from "../rangeDatepicker/RangeDatePicker";
import TimePickerResponsive from "../timePickerResponsive/TimePickerResponsive";
import AlertSuccess from "../alertSuccess/AlertSuccess";
import { Box, Button, Stack } from "@mui/material";
import { set, getMinutes, getHours } from "date-fns";
import zIndex from "@mui/material/styles/zIndex";

function DayTimePicker() {
  const [selected, setSelected] = useState([]);
  const [timeValue, setTimeValue] = useState({ from: null, to: null });
  const [toBeExamined, setToBeExamined] = useState([]);
  const [pushToBeExamined, setPushToBeExamined] = useState(false);

  useEffect(() => {
    console.log("PUSHED!");
    checoutDates();
    setPushToBeExamined(false);
  }, [pushToBeExamined]);
  console.log(toBeExamined);

  // Clear the selected and timeValue arrays and
  // push selected-items to the toBeExamined array
  function checoutDates() {
    setToBeExamined((curr) => {
      return [...curr, ...selected];
    });
    setSelected([]);
    setTimeValue({ from: null, to: null });
  }

  const buttonDisabled = timeValue.from && timeValue.to;
  // console.log(selected);
  // add the selected days to the selected array
  const addSelectedDates = (arr) => {
    setSelected((curr) => {
      return [...curr, ...arr];
    });
  };

  // add the time to the selected dates and
  // set pushToBeExamined to true
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
    setPushToBeExamined(true);
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
      <Box width={"fit-content"} position={"relative"}>
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
              <AlertSuccess text={"DATUM TILLAGDA!"} />
            </Box>
          </Box>
        </Stack>
        <Button>Granska</Button>
      </Box>
    </Box>
  );
}

export default DayTimePicker;
