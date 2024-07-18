import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { eachDayOfInterval } from "date-fns";
import DoughnutChart from "../doughnutChart/DoughnutChart";

function ChartYearProg() {
  const [chartData, setChartData] = useState({
    labels: ["Återstående Dagar", "Dagar Gjorda"],
    isSchoolData: [],
    isSummerBreakData: [],
  });

  useEffect(() => {
    schoolYearProgress();
  }, []);

  // get progress of school-year and summer-break
  const schoolYearProgress = () => {
    //get the intervall from start to end of days of school-period
    const schoolDaysInterval = eachDayOfInterval({
      start: new Date("2023,8,21"),
      end: new Date("2024,6,14"),
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
    const ToStringInterval = interval.map((day) => day.toDateString());
    const dayToString = currDay.toDateString();

    //get progress of days done
    const dayInInterval = ToStringInterval.indexOf(dayToString) + 1;

    //get days remaining
    const daysRemaining = interval.length - dayInInterval;

    setChartData(() => {
      return {
        labels: ["Återstående Dagar", "Dagar Gjorda"],
        isSchoolData: [daysRemaining, dayInInterval],
        isSummerBreakData: [],
      };
    });
  };

  // get progress of summer break
  const progressSummerBreak = (currDay, sumSchoolDays) => {
    //get the intervall from start to end of days of summer-break
    const summerBreakInterval = eachDayOfInterval({
      start: new Date("2024,6,15"),
      end: new Date("2024,8,20"),
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
        labels: ["Återstående Dagar", "Dagar Gjorda", "Antal skoldagar"],
        isSchoolData: [null, null, sumSchoolDays],
        isSummerBreakData: [daysRemaining, dayInInterval, null],
      };
    });
  };

  return (
    <Box>
      <Typography variant="h4" fontSize={23} textAlign={"center"}>
        {chartData.isSummerBreakData.length ? "Sommarlov!" : "Läsåret"}
      </Typography>
      <Box>
        <DoughnutChart chartData={chartData} />
      </Box>
    </Box>
  );
}

export default ChartYearProg;
