"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const SuccessStories = () => {
  return (
    <section className="success-stories">
      <article className="wrapper">
        <span className="title">Success stories</span>
        <div className="latest-stories">
          <span className="stories-title">Latest stories</span>
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
                src="/static/img/students/farhan.jpg"
                alt="img"
              />
              <span>Parhan</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                ad, repudiandae voluptatum sapiente voluptate numquam nobis
                accusamus suscipit earum excepturi debitis repellendus fugit
                accusantium aspernatur perspiciatis quibusdam repellat delectus
                molestiae.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={100}
                height={100}
                src="/static/img/students/kadina.jpg"
                alt="img"
              />
              <span>Kadina</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                ad, repudiandae voluptatum sapiente voluptate numquam nobis
                accusamus suscipit earum excepturi debitis repellendus fugit
                accusantium aspernatur perspiciatis quibusdam repellat delectus
                molestiae.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image
                width={100}
                height={100}
                src="/static/img/students/iqbal.jpg"
                alt="img"
              />
              <span>Iqbal</span>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio
                ad, repudiandae voluptatum sapiente voluptate numquam nobis
                accusamus suscipit earum excepturi debitis repellendus fugit
                accusantium aspernatur perspiciatis quibusdam repellat delectus
                molestiae.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="alumni-stories">
          <span className="stories-title">Alumni stories</span>
          <div className="col">
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/static/img/students/eva.jpg"
                alt="img"
              />
              <div className="desc">
                <div className="head">
                  <span>Eva</span>
                  <span className="timeline">2022-Present</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis magnam aut tenetur harum, sapiente modi atque
                  labore unde in, aspernatur animi quidem quos? Nam reiciendis
                  voluptas accusamus recusandae quisquam.
                </p>
              </div>
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/static/img/students/zahra.jpg"
                alt="img"
              />
              <div className="desc">
                <div className="head">
                  <span>Zahra</span>
                  <span className="timeline">2022-Present</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis magnam aut tenetur harum, sapiente modi atque
                  labore unde in, aspernatur animi quidem quos? Nam reiciendis
                  voluptas accusamus recusandae quisquam.
                </p>
              </div>
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/static/img/students/tasya.jpg"
                alt="img"
              />
              <div className="desc">
                <div className="head">
                  <span>Tasya</span>
                  <span className="timeline">2022-Present</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis magnam aut tenetur harum, sapiente modi atque
                  labore unde in, aspernatur animi quidem quos? Nam reiciendis
                  voluptas accusamus recusandae quisquam.
                </p>
              </div>
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/static/img/students/putri.jpg"
                alt="img"
              />
              <div className="desc">
                <div className="head">
                  <span>Putri</span>
                  <span className="timeline">2022-Present</span>
                </div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis magnam aut tenetur harum, sapiente modi atque
                  labore unde in, aspernatur animi quidem quos? Nam reiciendis
                  voluptas accusamus recusandae quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="active-stories">
          <span className="stories-title">Active students</span>
          <div className="col">
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/static/img/students/iqbal.jpg"
                alt="img"
              />
              <div className="desc">
                <span>Iqbal</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis magnam aut tenetur harum, sapiente modi atque
                  labore unde in, aspernatur animi quidem quos? Nam reiciendis
                  voluptas accusamus recusandae quisquam.
                </p>
              </div>
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/static/img/students/kadina.jpg"
                alt="img"
              />
              <div className="desc">
                <span>Kadina</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis magnam aut tenetur harum, sapiente modi atque
                  labore unde in, aspernatur animi quidem quos? Nam reiciendis
                  voluptas accusamus recusandae quisquam.
                </p>
              </div>
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/static/img/students/farhan.jpg"
                alt="img"
              />
              <div className="desc">
                <span>Parhan</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis magnam aut tenetur harum, sapiente modi atque
                  labore unde in, aspernatur animi quidem quos? Nam reiciendis
                  voluptas accusamus recusandae quisquam.
                </p>
              </div>
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/static/img/students/zahra.jpg"
                alt="img"
              />
              <div className="desc">
                <span>Zahra</span>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum officiis magnam aut tenetur harum, sapiente modi atque
                  labore unde in, aspernatur animi quidem quos? Nam reiciendis
                  voluptas accusamus recusandae quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};
export default SuccessStories;
