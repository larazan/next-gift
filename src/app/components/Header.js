import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import logo from '/public/assets/img/logo.svg'

 const Header = () => {
  return (
    <>
      <header className="fixed2 z-20 flex h-10 md:h-14 w-full top-0 md:m-0 px-4 md:px-6 py-6 md:py-3  items-center justify-between bg-white border-b shadow2">
        <div className="flex w-full md:w-3/5 justify-between space-x-4">
          <div className="flex justify-between w-full md:w-[100px]">
            {/* <button className="h-8 w-8 md:hidden">
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
            </button> */}
            <div className="flex justify-center items-center">
              <Link href={"/"}>
                <Image src={logo} />
              </Link>
            </div>
          
           

           
           
          </div>
          
        </div>
        <div className="flex flex-row space-x-3">
          <div className="flex space-x-2 items-center">
            
            <Link href={"/login"} className="hidden md:flex">
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
            </Link>
            
            {/* <Notification /> */}
            
            {/* <UserMenu /> */}
          </div>
        </div>
      </header>  
    </>
  )
}

export default Header