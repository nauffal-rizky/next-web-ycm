"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Activities = () => {
  return (
    <section className="ycm-activities">
      <article className="wrapper">
        <span className="title">YCM Activites</span>
        <Swiper
          className=""
          spaceBetween={0}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 3000 }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <span></span>
            <Image width={100} height={100} src="" alt="" />
            <p></p>
            <Link href="/activity-main/" className="read-more">
              Read More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </SwiperSlide>
        </Swiper>
        <div className="daily-activities">
          <div className="daily-title"></div>
          <div className="col">
            <div className="row">
              <Image
                width={100}
                height={100}
                className="program-img"
                src=""
                alt="foto murid-murid dari semua kelas yang ada di YCM ngumpul wide shot"
              />
              <div className="description">
                <span className="program-name"></span>
                <p></p>
                <Link href="" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="interests">
          <span className="activity-title">Likes & Interests</span>
          <div className="col">
            <div className="row">
              <Image
                width={100}
                height={100}
                className="program-img"
                src=""
                alt=""
              />
              <div className="description">
                <span className="program-name"></span>
                <p></p>
                <Link href="" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <button className="drop-btn">
            See more <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
        <div className="programs">
          <span className="activity-title">Programs</span>
          <div className="col">
            <div className="row">
              <Image
                width={100}
                height={100}
                className="program-img"
                src=""
                alt="foto murid-murid dari semua kelas yang ada di YCM ngumpul wide shot"
              />
              <div className="description">
                <span className="program-name"></span>
                <p></p>
                <Link href="" className="read-more">
                  Read More <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
          <button className="drop-btn">
            See more <i className="fa-solid fa-caret-down"></i>
          </button>
        </div>
      </article>
    </section>
  );
};
export default Activities;
