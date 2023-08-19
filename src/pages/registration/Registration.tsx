import React from "react";
import "./registration.css";

// import img
import logoregis from "../../assets/img-register/logo-regis.png";
import google from "../../assets/img-register/google.png";
import appstor from "../../assets/img-register/appstor.png"
import googlepay from "../../assets/img-register/googleplay.png"

const Registration = () => {
  return (
    <div className="bg-[#FAFAFA] pt-[90px] ">
      <div className="bg-[#FFF] border-[1px] w-[32%] m-auto p-[30px_35px] ">
        <div className="flex justify-center">
          <img src={logoregis} alt="" />
        </div>
        <div className=" text-center mt-[20px] w-[97%] m-auto">
          <p className="text-[#8E8E8E] font-medium text-[20px] leading-6">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
        <div className="bg-[#EFEFEF] rounded-[50px] flex gap-6 items-center p-[10px_40px] mt-[30px]">
          <img src={google} alt="" />
          <p className="font-medium text-[#000]">Continue with google</p>
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
          <button className="bg-[#4cb5f9] text-[#FFF] font-medium	">
            Sign Up
          </button>
          <p className="text-[#8E8E8E] font-normal text-[16px] text-center mt-[20px]">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>
        </form>
      </div>
      <div className="border-[1px] w-[32%] m-auto p-[30px_35px] mt-[20px] bg-[#FFF] ">
        <div className="flex justify-center gap-1 items-center">
          <p className="text-[#262626] font-normal	text-[18px]">
            Have an account?
          </p>
          <span className="text-[#0095F6] font-medium	not-italic text-[18px]">
            Login in
          </span>
        </div>
      </div>
      <div className="w-[32%]  m-auto mt-[20px] text-center">
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
