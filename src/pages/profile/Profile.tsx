import React from "react";

import { IoIosSettings } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { BsGrid3X3 } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";


// img import
import profile from "../../assets/img-profile/profile.jpg";
import op from "../../assets/img-profile/op.jpg";
import n from "../../assets/img-profile/n.jpg";
import n1 from "../../assets/img-profile/n1.jpg";
import n2 from "../../assets/img-profile/n2.jpg";
import n3 from "../../assets/img-profile/n3.jpg";
import n4 from "../../assets/img-profile/n4.jpg";
import a1 from "../../assets/img-profile/a1.png"
import a2 from "../../assets/img-profile/a2.png"
import a3 from "../../assets/img-profile/a3.png"
import a4 from "../../assets/img-profile/a4.png"
import a5 from "../../assets/img-profile/a5.png"
import a6 from "../../assets/img-profile/a6.png"

const Profile = () => {
  return (
    <div>
      <div className="lg:hidden flex justify-between items-center border-b-[1px] w-full p-[10px_10px]">
        <div>
          <IoIosSettings className="text-[28px]" />
        </div>
        <div className="flex gap-1 items-center">
          <h3 className="text-[20px]">profile</h3>
          <AiOutlineDown />
        </div>
        <div>
          <FiUserPlus className="text-[25px]" />
        </div>
      </div>
      <div className="flex gap-7 p-[20px_20px]">
        <div>
          <img src={profile} alt="" className="rounded-full w-[90px]" />
        </div>
        <div>
          <div className="flex gap-4">
            <h2>profile</h2>
            <IoIosSettings className="text-[28px]" />
          </div>
          <div className="grid grid-cols-2 gap-4 text-center py-[15px]">
            <div className="bg-[#ccc] rounded-[14px] text-[14px] leading-4 p-[5px_0px]">
              Редактировать профиль
            </div>
            <div className="bg-[#ccc] rounded-[14px] text-[14px] leading-4 p-[5px_0px] w-[99px] lg:w-full">
              Показать архив
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="p-[20px_30px]">
          <h1>КУРСЫ ПРОГРАММИРОВАНИЯ | ДУШАНБЕ</h1>
        </div>
      </div>
      <div className="flex gap-[20px] p-[20px_20px] text-center">
        <div className="flex flex-col justify-center">
          <img src={n1} alt="" className="rounded-full w-[60px]" />
          <p className="text-[14px] mt-[6px]">Address</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={op} alt="" className="rounded-full w-[60px]" />
          <p className="text-[14px] mt-[6px]">newpost</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={n} alt="" className="rounded-full w-[60px]" />
          <p className="text-[14px] mt-[6px]">Address</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={n2} alt="" className="rounded-full w-[60px]" />
          <p className="text-[14px] mt-[6px]">Address</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={n3} alt="" className="rounded-full w-[60px]" />
          <p className="text-[14px] mt-[6px]">Address</p>
        </div>
        <div className="flex flex-col justify-center">
          <img src={n4} alt="" className="rounded-full w-[60px]" />
          <p className="text-[14px] mt-[6px]">Address</p>
        </div>
      </div>
      <div className="border-t-[1px] p-[20px_20px] grid grid-cols-3">
        <div className="flex flex-col items-center   ">
          <span>228</span>
          <p>публикаций</p>
        </div>
        <div className="flex flex-col items-center   ">
          <span>7 114</span>
          <p>подписчиков</p>
        </div>
        <div className="flex flex-col items-center   ">
          <span>22</span>
          <p>подписок</p>
        </div>
      </div>
      <div className="border-t-[1px] grid grid-cols-3 py-[10px]">
        <div className="flex justify-center items-center">
          <BsGrid3X3 className="text-[24px] " />
        </div>
        <div className="flex justify-center items-center">
          <FaRegBookmark className="text-[29px]" />
        </div>
        <div className="flex justify-center items-center">
          <BiUserPin className="text-[35px]" />
        </div>
      </div>
      <div className="grid grid-cols-3 py-[10x] gap-[2px] ">
        <div>
          <img src={a1} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={a2} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={a3} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={a4} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={a5} alt="" className="w-full h-full" />
        </div>
        <div>
          <img src={a6} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
