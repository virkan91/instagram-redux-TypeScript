import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import "./registration.css";

// import img
import logoregis from "../../assets/img-register/logo-regis.png";
import appstor from "../../assets/img-register/appstor.png";
import googlepay from "../../assets/img-register/googleplay.png";
// import { saveToken } from "../../utils/token";
import { message } from "antd";
import axios from "axios";

const Registration = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = {
      email: email,
      userName: name,
      password: password,
      confirmPassword: confirmPassword,
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}Account/register`,
        user
      );
      if (
        data.statusCode === 200 &&
        data.data !== "Your username or password is incorrect!!!"
      ) {
        // saveToken(data.data);
        navigate("/");
      } else {
        message.error("Wrong password or login!");
      }
    } catch (error) {}
  };

  return (
    <div className="bg-[#FAFAFA] pt-[90px] pb-[90px]">
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
          <AiFillFacebook className="text-[25px]" />
          <p className="font-medium text-[#FFF] text-[18px]">
            Login in with Facebook
          </p>
        </div>
        <div className="py-[20px] relative flex items-center justify-center m-[8px]">
          <hr className="border w-full" />
          <p className="absolute bg-white px-[10px] text-[12px] text-[#959595]">
            OR
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
            value={email}
            type="email"
            placeholder="Email"
          />
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setName(event.target.value);
            }}
            value={name}
            type="text"
            placeholder="Username"
          />
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(event.target.value);
            }}
            value={password}
            type="password"
            placeholder="Password"
          />
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setConfirmPassword(event.target.value);
            }}
            value={confirmPassword}
            type="password"
            placeholder="Repeat password"
          />

          <button
            type="submit"
            className="bg-[#4cb5f9] text-[#FFF] font-medium	"
          >
            Sign Up
          </button>

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

export default Registration;
