import Link from "next/link";

const Contact = () => {
  return (
    <section className="contact-us">
      <article className="wrapper">
        <span className="title">Contact us</span>
        <div className="content">
          <div className="information">
            <div className="get-in-touch">
              <span>Get In Touch</span>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet similique officia fugiat doloremque at quia quae animi
                sapiente, maxime, delectus facere, rem eaque? Optio repudiandae
                asperiores illum, est expedita nam?
              </p>
              <div className="socials">
                <div className="social">
                  <Link href="https://www.instagram.com/ciptamandiribogor/">
                    <i className="fa-brands fa-instagram"></i>
                  </Link>
                  <Link href="https://www.instagram.com/ciptamandiribogor/">
                    Instagram
                  </Link>
                </div>
                <div className="social">
                  <Link href="https://youtube.com/@ycmyayasanciptamandiri2465?feature=shared">
                    <i className="fa-brands fa-youtube"></i>
                  </Link>
                  <Link href="https://youtube.com/@ycmyayasanciptamandiri2465?feature=shared">
                    YouTube
                  </Link>
                </div>
                <div className="social">
                  <Link href="">
                    <i className="fa-solid fa-envelope"></i>
                  </Link>
                  <Link href="">@ciptamandiri.com</Link>
                </div>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d495.44719737948515!2d106.814161!3d-6.574874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c42c7ec04d59%3A0x5cb39b050e525274!2sYayasan%20Cipta%20Mandiri%20(YCM)!5e0!3m2!1sen!2sus!4v1708928950417!5m2!1sen!2sus"
              width="600"
              height="450"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="form-center">
            <span>Via Whatsapp</span>
            <form action="">
              <div className="input-box">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Insert your full name here..."
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Insert your email address here..."
                  autoComplete="off"
                  required
                />
              </div>
              <div className="input-box">
                <label htmlFor="phone">Phone</label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="Insert your phone number here..."
                  autoComplete="off"
                />
              </div>
              <div className="msg-box">
                <label htmlFor="msg">Messages</label>
                <textarea
                  name="msg"
                  id="msg"
                  placeholder="Insert your message here..."
                  autoComplete="off"
                  required
                ></textarea>
              </div>
              <button className="submit-contact">Submit</button>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};
export default Contact;
