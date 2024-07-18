import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData }) {
  const { isSchoolData, isSummerBreakData } = chartData;

  // return an object with data, based upon if its school-period or summer-break
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

  const data = handleData();
  const options = {};

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
