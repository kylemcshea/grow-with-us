import React from "react";
import "../styles/igservices.css";
function IGServices() {
  return (
    <div>
      <div className="solutions">
        <h2 className="title-ig">Instagram Services</h2>
        <div className="break"></div>
        <p className="intro-ig">
          Our tested strategies have made our clients thousands of dollars over
          the past 2 years! Though our packages offer the most value at the best
          price, we understand that all clients have different needs, which is
          why we offer all of our services A La Carte too.
        </p>
        <div className="break"></div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/ig-1.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Account Management</strong>
            <br />
            $600/month
          </p>
          <a href="https://checkout.square.site/buy/5OVVGWQITULKQFNIWIYBOOGB">
            BUY NOW
          </a>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/ig.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Recurring Engagement</strong>
            <br />
            $250/month
          </p>
          <a href="https://checkout.square.site/buy/VZ2USCWVS2M66F4F76MFH4XY">
            BUY NOW
          </a>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/ig-7.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Rebranding Session w/ CEOs</strong>
            <br />
            $250
          </p>
          <a href="https://checkout.square.site/buy/FKRJT33V4KSZV34AJL4U4VT3">
            BUY NOW
          </a>
        </div>

        <div className="break"></div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/ig-2.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Custom GIFs</strong>
            <br />
            $120 for 5, $200 for 10
          </p>
          <a href="https://checkout.square.site/buy/P333JDMVNIOD5VF3UKB5WB2T">
            BUY NOW
          </a>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/ig-3.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Story Highlights</strong>
            <br />
            $45 per 5 covers
          </p>
          <a href="https://checkout.square.site/buy/22O67WJMZJ6P7GI5BJQCGYPR">
            BUY NOW
          </a>
        </div>

        <div className="figure">
          <img
            src={process.env.PUBLIC_URL + "/images/ig-5.svg"}
            height="100px"
            width="100px"
          />
          <p>
            <strong>Custom Video Swipe-Up Ad</strong>
            <br />
            $100
          </p>
          <a href="https://checkout.square.site/buy/FEZHL2BBAHRNDYKJEC36KGMT">
            BUY NOW
          </a>
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

        <p className="info-ig">
          Contact us today to join our network and grow your following &
          credibility instantly!
        </p>
        <div className="break"></div>

        <p className="contact-ig">info@growwithus.me</p>
      </div>
    </div>
  );
}
export default IGServices;
