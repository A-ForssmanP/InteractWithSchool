import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { addDays, eachDayOfInterval } from "date-fns";
import { useEffect } from "react";

function RangeDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    filterWeekDays();
  }, [endDate]);

  //handle dateChange
  const onChange = (dates) => {
    console.log(dates);
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
    // const filteredWeekDays = daysOfInterval.filter();
    console.log(daysInInterval);
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
      excludeDates={[addDays(new Date().getDay()), addDays(new Date(), 5)]}
    />
  );
}

export default RangeDatePicker;
