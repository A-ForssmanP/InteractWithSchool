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
import TabsBox from "../tabsBox/TabsBox";

function RangeDatePicker({ addSelectedDates }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);
  const [done, setDone] = useState(false);
  // const [timeValue, setTimeValue] = useState(dayjs(""));

  useEffect(() => {
    filterWeekDays();
  }, [startDate, endDate]);

  //handle dateChange
  const onChange = (dates) => {
    setDone(false);
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
    return true;
    // // Disable past dates
    // // return date < dayjs(new Date());
    // else if (new Date(date) === new Date()) {
    //   return true;
    // }
  };

  // handle days is done
  const daysIsDone = () => {
    // console.log(selectedDates);
    addSelectedDates(selectedDates);
    setDone(true);
  };

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
      {done && (
        <Card sx={{ mt: 2 }}>
          <Typography>
            {selectedDates.length > 1
              ? `Valda Dagar: ${startDate.toDateString()} - ${endDate.toDateString()}`
              : `Vald Dag:${startDate.toDateString()}`}
          </Typography>
        </Card>
      )}
    </Box>
  );
}

export default RangeDatePicker;
