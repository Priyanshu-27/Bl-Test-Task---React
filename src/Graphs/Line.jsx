import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const LineGraph = ({ data }) => {
  const options = {
    scales: {
      x: {
        type: "linear",
        position: "bottom",
      },
      y: {
        type: "logarithmic",
        position: "left",
        min: 1,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // Increase the borderWidth for better visibility
  data.datasets[0].borderWidth = 4;

  return (
    <div className="w-full h-[130px] mt-[-30px]">
      <Line data={data} options={options} />
    </div>
  );
};

export default LineGraph;
