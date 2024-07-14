import Chart from "chart.js/auto";
import { Colors } from "chart.js";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  //178 skoldagar
  return (
    <Doughnut
      data={{
        labels: ["Dagar kvar", "Gjorda"],
        datasets: [
          {
            data: [40, 220],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
          },
        ],
      }}
    />
  );
}

export default DoughnutChart;
