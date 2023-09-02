import React, { useState } from "react";

//
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import "./laute.css";
// import img
import { Link, useNavigate } from "react-router-dom";
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
import { BsSearch } from "react-icons/bs";

// import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { saveToken } from "../utils/token";
import { message } from "antd";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #ccc",
  boxShadow: 24,
  p: 4,
  

};

const Layout = () => {
  // const modal
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [modal, setModal] = useState<boolean>(false);

  const toggleDrawer =
    (anchor: any, open: boolean) =>
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

  const list = (anchor: any) => (
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

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate()
  return (
    <div>
      {/* Navbar */}
      <div className="bg-[#FFF] navbar z-20 border-[1px] fixed md:top-0 md:left-0 lg:w-[260px] flex md:flex-col justify-between md:h-screen w-full md:w-auto bottom-0    ">
        <ul className=" md:p-[40px_25px_5px_25px] flex md:flex-col items-start gap-[5px] justify-evenly w-full md:w-auto">
          <Link to="/home">
            <a className="items-center gap-2 p-[5px_5px]  text-[18px]  lg:w-[100%] rounded-[10px] md:grid lg:grid-cols-[40px_auto] hidden">
              <li className="mb-[40px] flex lg:hidden">
                <BsInstagram className="text-[26px]" />
              </li>
              <p className="fontLogo text-[28px] hidden lg:flex">Instagram</p>
            </a>
          </Link>
          <Link to="/home" className="md:w-full">
            <a
              href=""
              className=" items-center gap-2 p-[10px_5px]  text-[18px] hover:bg-[#f1f2f5] w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]"
            >
              <GoHomeFill className="text-[30px]" />
              <li className="hidden lg:flex text-[18px]">Home</li>
            </a>
          </Link>

          <div className="hidden  items-center gap-2 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] md:grid lg:grid-cols-[40px_auto]">
            {(["left"] as const).map((anchor) => (
              <React.Fragment key={anchor}>
                <button onClick={toggleDrawer(anchor, true)}>
                  <div className=" items-center gap-2   text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]">
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
          <Link to="/home/messages" className="md:w-full">
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
        <button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="p-[5px_25px] hidden md:flex"
        >
          <span className=" items-center gap-1 p-[10px_5px] text-[20px] hover:bg-[#f1f2f5] lg:w-[100%] rounded-[10px] grid lg:grid-cols-[40px_auto]">
            <AiOutlineMenu className="text-[28px]" />
            <li className="hidden lg:flex">More</li>
          </span>
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Настройки</MenuItem>
          <MenuItem onClick={handleClose}>Ваши действие</MenuItem>
          <MenuItem onClick={handleClose}>Сохраненное</MenuItem>
          <MenuItem onClick={handleClose}>Переключить тему</MenuItem>
          <MenuItem onClick={handleClose}>Сообщение о проблеме</MenuItem>
          <hr />
          <MenuItem onClick={handleClose}>
            Переключение между аккаунтамы
          </MenuItem>
          <hr />
          <MenuItem onClick={() => setModal(true)}>Выйти</MenuItem>
        </Menu>
      </div>

      {
        <Modal
          open={modal}
          onClose={() => setModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: "center"}}>
              Выход
            </Typography>
            {/* <p className="text-center">Выход</p> */}
            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign:"center" }}>
              Вы действительно хотите выйти?
            </Typography>
            <div className="flex gap-20 justify-center mt-[20px]">
              <button onClick={() => {
                saveToken("")
                navigate("/")
                message.warning("Вы вышли из аккаунта!")
              }}> Да</button>
              <button>Нет</button>
            </div>
          </Box>
        </Modal>
      }

      <div className="lg:ml-[260px] md:ml-[100px]">
        <Outlet />
      </div>

      <div className="footer"></div>
    </div>
  );
};

export default Layout;
