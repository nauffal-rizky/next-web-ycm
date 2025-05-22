"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isDropdown2, setIsDropdown2] = useState(false);

  const dropdownToggle = () => {
    setIsDropdown(!isDropdown);

    if (isDropdown2 == true) {
      setIsDropdown2(!isDropdown2);
    }
  };

  const dropdownToggle2 = () => {
    setIsDropdown2(!isDropdown2);

    if (isDropdown == true) {
      setIsDropdown(!isDropdown);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between bg-main1 py-3 px-5 text-white z-10">
      <div className="flex justify-between items-center max-[950px]:gap-2 max-[950px]:w-fit">
        <Link href="/" className="cursor-pointer">
          <Image
            className=""
            src="/YCM.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className="nav-toggles">
        <Link
          href="/"
          className="max-[950px]:hidden font-medium text-base cursor-pointer"
        >
          Home
        </Link>
        <div className="max-[950px]:hidden cursor-pointer drop md:relative flex flex-col items-center">
          <span className="flex items-center font-medium text-base">
            Our work
            <FontAwesomeIcon
              onClick={dropdownToggle}
              className="ml-2 text-xl"
              icon={isDropdown ? faCaretUp : faCaretDown}
            />
          </span>
          <div
            className={`absolute left-[50%] translate-x-[-50%] flex flex-col w-[120] bg-shiro text-kuro text-sm divide-y-[1.5px] rounded-md transition-all duration-300 ease-in-out ${
              isDropdown
                ? "top-[30px] opacity-100 pointer-events-auto"
                : "top-[20px] opacity-0 pointer-events-none"
            }`}
          >
            <Link
              href="/activities"
              className="py-2 px-3 hover:bg-gray-200 text-center"
            >
              YCM Activities
            </Link>
            <Link
              href="/projects"
              className="py-2 px-3 hover:bg-gray-200 text-center"
            >
              YCM Projects
            </Link>
          </div>
        </div>
        <div className="max-[950px]:hidden text-sm cursor-pointer drop md:relative flex flex-col items-center">
          <span className="flex items-center font-medium text-base">
            Who we are
            <FontAwesomeIcon
              onClick={dropdownToggle2}
              className="ml-2 text-xl"
              icon={isDropdown2 ? faCaretUp : faCaretDown}
            />
          </span>
          <div
            className={`absolute left-[50%] translate-x-[-50%] flex flex-col w-[100] bg-shiro text-kuro text-sm divide-y-[1.5px] rounded-md transition-all duration-300 ease-in-out ${
              isDropdown2
                ? "top-[30px] opacity-100 pointer-events-auto"
                : "top-[20px] opacity-0 pointer-events-none"
            }`}
          >
            <Link
              href="/about"
              className="py-2 px-3 hover:bg-gray-200 text-center"
            >
              About YCM
            </Link>
            <Link
              href="/team"
              className="py-2 px-3 hover:bg-gray-200 text-center"
            >
              YCM Team
            </Link>
          </div>
        </div>
        <Link
          href="/success-stories"
          className="max-[950px]:hidden font-medium text-base cursor-pointer"
        >
          Success stories
        </Link>
        <Link
          href="/news-media"
          className="max-[950px]:hidden font-medium text-base cursor-pointer"
        >
          News & Media
        </Link>
        <Link
          href="/get-involved"
          className="max-[950px]:bg-main2 max-[950px]:hover:bg-stone-700 max-[950px]:py-2 max-[950px]:px-4 max-[950px]:rounded-md font-medium min-[950px]:text-base text-sm cursor-pointer"
        >
          Get involved
        </Link>
        <Link
          href="/contact"
          className="max-[950px]:hidden font-medium text-base cursor-pointer"
        >
          Contact us
        </Link>
        <Link
          href="/donate"
          className="bg-alt1 hover:bg-red-600 font-medium min-[950px]:text-base text-sm py-2 px-4 rounded-md cursor-pointer"
        >
          Donate
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
