import React from "react";
import "../styles/giveaways.css";
function Giveaways() {
  return (
    <div>
      <div className="solutions">
        <h2 className="title-celeb">Celebrity Giveaways</h2>
        <div className="break"></div>
        <p className="intro">
          Our exclusive celebrity partnerships allow us to offer extreme
          Instagram growth of 1-200k+ followers for phenomenal prices. Some of
          our Past Giveaway Partners have included the following and many more.
        </p>
        <div className="break"></div>

        <figure>
          <img
            src={process.env.PUBLIC_URL + "/images/supreme.jpg"}
            height="250px"
            width="250px"
          />
          <figcaption>Supreme Patty</figcaption>
        </figure>

        <figure>
          <img
            src={process.env.PUBLIC_URL + "/images/tayler.jpg"}
            height="250px"
            width="250px"
          />
          <figcaption>Tayler Holder</figcaption>
        </figure>

        <figure>
          <img
            src={process.env.PUBLIC_URL + "/images/ruby.jpg"}
            height="250px"
            width="250px"
          />
          <figcaption>Ruby Rose</figcaption>
        </figure>

        <div id="mybutton">
          <a
            href="https://calendly.com/dremedici/1on1call"
            className="feedback"
          >
            Book a Call
          </a>
        </div>
        {/* Giveaway Purchase Section*/}

        <p className="celeb-info">
          No Celebrity Giveaways are currently open for entry. If interested in
          growing your following via Celebrity Giveaways, contact us at
          info@growwithus.me.
        </p>
        <div className="break"></div>
      </div>
    </div>
  );
}
export default Giveaways;
