import React, { useState } from "react";
import LinkedInLogo from "../../assets/LinkedInLogo.png";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { BsMessenger, BsFillCollectionPlayFill } from "react-icons/bs";
import TopbarLinks from "./TopbarLinks";

const Topbar = () => {
  const [search, setSearch] = useState();
  return (
    <div className="h-16 w-full bg-white py-4 px-8 flex justify-between items-center">
      <div className="flex justify-center items-center">
        <img src={LinkedInLogo} className="h-8 mr-3 sm:h-8" alt="" />
        <div className="bg-blue-200 hover:border-[#0077b5] duration-150 flex items-center justify-between border-2  rounded-md  ">
          <input
            type="text"
            value={search}
            placeholder="Search"
            className="outline-none px-2 py-1 w-44 bg-blue-200"
            onChange={(event) => setSearch(event.target.value)}
          />
          <AiOutlineSearch
            size={20}
            className="mr-2 cursor-pointer text-gray-600 bg-blue-200"
          />
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <TopbarLinks Icon={AiFillHome} title="Home" />
        <TopbarLinks Icon={FaUserFriends} title="Network" />
        <TopbarLinks Icon={HiBriefcase} title="Jobs" />
        <TopbarLinks Icon={BsMessenger} title="messaging" />
        <TopbarLinks Icon={IoMdNotifications} title="Notifications" />
        <TopbarLinks Icon={BsFillCollectionPlayFill} title="Learning" />
        <TopbarLinks avatar={true} userImg={LinkedInLogo} title="Me" />
      </div>
    </div>
  );
};

export default Topbar;
