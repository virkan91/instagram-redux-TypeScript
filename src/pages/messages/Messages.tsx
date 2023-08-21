import React from "react";

import av from "../../assets/messagimg/av.jpg";
import i1 from "../../assets/img-home/i1.jpg";
import soft from "../../assets/img-home/soft.jpg";
import i2 from "../../assets/img-home/i2.jpg";
import n from "../../assets/img-home/n.jpg";
import n2 from "../../assets/img-home/n2.jpg";
import n3 from "../../assets/img-home/n3.jpg";
import n4 from "../../assets/img-home/n4.jpg";
import n5 from "../../assets/img-home/n5.jpg";

// icons
import { BiEdit } from "react-icons/bi";
import { IMesseng } from "../../types/types";
import MessagComp from "../../components/MessagComp";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";

const Messages = () => {
  const messages: IMesseng[] = [
    {
      id: 1,
      img: av,
      nameUser: "Virkan_Shirirnov",
      status: "Online 6 hours ago",
      online: false,
    },
    {
      id: 2,
      img: i1,
      nameUser: "Judo_Words",
      status: "Online 6 hours ago",
      online: false,
    },
    {
      id: 3,
      img: soft,
      nameUser: "Soft_Clube",
      status: "Online 6 hours ago",
      online: false,
    },
    {
      id: 4,
      img: i2,
      nameUser: "Cars",
      status: "Online 6 hours ago",
      online: false,
    },
    {
      id: 5,
      img: n,
      nameUser: "Dubai_City",
      status: "Online 6 hours ago",
      online: false,
    },
    {
      id: 6,
      img: n2,
      nameUser: "Rasul",
      status: "Online 6 hours ago",
      online: false,
    },
    {
      id: 7,
      img: n3,
      nameUser: "Muhammad Mastov",
      status: "Online 6 hours ago",
      online: false,
    },
    {
      id: 8,
      img: n4,
      nameUser: "Manija",
      status: "Online 6 hours ago",
      online: false,
    },
    {
      id: 9,
      img: n5,
      nameUser: "Moskov_City",
      status: "Online 6 hours ago",
      online: false,
    },
  ];
  return (
    <div>
      <div className="border-r-[1px] fixed h-screen top-0 bg-white">
        <div className="flex items-center justify-between m-[0px_30px_0_30px]">
          <div className="lg:flex gap-1 items-center hidden">
            <h3 className="text-[18px] font-bold">Virkan</h3>
            <AiOutlineDown />
          </div>
          <div className="flex justify-center mt-[40px] md:mt-[10px] pb-[10px]">
            <BiEdit className="text-[30px]" />
          </div>
        </div>
        <div className="lg:flex items-center justify-between m-[0px_30px_0_30px] py-[10px] hidden">
          <div>
            <p className="font-bold">Сообщение</p>
          </div>
          <div>
            <p>Запросы</p>
          </div>
        </div>
        <div className="overflow-y-scroll h-full pb-[140px]">
          {messages.map((messeng: IMesseng) => {
            return <MessagComp messeng={messeng} />;
          })}
        </div>
      </div>
      <div className="border-b-[1px]">
        <div>
          
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="">
          <div className="rounded-full border-[2px] border-[#000] p-[10px]">
            <RiMessengerLine className="text-[70px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
