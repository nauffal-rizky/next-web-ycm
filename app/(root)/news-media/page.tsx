import Link from "next/link";
import Image from "next/image";

const NewsMedia = () => {
  return (
    <section className="news-media">
      <article className="wrapper">
        <span className="title">News & Media</span>
        <div className="news-container">
          <Link href="" className="news">
            <Image
              width={100}
              height={100}
              src="/assets/activities/bazaar.jpg"
              alt=""
            />
            <div className="desc">
              <span></span>
              <p></p>
            </div>
          </Link>
        </div>
      </article>
    </section>
  );
};
export default NewsMedia;
