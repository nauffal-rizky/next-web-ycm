"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const DetailNewsMedia = () => {
  return (
    <section className="detail-news">
      <article className="wrapper">
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
        <div className="description">
          <div className="title-timeline">
            <span className="title"></span>
            <span className="timeline"></span>
          </div>
          <p></p>
          <div className="btn-container">
            <Link href="/" className="back-btn">
              <i className="fa-solid fa-caret-left"></i> Home
            </Link>
            <Link href="/donate" className="donate-btn">
              Donate
            </Link>
            <Link href="/news-media" className="see-more">
              Read More News <i className="fa-solid fa-caret-right"></i>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
export default DetailNewsMedia;
