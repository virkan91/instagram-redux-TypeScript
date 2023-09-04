import {useState} from "react";

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
import { IArr_obj, IMesseng } from "../../types/types";
import MessagComp from "../../components/MessagComp";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineDown } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { HiOutlineMicrophone } from "react-icons/hi";
import { PiImageLight } from "react-icons/pi";
import {BsHeart} from "react-icons/bs"

const Messages = () => {
  const [idx, setIdx] = useState<number>(1)
  
  const messages: IMesseng[] = [
    {
      id: 1,
      img: av,
      nameUser: "Virkan_Shirirnov",
      status: "Online",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi Virkan",
        },
      ],
    },
    {
      id: 2,
      img: i1,
      nameUser: "Judo_Words",
      status: "Online",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi",
        },
      ],
    },
    {
      id: 3,
      img: soft,
      nameUser: "Soft_Clube",
      status: "Online",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi",
        },
      ],
    },
    {
      id: 4,
      img: i2,
      nameUser: "Cars",
      status: "Online",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi",
        },
      ],
    },
    {
      id: 5,
      img: n,
      nameUser: "Dubai_City",
      status: "Online 6 hours ago",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi",
        },
      ],
    },
    {
      id: 6,
      img: n2,
      nameUser: "Rasul",
      status: "Online 10 hours ago",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi",
        },
      ],
    },
    {
      id: 7,
      img: n3,
      nameUser: "Muhammad Mastov",
      status: "Online 1 hours ago",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi",
        },
      ],
    },
    {
      id: 8,
      img: n4,
      nameUser: "Manija",
      status: "Online ",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi",
        },
      ],
    },
    {
      id: 9,
      img: n5,
      nameUser: "Moskov_City",
      status: "Online",
      online: false,
      messages: [
        {
          hmo: "me",
          message: "Hello",
        },
        {
          hmo: "friend",
          message: "Hi",
        },
      ],
    },
  ];
  return (
    <div>
      <div className="border-r-[1px] fixed h-screen top-0 bg-white">
        <div className="flex items-center justify-between m-[0px_30px_0_30px]">
          <div className="lg:flex gap-1 items-center hidden">
            <h3 className="text-[18px] font-bold">virkan</h3>
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
            return (
              <MessagComp
                messeng={messeng}
                setId={(id: number) => setIdx(id)}
              />
            );
          })}
        </div>
      </div>
      
      <div className=" justify-center items-center h-screen border-2 relative z-[-1] ml-[120px] xl:ml-[290px]">
        <div className="">
          <div className="rounded-full border-[2px] border-[#000] opacity-50 p-[10px] right-[40%] absolute top-[50%] z-[-1]">
            <RiMessengerLine className="text-[70px]" />
          </div>
          <div className="flex flex-col items-center mt-[40px]">
            {/* img */}
            <div className="rounded-full w-[100px] h-[100px]">
              <img
                src={messages[idx - 1].img}
                className="rounded-full w-[100px] h-[100px]"
              />
            </div>
            {/* nam */}
            <p className="text-[20px] mt-[10px] font-[500]">
              {messages[idx - 1].nameUser}
            </p>
            {/* status */}
            {messages[idx - 1].online ? (
              <p>online</p>
            ) : (
              <p>{messages[idx - 1].status}</p>
            )}
            {/* btn */}
            <button className="font-[500] outline-none text-[14px] mt-[5px] px-[16px] py-[6px] bg-gray-200 duration-100 hover:bg-gray-300 rounded-[7px]">
              View profile
            </button>
          </div>
          <div className="px-[30px]">
            {messages[idx - 1].messages.map((elem: IArr_obj) => {
              return (
                <div>
                  {elem.hmo === "me" ? (
                    <div className="flex justify-end">
                      <p className="rounded-full px-[8px] py-[4px] bg-sky-500 text-white">
                        {elem.message}
                      </p>
                    </div>
                  ) : (
                    <div className="flex gap-[5px]">
                      <div>
                        <img
                          src={messages[idx - 1].img}
                          className="rounded-full w-[30px] h-[30px]"
                        />
                      </div>
                      <div>
                        <p className="rounded-full px-[8px] py-[4px] bg-gray-200">
                          {elem.message}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          {/* input sms */}
          <footer className="w-full   bg-white py-[12px] pl-[25px] md:pr-[352px] xl:pr-[570px] pr-[125px] fixed bottom-[55px] md:bottom-0 duration-300">
            <form className="border pl-[15px] flex items-center border-gray-300 justify-between gap-[15px] pr-[20px]  rounded-full">
              <div className="flex items-center  w-full">
                <VscSmiley className="text-[30px] cursor-pointer" />
                {/* Input Message */}
                <form>
                  <input
                    type="text"
                    placeholder="Напишите сообщение..."
                    className=" w-full border-none bg-transparent"
                  />
                </form>
              </div>
              <div className="flex items-center gap-[10px]">
                <HiOutlineMicrophone className="text-[25px] cursor-pointer" />
                <PiImageLight className="text-[32px] cursor-pointer" />
                <BsHeart className="text-[22px] cursor-pointer ml-[2px]" />
              </div>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Messages;
