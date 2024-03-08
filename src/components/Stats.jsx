import React from "react";
import LineGraph from '../Graphs/Line'

const StatBox = ({
  title,
  cases,
  percentageIncrease,
  casesColor,
  lineGraphColor,
  lineGraphData, // Pass the line graph data as a prop
}) => {
  const casesStyle = {
    color: casesColor || "black",
  };

  const lineGraphStyle = {
    backgroundColor: lineGraphColor || "gray",
  };

  return (
    <div className={`w-[300px] h-[190px] p-6 rounded-2xl shadow-sm bg-white`}>
      <LineGraph data={lineGraphData} style={lineGraphStyle} />
      <div className="flex flex-row justify-between items-center ">
        <div style={casesStyle} className="text-2xl font-bold mr-2">
          {cases}
        </div>
        <div className="text-green-500">+{percentageIncrease}% Increase</div>
      </div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
    </div>
  );
};

export default StatBox;
