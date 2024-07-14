import { Box, Typography } from "@mui/material";
import { getDayOfYear } from "date-fns";
import DoughnutChart from "../doughnutChart/DoughnutChart";
import { useState, useEffect } from "react";

function ChartYearProg() {
  //178 skoldagar
  const [chartData, setChartData] = useState({
    labels: ["Dagar kvar", "Dagar Gjorda"],
    data: [40, 220],
  });

  useEffect(() => {
    const dayValues = handleTimeElapsed();
    console.log(dayValues);
  }, []);

  /* CONTINUE HERE! 
    CALULATE FROM START DATE???
  */
  //get the day-number of the current day in the year
  const getCurrentDayNumber = () => {
    const result = getDayOfYear(new Date());
    return result;
  };

  // caluclate the remaining days of schoolYear
  const daysRemaining = (dayNumber) => {
    return 178 - dayNumber;
  };

  // get days elapsed and days remaining of the schoolYear
  const handleTimeElapsed = () => {
    const isDayNumber = getCurrentDayNumber();
    const isRemaining = daysRemaining(isDayNumber);
    return [isRemaining, isDayNumber];
  };

  return (
    <Box>
      <Typography variant="h4" fontSize={23} textAlign={"center"}>
        Läsåret
      </Typography>
      <Box>
        <DoughnutChart chartData={chartData} />
      </Box>
    </Box>
  );
}

export default ChartYearProg;
