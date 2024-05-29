import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

function RangeDatePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  //handle dateChange
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <DatePicker
      swapRange
      selected={startDate}
      onChange={onChange}
      startDate={startDate}
      endDate={endDate}
      // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
      selectsRange
      selectsDisabledDaysInRange
      inline
      calendarStartDay={1}
      showWeekNumbers
      excludeD={["5-7-24"]}
    />
  );
}

export default RangeDatePicker;
