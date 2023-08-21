import React from "react";
import { IMesseng } from "../types/types";

const MessagComp = ({messeng}: IMesseng) => {
  return (
    <div>
      {
        <div className="px-[20px] hover:bg-gray-200 py-[10px] duration-300 flex items-center gap-4">
          <div>
            <img
              src={messeng.img}
              alt=""
              className="rounded-full w-[60px] m-auto"
            />
          </div>
          <div className="lg:flex flex-col hidden">
            <p>{messeng.nameUser}</p>
            <p className="text-[12px]">{messeng.status}</p>
          </div>
        </div>
      }
    </div>
  );
};

export default MessagComp;
