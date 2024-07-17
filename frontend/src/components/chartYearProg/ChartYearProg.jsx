import { Box, Typography } from "@mui/material";
// import { getDayOfYear } from "date-fns";
import { eachDayOfInterval } from "date-fns";
import DoughnutChart from "../doughnutChart/DoughnutChart";
import { useState, useEffect } from "react";

function ChartYearProg() {
  //178 skoldagar
  const [chartData, setChartData] = useState({
    labels: ["Dagar kvar", "Dagar Gjorda"],
    isSchoolData: [],
    isSummerBreakData: [],
  });

  useEffect(() => {
    schoolYearProgress();
  }, []);

  // get progress of school year and summer break
  const schoolYearProgress = () => {
    //get the intervall from start to end of days in school period
    const schoolDaysInterval = eachDayOfInterval({
      start: new Date("2024,7,11"),
      end: new Date("2024,7,13"),
    });
    //check if current day is a school day
    const currentDay = new Date();
    const isSchoolDay = schoolDaysInterval.some(
      (date) => date.toDateString() === currentDay.toDateString()
    );

    if (isSchoolDay) {
      progressSchool(currentDay, schoolDaysInterval);
    } else {
      progressSummerBreak(currentDay, schoolDaysInterval.length);
    }
  };

  // get progress of school period
  const progressSchool = (currDay, interval) => {
    const intervalToString = interval.map((day) => day.toDateString());
    const dayToString = currDay.toDateString();

    //get progress of days done
    const dayInInterval = intervalToString.indexOf(dayToString) + 1;

    //get days remaining
    const daysRemaining = interval.length - dayInInterval;

    setChartData(() => {
      return {
        labels: ["Dagar kvar", "Dagar Gjorda"],
        isSchoolData: [daysRemaining, dayInInterval],
        isSummerBreakData: [],
      };
    });
    console.log(dayInInterval);
    console.log(daysRemaining);
  };

  // get progress of summer break
  const progressSummerBreak = (currDay, sumSchoolDays) => {
    //get the intervall from start to end of days in summer break
    const summerBreakInterval = eachDayOfInterval({
      start: new Date("2024,7,16"),
      end: new Date("2024,7,22"),
    });

    const toStringSummerBreakInterval = summerBreakInterval.map((day) =>
      day.toDateString()
    );
    const toStringDay = currDay.toDateString();

    // get progress of days done
    const dayInInterval = toStringSummerBreakInterval.indexOf(toStringDay) + 1;

    //get days remaining
    const daysRemaining = summerBreakInterval.length - dayInInterval;

    setChartData(() => {
      return {
        labels: ["Dagar kvar", "Dagar Gjorda", "Antal skoldagar"],
        isSchoolData: [null, null, sumSchoolDays],
        isSummerBreakData: [daysRemaining, dayInInterval, null],
      };
    });

    console.log(dayInInterval);
    console.log(daysRemaining);
  };

  /* CONTINUE HERE! 
    CALULATE FROM START DATE???
  */
  //get the day-number of the current day in the year
  // const getCurrentDayNumber = () => {
  //   const result = getDayOfYear(new Date());
  //   return result;
  // };

  // // caluclate the remaining days of schoolYear
  // const daysRemaining = (dayNumber) => {
  //   return 178 - dayNumber;
  // };

  // // get days elapsed and days remaining of the schoolYear
  // const handleTimeElapsed = () => {
  //   const isDayNumber = getCurrentDayNumber();
  //   const isRemaining = daysRemaining(isDayNumber);
  //   return [isRemaining, isDayNumber];
  // };

  return (
    <Box>
      <Typography variant="h4" fontSize={23} textAlign={"center"}>
        {chartData.isSummerBreakData.length ? "Sommarlov!" : "Läsårets dagar"}
      </Typography>
      <Box>
        <DoughnutChart chartData={chartData} />
      </Box>
    </Box>
  );
}

export default ChartYearProg;
