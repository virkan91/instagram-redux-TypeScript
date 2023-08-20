import React from 'react'

// icons
import { BsSearch } from "react-icons/bs";
import {AiOutlineHeart} from "react-icons/ai"

const Home = () => {
  return (
    <div>
      <nav className="fixed md:hidden w-full duration-300 top-0 border-b py-[15px] flex justify-between items-center px-[16px] bg-white">
        <p className="fontLogo text-[24px] cursor-pointer">Instagram</p>
        <div className="flex items-center gap-[20px]">
          {/* Search */}
          <form className="bg-gray-200/70 flex items-center px-[25px]  rounded-[8px] gap-[10px]">
            <BsSearch className="text-[14px] text-gray-500 " />
            <input
              type="text"
              className="outline-none bg-transparent border-none p-0 mt-[8px]"
              placeholder="Search"
            />
          </form>
          <div>
            <AiOutlineHeart className="text-[28px] cursor-pointer" />
          </div>
        </div>
      </nav>
      sds

    </div>
  );
}

export default Home