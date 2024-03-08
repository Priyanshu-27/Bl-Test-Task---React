import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
const DoughnutChart = ({ data }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="w-[250px] h-[250px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
