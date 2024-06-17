import { useEffect, useState } from "react";
import RangeDatePicker from "../rangeDatepicker/RangeDatePicker";
import TimePickerResponsive from "../timePickerResponsive/TimePickerResponsive";
import AlertSuccess from "../alertSuccess/AlertSuccess";
import { Box, Button, Stack } from "@mui/material";
import PopupList from "../popupList/PopupList";
import { set, getMinutes, getHours } from "date-fns";
import zIndex from "@mui/material/styles/zIndex";
import dayjs from "dayjs";

function DayTimePicker() {
  const [selected, setSelected] = useState([]);
  const [timeValue, setTimeValue] = useState({
    from: null,
    to: null,
  });
  const [toBeExamined, setToBeExamined] = useState([]);
  const [pushToBeExamined, setPushToBeExamined] = useState(false);
  const [showSuccessFeedback, setShowSuccessFeedback] = useState(false);
  const [reset, setReset] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (pushToBeExamined) {
      checoutDates();
      toogleSuccessFeedback();
      setPushToBeExamined(false);
    }
  }, [pushToBeExamined]);
  // console.log(toBeExamined);
  // console.log(timeValue.to);
  // Clear the selected and timeValue arrays and
  // push selected-items to the toBeExamined array
  function checoutDates() {
    setToBeExamined((curr) => {
      return [...curr, ...selected];
    });
    setSelected([]);
    setTimeValue({ from: null, to: null });
    setReset(true);
  }

  const buttonDisabled = timeValue.from && timeValue.to;
  // console.log(selected);
  // add the selected days to the selected array
  const addSelectedDates = (arr) => {
    setSelected((curr) => {
      return [...curr, ...arr];
    });
  };

  //reset selected array
  const resetSelected = () => {
    setSelected([]);
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
  const timeValueChange = (timeKey, value) => {
    setTimeValue((curr) => {
      return {
        ...curr,
        [timeKey]: value,
      };
    });
  };

  // Toogle success feedback when both date and time has been added
  //to the toBeExamined array
  function toogleSuccessFeedback() {
    setShowSuccessFeedback(true);
    setTimeout(() => {
      setShowSuccessFeedback(false);
    }, 2600);
  }

  return (
    <Box display={"flex"} justifyContent={"center"} position={"relative"}>
      <Box width={"fit-content"} position={"relative"}>
        <Stack
          spacing={0}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <RangeDatePicker
            addSelectedDates={addSelectedDates}
            resetSelected={resetSelected}
            reset={pushToBeExamined}
            toBeExamined={toBeExamined}
          />
          <Box>
            <TimePickerResponsive
              labelText={"FRÅN"}
              handleChange={timeValueChange}
              timeKey="from"
              reset={pushToBeExamined}
              isDisabled={selected.length < 1}
            />
            <TimePickerResponsive
              labelText={"TILL"}
              handleChange={timeValueChange}
              timeKey="to"
              reset={pushToBeExamined}
              isDisabled={selected.length < 1}
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
              {showSuccessFeedback && <AlertSuccess text={"DATUM TILLAGDA!"} />}
            </Box>
          </Box>
        </Stack>
        <Button
          disabled={showPopup || toBeExamined.length < 1}
          onClick={() => setShowPopup(true)}
        >
          Skicka in
        </Button>
      </Box>
      {showPopup && (
        <PopupList
          items={toBeExamined}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </Box>
  );
}

export default DayTimePicker;
