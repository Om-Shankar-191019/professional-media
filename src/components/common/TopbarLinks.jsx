import React from "react";
import { NavLink } from "react-router-dom";

const TopbarLinks = ({ Icon, avatar, userImg, title }) => {
  return (
    <NavLink to="/">
      <div className="flex flex-col items-center cursor-pointer p-2 rounded-md  hover:bg-gray-200 duration-200">
        {Icon && <Icon size={22} className="text-gray-500 " />}
        {avatar && <img alt="my photo" src={userImg} className="h-6" />}
        <p className="text-sm text-gray-600 font-semibold duration-200 ">
          {title}
        </p>
      </div>
    </NavLink>
  );
};

export default TopbarLinks;
