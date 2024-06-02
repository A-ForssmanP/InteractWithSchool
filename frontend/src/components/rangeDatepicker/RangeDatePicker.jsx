// import "react-datepicker/dist/react-datepicker.css";
import { DateRangeCalendar } from "@mui/x-date-pickers/DateTimePicker";
import { useState } from "react";

function RangeDatePicker() {
  return <DateRangeCalendar />;

  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(null);
  // //handle dateChange
  // const onChange = (dates) => {
  //   console.log(dates);
  //   const [start, end] = dates;
  //   setStartDate(start);
  //   setEndDate(end);
  // };
  // const isWeekday = (date) => {
  //   const day = date.getDay();
  //   return day !== 0 && day !== 6;
  // };
  // const handleDateSelect = () => {
  //   console.log("hej");
  // };
  // return (
  //   <DatePicker
  //     onSelect={handleDateSelect}
  //     highlightDates={[new Date(), new Date()]}
  //     // swapRange
  //     // selected={startDate}
  //     onChange={onChange}
  //     startDate={startDate}
  //     endDate={endDate}
  //     selectsRange
  //     // selectsDisabledDaysInRange
  //     inline
  //     calendarStartDay={1}
  //     showWeekNumbers
  //     filterDate={isWeekday}
  //     // excludeDates={[addDays(new Date(), 1), addDays(new Date(), 5)]}
  //     excludeDates={["2024-06-15"]}
  //   />
  // );
}

export default RangeDatePicker;
