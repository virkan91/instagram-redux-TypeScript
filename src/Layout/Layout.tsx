import React from "react";

// style
import "./laute.css";
// import img
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";
import { GoHomeFill } from "react-icons/go";
import { BiSearch } from "react-icons/bi";
import { FaRegCompass } from "react-icons/fa";
import { BiMoviePlay } from "react-icons/bi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlinePlusSquare } from "react-icons/ai";
import profile from "../assets/img-home/profile.jpg";
import { AiOutlineMenu } from "react-icons/ai";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="navbar border-[1px] fixed top-0 left-0 md:w-[260px] flex flex-col justify-between h-screen   ">
        <ul className=" p-[40px_25px_5px_25px] flex flex-col items-start gap-[5px]">
          <a
            href="#"
            className="items-center gap-2 p-[5px_5px]  text-[18px]  w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <li className="mb-[40px] flex lg:hidden">
              <BsInstagram className="text-[26px]" />
            </li>
            <p className="fontLogo text-[28px] hidden lg:flex">Instogran</p>
          </a>

          <a
            href=""
            className=" items-center gap-2 p-[10px_5px]  text-[18px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <GoHomeFill className="text-[30px]" />
            <li className="hidden lg:flex">Home</li>
          </a>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px]  text-[20px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <BiSearch className="text-[30px]" />
            <li className="hidden lg:flex">Search</li>
          </a>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <FaRegCompass className="text-[25px] " />
            <li className="hidden lg:flex">Explore</li>
          </a>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <BiMoviePlay className="text-[28px] " />
            <li className="hidden lg:flex">Reels</li>
          </a>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <LiaFacebookMessenger className="text-[30px]" />
            <li className="hidden lg:flex">Messages</li>
          </a>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <AiOutlineHeart className="text-[29px]" />
            <li className="hidden lg:flex">Natificantions</li>
          </a>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <AiOutlinePlusSquare className="text-[28px]" />
            <li className="hidden lg:flex">Create</li>
          </a>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <img src={profile} alt="" className="rounded-full w-[32px]  border-[2px] border-[#ccc]" />

            <li className="hidden lg:flex">Profile</li>
          </a>
        </ul>
        <div className="p-[5px_25px]">
          <a
            href=""
            className=" items-center gap-1 p-[10px_5px] text-[20px] hover:bg-[#ccc] w-[100%] rounded-[10px] grid grid-cols-[40px_auto]"
          >
            <AiOutlineMenu className="text-[28px]" />
            <li className="hidden lg:flex">More</li>
          </a>
        </div>
      </div>
      <div className="ml-[200px]">
        <Outlet />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Layout;
