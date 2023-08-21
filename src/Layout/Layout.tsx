import React from "react";

// 
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
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
import {BsSearch} from "react-icons/bs"

const Layout = () => {
  
// const modal
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 420 }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="p-[25px] border-b-[1px]">
        <h2 className="text-[25px] font-medium">Поисковый запрос</h2>
        <form className="bg-gray-200/70 flex items-center px-[25px]  rounded-[8px] gap-[10px] mt-[30px]">
          <BsSearch className="text-[14px] text-gray-500 " />
          <input
            type="text"
            className="outline-none bg-transparent border-none p-0 mt-[8px]"
            placeholder="Поиск"
          />
        </form>
      </div>
      <div className="p-[25px]">
        <p className="font-semibold">Недавнее</p>
      </div>
    </Box>
  );
// __________________________________

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

          <div>
            {(["left"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <button onClick={toggleDrawer(anchor, true)}>
                  <div
                    className=" items-center gap-2 p-[10px_5px]  text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]"
                  >
                    <BiSearch className="text-[30px]" />
                    <li className="hidden lg:flex text-[18px]">Search</li>
                  </div>
                </button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
            ))}
          </div>

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
