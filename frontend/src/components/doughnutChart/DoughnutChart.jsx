import Chart from "chart.js/auto";
import { Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart({ chartData }) {
  return (
    <Doughnut
      data={{
        labels: chartData.labels.map((label) => label),
        datasets: [
          {
            data: chartData.data.map((data) => data),
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          },
        ],
      }}
    />
  );
}

export default DoughnutChart;
