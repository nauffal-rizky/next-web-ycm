"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Jumbotron = () => {
  return (
    <Swiper
      className="w-full mt-[110px]"
      style={{ height: "calc(100vh - 110px)" }}
      spaceBetween={0}
      slidesPerView={1}
      navigation={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay, Pagination, Navigation]}
    >
      <SwiperSlide
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(../assets/activities/dance-3.jpg)`,
        }}
      >
        <div
          className="flex flex-col justify-center w-1/3 h-full text-white ml-auto mr-20"
          style={{ textShadow: "1px 1px 2px #000" }}
        >
          <span className="text-5xl mb-2">Event</span>
          <p className="text-justify">
            Various kinds of activities that occur only at certain times for
            example welcoming or farewell volunteers, competitions, or
            commemorating special days. These activities are divided into two,
            regular events that are held every six months or once a year such as
            star bazaar and breaking fast together. In addition, there are also
            events that are held to close the theme week/month or major events
            such as Independence Day.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(../assets/classes/english-class-1.JPG)`,
        }}
      >
        <div
          className="flex flex-col justify-center w-1/3 h-full text-white ml-auto mr-20"
          style={{ textShadow: "1px 1px 2px #000" }}
        >
          <span className="text-5xl mb-2">Community</span>
          <p className="text-justify">
            Every Saturday, YCM has some activities that are a bit different
            from the usual days. If you usually only learn English, sewing and
            computer basics, but on Saturdays YCM has several activities that
            can be followed by all YCM students ranging from sports such as
            futsal, basketball and chess, dancing, music, art, journal,
            multimedia and fun English. The purpose of this community is to
            provide opportunities for tutors who have talents to share outside
            of regular lessons. It is also to support students interest in
            developing their talents.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(../assets/activities/futsal-1.jpg)`,
        }}
      >
        <div
          className="flex flex-col justify-center w-1/3 h-full text-white ml-auto mr-20"
          style={{ textShadow: "1px 1px 2px #000" }}
        >
          <span className="text-5xl mb-2">Training</span>
          <p className="text-justify">
            YCM has a one-week training schedule for tutors and peer sharing
            with Mba Putu or guests. This training aims to renew knowledge,
            share challenges in the classroom and find new ideas that can be
            shared back to students.
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="bg-cover bg-center"
        style={{
          backgroundImage: `url(../assets/activities/bazaar.jpg)`,
        }}
      >
        <div
          className="flex flex-col justify-center w-1/3 h-full text-white ml-auto mr-20"
          style={{ textShadow: "1px 1px 2px #000" }}
        >
          <span className="text-5xl mb-2">Class</span>
          <p className="text-justify">
            YCM has three regular classes, such as English, sewing and computer.
            Students will be divided into levels ranging from elementary,
            beginner and intermediate. In class they will be accompanied by one
            or more tutors to share material especially the three basic
            subjects, but tutors will also share experiences, news, history and
            morals and much more. The students are not given homework as YCM
            does not want to force them as they already have homework at school.
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default Jumbotron;
