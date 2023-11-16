import React from 'react'
import Image from 'next/image'

import product from "@/assets/iwatch.png";

 const Hero = () => {
  return (
    <>
      <div className="bg-[#f2f6f6] flex relative z-20 items-center overflow-hidden">
        <div className="container2 mx-auto px-6 flex items-center relative py-12">
            <div className="sm:w-2/3 lg:w-2/5 px-6 flex flex-col relative z-20 ">
                
                <h1 className="font-bebas-neue uppercase text-3xl sm:text-5xl font-bold flex flex-col leading-none dark:text-white text-[#b02768]">
                Life&apos;s a party.
                </h1>
                <h3 className='text-2xl font-semibold flex flex-col py-4 leading-tight tracking-tight dark:text-white text-[#1d4943]'>
                Gift responsibly.
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-white tracking-tight">
                    Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                </p>
                <div className="flex mt-8">
                    <a href="#" className=" py-1.5 px-4 rounded-lg bg-[#a2d219] border-2 border-transparent text-[#14322e] text-sm font-semibold mr-4 hover:opacity-90">
                        Get started
                    </a>
                </div>
            </div>
            <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                <Image src={product} alt='' className="max-w-xs md:max-w-sm2 m-auto"/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Hero