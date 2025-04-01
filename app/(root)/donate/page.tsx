import Image from "next/image";

const Donate = () => {
  return (
    <section className="donate">
      <article className="wrapper">
        <span className="title">Donate us</span>
        <div className="col">
          <div className="row">
            <Image width={100} height={100} src="" alt="" />
            <button className="donate-btn">Donate Now!</button>
          </div>
          <div className="row">
            <Image width={100} height={100} src="" alt="" />
            <button className="donate-btn">Donate Now!</button>
          </div>
          <div className="row">
            <Image width={100} height={100} src="" alt="" />
            <button className="donate-btn">Donate Now!</button>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Donate;
