import React from "react";

// imort icons
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { LuSend } from "react-icons/lu";
import { BiBookmark } from "react-icons/bi";

 
// import img
// import im3 from "../assets/img-home/im3.png";
import { IPosts } from "../types/types";

const HomePosts = ({ post }: IPosts) => {
  return (
    <div className="w-[90%] m-auto">
      {
        <div className="flex justify-between items-center mt-[20px]">
          <div className="flex gap-[12px] items-center">
            <img src={post.img} alt="" className="rounded-full w-[60px]" />
            <div>
              <h2>{post.nameUser}</h2>
              <p>{post.address}</p>
            </div>
          </div>
          <div>
            <BiDotsHorizontalRounded className="text-[25px]" />
          </div>
        </div>
      }
      <div className="py-[20px]">
        <img src={post.boximg} alt="" className="w-full h-full" />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div>
            <AiOutlineHeart className="text-[30px]" />
          </div>
          <div>
            <BiMessageRounded className="text-[30px]" />
          </div>
          <div>
            <LuSend className="text-[30px]" />
          </div>
        </div>
        <div>
          <BiBookmark className="text-[30px]" />
        </div>
      </div>
      {
        <div className="py-[20px] border-b-[1px]">
          <p className="text-[16px] mb-2">Нравится</p>
          <p>
            <span className="font-medium">{post.nameUser}</span>{" "}
            {post.discription}
          </p>
          <div className="mt-[20px]">
            <input
              type="text"
              className="border-none outline-none"
              placeholder="Добавьте комментарий..."
            />
            
          </div>
        </div>
      }
    </div>
  );
};

export default HomePosts;
