import React from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "./Title";
import Image from "next/image";
import { IoIosCloseCircle } from "react-icons/io";

const Search = ({ setIsSearchModal }) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] 
    after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-60 grid"
    >
      <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
        <div className="w-full h-full grid place-content-center ">
          <div className="relative z-50  md:w-[600px] w-[370px]  bg-white border-2 p-10 rounded-3xl ">
            <Title addClass="text-[40px] text-center font-dancing">
              Search
            </Title>
            <input
              type="text"
              placeholder="Search..."
              className="border w-full my-10"
            />

            <ul className="mt-10 flex flex-col gap-3">
              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all duration-300 cursor-pointer">
                <div className="relative flex ">
                  <Image src="/images/f1.png" alt="" width={50} height={50} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>

              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all duration-300 cursor-pointer">
                <div className="relative flex ">
                  <Image src="/images/f1.png" alt="" width={50} height={50} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>

              <li className="flex items-center justify-between p-1 hover:bg-primary transition-all duration-300 cursor-pointer">
                <div className="relative flex ">
                  <Image src="/images/f1.png" alt="" width={50} height={50} />
                </div>
                <span className="font-bold">Good Pizza</span>
                <span className="font-bold">$10</span>
              </li>
            </ul>
            <button
              className="absolute top-4 right-4 "
              onClick={() => setIsSearchModal(false)}
            >
              <IoIosCloseCircle
                className="hover:text-primary transition-all"
                size={30}
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default Search;
