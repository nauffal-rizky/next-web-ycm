"use client";

import Link from "next/link";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Front = () => {
  return (
    <>
      <div className="homepage">
        <h1 className="title">Welcome to our beloved YCM!</h1>

        <section className="about-us">
          <article className="wrapper">
            <div className="video">
              <iframe
                width="1280"
                height="720"
                src="https://www.youtube.com/embed/5o1tEzh4mJ4"
                title="YCM"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="introduction">
              <span>About Us</span>
              <p className="description">
                Yayasan Cipta Mandiri (YCM) is an Independent Creative
                Foundation for disadvantaged children and youth in Bogor, West
                Java, Indonesia. Rather than being a traditional academic
                school, YCM is a rumah pembinaan - a house in which students are
                able to build their self-confidence, general knowledge, and
                practical skills.
              </p>
              <Link href="/about-ycm" className="read-more">
                Read more
              </Link>
              <div className="social-container">
                <Link
                  href="https://www.instagram.com/ciptamandiribogor/"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link
                  href="https://youtube.com/@ycmyayasanciptamandiri2465?feature=shared"
                  target="_blank"
                >
                  <i className="fa-brands fa-youtube"></i>
                </Link>
                <Link href="" target="_blank">
                  <i className="fa-solid fa-envelope"></i>
                </Link>
              </div>
            </div>
          </article>
        </section>

        <section className="latestNews">
          <article className="wrapper">
            <span>Our Latest News</span>
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
                  src="/YCM.jpg"
                  width={100}
                  height={100}
                  alt="latest_news_1"
                />
                <div className="description">
                  <div className="title-timeline">
                    <span className="title"></span>
                    <span className="timeline"></span>
                  </div>
                  <p></p>
                </div>
                <Link href="/news/>" className="read-more">
                  Read more
                </Link>
              </SwiperSlide>
            </Swiper>
          </article>
        </section>

        <section className="partners">
          <article className="wrapper">
            <span className="opening-text">Partners</span>
            <div className="container">
              <Image
                src="/YCM.jpg"
                width={100}
                height={100}
                alt=""
                className="row"
              />
              <Image
                src="/YCM.jpg"
                width={100}
                height={100}
                alt=""
                className="row"
              />
              <Image
                src="/YCM.jpg"
                width={100}
                height={100}
                alt=""
                className="row"
              />
            </div>
            <Link href="/about-ycm" className="see-more">
              See More <i className="fa-solid fa-arrow-right-long"></i>
            </Link>
          </article>
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#9bb200"
            fillOpacity="1"
            d="M0,128L30,128C60,128,120,128,180,149.3C240,171,300,213,360,213.3C420,213,480,171,540,154.7C600,139,660,149,720,176C780,203,840,245,900,229.3C960,213,1020,139,1080,133.3C1140,128,1200,192,1260,218.7C1320,245,1380,235,1410,229.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
          ></path>
        </svg>

        <section className="brief-projects">
          <article className="wrapper">
            <span>Projects</span>
            <div className="col">
              <div className="row">
                <Image src="/YCM.jpg" width={100} height={100} alt="" />
                <div className="info">
                  <span></span>
                  <p></p>
                  <Link href="" className="read-more">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </>
  );
};
export default Front;
