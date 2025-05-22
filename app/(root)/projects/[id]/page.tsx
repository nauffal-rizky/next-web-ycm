"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const DetailProject = () => {
  return (
    <section className="detail-projects">
      <article className="wrapper">
        <div className="video">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/B7BVAc_fQCs"
            title="Spelling bee competition day"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/SEGzZ206YJI"
            title="Pemberdayaan Pemuda dan Program Magang"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
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
            <Image
              width={100}
              height={100}
              className="documentation"
              src="/assets/activities/bazaar.jpg"
              alt="documentation"
              data-id=""
            />
          </SwiperSlide>
        </Swiper>
        <div className="project-head">
          <div className="title-timeline">
            <span></span>
            <span className="timeline"></span>
          </div>
          <Link href="/ycm-projects" className="back-btn">
            <i className="fa-solid fa-arrow-left-long"></i> Back
          </Link>
        </div>
        <p></p>
      </article>
    </section>
  );
};
export default DetailProject;
