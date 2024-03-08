import React from "react";
import { Bar } from "react-chartjs-2";

const BarGraph = ({ barGraphData }) => {
  // Ensure barGraphData is defined and has the expected structure
  if (!barGraphData) {
    console.error("Invalid barGraphData:", barGraphData);
    return null; // or return an error message or default content
  }

  // Extracting relevant data from barGraphData
  const confirmed = barGraphData.confirmed || 0;
  const deaths = barGraphData.deaths || 0;
  const recovered = barGraphData.recovered || 0;

  const data = {
    labels: ["Confirmed", "Deaths", "Recovered"],
    datasets: [
      {
        label: "Covid-19 Statistics",
        data: [confirmed, deaths, recovered],
        backgroundColor: ["#36a2eb", "#dc453d", "#95c251"], // Bar colors
        borderColor: ["#36a2eb", "#dc453d", "#95c251"], // Border colors
        borderWidth: 1,
        barThickness: 45,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  console.log("Received data in datasets array:", data.datasets[0].data); // Log data for debugging

  return (
    <div className="flex items-center justify-center xs:justify-center xs:items-center xs:w-[400px] w-[1000px] h-[250px] bg-white rounded-xl mt-4">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;
