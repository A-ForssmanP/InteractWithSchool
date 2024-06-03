import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useEffect } from "react";
import { addDays, eachDayOfInterval, setHours, setMinutes } from "date-fns";
import {
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Box,
} from "@mui/material";

function RangeDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    filterWeekDays();
  }, [endDate]);

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

    const filteredWeekDays = daysInInterval.filter((day) => {
      return day.getDay() !== 0 && day.getDay() !== 6;
    });

    console.log(filteredWeekDays);
  }

  const isWeekday = (date) => {
    // Disable weekends
    if (date.getDay() === 0 || date.getDay() === 6) {
      return false;
    }
    // Disable past dates
    return date >= new Date();
  };
  // const handleDateSelect = () => {
  //   console.log("hej");
  // };
  return (
    <Box
      bgcolor={"red"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={1.2}
    >
      <DatePicker
        // onSelect={handleDateSelect}
        // highlightDates={[new Date(), new Date()]}
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
      <List
        sx={{
          width: "100%",
          maxWidth: "21rem",
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: 300,
          "& ul": { padding: 0 },
        }}
        subheader={<li />}
      >
        {[0, 1, 2, 3, 4].map((sectionId) => (
          <li key={`section-${sectionId}`}>
            <ul>
              <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
              {[0, 1, 2].map((item) => (
                <ListItem key={`item-${sectionId}-${item}`}>
                  <ListItemText primary={`Item ${item}`} />
                </ListItem>
              ))}
            </ul>
          </li>
        ))}
      </List>
    </Box>
  );
}

export default RangeDatePicker;
