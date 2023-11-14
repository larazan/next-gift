import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import GoTop from "@/app/components/GoTop";
import Related from "@/app/components/Related";

import ava1 from "/public/assets/img/ava1.svg";
import ava2 from "/public/assets/img/ava2.svg";

import cosmetic1 from "@/assets/cosmetics/cosmetic1.png";
import cosmetic2 from "@/assets/cosmetics/cosmetic2.png";
import cosmetic3 from "@/assets/cosmetics/cosmetic3.png";
import cosmetic4 from "@/assets/cosmetics/cosmetic4.png";
import cosmetic5 from "@/assets/cosmetics/cosmetic5.png";
import cosmetic6 from "@/assets/cosmetics/cosmetic6.png";
import cosmetic7 from "@/assets/cosmetics/cosmetic7.png";
import cosmetic8 from "@/assets/cosmetics/cosmetic8.png";
import cosmetic9 from "@/assets/cosmetics/cosmetic9.png";
import cosmetic10 from "@/assets/cosmetics/cosmetic10.png";
import cosmetic11 from "@/assets/cosmetics/cosmetic11.png";
import cosmetic12 from "@/assets/cosmetics/cosmetic12.png";
import cosmetic13 from "@/assets/cosmetics/cosmetic13.png";
import cosmetic14 from "@/assets/cosmetics/cosmetic14.png";
import cosmetic15 from "@/assets/cosmetics/cosmetic15.png";
import cosmetic16 from "@/assets/cosmetics/cosmetic16.png";
import cosmetic17 from "@/assets/cosmetics/cosmetic17.png";

