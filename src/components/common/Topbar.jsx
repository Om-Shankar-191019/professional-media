import React, { useState } from "react";
import LinkedInLogo from "../../assets/LinkedInLogo.png";
import { AiOutlineSearch, AiFillHome } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { HiBriefcase } from "react-icons/hi";
import { IoMdNotifications } from "react-icons/io";
import { BsMessenger, BsFillCollectionPlayFill } from "react-icons/bs";
import TopbarLinks from "./TopbarLinks";
import ProfilePopupModal from "./ProfilePopupModal";

const Topbar = () => {
  const [search, setSearch] = useState();
  // const [showProfilePopup, setShowProfilePopup] = useState(false);
  const [profilePopupOpen, setProfilePopupOpen] = useState(false);

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
        <TopbarLinks Icon={AiFillHome} title="Home" to="/" />
        <TopbarLinks Icon={FaUserFriends} title="Network" to="/network" />
        <TopbarLinks Icon={HiBriefcase} title="Jobs" to="/jobs" />
        <TopbarLinks Icon={BsMessenger} title="messaging" to="/chats" />
        <TopbarLinks
          Icon={IoMdNotifications}
          title="Notifications"
          to="/notification"
        />
        <TopbarLinks
          Icon={BsFillCollectionPlayFill}
          title="Learning"
          to="/learning"
        />

        <div
          onClick={() => setProfilePopupOpen(true)}
          className="flex flex-col items-center cursor-pointer p-2 rounded-md  hover:bg-gray-200 duration-200"
        >
          <img alt="my photo" src={LinkedInLogo} className="h-6" />
          <p className="text-sm text-gray-600 font-semibold duration-200 ">
            Me
          </p>
        </div>
      </div>

      <ProfilePopupModal
        profilePopupOpen={profilePopupOpen}
        setProfilePopupOpen={setProfilePopupOpen}
      />
    </div>
  );
};

export default Topbar;
