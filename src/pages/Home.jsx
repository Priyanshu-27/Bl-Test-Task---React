import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatBox from "../components/Stats";
import BarGraph from "../Graphs/BarGraph";
import Symptom from "../assets/symtom.png";
import DoughnutChart from "../Graphs/DoughnutChart";
import map from "../assets/map.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Home = () => {
  const [data, setData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(getTodayDate());
  const [selectedState, setSelectedState] = useState("AN"); // Default state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://data.covid19india.org/v4/min/timeseries.min.json"
        );
        setData(response.data);
        console.log("Fetched data:", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const getDataForDate = (selectedDate, stateCode) => {
    if (!data || !data[stateCode] || !data[stateCode].dates) return {};

    const formattedDate = selectedDate.split("T")[0];
    const dateData = data[stateCode].dates[formattedDate] || {};

    return {
      confirmed: dateData.total?.confirmed || 0,
      deaths: dateData.total?.deceased || 0,
      recovered: dateData.total?.recovered || 0,
      tested: dateData.total?.tested || 0,
    };
  };

  const getTotalCasesForState = (stateCode) => {
    if (!data || !data[stateCode] || !data[stateCode].total) return 0;

    return data[stateCode].total.confirmed || 0;
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  function getTodayDate() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
  }

  const { confirmed, deaths, recovered, tested } = getDataForDate(
    selectedDate,
    selectedState
  );

  const lineGraphData = {
    labels: Object.keys(data?.[selectedState]?.dates || {}).map(
      (date) => date.split("T")[0]
    ),
    datasets: [
      {
        label: "Confirmed Cases",
        data: Object.values(data?.[selectedState]?.dates || {}).map(
          (date) => date.total?.confirmed || 0
        ),
        fill: false,
        borderColor: "#007BFF",
        borderWidth: 2,
      },
    ],
  };

  const doughnutChartData = {
    labels: ["Confirmed", "Deaths", "Recovered", "Total State Cases"],
    datasets: [
      {
        data: [
          confirmed,
          deaths,
          recovered,
          getTotalCasesForState(selectedState),
        ],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4CAF50"],
      },
    ],
  };

  // Data for BarGraph
  const barGraphData = {
    confirmed,
    deaths,
    recovered,
  };

  // Calculate percentages
  const percentageConfirmed =
    getTotalCasesForState(selectedState) !== 0
      ? ((confirmed / getTotalCasesForState(selectedState)) * 100).toFixed(2)
      : 0;
  const percentageRecovered =
    getTotalCasesForState(selectedState) !== 0
      ? ((recovered / getTotalCasesForState(selectedState)) * 100).toFixed(2)
      : 0;
  const percentageDeaths =
    getTotalCasesForState(selectedState) !== 0
      ? ((deaths / getTotalCasesForState(selectedState)) * 100).toFixed(2)
      : 0;

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex flex-row items-start overflow-y-auto bg-[#f3f6fb] p-10">
          <div className="flex gap-20">
            <div>
              <div className="flex w-[300px] bg-white px-6 py-3 mb-4 rounded-xl">
                <label htmlFor="datePicker">Select Date: </label>
                <input
                  type="date"
                  id="datePicker"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </div>
              <div className="flex w-[300px] bg-white px-6 py-3 mb-4 rounded-xl">
                <label htmlFor="statePicker">Select State: </label>
                <select
                  id="statePicker"
                  value={selectedState}
                  onChange={handleStateChange}
                >
                  {/* Include all state options dynamically */}
                  {Object.keys(data || {}).map((stateCode) => (
                    <option key={stateCode} value={stateCode}>
                      {stateCode}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-row flex-shrink-0 gap-8">
                {data ? (
                  <>
                    <StatBox
                      title="Cases"
                      cases={confirmed}
                      percentageIncrease={percentageConfirmed}
                      casesColor="#26b8de"
                      lineGraphColor="green"
                      lineGraphData={lineGraphData}
                    />
                    <StatBox
                      title="Deaths"
                      cases={deaths}
                      percentageIncrease={percentageDeaths}
                      casesColor="#dc453d"
                      lineGraphColor="purple"
                      lineGraphData={lineGraphData}
                    />
                    <StatBox
                      title="Recovery"
                      cases={recovered}
                      percentageIncrease={percentageRecovered}
                      casesColor="#95c251"
                      lineGraphColor="orange"
                      lineGraphData={lineGraphData}
                    />
                  </>
                ) : (
                  <p>Loading.....</p>
                )}
              </div>
              <BarGraph barGraphData={barGraphData} />
              <div className="flex items-center bg-white w-[1000px] mt-2 rounded-lg">
                <div className="flex flex-col flex-grow p-6">
                  <h1 className="text-black font-bold text-2xl">State Map</h1>
                  <p>
                    Total Confirmed Cases in {selectedState}:{" "}
                    <span className="font-semibold text-[#26b8de]">
                      {getTotalCasesForState(selectedState)}
                    </span>
                  </p>
                  {/* Add more content here */}
                </div>

                <div className="ml-0 mr-20">
                  <DoughnutChart data={doughnutChartData} />
                </div>

                <div className="ml-0">
                  <img src={map} alt="map" className="w-[400px] h-[400px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center py-4 w-[300px] h-[650px] bg-white ml-6 rounded-2xl shadow-sm">
            <div className="w-[300px] h-[590px] bg-white ml-6 rounded-2xl shadow-sm">
              <h1 className="text-xl font-semibold mb-4">
                Live Updated (1min ago)
              </h1>
              <ul className="list-disc pl-5">
                <li className="mb-2">2 new cases in Pakistan</li>
                <li className="mb-2">8 new cases in Japan</li>
                <li className="mb-2">6 new cases in China</li>
                <li className="mb-2">3 new cases in Taiwan</li>
                <li className="mb-2">9 new cases in Indonesia</li>
                {/* Add more list items */}
              </ul>
            </div>
            <div className="w-[300px] h-[300px] bg-[#00] rounded-xl mt-24">
              <div className="flex flex-col items-center justify-center w-[300px] h-[300px] bg-[#6236ff] rounded-xl ">
                <div className="relative top-[-10px] bg-purple-300 px-8 py-8 rounded-full">
                  <img
                    src={Symptom}
                    alt="Symptom"
                    className="w-[100px] h-[100px] rounded-xl"
                  />
                </div>
                <div className="flex flex-col items-start mr-8 ml-6">
                  <div className="flex flex-row items-center justify-between gap-40">
                    <h1 className="text-white font-semibold text-[20px]">
                      Symptoms
                    </h1>
                    <div>
                      <ArrowForwardIcon className="text-white font-bold " />
                    </div>
                  </div>

                  <div>
                    <p className="text-white font-semibold text-[15px]">
                      Read carefully 5 Symptoms
                    </p>
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[15px]">
                      Of COVID-19
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
