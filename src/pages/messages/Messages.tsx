import React from "react";

import av from "../../assets/messagimg/av.jpg"


// icons
import { BiEdit } from "react-icons/bi";
import { IMesseng } from "../../types/types";
import MessagComp from "../../components/MessagComp";

const Messages = () => {
  const messages: IMesseng[] = [
    {
      id: 1,
      img: av,
      nameUser: "virkan",
      status: "Online 6 hours ago",
      online: false,
    }
  ];
  return (
    <div>
      <div className="border-r-[2px]">
        <div className="p-[40px]">
          <BiEdit className="text-[40px]" />
        </div>
      </div>
      <div>
        {messages.map((messeng: IMesseng) => {
          return <MessagComp messeng={messeng} />;
        })}
      </div>
    </div>
  );
};

export default Messages;
