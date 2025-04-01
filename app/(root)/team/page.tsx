"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <div className="ycm-team">
      <span className="title">Our team</span>

      <section className="board">
        <article className="wrapper">
          <span className="opening-text">Board Team</span>
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
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2010 - present</span>
                <span className="name">Aris Sanjaya</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                nulla quod nesciunt deserunt, praesentium nemo sunt suscipit
                expedita! Minus quasi ratione repudiandae facere quae quibusdam
                deserunt error praesentium ipsum nostrum est non voluptates
                omnis iusto quis sint voluptatem eveniet cupiditate obcaecati
                aliquam, veniam quam numquam. Nostrum nulla nihil dolore
                nesciunt.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2004 - present</span>
                <span className="name">Rahmy Rossyana Dewi</span>
              </div>
              <p>
                Rahmy Rossyana Dewi joined YCM in 2002 as a student and aimed to
                speak and understand English. Her goal was achieved through
                actively attending regular classes and implementing them in her
                daily life. In addition to English, she also learned computer
                basics and attended special classes held by visiting experts at
                YCM. She feels very happy and grateful to be able to learn so
                much knowledge from teachers with diverse backgrounds in this
                place. With YCMs help, she had the opportunity to continue her
                education to fashion school. She is now working in a fashion
                retailer as a merchandiser, and is also a board member of YCM.
                She hopes that YCM will continue to grow and be able to continue
                to provide assistance to children in need around YCM.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2004 - present</span>
                <span className="name">Rizky Marliansyah</span>
              </div>
              <p>
                Rizky Marliansyah joined YCM in 2005 as a student with a dream
                of being able to communicate with foreigners, and after some
                time at YCM not only could but could do it very well. In
                addition, he also learned many moral values ​​such as empathy,
                integrity, and self-improvement to be much better and during his
                time at YCM what he felt was not just happy but very happy,
                satisfied, and grateful. In addition to studying in class, he
                actively exchanged ideas with fellow students or tutors outside
                the classroom. According to him, the most impressive thing was
                his first meeting with a foreign volunteer, Trutz, who is now
                like his brother from a different continent.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2004 - present</span>
                <span className="name">Viska</span>
              </div>
              <p>
                Viska Umbara joined YCM in 2005 as a student with determination,
                passion and patience to learn English and computers. Since she
                was not active in activities outside YCM at that time, this
                place gave her a lot of joy to meet new friends and broaden her
                horizons. He is currently a board member of YCM and is committed
                to the development of YCM, hoping that YCM will continue to
                benefit its students.
              </p>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
      <section className="staff">
        <article className="wrapper">
          <span className="opening-text">YCMs Staff</span>
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
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2005 - present</span>
                <span className="name">Abdul Kohar</span>
              </div>
              <p>
                Abdul Kohar, enrolled as a student in 2005 with the aim of
                gaining knowledge, especially English. He achieved his goal and
                now speaks English fluently. In addition, he also gained
                computer knowledge, general knowledge and character education.
                He is currently a tutor and project coordinator to help manage
                YCMs daily activities. One of the highlights for his was getting
                the opportunity to go to a C-school. He hopes that he will be
                able to continue sharing his knowledge at YCM and help many
                children and youth from underprivileged families to have a
                better life, as this is one of his joys of being at YCM.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2002 - present</span>
                <span className="name">Siti Nurjannah</span>
              </div>
              <p>
                Abdul Kohar, enrolled as a student in 2005 with the aim of
                gaining knowledge, especially English. He achieved his goal and
                now speaks English fluently. In addition, he also gained
                computer knowledge, general knowledge and character education.
                He is currently a tutor and project coordinator to help manage
                YCMs daily activities. One of the highlights for his was getting
                the opportunity to go to a C-school. He hopes that he will be
                able to continue sharing his knowledge at YCM and help many
                children and youth from underprivileged families to have a
                better life, as this is one of his joys of being at YCM.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2005 - present</span>
                <span className="name">Agus Cahyono</span>
              </div>
              <p>
                Angga Agustina, joined YCM in 2011 as a student who focused on
                learning English and computer with the hope of becoming a
                website developer. He has achieved his goals, currently He has
                been able to create websites for several programs in YCM. At
                YCM, he also learned many things, such as respecting other
                peoples opinions and developing self-confidence. According to
                him, YCM is not only a place to learn, but it is like his second
                family because the atmosphere is very warm and caring. He left
                YCM to work, but decided to come back again and become a
                volunteer to share knowledge in the field of computers and
                websites. He is happy to be back his because he can reunite with
                the people who have been supporting him because while he was
                working, gathering with alumni at YCM was an impressive thing.
                He hopes YCM can continue to be a home for underprivileged
                children.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2022 - present</span>
                <span className="name">Lovita Aristyani</span>
              </div>
              <p>
                Lovita Aristyani, joined YCM in 2022 through the Woman
                Empowerment Program (WEP). With strong determination and
                unyielding to develop skills and self-reliance as a woman and
                single parent who must continue to fight for his family, with
                full confidence He finally reached the peak of his potential. At
                YCM, besides improving his confidence and understanding life
                values, He is always happy because He can also learn business
                and do social activities such as sharing as a tutor. In
                addition, He can interact with strangers and connect with the
                wider world. He dreams that one day He can change his role as a
                donor to make YCM still exist to provide wider benefits.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2009 - present</span>
                <span className="name">Cibana Wulan</span>
              </div>
              <p>
                Cibana Wulan joined YCM in 2009 as a student with the goal of
                learning and mastering English. This goal was achieved through
                consistency in learning and practicing at YCM, so that her
                English skills improved significantly. At YCM, she learned
                grammar, vocabulary, listening, speaking, reading and writing
                skills in English. In addition to learning, she also shared her
                knowledge in class and took care of YCMs finances. After YCM,
                she continued her studies and is now working and learning. Her
                most memorable experience was participating in a cross-country
                competition, which taught her the spirit of competition and
                teamwork. Currently, she acts as a tutor at YCM and hopes that
                YCM continues to support its members with useful programs and an
                inclusive environment.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2014 - present</span>
                <span className="name">Moch Dery Syahid</span>
              </div>
              <p>
                Moch Dery Syahid, a student who joined in 2014 to learn English
                and aspired to interact with foreigners. But after some time,
                thats not all he got. He has learned many things such as
                computers, photography, entrepreneurship according to his
                aspirations and English of course. He is very focused on
                learning but still doing his hobby which is exercising. During
                his time at YCM, hanging out with his friends is something that
                impresses him. Now that he has become an active tutor, he hopes
                that after leaving YCM he can continue to share the knowledge he
                has gained. He also hopes that YCM will continue to exist to
                help teenagers in Bogor in particular.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2011 - present</span>
                <span className="name">Angga Agustina</span>
              </div>
              <p>
                Angga Agustina, joined YCM in 2011 as a student who focused on
                learning English and computer with the hope of becoming a
                website developer. He has achieved his goals, currently He has
                been able to create websites for several programs in YCM. At
                YCM, he also learned many things, such as respecting other
                peoples opinions and developing self-confidence. According to
                him, YCM is not only a place to learn, but it is like his second
                family because the atmosphere is very warm and caring. He left
                YCM to work, but decided to come back again and become a
                volunteer to share knowledge in the field of computers and
                websites. He is happy to be back his because he can reunite with
                the people who have been supporting him because while he was
                working, gathering with alumni at YCM was an impressive thing.
                He hopes YCM can continue to be a home for underprivileged
                children.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2013 - present</span>
                <span className="name">Yandi Hermawan</span>
              </div>
              <p>
                Yandi Hermawan, joined YCM in 2013 with the initial goal of
                learning to compose song lyrics using English. He managed to
                achieve his goal by reading many books, discussing with tutors,
                and practicing writing. During his time at YCM, he also learned
                many skills such as English, computer, leadership, cooperation,
                confidence, and critical thinking. He felt happy and
                enthusiastic in learning, and He was also active in various
                activities such as music community, guiding tourists, and
                learning business. After leaving YCM, he used the skills he had
                learned for work and continued to deepen his analytical
                knowledge as a step towards his goal of becoming an analyst. He
                feels that the most memorable event during his time at YCM was
                when he was trusted to help spread the knowledge he had learned.
                Currently, He helps YCM in sharing knowledge to younger YCM
                students. His hope for YCM in the future is for the foundation
                to continue to serve as a complement to what schools, families,
                and neighborhoods do not provide.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2013 - present</span>
                <span className="name">Sri Maryani</span>
              </div>
              <p>
                Sri Maryani, joined Cipta Mandiri Foundation in 2013 with the
                initial goal of learning English for her graduation exam. Her
                goal was successfully achieved because now she can speak English
                fluently and has many skills and knowledge. During her time at
                YCM, she also learned various things such as computers, being a
                tour guide, and communication skills. She feels happy and proud
                during her time at YCM, and besides studying, she is also active
                in teaching. After leaving YCM, she dreams of opening a painting
                gallery and taking on the role of a tutor because those were the
                most memorable and enjoyable days for her. She hopes that YCM
                will continue to exist in the future as an educational
                institution that provides benefits to the community.
              </p>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
      <section className="freelancer">
        <article className="wrapper">
          <span className="opening-text">Freelancer</span>
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
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2004 - present</span>
                <span className="name"></span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                nulla quod nesciunt deserunt, praesentium nemo sunt suscipit
                expedita! Minus quasi ratione repudiandae facere quae quibusdam
                deserunt error praesentium ipsum nostrum est non voluptates
                omnis iusto quis sint voluptatem eveniet cupiditate obcaecati
                aliquam, veniam quam numquam. Nostrum nulla nihil dolore
                nesciunt.
              </p>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
      <section className="peer-sharer">
        <article className="wrapper">
          <span className="opening-text">Peer sharer</span>
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
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2019 - Present</span>
                <span className="name">Naufal Nur Rizky</span>
              </div>
              <p>
                Naufal Nur Rizky joined YCM in 2019 as a student with the aim to
                fill his free time with more useful activities and gain new
                experiences and opportunities to develop himself. After some
                time he grew into a better person in character and mind and
                gained various skills such as leadership, communication,
                marketing, English, programming, playing musical instruments,
                basketball and cooking that can help pave the way to a better
                future. Being at YCM makes him feel happy because he can develop
                without obstacles, in addition to the above skills he is also
                involved in several programs such as multimedia and student
                council. Currently, He is actively helping to create an official
                website for YCM as well as being a Peer Sharer to join regular
                classes such as English and Computer. He hopes to continue to
                focus on improving his programming skills while working in the
                coding field and plans to enter university after leaving YCM,
                this came up when he had an interview with a Chief Technology
                Officer (CTO) from a company in Germany.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2018 - Present</span>
                <span className="name">Sinta Wahyuni</span>
              </div>
              <p>
                Sinta Wahyuni became a student at YCM in 2018 with the aim of
                learning English and filling her spare time. At YCM, she not
                only managed to improve her English skills, but also learned to
                sew, operate a computer, and practice self-confidence. The
                experience at YCM made her feel happy and joyful, especially
                when she managed to overcome her shyness by daring to perform at
                a Pakuan University seminar. Apart from studying, she is also
                active in the Peer Sharing program, Bogor Tours class, and
                studying business at Warung. She felt that the most memorable
                experience was when she dared to come forward at the seminar
                despite being very shy before. Now, she is still a student at
                YCM, focusing on English, business, and multimedia, and hopes to
                become an English vlogger after leaving YCM, and hopes that YCM
                will continue to progress and support the younger generation.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2014 - Present</span>
                <span className="name">Zahra Nur Salsabila</span>
              </div>
              <p>
                Zahra Nur Salsabila joined YCM in 2014 with the aim of learning
                English, improving her skills and making good friends. She
                achieved this goal by practicing English every day, talking to
                friends in English, and reading English books earnestly. Now,
                she is more confident and continues to work on improving her
                English skills. During her time at YCM, she also learned about
                discipline, honesty, responsibility and the importance of
                togetherness. She attended multimedia classes, learning the use
                of cameras, video, and editing, as well as making short films.
                In addition, she was active in peer sharing programs, learning
                about patience, and interacting with children. After graduating
                from YCM, she dreams of finding a job or starting her own
                business while continuing to learn new things. She hopes YCM
                continues to be a supportive and comfortable place for its
                students.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <Image width={100} height={100} className="img" src="" alt="" />
              <div className="head">
                <span className="timeline">2018 - Present</span>
                <span className="name">Deni Marizki</span>
              </div>
              <p>
                Deni Marizki joined YCM around 2018 with the hope of filling his
                spare time after graduating from junior high school and honing
                skills such as English, video editing, and graphic design.
                Although he has not achieved all his goals, at YCM he learns
                life skills, English, gardening, and multimedia. Nevertheless,
                he feels proud and grateful to be part of YCM and active in the
                garden program, music community, and Bogor tour and now a peer
                sharer and can share knowledge with younger students at YCM.
                After leaving YCM, he hopes to help as an event donor at YCM or
                promote YCM in various regions. His most memorable experience at
                YCM is having the opportunity to continue his studies and
                courses elsewhere. Currently, he focuses on learning English,
                multimedia, and is responsible for the house and garden stall at
                YCM. He hopes for YCM in the future is to get upgraded
                facilities and venues, and increase the number of students.
              </p>
            </SwiperSlide>
          </Swiper>
        </article>
      </section>
    </div>
  );
};
export default Team;
