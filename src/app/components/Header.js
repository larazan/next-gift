"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import logo from "/public/assets/img/logo.svg";
import NavLinks from "./NavLinks";

const Header = () => {
  const [show, setShow] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const clickMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <header className="fixed2 z-20 flex h-10 md:h-14 w-full top-0 md:m-0 px-4 md:px-6 py-6 md:py-3  items-center justify-between bg-white border-b shadow2">
        <div className="flex w-full md:w-1/5 justify-between space-x-4 ">
          <div className="flex justify-between w-full md:w-[100px]">
            <section className="w-1/6">
              <button className=" h-8 w-8 md:hidden" onClick={clickMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </button>
              <div
                className={` ${
                  openMenu === false ? "hidden" : "flex flex-col"
                }   z-30 fixed top-0 left-0 text-white text-4xl font-bold  flex-1 flex-col justify-between`}
              >
                <aside className="bg-white w-[300px] h-[100vh] w-full p-6 sm:w-60 z-50">
                  <button
                    className="absolute flex top-1 right-1 rounded text-gray-800 px-1 py-1 cursor-pointer"
                    onClick={clickMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                      />
                    </svg>
                  </button>
                  <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                      <div className="flex flex-col space-y-3 text-2xl">
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="text-green-500"
                        >
                          Recipients
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="text-pink-500"
                        >
                          Occasions
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="text-blue-500"
                        >
                          Interests
                        </a>
                        <a
                          rel="noopener noreferrer"
                          href="#"
                          className="text-indigo-500"
                        >
                          Popular
                        </a>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-[16px] font-semibold text-gray-400">
                        Review
                      </h2>
                      <div className="flex flex-col space-y-4 text-[16px] text-gray-600 capitalize">
                        <a rel="noopener noreferrer" href="#">
                          electronic
                        </a>
                        <a rel="noopener noreferrer" href="#">
                          kitchen
                        </a>
                        <a rel="noopener noreferrer" href="#">
                          home & garden
                        </a>
                        <a rel="noopener noreferrer" href="#">
                          health & leisure
                        </a>
                        <a rel="noopener noreferrer" href="#">
                          tech
                        </a>
                        <a rel="noopener noreferrer" href="#">
                          baby & kid
                        </a>
                        <a rel="noopener noreferrer" href="#">
                          style
                        </a>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <Link
                        href={""}
                        className="text-[18px] font-semibold text-gray-800"
                      >
                        Deals
                      </Link>
                    </div>
                  </nav>
                </aside>
                <div className="opacity-50 fixed inset-0 z-30 bg-black"></div>
              </div>
            </section>
            <div className="w-4/6 md:w-full flex justify-center items-center">
              <Link href={"/"}>
                <Image src={logo} />
              </Link>
            </div>
            <div className="w-1/6 flex justify-end md:hidden">
              <div
                id="search-toggle"
                className="flex items-center cursor-pointer"
                onClick={handleClick}
              >
                <svg
                  className="fill-current text-gray-700 w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path
                    className="heroicon-ui"
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="w-3/5 hidden  md:flex items-center bg-[#ebebeb] rounded-lg">
          <div className="pl-2">
            <svg
              className="fill-current text-gray-500 w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="heroicon-ui"
                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
              />
            </svg>
          </div>
          <input
            className="w-full rounded-2xl bg-[#ebebeb] text-gray-700 leading-tight focus:outline-none py-2 px-2"
            id="search"
            type="text"
            placeholder="Search something"
          />
        </div>

        <div className="w-1/5 hidden md:flex flex-row space-x-3 justify-end">
          <div className="flex space-x-2 items-center">
            <NavLinks />
            {/* <Link href={"/login"} className="hidden md:flex">
              <button className="flex button items-center justify-center px-4 py-1.5 opacity-90 hover:opacity-100">
                <span className="text-sm font-semibold font-mabrybold text-gray-900">
                  Sign in
                </span>
              </button>
            </Link>
            <Link href={"/register"} className="hidden md:flex">
              <button className="flex button items-center justify-center rounded border border-blue-700 px-3 py-1.5 bg-blue-600 opacity-90 hover:opacity-100">
                <span className="text-sm font-semibold text-white">
                  Sign up
                </span>
              </button>
            </Link> */}

            {/* <Notification /> */}

            {/* <UserMenu /> */}
          </div>
        </div>
      </header>

      {show ? (
        <div
          className="relative w-full md:hidden bg-white shadow-xl"
          id="search-content"
        >
          <div className="container mx-auto py-2 px-2 text-black">
            <input
              id="searchfield"
              type="search"
              placeholder="Search..."
              autofocus="autofocus"
              className="w-full text-grey-800 transition focus:outline-none focus:border-transparent p-2 appearance-none leading-normal text-xl lg:text-2xl"
            />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
