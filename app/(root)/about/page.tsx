"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const About = () => {
  return (
    <div className="about-us">
      <span className="title">About us</span>
      <section className="opening">
        <article className="wrapper">
          <div className="w-full">
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
          <p>
            <span>Yayasan Cipta Mandiri</span> is an Independent Creative
            Foundation for disadvantaged children and youth in Bogor, West Java,
            Indonesia. Rather than being a traditional academic school,
            <span>YCM</span> is a rumah pembinaan - a house in which students
            are able to build their self-confidence, general knowledge, and
            practical skills.
          </p>
        </article>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9bb200"
          fillOpacity="1"
          d="M0,160L30,165.3C60,171,120,181,180,160C240,139,300,85,360,90.7C420,96,480,160,540,170.7C600,181,660,139,720,138.7C780,139,840,181,900,192C960,203,1020,181,1080,154.7C1140,128,1200,96,1260,85.3C1320,75,1380,85,1410,90.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      <section className="vision-mission">
        <article className="wrapper">
          <div className="vision">
            <span>Our Vision</span>
            <p>
              Yayasan Cipta Mandiri (YCM) has a vision to empower young people
              from disadvantaged young people in order to have better lives and
              give positive impact to the communities.
            </p>
          </div>
          <div className="mission">
            <span>Our Mission</span>
            <ol>
              <li>
                Motivating the youth of YCM’s member in order to have good and
                tough characters (soft skills) and equip them with qualified
                hard skills.
              </li>
              <li>
                Motivating the youths of YCM’s member, in order to dare to dream
                and to reach their dreams. YCM is also called as a house of
                dreams.
              </li>
              <li>
                Facilitating free of charge alternative education practical
                programs for the youths of YCM.
              </li>
              <li>
                Motivating and facilitating the changes of the lives of YCM’s
                youth, so hopefully they and their families will have good lives
                in the future. Thus it will also cut the chain of the poverty of
                their families as our motto is : Changes Our Lives!
              </li>
              <li>
                YCM’s focus work is to commit on supporting Sustainable
                Development Goals by UN (United Nation) no. 1, 2, 3, 4, 5, 8, 10
                and 17.
              </li>
              <li>
                YCM’s programs are designed by integrating education in
                practical learning system and internships program
              </li>
            </ol>
          </div>
          <p className="values">
            YCM tries to be committed and influencing positive values. The
            values of self confidence, integrity, responsibility, respect,
            honesty, empathy, tolerance, and independence, cooperation, creative
            and initiative are the values that we try our best to apply to all
            the member of YCM.
          </p>
        </article>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9bb200"
          fillOpacity="1"
          d="M0,160L34.3,170.7C68.6,181,137,203,206,197.3C274.3,192,343,160,411,128C480,96,549,64,617,90.7C685.7,117,754,203,823,197.3C891.4,192,960,96,1029,74.7C1097.1,53,1166,107,1234,128C1302.9,149,1371,139,1406,133.3L1440,128L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <section className="founders">
        <article className="wrapper">
          <span className="opening-text">Our Founders</span>

          <div className="col">
            <div className="cols-row">
              <div className="bubble">
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
                <div className="description gesine">
                  <div className="head-desc">
                    <span className="name">Gesine Nitzschke</span>
                    <span className="status">Founder of YCM</span>
                  </div>
                  <p>
                    Gesine, a German expatriate with 25 years of experience in
                    Asia, has a diverse background in social volunteering,
                    including roles in prisons and orphanages across Thailand
                    and Indonesia. She established a kindergarten in Bogor,
                    which operated for seven years.
                  </p>
                  <p>
                    With a passion for working with children, Gesine enjoys
                    interacting with YCM students. Despite living in Bali, she
                    remains actively involved with YCM, supporting management
                    decisions, overseeing building maintenance and student
                    discipline, and offering assistance to students or tutors
                    facing challenges. Gesine also contributes by fostering
                    partnerships and sponsorship opportunities.
                  </p>
                </div>
                <button className="read-more">Read more</button>
              </div>
              <div className="bubble">
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
                <div className="description putu">
                  <div className="head-desc">
                    <span className="name">Putu Ayu Novitry Ariany</span>
                    <span className="status">Founder of YCM</span>
                  </div>
                  <p>
                    Putu, an educator originally from West Java, has a diverse
                    background in Biology. She has extensive experience as a
                    personal tutor for English-speaking students in Bogor and
                    Jakarta, as well as teaching English as a Second Language
                    (ESL), Bahasa Indonesia, computer studies, mathematics, and
                    biology at the International School of Bogor.
                  </p>
                  <p>
                    Her involvement with the foundation began when she and
                    Gesine conceived the idea of starting a new social project
                    for underprivileged children in Bogor. Together, they
                    founded YCM in 2002 with a vision of creating a unique
                    learning environment centered on non-formal education. Putu
                    resides in Bogor with her husband and looks forward to
                    starting a family.
                  </p>
                  <p>
                    Currently, she remains actively engaged with YCM, tutoring
                    and motivating students on a daily basis. As the Project
                    Leader, Putu takes charge of the on-the-ground management of
                    YCM administration and staff.
                  </p>
                </div>
                <button className="read-more">Read more</button>
              </div>
            </div>
            <div className="bubble">
              <Image
                width={100}
                height={100}
                src="/assets/activities/bazaar.jpg"
                alt=""
              />
              <div className="description">
                <div className="head-desc">
                  <span className="name">Collaboration</span>
                </div>
                <p>
                  From the beginning, Putu and Gesine relied on one another to
                  make things happen. Together, they built the foundation from
                  the ground up, and have watched it grow and develop ever
                  since. Gesine and Putu believe that knowledge can be sought
                  from anywhere.
                </p>
              </div>
            </div>
          </div>
          <div className="bubble">
            <Image
              width={100}
              height={100}
              src="/assets/activities/bazaar.jpg"
              alt=""
            />
            <div className="description thorsten">
              <div className="head-desc">
                <span className="name">Thorsten Nitzschke</span>
                <span className="status">
                  Sponsor and regular inspirational coach in YCM
                </span>
              </div>
              <p>
                Thorsten Nitzschke, a retired businessman, serves as a sponsor
                and regular inspirational coach at YCM. He acknowledges the
                harsh reality faced by many children in Indonesia, growing up in
                families struggling to make ends meet on meager incomes. This
                often results in limited access to education due to financial
                constraints, leading to a bleak outlook for their future.
              </p>
              <p>
                Recognizing the despair that often accompanies this situation,
                especially among teenagers who may lose hope for a better life,
                Thorsten emphasizes the importance of breaking this cycle of
                poverty and hopelessness. He believes that YCM provides a
                genuine opportunity for these children to defy their
                circumstances and realize their potential. Through the inspiring
                environment of YCM, hidden talents and creativity are nurtured
                and brought to light.
              </p>
              <p>
                Thorsten finds immense satisfaction in witnessing the positive
                outcomes achieved by YCM alumni, who prove that their past does
                not determine their future. He is grateful for the opportunity
                to contribute to this transformative process and considers the
                progress made by these children as the most rewarding aspect of
                his involvement with YCM.
              </p>
            </div>
            <button className="read-more">Read more</button>
          </div>
        </article>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="head-svg"
      >
        <path
          fill="#9bb200"
          fillOpacity="1"
          d="M0,192L34.3,202.7C68.6,213,137,235,206,208C274.3,181,343,107,411,85.3C480,64,549,96,617,138.7C685.7,181,754,235,823,218.7C891.4,203,960,117,1029,106.7C1097.1,96,1166,160,1234,197.3C1302.9,235,1371,245,1406,250.7L1440,256L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>

      <section className="history">
        <article className="wrapper history-content">
          <span className="opening-text">Our History</span>
          <ul className="timeline">
            <li>
              <div
                className="timeline-image"
                style={{ backgroundImage: "url()" }}
              ></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>Sarana Bina Ilmu (Sabil)</h3>
                  <span>2002</span>
                </div>
                <p className="timeline-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas voluptatum tempora reprehenderit illo pariatur velit?
                </p>
              </div>
            </li>
            <li className="timeline-inverted">
              <div
                className="timeline-image"
                style={{ backgroundImage: "url()" }}
              ></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>YCM then</h3>
                  <span>Februari 2022</span>
                </div>
                <p className="timeline-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas voluptatum tempora reprehenderit illo pariatur velit?
                </p>
              </div>
            </li>
            <li>
              <div
                className="timeline-image"
                style={{ backgroundImage: "url()" }}
              ></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h3>YCM now</h3>
                  <span>Februari 2022</span>
                </div>
                <p className="timeline-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas voluptatum tempora reprehenderit illo pariatur velit?
                </p>
              </div>
            </li>
          </ul>
          <div className="synopsis">
            <div className="desc">
              <span>How YCM began</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
                odit quo praesentium, ipsam illum impedit nostrum aliquam dicta
                ipsum veritatis quam. Harum asperiores molestiae accusamus
                voluptas magni? Id, fugit tempore!
              </p>
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
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  width={100}
                  height={100}
                  src="/assets/activities/bazaar.jpg"
                  alt=""
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </article>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9bb200"
          fillOpacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,224C384,245,480,267,576,245.3C672,224,768,160,864,160C960,160,1056,224,1152,229.3C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>

      <section className="volunteer">
        <article className="wrapper">
          <span className="opening-text">Our Volunteers</span>
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
                src="/assets/activities/bazaar.jpg"
                alt="volunteer-img"
              />
              <div className="head">
                <span className="timeline">2002 - 2024</span>
                <span className="name"></span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                molestias aut voluptatum id beatae aliquid neque animi quos
                pariatur repellat?
              </p>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9bb200"
          fillOpacity="1"
          d="M0,64L48,53.3C96,43,192,21,288,53.3C384,85,480,171,576,170.7C672,171,768,85,864,48C960,11,1056,21,1152,53.3C1248,85,1344,139,1392,165.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>

      <section className="partners">
        <article className="wrapper">
          <span className="opening-text">Our Partners</span>
          <div className="col">
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/assets/activities/bazaar.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/assets/activities/bazaar.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/assets/activities/bazaar.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/assets/activities/bazaar.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/assets/activities/bazaar.jpg"
                alt=""
              />
            </div>
            <div className="row">
              <Image
                width={100}
                height={100}
                src="/assets/activities/bazaar.jpg"
                alt=""
              />
            </div>
          </div>
        </article>
      </section>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#9bb200"
          fillOpacity="1"
          d="M0,128L40,133.3C80,139,160,149,240,144C320,139,400,117,480,138.7C560,160,640,224,720,234.7C800,245,880,203,960,202.7C1040,203,1120,245,1200,250.7C1280,256,1360,224,1400,208L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};
export default About;
