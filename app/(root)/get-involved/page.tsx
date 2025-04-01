import Link from "next/link";
import Image from "next/image";

const GetInvolved = () => {
  return (
    <section className="get-involved">
      <article className="wrapper">
        <span className="title">Get involved</span>
        <div className="description">
          <span>Become part of YCM</span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
            laborum a suscipit? Adipisci, unde quos totam officiis dicta numquam
            exercitationem!
          </p>
        </div>
        <div className="options">
          <div className="donations">
            <Image width={100} height={100} src="" alt="" />
            <span>Donate</span>
            <p>
              Your kindness can brighten the lives of children in Bogor. Every
              donation, big or small, helps our students thrive. Consider
              donating:
            </p>
            <ul>
              <li>Fabrics and ribbons</li>
              <li>Books, newspapers, and magazines</li>
              <li>Paint, paper, and art supplies</li>
              <li>Sports equipment</li>
              <li>Cameras and computers</li>
            </ul>
            <p>
              If you are local, food donations for cooking groups or daily meals
              are also welcome. Contact us at{" "}
              <span>office@ciptamandiri.net</span> or{" "}
              <span>putu@ciptamandiri.net</span> to discover how you can make a
              difference. Together we can create a beautiful future for these
              children.
            </p>
            <Link href="/donate">
              Donate now <i className="fa-solid fa-angles-right"></i>
            </Link>
          </div>
          <div className="volunteering">
            <Image width={100} height={100} src="" alt="" />
            <span>Volunteering</span>
            <p>
              Join us on our journey of growth and impact! Our dedicated
              volunteers, both past and present, have played a pivotal role in
              shaping our organization and helping us achieve our goals. If you
              are passionate about making a difference, we invite you to reach
              out to us at office@ciptamandiri.net to explore exciting
              volunteering opportunities together. Lets create positive change,
              one step at a time!
            </p>
            <Link href="#">
              Volunteer now <i className="fa-solid fa-angles-right"></i>
            </Link>
          </div>
          <div className="sponsorship">
            <Image width={100} height={100} src="" alt="" />
            <span>Sponsorship</span>
            <p>
              At YCM, monetary sponsorships play a crucial role in supporting
              our project. Without them, we would not be able to empower
              disadvantaged children to reach their full potential.
              <br />
              What sets us apart is our commitment to transparency. Unlike many
              charities, we ensure that sponsorship funds are strictly used to
              directly benefit our project and students. We believe in showing
              our appreciation to sponsors by offering them the opportunity to
              visit us in Bogor and witness the impact of their contributions
              firsthand.
              <br />
              We welcome sponsorships of all kinds, whether they be regular
              small donations or larger one-time gifts. Here are a few examples
              of sponsorship opportunities:
            </p>
            <ul>
              <li>
                Rp 800,000 (approximately US $83.00) for a one-time donation,
                helping a student complete their schooling.
              </li>
              <li>
                Rp 1,500,000 (approximately US $156.00) for a one-time donation,
                supporting a student through their school examinations.
              </li>
              <li>
                Rp 10,000,000 (approximately US $1036.00) annually, providing
                ongoing support for a student is university studies.
              </li>
            </ul>
            <p>
              Please note that these figures may vary annually and serve as a
              recent cost estimate.
              <br />
              Our esteemed sponsors include Die Brücke, the German Speaking
              Women’s Association of Jakarta, as well as private
              philanthropists.
              <br />
              If you are interested in donating funds or exploring ongoing
              sponsorship opportunities, please do not hesitate to reach out to{" "}
              <span>putu@ciptamandiri.net</span> or
              <span>gesinenitzschke@gmail.com</span>.
              <br />
              For donors based in Germany seeking to make monetary
              contributions, please refer to the following details. Your
              generosity will be tax deductible.
            </p>
            <Link href="">
              Sponsor now <i className="fa-solid fa-angles-right"></i>
            </Link>
          </div>
        </div>
      </article>
    </section>
  );
};
export default GetInvolved;
