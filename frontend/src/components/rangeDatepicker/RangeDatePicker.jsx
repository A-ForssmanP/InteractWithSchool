import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { addDays, eachDayOfInterval, setHours, setMinutes } from "date-fns";
import { Box, Card, Tab, Button, Divider, Stack } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticTimePicker } from "@mui/x-date-pickers/StaticTimePicker";
import dayjs from "dayjs";
import TabsBox from "../tabsBox/TabsBox";

function RangeDatePicker({ addSelectedDates }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  // const [timeValue, setTimeValue] = useState(dayjs(""));

  useEffect(() => {
    filterWeekDays();
  }, [startDate, endDate]);

  //handle dateChange
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  // filter days in interval to only include weekdays
  function filterWeekDays() {
    const daysInInterval = eachDayOfInterval({
      start: startDate,
      end: endDate,
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
    // Disable past dates
    return date >= new Date();
  };

  // handle days is done
  const daysIsDone = () => {
    // console.log(selectedDates);
    addSelectedDates(selectedDates);
  };

  return (
    <Box>
      <Stack
        display={"flex"}
        justifyContent={"center"}
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        divider={<Divider orientation="vertical" flexItem />}
        marginTop={10}
        pb={5}
        // width={{ sm: 250 }}
      >
        <DatePicker
          // onSelect={handleDateSelect}
          // highlightDates={[endDate]}
          // swapRange
          // selected={startDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          // selectsDisabledDaysInRange
          inline
          calendarStartDay={1}
          showWeekNumbers
          filterDate={isWeekday}
          // excludeDates={[addDays(new Date().getDay()), addDays(new Date(), 5)]}
        />
        <Button onClick={daysIsDone} variant="contained">
          Dagar
        </Button>
      </Stack>
    </Box>
  );
}

export default RangeDatePicker;
