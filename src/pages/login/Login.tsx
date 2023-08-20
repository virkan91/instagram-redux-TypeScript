import React from "react";
import { Link } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";

// import img
import logoregis from "../../assets/img-register/logo-regis.png";
import appstor from "../../assets/img-register/appstor.png";
import googlepay from "../../assets/img-register/googleplay.png";

const Login = () => {
  return (
    <div className="bg-[#FAFAFA] pt-[90px] pb-[90px]">
      <div className="bg-[#FFF] border-[1px] m-auto p-[30px_35px] max-w-[480px]">
        <div className="flex justify-center py-[40px]">
          <img src={logoregis} alt="" />
        </div>

        <form className="mt-[20px]">
          <input type="email" placeholder="Phone number, username, or email" />
          <input type="password" placeholder="Password" />
          <Link to="/home">
            <button className="bg-[#4cb5f9] text-[#FFF] font-bold rounded-[10px]	">
              Log In
            </button>
          </Link>
        </form>
        <div className="py-[20px] relative flex items-center justify-center m-[8px]">
          <hr className="border w-full" />
          <p className="absolute bg-white px-[10px] text-[16px] text-[#959595] font-medium">
            OR
          </p>
        </div>
        <div className="rounded-[8px] flex gap-4 items-center justify-center p-[10px] mt-[10px] text-[#fff]">
          <AiFillFacebook className="text-[25px] text-[#385185]" />
          <p className="font-medium text-[#385185] text-[18px]">
            Login in with Facebook
          </p>
        </div>
        <div className="text-center mt-[15px]">
          <p className="text-sky-800">Forgot password?</p>
        </div>
      </div>

      <div className="border-[1px]  m-auto p-[30px_35px] mt-[20px] bg-[#FFF] max-w-[480px] ">
        <div className="flex justify-center gap-2 items-center">
          <p className="text-[#262626] font-normal	text-[18px]">
            Don't have an account?
          </p>
          <Link to="/registration">
            <span className="text-[#0095F6] font-medium	not-italic text-[18px]">
              Sing up
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
      <div>
        <ul className="flex justify-center gap-4 text-[#8E8E8E] text-[16px] mt-[70px] flex-wrap">
          <li>Meta</li>
          <li>About</li>
          <li>Blog</li>
          <li>Jobs</li>
          <li>Help</li>
          <li>API</li>
          <li>Privacy</li>
          <li>Terms</li>
          <li>Top Accounts</li>
          <li>Locations</li>
          <li>Instagram Lite</li>
          <li>Threads</li>
          <li>Contact Uploading & Non-Users</li>
          <li>Meta Verified</li>
        </ul>
      </div>
      <div className="flex justify-center gap-6 items-center text-[#8E8E8E] mt-[15px]">
        <select name="" id="" className="outline-none">
          <option value="">English</option>
          <option value="">Russion</option>
          <option value="">Estonia</option>
          <option value="">Brazil</option>
          <option value="">English</option>
        </select>
        <span>© 2023 Instagram from Meta</span>
      </div>
    </div>
  );
};

export default Login;