export default function page() {
  const cosmetics = [
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic1,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic2,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic3,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic4,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic5,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic6,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic7,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic8,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic9,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic10,
    },
    {
      title: "Nurture Nature Care Basket",
      desc: "The ‘Time to Relax’ Gift Box from Nurture by Nature is the ideal present for anyone craving some peace, relaxation, and downright serenity. Treat them to a selection of luxurious, essential oil-infused products featuring soothing aromas like Lavender, Oat Honey, and Shea Butter. This deluxe set is a curated collection of Nurture by Nature’s finest offerings, designed to transport you or a special someone to a heavenly realm of deep relaxation.",
      url: "https://www.amazon.com/gp/product/B09LHZHTNH/?tag=giftlablist08-20&geniuslink=true",
      image: cosmetic11,
    },
  ];
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <GoTop />

      <div className="flex flex-col bg-white min-h-screen ">
        <div className="bg-[#FFE5DD] py-10 mb-4">
          <h1 className="relative mx-3 md:mx-auto text-3xl md:text-5xl md:leading-[60px] max-w-3xl m-auto font-semibold text-center mt-4 sm:mt-6 mb-5 sm:mb-0">
            31 Amazing Self-Care Gift Basket Ideas For You or a Friend
          </h1>
          <a href="" className="flex items-center justify-center sm:hidden">
            <div>
              <div className="border-white rounded-full border-3 w-10 h-10 roundedShadow">
                <span
                  style={{
                    boxSizing: "border-box",
                    display: "inline-block",
                    overflow: "hidden",
                    width: "initial",
                    height: "initial",
                    background: "none",
                    opacity: 1,
                    border: "0px",
                    margin: "0px",
                    padding: "0px",
                    position: "relative",
                    maxWidth: "100%",
                  }}
                >
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "block",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      maxWidth: "100%",
                    }}
                  >
                    <Image
                      alt=""
                      aria-hidden="true"
                      src={ava1}
                      className="rounded-full "
                      style={{
                        display: "block",
                        maxWidth: "100%",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
            <p className="text-sm font-semibold text-[#404040] ml-2">
              Annanya Chaturvedi
            </p>
          </a>
          <div className="mt-4 sm:mt-6 text-center text-[#565656] flex justify-center items-center sm:divide-x relative sm:space-x-3 divide-[#CACACA]">
            <a
              href=""
              className="items-center justify-center hidden font-medium sm:flex"
            >
              <div>
                <div className="border-white rounded-full border-3 hidden text-[20px] leading-9 text-center w-11 h-11 left-11 -top-6 roundedShadow sm:block">
                  <span
                    style={{
                      boxSizing: "border-box",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: "100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "border-box",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: "100%",
                      }}
                    >
                      <Image
                        alt=""
                        aria-hidden="true"
                        src={ava1}
                        className="rounded-full "
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <p className="text-sm font-semibold text-[#404040] sm:ml-5 hidden sm:block">
                Annanya Chaturvedi
              </p>
            </a>
            <div className="flex items-center pl-0 sm:pl-3 border-r pr-3 sm:pr-0 border-[#CACACA]">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_238_253)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M6.08333 0.666626C6.08333 0.252412 5.74754 -0.083374 5.33333 -0.083374C4.91912 -0.083374 4.58333 0.252412 4.58333 0.666626V1.1679C2.39564 2.1441 0.827616 4.24638 0.609016 6.74499C0.5833 7.03892 0.583311 7.37848 0.583329 7.95321L0.58333 7.99996L0.583329 8.04671C0.583311 8.62144 0.5833 8.961 0.609016 9.25493C0.894515 12.5182 3.48176 15.1054 6.74503 15.3909C7.03896 15.4167 7.37853 15.4166 7.95327 15.4166L8 15.4166L8.04673 15.4166C8.62147 15.4166 8.96103 15.4167 9.25497 15.3909C12.5182 15.1054 15.1055 12.5182 15.391 9.25493C15.4167 8.96099 15.4167 8.62143 15.4167 8.04669V7.99996V7.95323C15.4167 7.37849 15.4167 7.03892 15.391 6.74499C15.1724 4.24638 13.6043 2.1441 11.4167 1.1679V0.666626C11.4167 0.252412 11.0809 -0.083374 10.6667 -0.083374C10.2524 -0.083374 9.91666 0.252412 9.91666 0.666626V0.69974C9.69963 0.658998 9.47889 0.628569 9.25497 0.608979C8.96104 0.583263 8.62148 0.583274 8.04675 0.583292L8 0.583293L7.95325 0.583292C7.37852 0.583274 7.03896 0.583263 6.74503 0.608979C6.5211 0.628569 6.30036 0.658998 6.08333 0.69974V0.666626ZM9.91666 2.66663V2.23383C9.65952 2.17098 9.39487 2.12695 9.12423 2.10327C8.90411 2.08401 8.63494 2.08329 8 2.08329C7.36505 2.08329 7.09589 2.08401 6.87576 2.10327C6.60513 2.12695 6.34047 2.17098 6.08333 2.23383V2.66663C6.08333 3.08084 5.74754 3.41663 5.33333 3.41663C4.98139 3.41663 4.68606 3.17421 4.60522 2.84725C3.21603 3.69303 2.25298 5.16494 2.10331 6.87572C2.08405 7.09585 2.08333 7.36502 2.08333 7.99996C2.08333 8.6349 2.08405 8.90407 2.10331 9.12419C2.32536 11.6623 4.33767 13.6746 6.87576 13.8966C7.09589 13.9159 7.36505 13.9166 8 13.9166C8.63494 13.9166 8.90411 13.9159 9.12423 13.8966C11.6623 13.6746 13.6746 11.6623 13.8967 9.12419C13.9159 8.90407 13.9167 8.6349 13.9167 7.99996C13.9167 7.36502 13.9159 7.09585 13.8967 6.87572C13.747 5.16493 12.784 3.69303 11.3948 2.84724C11.3139 3.17421 11.0186 3.41663 10.6667 3.41663C10.2524 3.41663 9.91666 3.08084 9.91666 2.66663ZM4.66666 4.58329C4.25245 4.58329 3.91666 4.91908 3.91666 5.33329C3.91666 5.74751 4.25245 6.08329 4.66666 6.08329H11.3333C11.7475 6.08329 12.0833 5.74751 12.0833 5.33329C12.0833 4.91908 11.7475 4.58329 11.3333 4.58329H4.66666ZM6 8.66663C6 9.03481 5.70152 9.33329 5.33333 9.33329C4.96514 9.33329 4.66666 9.03481 4.66666 8.66663C4.66666 8.29844 4.96514 7.99996 5.33333 7.99996C5.70152 7.99996 6 8.29844 6 8.66663ZM5.33333 12C5.70152 12 6 11.7015 6 11.3333C6 10.9651 5.70152 10.6666 5.33333 10.6666C4.96514 10.6666 4.66666 10.9651 4.66666 11.3333C4.66666 11.7015 4.96514 12 5.33333 12ZM8.66666 11.3333C8.66666 11.7015 8.36819 12 8 12C7.63181 12 7.33333 11.7015 7.33333 11.3333C7.33333 10.9651 7.63181 10.6666 8 10.6666C8.36819 10.6666 8.66666 10.9651 8.66666 11.3333ZM10.6667 12C11.0349 12 11.3333 11.7015 11.3333 11.3333C11.3333 10.9651 11.0349 10.6666 10.6667 10.6666C10.2985 10.6666 10 10.9651 10 11.3333C10 11.7015 10.2985 12 10.6667 12ZM8.66666 8.66663C8.66666 9.03481 8.36819 9.33329 8 9.33329C7.63181 9.33329 7.33333 9.03481 7.33333 8.66663C7.33333 8.29844 7.63181 7.99996 8 7.99996C8.36819 7.99996 8.66666 8.29844 8.66666 8.66663ZM10.6667 9.33329C11.0349 9.33329 11.3333 9.03481 11.3333 8.66663C11.3333 8.29844 11.0349 7.99996 10.6667 7.99996C10.2985 7.99996 10 8.29844 10 8.66663C10 9.03481 10.2985 9.33329 10.6667 9.33329Z"
                    fill="#22272F"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_238_253">
                    <rect width="16" height="16" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="text-xs text-[#404040] leading-5 pl-2">
                12 June 2023
              </p>
            </div>
            <div className="flex items-center pl-3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.00001 0.583374C3.9039 0.583374 0.583344 3.90393 0.583344 8.00004C0.583344 12.0962 3.9039 15.4167 8.00001 15.4167C12.0961 15.4167 15.4167 12.0962 15.4167 8.00004C15.4167 3.90393 12.0961 0.583374 8.00001 0.583374ZM2.08334 8.00004C2.08334 4.73236 4.73233 2.08337 8.00001 2.08337C11.2677 2.08337 13.9167 4.73236 13.9167 8.00004C13.9167 11.2677 11.2677 13.9167 8.00001 13.9167C4.73233 13.9167 2.08334 11.2677 2.08334 8.00004ZM8.75001 5.33337C8.75001 4.91916 8.41422 4.58337 8.00001 4.58337C7.5858 4.58337 7.25001 4.91916 7.25001 5.33337V8.00004C7.25001 8.2508 7.37533 8.48498 7.58398 8.62408L9.58398 9.95741C9.92863 10.1872 10.3943 10.094 10.624 9.7494C10.8538 9.40475 10.7607 8.9391 10.416 8.70934L8.75001 7.59865V5.33337Z"
                  fill="#404040"
                ></path>
              </svg>
              <p className="text-xs text-[#404040] leading-5 pl-2">11 Mins</p>
            </div>
          </div>
          <div className="mt-2 sm:mt-2 flex justify-center items-center">
            <div className="flex flex-wrap ">
              <button className="flex mr-2 mt-2 rounded px-2 py-1 items-center bg-[#736ef7] hover:opacity-90">
                <span className=" font-semibold text-white text-sm">
                  Birthday Gifts
                </span>
              </button>
              <button className="flex mr-2 mt-2 rounded px-2 py-1 items-center bg-[#736ef7] hover:opacity-90">
                <span className=" font-semibold text-white text-sm">
                  Gift Baskets
                </span>
              </button>
              <button className="flex mr-2 mt-2 rounded px-2 py-1 items-center bg-[#736ef7] hover:opacity-90">
                <span className=" font-semibold text-white text-sm">Women</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-row w-full">
          <div className="flex flex-1 flex-col items-center justify-center relative">
            <div className="flex flex-1 flex-col pb-18 max-w-md md:max-w-2xl ">
              <section className="w-full mx-auto  mt-2 md:mt-4 px-5 markdown-blog">
                <article>
                  <p>
                    Welcome to your go-to resource for exceptional self-care
                    gift basket ideas! Whether you&apos;re planning a revitalizing
                    DIY spa experience for yourself or looking to lavish a loved
                    one with well-deserved indulgence, we&apos;ve got something to
                    suit every preference. Explore our handpicked guide to
                    unearth the finest self-care gifts the market offers!
                  </p>
                  <p>
                    Read this interview-cum-candid-conversation for a sneak peek
                    into her journey, and what Live Wire stands for, in heart
                    and mind.
                  </p>
                </article>

                <div className="flex flex-col space-y-12">
                  {cosmetics.map((data, index) => {
                    return (
                      <div className="w-full flex flex-col" key={index}>
                        <h1 className="text-2xl tracking-tight pb-4">
                          {index + 1}. {data.title}
                        </h1>
                        <div className="flex w-full flex-col md:flex-row space-y-2 md:space-x-5 items-center">
                          <div className="w-4/6 md:w-2/6">
                            <Image src={data.image} alt="" />
                          </div>
                          <div className="w-full md:w-4/6 flex flex-col ">
                            <p>
                              The &apos;Time to Relax&apos; Gift Box from Nurture by
                              Nature is the ideal present for anyone craving
                              some peace, relaxation, and downright serenity.
                              Treat them to a selection of luxurious, essential
                              oil-infused products featuring soothing aromas
                              like Lavender, Oat Honey, and Shea Butter. This
                              deluxe set is a curated collection of Nurture by
                              Nature&apos;s finest offerings, designed to transport
                              you or a special someone to a heavenly realm of
                              deep relaxation.
                            </p>
                            <Link
                              href=""
                              className="flex py-2 px-3 justify-center text-[18px] text-white font-semibold text-center border hover:opacity-90 rounded-md bg-[#ea348b]"
                            >
                              Buy from Amazon
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <article>
                  <h2>
                  What are the benefits of practicing self-care?
                  </h2>
                  <p>
                  Oh my goodness, where do I even begin with the benefits of practicing self-care?! So many amazing things can come from taking some time to pamper yourself. It can help reduce stress and anxiety, which is always good. Self-care can also help you feel more centered and balanced and give you greater control over your life.
                  </p>
                  <p>
                  It can improve your overall mood and help you feel happier and more positive. Plus, taking care of yourself can help you be more productive and focused, leading to better relationships with the people around you. Self-care is truly the gift that keeps on giving!
                  </p>
                  
                </article>

              </section>

              <Related />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
