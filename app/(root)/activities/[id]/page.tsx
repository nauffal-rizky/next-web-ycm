"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const DetailActivity = () => {
  return (
    <section className="detail-activity">
      <article className="wrapper">
        <div className="head">
          <span className="title"></span>
          <Link href="" className="back-btn">
            <i className="fa-solid fa-arrow-left-long"></i> Back
          </Link>
        </div>
        <div className="info">
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
              <Image width={100} height={100} src="" alt="" />
            </SwiperSlide>
          </Swiper>

          <div className="tutors-desc">
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
                <Image width={100} height={100} src="" alt="" />
                <span className="name"></span>
                <span className="status"></span>
              </SwiperSlide>
            </Swiper>
            <p></p>
          </div>

          <div className="our-products">
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
                <div className="swiper myProducts">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <Image width={100} height={100} src="" alt="" />
                    </div>
                  </div>
                  <div className="swiper-button-next"></div>
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-pagination"></div>
                </div>
              </SwiperSlide>
            </Swiper>
            <button className="buy-btn">Buy Our Products!</button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default DetailActivity;
