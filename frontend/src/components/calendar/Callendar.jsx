import DatePicker from "react-datepicker";
import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";

function Callendar({ setDates }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  //   //set the span of the selected dates.
  //   const onChange = (dates) => {
  //     const [start, end] = dates;
  //     setStartDate(start);
  //     setEndDate(end);
  //   };
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
        endDate={endDate}
        selectsStart
        // selectsRange
        // inline
        showIcon
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        showWeekNumbers
      />
      <p>Till</p>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        showIcon
        dateFormat="dd/MM/yyyy"
        calendarStartDay={1}
        showWeekNumbers
      />
    </div>
  );
}

export default Callendar;
