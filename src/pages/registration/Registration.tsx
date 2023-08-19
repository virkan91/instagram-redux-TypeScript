import React from "react";
import { Link } from "react-router-dom";

import { AiFillFacebook } from "react-icons/ai";


import "./registration.css";

// import img
import logoregis from "../../assets/img-register/logo-regis.png";
import google from "../../assets/img-register/google.png";
import appstor from "../../assets/img-register/appstor.png";
import googlepay from "../../assets/img-register/googleplay.png";

const Registration = () => {
  return (
    <div className="bg-[#FAFAFA] pt-[90px] ">
      <div className="bg-[#FFF] border-[1px] m-auto p-[30px_35px] max-w-[480px]">
        <div className="flex justify-center">
          <img src={logoregis} alt="" />
        </div>
        <div className=" text-center mt-[20px] max-w-[350px] m-auto">
          <p className="text-[#8E8E8E] font-medium text-[20px] leading-6">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
        <div className="bg-[#0095f6] rounded-[8px] flex gap-4 items-center justify-center p-[10px] mt-[30px] text-[#fff]">
                  <AiFillFacebook className="text-[25px]"/>
          <p className="font-medium text-[#FFF] text-[18px]">Login in with Facebook</p>
        </div>
        <div className="py-[20px] relative flex items-center justify-center m-[8px]">
          <hr className="border w-full" />
          <p className="absolute bg-white px-[10px] text-[12px] text-[#959595]">
            OR
          </p>
        </div>
        <form>
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <Link to="/">
            <button className="bg-[#4cb5f9] text-[#FFF] font-medium	">
              Sign Up
            </button>
          </Link>
          <p className="text-[#8E8E8E] font-normal text-[16px] text-center mt-[20px]">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>
        </form>
      </div>
      <div className="border-[1px]  m-auto p-[30px_35px] mt-[20px] bg-[#FFF] max-w-[480px] ">
        <div className="flex justify-center gap-2 items-center">
          <p className="text-[#262626] font-normal	text-[18px]">
            Have an account?
          </p>
          <Link to="/">
            <span className="text-[#0095F6] font-medium	not-italic text-[18px]">
              Login in
            </span>
          </Link>
        </div>
      </div>
      <div className="max-w-[480px]  m-auto mt-[20px] text-center">
        <p className="font-normal	m-[20px]">Get the app.</p>
        <div className="flex gap-2 justify-center">
          <img src={appstor} alt="" />
          <img src={googlepay} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Registration;
