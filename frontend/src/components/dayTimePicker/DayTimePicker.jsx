import RangeDatePicker from "../rangeDatepicker/RangeDatePicker";
import TimePickerResponsive from "../timePickerResponsive/TimePickerResponsive";
import AlertSuccess from "../alertSuccess/AlertSuccess";
import PopupList from "../popupList/PopupList";
import { useEffect, useState } from "react";
import { Box, Button, Stack } from "@mui/material";

function DayTimePicker(isRegistrated) {
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

  function checoutDates() {
    setToBeExamined((curr) => {
      return [...curr, ...selected];
    });
    setSelected([]);
    setTimeValue({ from: null, to: null });
    setReset(true);
  }

  const buttonDisabled = timeValue.from && timeValue.to;

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

  // delete dates in toBeExamined
  const deleteDates = (id) => {
    setToBeExamined((curr) => {
      return curr.filter((d) => d.id !== id);
    });
  };

  // update time on date in toBeExamined arr.
  const handleTimeUpdate = (id, newTime) => {
    setToBeExamined((curr) => {
      return curr.map((date) => {
        if (date.id === id) {
          return {
            ...date,
            times: {
              from: newTime.from,
              to: newTime.to,
            },
          };
        } else {
          return date;
        }
      });
    });
  };

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
            isRegistrated={isRegistrated}
          />
          <Box>
            <Box
              display="flex"
              flexDirection={{ xs: "column", sm: "row" }}
              gap={{ xs: 2, sm: 0 }}
            >
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
            </Box>

            <Box mt={0.6}>
              <Button
                variant="contained"
                disabled={!buttonDisabled}
                onClick={addTime}
                color="success"
                fullWidth
              >
                Tid
              </Button>
            </Box>
          </Box>
        </Stack>
        <Box
          mt={3}
          display={"flex"}
          justifyContent={showSuccessFeedback ? "space-between" : "flex-end"}
        >
          {showSuccessFeedback && <AlertSuccess text={"DATUM TILLAGDA!"} />}
          <Button
            variant="contained"
            color="success"
            disabled={showPopup || toBeExamined.length < 1}
            onClick={() => setShowPopup(true)}
          >
            Klar
          </Button>
        </Box>
      </Box>
      {showPopup && (
        <PopupList
          items={toBeExamined}
          closePopup={() => setShowPopup(false)}
          handleTimeUpdate={handleTimeUpdate}
          handleDelete={deleteDates}
        />
      )}
    </Box>
  );
}

export default DayTimePicker;
