import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

import Accordion from "./Accordion";

import logo from "@/assets/img/logo.svg";

const Menu = ({ openMenu, clickMenu, setOpenMenu }) => {
  let autoRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!autoRef.current.contains(e.target)) {
        setOpenMenu(false);
        console.log(autoRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div
        className={`${
          openMenu ? "left-0" : "-left-full"
        } flex flex-col w-full bg-[#f4ded9]  overflow-y-auto fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
        ref={autoRef}
      >
        <div className="flex w-full items-center justify-between py-4 border-b border-gray-900">
          <div className="w-1/2">
            <Link href={"/"}>
              <Image src={logo} alt="" className="w-28 md:w-24" />
            </Link>
          </div>

          <div className="flex justify-end w-1/2">
            <div
              onClick={clickMenu}
              className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-full bg-transparent hover:opacity-80"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-gray-900"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="h-4/6 pt-4">
          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">Beauty</span>
            </Link>
          </div>
          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">Style</span>
            </Link>
          </div>
          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">Health</span>
            </Link>
          </div>
          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">Entertainment</span>
            </Link>
          </div>
          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">Relationship</span>
            </Link>
          </div>
          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">Food</span>
            </Link>
          </div>
          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">Travel</span>
            </Link>
          </div>
          <Accordion title="Gifts" bg="f4ded9">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-4">
                <Link
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href={"/plants"}
                >
                  Recipients
                </Link>
                <a
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href="#"
                >
                  Occasions
                </a>
                <a
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href="#"
                >
                  Interests
                </a>
                <a
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href="#"
                >
                  Popular
                </a>
              </div>
            </div>
          </Accordion>

          <Accordion title="Shops" bg="f4ded9">
            <div className="overflow-hidden pb-0">
              <div className="duration-300 px-4">
                <Link
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href={"/collection"}
                >
                  Plants
                </Link>
                <Link
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href={"/collection"}
                >
                  Pots
                </Link>
                <Link
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href={"/collection"}
                >
                  Soils
                </Link>
                <Link
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href={"/collection"}
                >
                  Care
                </Link>
                <Link
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href="/collection"
                >
                  Accessories
                </Link>
                <Link
                  className="flex items-center h-8 text-xs font-semibold text-gray-900 "
                  href="/collection"
                >
                  Gifts
                </Link>
              </div>
            </div>
          </Accordion>

          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">Reviews</span>
            </Link>
          </div>
          <div className={` py-0 flex flex-col w-full `}>
            <Link
              href={"/blogs"}
              className="flex items-center justify-between h-10 px-3 text-gray-900 text-xs md:text-[18px] font-semibold md:font-bold"
            >
              <span className="text-sm">News</span>
            </Link>
          </div>
        </div>
        {/* <div className="flex h-2/6 items-end justify-end flex-col space-y-1 py-8 mt-0">
          <div className="flex w-full items-center space-x-2 cursor-pointer">
            <div className=" font-semibold text-slate-900">
              <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-user-hexagon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
                <path d="M6.201 18.744a4 4 0 0 1 3.799 -2.744h4a4 4 0 0 1 3.798 2.741" />
                <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
              </svg>
              </div>
            </div>
            <div className="font-medium">Account</div>
          </div>
          <div className="flex w-full items-center2 space-x-1 cursor-pointer">
            
            <div className="font-medium">Logout</div>
          </div>
        </div> */}
      </div>
      {openMenu ? (
        <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Menu;
