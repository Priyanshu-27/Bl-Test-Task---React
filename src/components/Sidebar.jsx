import React from "react";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SickOutlinedIcon from "@mui/icons-material/SickOutlined";
import ScienceOutlinedIcon from "@mui/icons-material/ScienceOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
const Sidebar = () => {
  return (
    <div className="bg-[#3325ae] h-screen w-20 ml-10 rounded-full flex flex-col p-4">
      <div className="flex flex-col items-center justify-between h-full">
        <WbSunnyOutlinedIcon
          fontSize="15"
          className="text-[#fff] mt-4 font-bold text-2xl"
        />
        <div className="flex flex-col items-center gap-8">
          <div className="hover:bg-white hover:px-1 hover:text-orange-500  cursor-pointer hover:py-4 hover:rounded-full transition-all duration-300">
            <WidgetsOutlinedIcon
              fontSize="15"
              className="text-[#8278d4] hover:text-orange-500 font-bold text-2xl "
            />
          </div>
          <div className="hover:bg-white hover:px-1  cursor-pointer hover:py-4 hover:rounded-full transition-all duration-300">
            <SickOutlinedIcon
              fontSize="15"
              className="text-[#8278d4] font-bold text-2xl hover:text-orange-500"
            />
          </div>
          <div className="hover:bg-white hover:px-1   cursor-pointer hover:py-4 hover:rounded-full transition-all duration-300">
            <ScienceOutlinedIcon
              fontSize="15"
              className="text-[#8278d4] font-bold text-2xl hover:text-orange-500"
            />
          </div>
          <div className="hover:bg-white hover:px-1   cursor-pointer hover:py-4 hover:rounded-full transition-all duration-300">
            <VolunteerActivismOutlinedIcon
              fontSize="15"
              className="text-[#8278d4] font-bold text-2xl hover:text-orange-500"
            />
          </div>
          <div className="hover:bg-white hover:px-1   cursor-pointer hover:py-4 hover:rounded-full transition-all duration-300">
            <SmsOutlinedIcon
              fontSize="15"
              className="text-[#8278d4] font-bold text-2xl hover:text-orange-500"
            />
          </div>
        </div>

        <div>
          <SettingsOutlinedIcon
            fontSize="15"
            className="text-[#8278d4] mb-4 font-bold text-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
