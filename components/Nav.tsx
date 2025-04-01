"use client";

import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTiktok,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between bg-main1 py-3 px-5 text-white z-50">
      <div className="flex justify-between max-[906px]:gap-2 max-[906px]:w-fit">
        <button className="max-[906px]:flex hidden items-center">
          <FontAwesomeIcon icon={faBars} className="text-3xl max-sm:text-2xl" />
        </button>
        <Link href="/" className="cursor-pointer">
          <Image
            className="max-[906px]
[906px]:w-[75px]! max-[906px]
[906px]:h-[75px]! max-sm:w-[50px]! max-sm:h-[50px]!"
            src="/YCM.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Link>
      </div>
      {/* SIDE-LINKS */}
      <div className="max-[906px]:absolute max-[906px]:top-0 max-[906px]:left-0 flex flex-col max-[906px]:justify-between min-[906px]:justify-center max-[906px]:items-center max-[906px]:gap-5 max-[906px]:w-fit max-[906px]:h-screen max-[906px]:bg-main1 max-[906px]:p-5">
        <Link href="/" className="min-[906px]:hidden cursor-pointer">
          <Image
            className="max-[906px]:w-[75px]! max-sm:w-[50px]! aspect-square"
            src="/YCM.jpg"
            width={100}
            height={100}
            alt="Picture of the author"
          />
        </Link>
        <div className="flex max-[906px]:flex-col items-center min-[906px]:gap-3 gap-2">
          <Link href="/" className="max-md:text-sm cursor-pointer">
            Home
          </Link>
          <div className="max-md:text-sm cursor-pointer drop md:relative max-[906px]:flex max-[906px]:flex-col max-[906px]:items-center">
            <span className="flex items-center">
              Our work
              <FontAwesomeIcon className="ml-2 text-xl" icon={faCaretDown} />
            </span>
            <div
              className={`min-[906px]:absolute min-[906px]:top-[30px] min-[906px]:left-[50%] min-[906px]:translate-x-[-50%] flex flex-col w-[120] bg-shiro text-kuro divide-y-[1.5px] rounded-md overflow-y-hidden`}
            >
              <Link
                href="/activities"
                className="py-1 px-2 hover:bg-gray-200 text-center"
              >
                YCM Activities
              </Link>
              <Link
                href="/projects"
                className="py-1 px-2 hover:bg-gray-200 text-center"
              >
                YCM Projects
              </Link>
            </div>
          </div>
          <div className="max-md:text-sm cursor-pointer drop md:relative max-[906px]:flex max-[906px]:flex-col max-[906px]:items-center">
            <span className="flex items-center">
              Who we are
              <FontAwesomeIcon className="ml-2 text-xl" icon={faCaretDown} />
            </span>
            <div
              className={`min-[906px]:absolute min-[906px]:top-[30px] min-[906px]:left-[50%] min-[906px]:translate-x-[-50%] flex flex-col w-[100] bg-shiro text-kuro divide-y-[1.5px] rounded-md overflow-y-hidden`}
            >
              <Link
                href="/about"
                className="py-1 px-2 hover:bg-gray-200 text-center"
              >
                About YCM
              </Link>
              <Link
                href="/team"
                className="py-1 px-2 hover:bg-gray-200 text-center"
              >
                YCM Team
              </Link>
            </div>
          </div>
          <Link
            href="/success-stories"
            className="max-md:text-sm cursor-pointer"
          >
            Success stories
          </Link>
          <Link href="/news-media" className="max-md:text-sm cursor-pointer">
            News & Media
          </Link>
          <Link href="/get-involved" className="max-md:text-sm cursor-pointer">
            Get involved
          </Link>
          <Link href="/contact" className="max-md:text-sm cursor-pointer">
            Contact us
          </Link>
          <Link
            href="/donate"
            className="max-md:text-sm max-[906px]:hidden cursor-pointer py-1 px-2 bg-alt1 hover:bg-red-600 rounded-md"
          >
            Donate
          </Link>
        </div>
        <div className="min-[906px]:hidden flex gap-2">
          <Link href="">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faTiktok} />
          </Link>
          <Link href="">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
        </div>
      </div>
      {/* LINKS (<906px) */}
      <div className="min-[906px]:hidden flex items-center gap-3">
        <Link
          href="/get-involved"
          className="max-md:text-sm cursor-pointer bg-main2 hover:bg-stone-700 py-1 px-2 rounded-md"
        >
          Join Us
        </Link>
        <Link
          href="/donate"
          className="max-md:text-sm cursor-pointer py-1 px-2 bg-alt1 hover:bg-red-600 rounded-md"
        >
          Donate
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
