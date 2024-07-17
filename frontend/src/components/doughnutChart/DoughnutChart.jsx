import Chart from "chart.js/auto";
import { Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData }) {
  const { isSchoolData, isSummerBreakData } = chartData;

  // get data depending if its school-period or summer-break
  const handleData = () => {
    if (isSummerBreakData.length) {
      return {
        labels: chartData.labels.map((label) => label),
        datasets: [
          {
            label: ["SommarlovsDagar"],
            data: isSummerBreakData.map((data) => data),
            backgroundColor: [
              "rgb(255,99,132)",
              "rgb(85, 220, 122)",
              "rgb(54, 162, 235)",
            ],
          },
          {
            label: "Antal skoldagar",
            data: isSchoolData.map((data) => data),
            backgroundColor: [null, null, "rgb(54, 162, 235)"],
          },
        ],
      };
    } else {
      return {
        labels: chartData.labels.map((label) => label),
        datasets: [
          {
            label: "Skoldagar",
            data: isSchoolData.map((data) => data),
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          },
        ],
      };
    }
  };
  // [1, 2, null]
  const data = handleData();
  const options = {
    legend: {
      display: false,
    },
  };
  // {
  //   labels: chartData.labels.map((label) => label),
  //   datasets: [
  //     {
  //       data: isSchoolData.map((data) => data),
  //       backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
  //     },
  //   ],
  // };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
