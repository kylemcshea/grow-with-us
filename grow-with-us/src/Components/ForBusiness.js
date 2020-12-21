import React from "react";
import "../styles/biz.css";
function ForBusiness() {
  return (
    <div>
      <section className="solutions">
        <h2 className="title-biz">Business Services</h2>
        <div className="break"></div>
        <p className="intro-biz">
          Our tested strategies have made our clients thousands of dollars over
          the past 2 years! Though our packages offer the most value at the best
          price, we understand that all clients have different needs, which is
          why we offer all of our services A La Carte too.
        </p>
        <div className="break"></div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-3.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>App Development</strong>
            <br />
            Pricing Varies
          </p>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-5.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Website SEO</strong>
            <br />
            Pricing Varies
          </p>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-7.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Facebook Ads Management</strong>
            <br />
            Pricing Varies
          </p>
        </div>

        <div className="break"></div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-0.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Custom E-Commerce Stores</strong>
            <br />
            Pricing Varies
          </p>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-1.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Press Releases</strong>
            <br />
            Pricing Varies
          </p>
          <a href="press.html">View Options</a>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-9.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Website Development</strong>
            <br />
            Pricing Varies
          </p>
        </div>

        <div className="break"></div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-4.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Sales Funnel Creation</strong>
            <br />
            Pricing Varies
          </p>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-8.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Logo Design</strong>
            <br />
            Pricing Varies
          </p>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/biz-2.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Product Manufacturing</strong>
            <br />
            Pricing Varies
          </p>
        </div>
        <div className="break"></div>

        <div id="mybutton">
          <a
            href="https://calendly.com/dremedici/1on1call"
            className="feedback"
          >
            Book a Call
          </a>
        </div>

        <p clasName="contact-biz">
          Contact us today to join our network and grow your venture instantly!
        </p>
        <div className="break" />

        <p className="email-biz">info@growwithus.me</p>
      </section>
    </div>
  );
}
export default ForBusiness;
