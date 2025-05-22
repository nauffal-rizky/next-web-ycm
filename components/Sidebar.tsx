"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

interface AdminAsideType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ setIsOpen, isOpen }: AdminAsideType) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isDropdown2, setIsDropdown2] = useState(false);

  const sidebarToggle = () => {
    setIsOpen(!isOpen);

    if (isOpen == false && isDropdown == true) {
      setIsDropdown(!isDropdown);
    } else if (isOpen == false && isDropdown2 == true) {
      setIsDropdown2(!isDropdown2);
    }
  };

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
    <div className="min-[950px]:hidden block">
      <div
        className={`fixed top-0 left-0 w-full h-screen transition duration-300 ease-in-out ${
          isOpen ? "bg-black/30 z-20" : "bg-transparent -z-20"
        }`}
      >
        <div
          className={`absolute top-0 left-0 flex flex-col items-center justify-between w-[200px] h-full bg-main1 text-white py-5 transition-all duration-300 ease-in-out ${
            isOpen
              ? "toggles-open translate-x-0"
              : "toggles-close -translate-x-full"
          }`}
        >
          <Link href="/" className="cursor-pointer">
            <Image
              // className="w-[75px]! max-sm:w-[50px]!"
              src="/YCM.jpg"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </Link>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-base cursor-pointer">
              Home
            </Link>
            <div className=" md:relative flex flex-col cursor-pointer">
              <span
                onClick={dropdownToggle}
                className="flex items-center justify-between text-base"
              >
                Our work
                <FontAwesomeIcon
                  onClick={dropdownToggle}
                  className="ml-2 text-xl"
                  icon={isDropdown ? faCaretUp : faCaretDown}
                />
              </span>
              <div
                className={`flex flex-col bg-shiro text-kuro text-sm divide-y-[1.5px] rounded-md overflow-y-hidden transition-all duration-300 ease-in-out ${
                  isDropdown ? "h-[73px] mt-2" : "h-0 mt-0"
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
            <div className=" md:relative flex flex-col cursor-pointer">
              <span
                onClick={dropdownToggle}
                className="flex items-center justify-between text-base"
              >
                Who we are
                <FontAwesomeIcon
                  onClick={dropdownToggle2}
                  className="ml-2 text-xl"
                  icon={isDropdown2 ? faCaretUp : faCaretDown}
                />
              </span>
              <div
                className={`flex flex-col bg-shiro text-kuro text-sm divide-y-[1.5px] rounded-md overflow-y-hidden transition-all duration-300 ease-in-out ${
                  isDropdown2 ? "h-[73px] mt-2" : "h-0 mt-0"
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
            <Link href="/success-stories" className="text-base cursor-pointer">
              Success stories
            </Link>
            <Link href="/news-media" className="text-base cursor-pointer">
              News & Media
            </Link>
            <Link href="/get-involved" className="text-base cursor-pointer">
              Get involved
            </Link>
            <Link href="/contact" className="text-base cursor-pointer">
              Contact us
            </Link>
            <Link href="/donate" className="text-base cursor-pointer">
              Donate
            </Link>
          </div>
          <div className=" flex gap-4">
            <Link href="" className="text-base">
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
            <Link href="" className="text-base">
              <FontAwesomeIcon icon={faTiktok} />
            </Link>
            <Link href="" className="text-base">
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`fixed top-1/2 left-[180px] flex items-center justify-center w-10 h-10 bg-white text-main1 rounded-full z-20 transition duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-[-190px]"
        }`}
        onClick={sidebarToggle}
      >
        <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
      </div>
    </div>
  );
};
export default Sidebar;
