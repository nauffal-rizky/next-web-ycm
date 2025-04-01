"use client";

import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <>
      <section className="ycm-projects">
        <article className="wrapper">
          <span className="title">YCM Projects</span>
          <div className="cinema">
            <div className="cinema-head">
              <span>Documentations</span>
              <i className="fa-solid fa-share-nodes"></i>
            </div>
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
            <div className="search-bar">
              <input type="text" placeholder="Search video..." />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="video-carousel">
              <i id="left" className="fa-solid fa-angle-left"></i>
              <div className="video-wrapper">
                <div
                  className="video-item playing"
                  data-id="ycm"
                  draggable="false"
                >
                  <Image width={100} height={100} src="" alt="YCM thumbnaiil" />
                  <div className="overlay">
                    <span className="video-title">YCM</span>
                    <i className="fa-regular fa-circle-play"></i>
                    <span className="video-duration">2:17</span>
                  </div>
                  <div className="playing-overlay">
                    <span>Now playing...</span>
                  </div>
                </div>
                <div className="video-item" data-id="dance" draggable="false">
                  <Image
                    width={100}
                    height={100}
                    src=""
                    alt="dance thumbnail"
                  />
                  <div className="overlay">
                    <span className="video-title">
                      Traditional Dance Class at Yayasan Cipta Mandiri_Our
                      Saturday
                    </span>
                    <i className="fa-regular fa-circle-play"></i>
                    <span>11:55</span>
                  </div>
                  <div className="playing-overlay">
                    <span>Now playing...</span>
                  </div>
                </div>
                <div className="video-item" data-id="yeip" draggable="false">
                  <Image width={100} height={100} src="" alt="yeip" />
                  <div className="overlay">
                    <span className="video-title">
                      Youth Empowerment and Internship Program YEIP
                    </span>
                    <i className="fa-regular fa-circle-play"></i>
                    <span>3:41</span>
                  </div>
                  <div className="playing-overlay">
                    <span>Now playing...</span>
                  </div>
                </div>
                <div
                  className="video-item"
                  data-id="lets read"
                  draggable="false"
                >
                  <Image width={100} height={100} src="" alt="lets read" />
                  <div className="overlay">
                    <span className="video-title">Let us Read</span>
                    <i className="fa-regular fa-circle-play"></i>
                    <span>0:59</span>
                  </div>
                  <div className="playing-overlay">
                    <span>Now playing...</span>
                  </div>
                </div>
              </div>
              <i id="right" className="fa-solid fa-angle-right"></i>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <Image width={100} height={100} src="" alt="" />
              <div className="description">
                <div className="head-desc">
                  <span className="project-name"></span>
                  <span className="project-timeline"></span>
                </div>
                <p></p>
              </div>
              <div className="mini-gallery">
                <div className="images">
                  <Image
                    width={100}
                    height={100}
                    className="documentation"
                    src=""
                    alt=""
                  />
                  <Image
                    width={100}
                    height={100}
                    className="documentation"
                    src=""
                    alt=""
                  />
                  <Image
                    width={100}
                    height={100}
                    className="documentation"
                    src=""
                    alt=""
                  />
                </div>
                <Link href="">
                  Read more <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </section>

      <span className="alert-modal">Link copied successfully!!</span>
    </>
  );
};
export default Projects;
