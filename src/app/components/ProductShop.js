"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import product1 from "@/assets/gallery/gallery1.png";
import product2 from "@/assets/gallery/gallery2.png";
import product3 from "@/assets/gallery/gallery3.png";
import product4 from "@/assets/gallery/gallery4.png";
import product5 from "@/assets/gallery/gallery5.png";
import product6 from "@/assets/gallery/gallery6.png";
import product7 from "@/assets/gallery/gallery7.png";
import product8 from "@/assets/gallery/gallery8.png";
import product9 from "@/assets/gallery/gallery9.png";

const ProductShop = () => {
    const [open, setOpen] = useState('');
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = () => {
        setIsHovered(!isHovered);
    }

    const unhover = () => {
        setOpen('')
      }

      const productData = [
        {
            id: 1,
            title: "Glow Balm",
            slug: "product-1",
            price: "37.95",
            category: "Ursa Major",
            img: product1,
          },
          {
            id: 2,
            title: "Mighty Patch Original Patch",
            slug: "product-1",
            price: "8.00",
            category: "Osea",
            img: product2,
          },
          {
            id: 3,
            title: "Mighty Patch Nose Patch",
            slug: "product-1",
            price: "21.00",
            category: "Ilia",
            img: product3,
          },
          {
            id: 4,
            title: "Mighty Patch Variety Patch",
            slug: "product-1",
            price: "28.00",
            category: "Heretic",
            img: product4,
          },
          {
            id: 5,
            title: "Pore Release",
            slug: "product-1",
            price: "35.00",
            category: "Anthurium",
            img: product5,
          },
          {
            id: 6,
            title: "Pore Purity",
            slug: "product-1",
            price: "16.00",
            category: "Monstera",
            img: product6,
          },
          {
            id: 7,
            title: "Rescue Balm",
            slug: "product-1",
            price: "48.00",
            category: "Anthurium",
            img: product7,
          },
          {
            id: 8,
            title: "Rescue Balm Red Correct",
            slug: "product-1",
            price: "85.00",
            category: "Monstera",
            img: product8,
          },
          {
            id: 9,
            title: "Lightning Wand",
            slug: "product-1",
            price: "8.00",
            category: "Anthurium",
            img: product9,
          },
      ];
    

  return (
    <>
        <div className={`w-full max-w-[1280px] px-5 py-1 md:px-10 mx-auto bg-white`}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 py-5 md:my-14 px-0 md:px-0">
          {productData.map((data, index) => {
            return (
              <Link
                href={`/detail`}
                className="transform overflow-hidden bg-transparent duration-200 hover:scale-105 cursor-pointer"
                key={index}
              >
                <div className="">
                <Image
                  width={500}
                  height={500}
                  src={data.img}
                  alt={data.title}
                //   onMouseOver={e => console.log(e)}
                />
                </div>
                {/* <div className="p-2 flex flex-col justify-center2 items-center2 space-y-1 text-black/[0.9]">
                  <h2 className="text-base text-center2 font-medium leading-tight">{data.title}</h2>
                  <div className="flex items-center2 text-black/[0.5]">
                    <p className="mr-2 text-lg text-gray-950 font-semibold">
                      ${data.price}
                    </p>

                    {data.price && (
                      <>
                        <p className="text-base  font-medium line-through">
                          ${data.price}
                        </p>
                      </>
                    )}
                  </div>
                </div> */}
                <section className="flex grow flex-col justify-start lg:mt-2 lg:justify-between">
                    <span className="truncate m-0 font-sans text-sm font-bold leading-tight 3xl:text-base text-gray-900">
                      {data.title}
                    </span>
                    <span className="text-sm italic leading-none lg:text-base 3xl:text-base text-gray-900">
                      {data.category}
                    </span>
                    <span className="flex flex-row items-center gap-2 text-sm leading-tight 3xl:text-base">
                      <span className="font-normal line-through decoration-sale text-gray-900">€29.95</span>
                      <span className="font-bold text-sale">€32.95</span>
                    </span>
                  </section>
              </Link>
            );
          })}
          <div className="col-span-full mb-8 text-center">
            <Link
              className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-20 px-12 py-3 relative bg-white text-black/[.99] hover:bg-black hover:text-white disabled:bg-white/40 disabled:hover:text-black border border-black/[.99] rounded-full"
              data-variant="rounded_light"
              href="/collection"
            >
              {" "}
              View all product
            </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default ProductShop