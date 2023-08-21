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
import avatar from "../assets/img-home/avatar.jpg";
import { AiOutlineMenu } from "react-icons/ai";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="bg-[#FFF] navbar z-20 border-[1px] fixed md:top-0 md:left-0 lg:w-[260px] flex md:flex-col justify-between md:h-screen w-full md:w-auto bottom-0    ">
        <ul className=" md:p-[40px_25px_5px_25px] flex md:flex-col items-start gap-[5px] justify-evenly w-full md:w-auto">
          <a
            href="#"
            className="items-center gap-2 p-[5px_5px]  text-[18px]  lg:w-[100%] rounded-[10px] md:grid lg:grid-cols-[40px_auto] hidden"
          >
            <li className="mb-[40px] flex lg:hidden">
              <BsInstagram className="text-[26px]" />
            </li>
            <p className="fontLogo text-[28px] hidden lg:flex">Instagran</p>
          </a>

          <Link to="/home" className="md:w-full">
            <a
              href=""
              className=" items-center gap-2 p-[10px_5px]  text-[18px] hover:bg-[#f1f2f5] w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]"
            >
              <GoHomeFill className="text-[30px]" />
              <li className="hidden lg:flex text-[18px]">Home</li>
            </a>
          </Link>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px]  text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]"
          >
            <BiSearch className="text-[30px]" />
            <li className="hidden lg:flex text-[18px]">Search</li>
          </a>
          <a
            href=""
            className="hidden  items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] md:grid lg:grid-cols-[40px_auto]"
          >
            <FaRegCompass className="text-[25px] " />
            <li className="hidden lg:flex text-[18px]">Explore</li>
          </a>
          <a
            href=""
            className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]"
          >
            <BiMoviePlay className="text-[28px] " />
            <li className="hidden lg:flex text-[18px]">Reels</li>
          </a>
          <Link to="/home/messages">
            <a
              href=""
              className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]"
            >
              <LiaFacebookMessenger className="text-[30px]" />
              <li className="hidden lg:flex text-[18px]">Messages</li>
            </a>
          </Link>
          <a
            href=""
            className=" hidden items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] md:grid lg:grid-cols-[40px_auto]"
          >
            <AiOutlineHeart className="text-[29px]" />
            <li className="hidden lg:flex text-[18px]">Natificantions</li>
          </a>
          <a
            href=""
            className="hidden items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] md:grid lg:grid-cols-[40px_auto]"
          >
            <AiOutlinePlusSquare className="text-[28px]" />
            <li className="hidden lg:flex text-[18px]">Create</li>
          </a>
          <Link to="/home/profile" className="md:w-full">
            <a
              href=""
              className=" items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]"
            >
              <img
                src={avatar}
                alt=""
                className="rounded-full w-[32px]  border-[2px] border-[#ccc]"
              />

              <li className="hidden lg:flex text-[18px]">Profile</li>
            </a>
          </Link>
        </ul>
        <div className="p-[5px_25px] hidden md:flex">
          <a
            href=""
            className=" items-center gap-1 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]"
          >
            <AiOutlineMenu className="text-[28px]" />
            <li className="hidden lg:flex">More</li>
          </a>
        </div>
      </div>
      <div className="lg:ml-[260px] md:ml-[100px]">
        <Outlet />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Layout;
