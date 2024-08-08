import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { eachDayOfInterval } from "date-fns";
import { Box, Card, Button, Divider, Stack, Typography } from "@mui/material";
import dayjs from "dayjs";
import "./RangeDatePicker.css";

function RangeDatePicker({
  addSelectedDates,
  resetSelected,
  reset,
  toBeExamined,
  isRegistrated,
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [done, setDone] = useState(false);

  const months = [
    "Jan",
    "Feb",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec",
  ];

  useEffect(() => {
    if (reset) {
      resetSelectedDates();
    } else {
      filterWeekDays();
    }
  }, [startDate, endDate, reset]);

  //handle dateChange
  const onChange = (dates) => {
    setDone(false);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // filter days in interval to only include weekdays
  function filterWeekDays() {
    const validEndDate = endDate === null ? startDate : endDate;
    const daysInInterval = eachDayOfInterval({
      start: startDate,
      end: validEndDate,
    });
    const isFiltered = daysInInterval.filter((day) => {
      return day.getDay() !== 0 && day.getDay() !== 6;
    });

    setSelectedDates(isFiltered);
  }

  //filter the weeks from Sat-Sun
  const isWeekday = (date) => {
    // Disable weekends
    if (date.getDay() === 0 || date.getDay() === 6) {
      return false;
    }
    return true;
  };

  // handle days is done
  const daysIsDone = (e) => {
    addSelectedDates(selectedDates);
    setDone(true);
  };
  // reset selectedDates
  const resetSelectedDates = () => {
    resetSelected();
    setSelectedDates([]);
    setDone(false);
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const highlightWithRanges = [
    {
      "react-datepicker__day--highlighted-custom-1": toBeExamined.map(
        (date) => date.date
      ),
    },
    {
      "react-datepicker__day--highlighted-custom-2":
        isRegistrated.isRegistrated.map((date) => new Date(date.date)),
    },
  ];

  return (
    <Box pb={5}>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box>
          <DatePicker
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            calendarStartDay={1}
            showWeekNumbers
            filterDate={isWeekday}
            highlightDates={highlightWithRanges}
          />
          <Box display={"flex"} justifyContent={"space-between"} p="0 .6rem">
            <Box display={"flex"} alignItems={"center"}>
              <Box bgcolor={"#80c511"} width={11} height={11}></Box>
              Registrerade Dagar
            </Box>
            <Box display={"flex"} alignItems={"center"}>
              <Box
                bgcolor={"rgba(255, 0, 255, 0.59)"}
                width={11}
                height={11}
              ></Box>
              Valda Dagar
            </Box>
          </Box>
        </Box>

        {!done ? (
          <Button onClick={daysIsDone} variant={"contained"} color="success">
            Dagar
          </Button>
        ) : (
          <Button
            onClick={resetSelectedDates}
            variant={"contained"}
            color="secondary"
          >
            Återställ
          </Button>
        )}
      </Stack>
      {done && (
        <Card sx={{ mt: 2 }}>
          {selectedDates.length ? (
            <Typography fontSize={22}>
              {selectedDates.length > 1
                ? `Valda Dagar: ${dayjs(selectedDates[0]).date()} ${
                    months[dayjs(selectedDates[0]).month()]
                  }
                 - ${dayjs(selectedDates[selectedDates.length - 1]).date()} 
                 ${
                   months[
                     dayjs(selectedDates[selectedDates.length - 1]).month()
                   ]
                 }`
                : `Vald Dag: ${dayjs(selectedDates).date()} ${
                    months[dayjs(selectedDates).month()]
                  }`}
            </Typography>
          ) : (
            <Typography color={"red"} fontSize={22}>
              Vald dag kan inte väljas
            </Typography>
          )}
        </Card>
      )}
    </Box>
  );
}

export default RangeDatePicker;
