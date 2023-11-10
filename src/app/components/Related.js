import React from "react";
import Link from "next/link";
import Image from "next/image";

import gift11 from "@/assets/gift11.png";
import gift12 from "@/assets/gift12.png";
import gift13 from "@/assets/gift13.png";
import gift14 from "@/assets/gift14.png";
import gift15 from "@/assets/gift15.png";
import gift16 from "@/assets/gift16.png";
import gift17 from "@/assets/gift17.png";
import gift18 from "@/assets/gift18.png";
import gift19 from "@/assets/gift19.png";
import gift20 from "@/assets/gift20.png";
import gift21 from "@/assets/gift21.png";

const Related = () => {
  const gifts = [
    {
      title: "25 New Mom Gift Baskets That Are All About Her",
      url: "new-mom-gift-basket",
      image: gift11,
    },
    {
      title: "33 Meditation Gifts to Help Find Your Inner Zen Master",
      url: "meditation-gifts",
      image: gift12,
    },
    {
      title: "25 Creative Gifts for 7-Year-Old Boys to Fuel Their Curiosity",
      url: "gifts-for-7-year-old-boys",
      image: gift13,
    },
    {
      title: "25 Science Gifts That Are Sure To Make A Big Bang",
      url: "science-gifts",
      image: gift14,
    },
    {
      title: "30 Gifts For Your Brother-In Law That’ll Win Him Over",
      url: "gifts-for-brother-in-law",
      image: gift15,
    },
    {
      title: "30 Coffee Gift Basket Ideas For Your Favorite Java Junkies",
      url: "coffee-gift-baskets",
      image: gift16,
    },
    {
      title: "39 Stellar Astronomy Gifts for Every Starry-Eyed Enthusiast",
      url: "astronomy-gifts",
      image: gift17,
    },
    {
      title: "31 Epic Star Wars Gifts For Men They Will Geek Out Over",
      url: "star-wars-gifts-for-men",
      image: gift18,
    },
    {
      title: "27 Football Gifts That’ll Score You a Touchdown",
      url: "football-gifts",
      image: gift19,
    },
    {
      title: "32 Must-Have Gifts for 14-Year-Old Boys",
      url: "gift-ideas-for-14-year-old-boys",
      image: gift20,
    },
  ];

  return (
    <>
      <div className="py-10">
        <div>
          <p className="max-w-3xl mt-6 text-lg font-bold md:text-xl lg:text-2xl text-black">
            Related Gift List
          </p>
        </div>
        <div className="flex flex-col w-full">
          {gifts.map((data, index) => {
            return (
              <Link className="text-tundora no-underline" href="/" key={index}>
              <div className="my-[1em] mx-[0em] flex items-center w-full bg-white leading-[1.25em]">
                <figure className="m-0 mr-2 md:mr-5 flex aspect-[10/9] md:aspect-[16/10] h-fit flex-1 items-center justify-center">
                  <Image
                    alt=""
                    src={data.image}
                    className="h-full w-full rounded object-cover"
                    style={{ color: "transparent" }}
                  />
                </figure>
                <div className="flex w-2/3 md:max-w-[55%] flex-1 flex-col space-y-1 md:space-y-2">
                  <span className="my-[0.25em] mx-[0em] overflow-hidden break-words text-md md:text-lg leading-tight md:leading-tight font-semibold">
                    {data.title}
                  </span>
                  <span className="text-sm md:text-lg leading-tight md:leading-tight tracking-tight break-words text-justify">
                    Welcome to your go-to resource for exceptional self-care gift
                    basket ideas! Whether you’re planning a revitalizing DIY spa
                    experience for yourself or looking to lavish a loved one with
                    well-deserved indulgence
                  </span>
                </div>
              </div>
              <div className="h-px bg-mercury"></div>
            </Link>
            )
          })}
          

         
        </div>
      </div>
    </>
  );
};

export default Related;
