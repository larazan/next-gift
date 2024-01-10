"use client"

import React, { useState } from "react";

const options = ["Most popular", "Most upvoted", "Most discussed", "Newest"];

const SortSelect = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex">
        <div className="w-[170px] relative flex group bg-white">
          <button className="w-full rounded-l-md px-2 text-sm text-gray-900 py-1.5 group-hover:bg-pink-50 group-hover:text-gray-700" onClick={toggling}>
            {selectedOption || "sort by"}
          </button>
          <div className="relative">
            <button
              type="button"
              className=" flex h-full items-center justify-center  px-2 text-gray-600 group-hover:bg-pink-50 group-hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-4 h-4 ${isOpen? 'rotate-180' : ''} `}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div className="min-w-[170px] absolute top-6 py-2 right-0 z-10 mt-4 origin-top-right rounded-md border border-gray-100 bg-white shadow-lg">
              {options.map((option, i) => (
                <div className="px-2">
                  <button
                    type="button"
                    onClick={onOptionClicked(option)}
                    key={i}
                    className="flex py-1 px-2 w-full rounded text-sm text-gray-500 no-underline hover:bg-pink-50"
                  >
                    <span>{option}</span>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SortSelect;
