import React from "react";

import { IoIosSettings } from "react-icons/io";
import { FiUserPlus } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { BsGrid3X3 } from "react-icons/bs";
import { FaRegBookmark } from "react-icons/fa";
import { BiUserPin } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";

// img import
// import profile from "../../assets/img-profile/profile.jpg";
import op from "../../assets/img-profile/op.jpg";
import n from "../../assets/img-profile/n.jpg";
import n1 from "../../assets/img-profile/n1.jpg";
import n2 from "../../assets/img-profile/n2.jpg";
import n3 from "../../assets/img-profile/n3.jpg";
import n4 from "../../assets/img-profile/n4.jpg";
import a1 from "../../assets/img-profile/a1.png";
import a2 from "../../assets/img-profile/a2.png";
import a3 from "../../assets/img-profile/a3.png";
import a4 from "../../assets/img-profile/a4.png";
import a5 from "../../assets/img-profile/a5.png";
import a6 from "../../assets/img-profile/a6.png";
import avatar from "../../assets/img-profile/avatar.jpg";

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
      {/* info 1 */}
      <div className="flex gap-[24px] md:items-start md:gap-[70px] px-[16px] md:px-[40px] lg:ml-[80px]  pt-[20px]">
        {/* img */}
        <div>
          <img
            src={avatar}
            className="rounded-full w-[75px] h-[75px] md:w-[150px] md:h-[150px]"
          />
        </div>
        {/* info md: */}
        <div>
          {/* name and buttons */}
          <div className="flex flex-col md:mt-[10px] md:flex-row justify-end md:justify-start gap-[13px] md:gap-[16px]">
            <div className="flex items-center gap-[10px]">
              <p className="cursor-pointer text-[19px]">virkan</p>
              <AiOutlineSetting className="text-[24px] cursor-pointer md:hidden" />
            </div>
            <div className="flex gap-[8px] md:items-center">
              <button className="bg-gray-200/70 hover:bg-gray-200 font-[600] text-[14px] px-[20px] md:px-[10px] py-[5px] rounded-[10px]">
                Редактировать профиль
              </button>
              <button className="bg-gray-200/70 hover:bg-gray-200 font-[600] text-[14px] px-[20px] md:px-[10px] py-[5px] rounded-[10px]">
                Показать архив
              </button>
              <AiOutlineSetting className="text-[24px] cursor-pointer hidden md:flex" />
            </div>
          </div>
          {/* subscribers */}
          <div className="mt-[15px] hidden text-center py-[8px] md:flex justify-between">
            <div className="flex md:gap-[5px]">
              <p className="text-[14px] leading-0 font-[600]">4</p>
              <p className="text-[14px] leading-0 text-gray-500 md:text-black">
                Публикаций
              </p>
            </div>
            <div className="flex md:gap-[5px]">
              <p className="text-[14px] leading-0 font-[600]">272</p>
              <button className="text-[14px] leading-0 text-gray-500 md:text-black">
                Подписчики
              </button>
            </div>
            <div className="flex md:gap-[5px]">
              <p className="text-[14px] leading-0 font-[600]">333</p>
              <button className="text-[14px] leading-0 text-gray-500 md:text-black">
                Подписок
              </button>
            </div>
          </div>
          {/* name */}
          {/* <p className="mt-[8px] font-[500] text-[14px] hidden md:flex">
            Virkan Shirinov
          </p> */}
        </div>
      </div>
      {/* name */}
      {/* <p className="mt-[27px] font-[500] md:hidden text-[14px] px-[16px]">
        Virkan Shirinov
      </p> */}

      {/* dfdfdf */}
      <div>
        <div className="p-[20px_30px] lg:m-[0px_54px_0px_54px]">
          <h1>КУРСЫ ПРОГРАММИРОВАНИЯ | ДУШАНБЕ</h1>
        </div>
      </div>
      <div className="flex gap-[20px] p-[20px_20px] text-center lg:m-[0px_54px_0px_60px]">
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
      <div className="border-t-[1px] p-[20px_20px] grid grid-cols-3 lg:m-[0px_54px_0px_54px] lg:hidden">
        <div className="flex flex-col items-center   ">
          <span>228</span>
          <p>Публикаций</p>
        </div>
        <div className="flex flex-col items-center   ">
          <span>7 114</span>
          <p>Подписчиков</p>
        </div>
        <div className="flex flex-col items-center   ">
          <span>22</span>
          <p>Подписок</p>
        </div>
      </div>
      <div className="border-t-[1px] flex justify-center py-[10px] gap-[50px] items-center lg:m-[0px_54px_0px_54px]">
        <div className="flex justify-center items-center gap-[5px]">
          <BsGrid3X3 className="text-[15px] " />
          <p className="text-[12px]">ПУБЛИКАЦИИ</p>
        </div>
        <div className="flex justify-center items-center gap-[5px]">
          <FaRegBookmark className="text-[18px]" />
          <p className="text-[12px]">СОХРАНЕННОЕ</p>
        </div>
        <div className="flex justify-center items-center gap-[5px]">
          <BiUserPin className="text-[20px]" />
          <p className="text-[12px]">ОТМЕТКИ</p>
        </div>
      </div>
      <div className="grid grid-cols-3 py-[10x] gap-[2px] m-[0px_54px_0px_54px] ">
        <div className="flex flex-col items-center">
          <img src={a1} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center">
          <img src={a2} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center">
          <img src={a3} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center">
          <img src={a4} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center">
          <img src={a5} alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col items-center">
          <img src={a6} alt="" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
