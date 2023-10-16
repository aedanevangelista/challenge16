import React from "react";

import logo from "../assets/images/logo.svg";

const LeftAside = () => {
  return (
    <div className="flex flex-col w-[60%] h-[770px] z-10 pl-[8rem] pt-[5rem] pb-[10rem]">
      <div className="flex flex-col w-[60%] h-[100%]">
        <img src={logo} alt="logo" className="w-[10rem] mb-[8rem]" />
        <span className="font-[300] text-6xl tracking-[0.35em] text-[#c8a6a8]">
          WE'RE
        </span>
        <span className="font-[600] text-6xl tracking-[0.35em] my-1">
          COMING
        </span>
        <span className="font-[600] text-6xl tracking-[0.35em] ">SOON</span>
        <p className="text-[#c8a6a8] my-8">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form
          action=""
          className="flex flex-row relative items-center rounded-3xl"
        >
          <input
            type="email"
            placeholder="Email Address"
            className=" mt-4 w-[100%] bg-transparent px-8 py-3 rounded-full border placeholder:text-[#c8a6a8] border-[#c8a6a8]/50 outline-[#c8a6a8] shadow-lg shadow-[#ec9494]/30 "
          />
          <button className="absolute right-0 rounded-full bottom-0 border-full px-8 py-[0.8rem] bg-gradient-to-r from-[#f6b5b4] to-[#ec9494]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default LeftAside;
