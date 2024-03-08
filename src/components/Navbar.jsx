import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

const Navbar = () => {
  return (
    <div className="bg-white mt-6">
      <div className="flex flex-row justify-between items-center px-8">
        <div>
          <h2 className="text-purple-500 text-3xl font-semibold">Covid-19</h2>
          <p className="text-gray-400 text-sm mt-1">Live Tracker Dashboard</p>
        </div>
        <div className="flex items-center">
          <div className="flex items-center bg-white shadow-lg px-3 py-2 rounded-lg mr-8">
            <input placeholder="Search..." className="outline-none" />
            <SearchOutlinedIcon
              fontSize="15"
              color="gray"
              className="text-2xl"
            />
          </div>
          <div className="flex items-center">
            {/* last section */}
            <AccountCircleOutlinedIcon
              fontSize="15"
              color="gray"
              className="text-2xl text-gray-800"
            />
            <p className="mx-2">|</p>
            <NotificationsNoneOutlinedIcon
              fontSize="15"
              color="gray"
              className="text-2xl text-gray-800"
            />
            <LogoutOutlinedIcon
              className="ml-2 text-2xl text-gray-800"
              fontSize="15"
              color="gray"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
