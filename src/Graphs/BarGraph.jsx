import React from "react";
import { Bar } from "react-chartjs-2";

const BarGraph = ({ stateWiseData }) => {
  // Extracting relevant data from stateWiseData
  const confirmed = stateWiseData.total?.confirmed || 0;
  const deaths = stateWiseData.total?.deceased || 0;
  const recovered = stateWiseData.total?.recovered || 0;

  const data = {
    labels: ["Confirmed", "Deaths", "Recovered"],
    datasets: [
      {
        label: "Covid-19 Statistics",
        data: [confirmed, deaths, recovered],
        backgroundColor: ["#36a2eb", "#dc453d", "#95c251"], // Bar colors
        borderColor: ["#36a2eb", "#dc453d", "#95c251"], // Border colors
        borderWidth: 1,
        barThickness: 25,
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
    <div className="flex items-center justify-center w-[1000px] h-[250px] bg-white rounded-xl mt-4">
      {/* Check if data is available before rendering Bar component */}
      {confirmed || deaths || recovered ? (
        <Bar data={data} options={options} />
      ) : (
        <p>No data available for the selected state.</p>
      )}
    </div>
  );
};

export default BarGraph;
