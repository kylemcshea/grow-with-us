import React from "react";
import "../styles/partners.css";
function Partners() {
  return (
    <div>
      <div className="solutions">
        <h2 className="title-partners">Partner With Us</h2>
        <div className="break"></div>
        <p className="intro-partners">
          GROW WITH US AGENCY PARTNERS ARE MAINLY PEOPLE WHO DON’T HAVE A
          BUSINESS JOIN OUR STARTER PACKAGE OR ANY PACKAGE, LOVE THE SERVICE AND
          WANT TO START SELLING IT TO MAKE A FULL TIME INCOME
        </p>
        <div className="break" />
        <h1>INSERT VIDEO HERE</h1>
        <div className="break" />
        <button>Join The Team</button>
        <div className="break" />

        <figure>
          <img
            src={process.env.PUBLIC_URL + "/images/choice.svg"}
            height="250px"
            width="250px"
          />
          <figcaption>Choose Your Industry</figcaption>
        </figure>

        <figure>
          <img
            src={process.env.PUBLIC_URL + "/images/price.svg"}
            height="250px"
            width="250px"
          />
          <figcaption>Set Your Rate</figcaption>
        </figure>

        <figure>
          <img
            src={process.env.PUBLIC_URL + "/images/earn.svg"}
            height="250px"
            width="250px"
          />
          <figcaption>Influence & Earn</figcaption>
        </figure>

        <div id="mybutton">
          <a
            href="https://calendly.com/dremedici/1on1call"
            className="feedback"
          >
            Book a Call
          </a>
        </div>

        <p className="contact-partners">
          Contact us today to join our influencer network and use your following
          to cash out!
        </p>
        <div className="break"></div>

        <p className="email-partners">info@growwithus.me</p>
      </div>
    </div>
  );
}
export default Partners;
