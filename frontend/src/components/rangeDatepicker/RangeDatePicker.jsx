import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { addDays, eachDayOfInterval, setHours, setMinutes } from "date-fns";
import {
  Box,
  Card,
  Tab,
  Button,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import dayjs from "dayjs";
import { month } from "dayjs";
import TabsBox from "../tabsBox/TabsBox";
import "./RangeDatePicker.css";

function RangeDatePicker({
  addSelectedDates,
  resetSelected,
  reset,
  toBeExamined,
  isRegistrated,
}) {
  const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [done, setDone] = useState(false);
  // const [timeValue, setTimeValue] = useState(dayjs(""));

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
    // console.log(dates);
    setDone(false);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    // if (end === null) {
    //   setEndDate(start);
    // } else {
    //   setEndDate(end);
    // }
  };

  // filter days in interval to only include weekdays
  function filterWeekDays() {
    const validEndDate = endDate === null ? startDate : endDate;
    // console.log(validEndDate);
    const daysInInterval = eachDayOfInterval({
      start: startDate,
      end: validEndDate,
    });
    // console.log(daysInInterval);
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
    // console.log(new Date() < date);
    // console.log(date);
    // // Disable past dates
    // if (date === Date()) {
    //   return false;
    // }

    return true;
    // else if (new Date(date) === new Date()) {
    //   return true;
    // }
  };

  // handle days is done
  const daysIsDone = (e) => {
    // console.log(e.target.style);
    // console.log(selectedDates);
    //wORKING ON RESETING DATES. ADD AN ID BEFORE ADD THE SELECTED DATES???
    // console.log(selectedDates);
    addSelectedDates(selectedDates);
    setDone(true);
    // e.target.textContent = "Återställ";
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
      // [
      //   addDays(new Date(), 1),
      //   addDays(new Date(), 2),
      //   addDays(new Date(), 3),
      //   addDays(new Date(), 4),
      // ],
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
        marginTop={10}

        // width={{ sm: 250 }}
      >
        <Box>
          <DatePicker
            // onSelect={handleDateSelect}
            // highlightDates={[endDate]}
            // swapRange
            // selected={startDate}
            onChange={onChange}
            startDate={startDate}
            // startDate={}
            endDate={endDate}
            selectsRange
            // selectsDisabledDaysInRange
            inline
            calendarStartDay={1}
            showWeekNumbers
            filterDate={isWeekday}
            highlightDates={highlightWithRanges}
            // excludeDates={[addDays(new Date().getDay()), addDays(new Date(), 5)]}
            // minDate={new Date()}
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
          <Button onClick={daysIsDone} variant={"contained"}>
            Dagar
          </Button>
        ) : (
          <Button onClick={resetSelectedDates} variant={"contained"}>
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
