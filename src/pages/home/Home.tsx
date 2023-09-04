import { useEffect, useState } from "react";

import "./home.css";

// icons
import { BsSearch } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

// import img
import avatar from "../../assets/img-profile/avatar.jpg";
import i1 from "../../assets/img-home/i1.jpg";
import i2 from "../../assets/img-home/i2.jpg";
import im3 from "../../assets/img-home/im3.png";
import sof from "../../assets/img-home/sof.jpg";
import judo from "../../assets/img-home/judo.jpg";
import n from "../../assets/img-home/n.jpg";
import n2 from "../../assets/img-home/n2.jpg";
import n3 from "../../assets/img-home/n3.jpg";
import n4 from "../../assets/img-home/n4.jpg";
import n5 from "../../assets/img-home/n5.jpg";
import im8 from "../../assets/img-home/im8.png";
import { IPost } from "../../types/types";
import HomePosts from "../../components/HomePosts";
import { Link } from "react-router-dom";

import logoregis from "../../assets/img-register/logo-regis.png";
// import axios from "axios";
import { axiosRequest } from "../../utils/axiosRequest";

const Home = () => {
  const posts: IPost[] = [
    {
      id: 1,
      img: i1,
      nameUser: "virkan",
      address: "newposr",
      boximg: judo,
      discription:
        "А трус поджигатель бежит от женщины, желающий затушить подожженное Писание",
      coment: 2,
      like: false,
    },
    {
      id: 2,
      img: i2,
      nameUser: "shirinzade",
      address: "new",
      boximg: im3,
      discription: "How about a rematch?",
      coment: 3,
      like: true,
    },
    {
      id: 3,
      img: n,
      nameUser: "Softclub",
      address: "Душанбе",
      boximg: sof,
      discription: "Курсхои барномасози ",
      coment: 4,
      like: true,
    },
    {
      id: 4,
      img: n,
      nameUser: "New_Yourk",
      address: "New Yourk",
      boximg: im8,
      discription: "The best city",
      coment: 4,
      like: true,
    },
  ];

  // GET
  const [users, setUsers] = useState<any>([]);
  const getUsers = async () => {
    try {
      const { data } = await axiosRequest("/User/get-users");
      setUsers(data.data);
      console.log(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <nav className="fixed md:hidden w-full duration-300 top-0 border-b py-[15px] flex justify-between items-center px-[16px] bg-white">
        <Link to="/home">
          <div className="flex justify-center py-[40px]">
            <img src={logoregis} alt="" />
          </div>
        </Link>

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
      <div className="flex  justify-around">
        <div className=" max-w-[650px] ">
          {/* Storis */}

          <div className="exx flex gap-4 overflow-y-hidden overflow-x-scroll  mt-[80px] md:mt-[40px] m-[20px_15px]">
            <div className="rounded-full ml-[5px] sm:ml-[13px]">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={i1}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">Judo</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={i2}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={i1}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={i2}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={n}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={n4}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={n5}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={n3}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={n2}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            <div className="rounded-full">
              {" "}
              <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
                <img
                  src={avatar}
                  className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
                />
              </div>{" "}
              <p className="text-center leading-0 text-[15px]">friends</p>
            </div>
            {/* <div className="rounded-full">
          {" "}
          <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
            <img
              src={avatar}
              className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
            />
          </div>{" "}
          <p className="text-center leading-0 text-[15px]">friends</p>
        </div>
        <div className="rounded-full">
          {" "}
          <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
            <img
              src={avatar}
              className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
            />
          </div>{" "}
          <p className="text-center leading-0 text-[15px]">friends</p>
        </div>
        <div className="rounded-full">
          {" "}
          <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
            <img
              src={avatar}
              className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
            />
          </div>{" "}
          <p className="text-center leading-0 text-[15px]">friends</p>
        </div>
        <div className="rounded-full">
          {" "}
          <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
            <img
              src={avatar}
              className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
            />
          </div>{" "}
          <p className="text-center leading-0 text-[15px]">friends</p>
        </div>
        <div className="rounded-full">
          {" "}
          <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
            <img
              src={avatar}
              className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
            />
          </div>{" "}
          <p className="text-center leading-0 text-[15px]">friends</p>
        </div>
        <div className="rounded-full">
          {" "}
          <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
            <img
              src={avatar}
              className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
            />
          </div>{" "}
          <p className="text-center leading-0 text-[15px]">friends</p>
        </div>
        <div className="rounded-full">
          {" "}
          <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
            <img
              src={avatar}
              className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
            />
          </div>{" "}
          <p className="text-center leading-0 text-[15px]">friends</p>
        </div>
        <div className="rounded-full">
          {" "}
          <div className="bgGrad rounded-full p-[2px] inline-block w-[62px] h-[62px] ">
            <img
              src={avatar}
              className="bg-white cursor-grab rounded-full border-[1.5px] border-white"
            />
          </div>{" "}
          <p className="text-center leading-0 text-[15px]">friends</p>
        </div> */}
          </div>

          {/* home posts */}
          <div className="lg:w-[90%] py-[40px] m-auto">
            {posts.map((post: IPost) => {
              return <HomePosts post={post} />;
            })}
          </div>
        </div>
        <div className="mt-[60px] hidden lg:block">
          <div className=" w-[320px] flex justify-between items-center">
            <div className="flex  gap-[10px] items-center">
              <img
                src={avatar}
                alt=""
                className="rounded-full w-[45px] h-[45px]"
              />
              <p className="font-semibold text-[18px]">virkan91</p>
            </div>
            <div>
              <span className="text-[#0095f6] text-[14px] font-semibold">
                Переключться
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-[30px] mb-[30px]">
            <div>
              <p className="text-[#838383] font-medium text-[15px]">
                Рекомендации для вас
              </p>
            </div>
            <div>
              <p className="text-[#000] font-semibold text-[15px]">Все</p>
            </div>
          </div>
          {users.map((elem: any) => {
            return (
              <div key={elem.id} className="flex justify-between items-center ">
                <div className="flex items-center gap-3 mb-[15px]">
                  <img
                    className="rounded-full w-[50px] p-0 h-[50px]"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6a6KfKK66Jy1eCuDau7yp2rb5dIfGvl45g&usqp=CAU"
                    alt=""
                  />
                  <h1 className="text-[#000] font-medium">{elem.userName}</h1>
                </div>
                <div>
                  <p className="text-[#0095f6] text-[14px] font-semibold">
                    Подписаться
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
