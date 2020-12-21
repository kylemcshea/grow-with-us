import React from "react";
import "../styles/statement.css";
import Carousel from "react-bootstrap/Carousel";
function Statement() {
  return (
    <div className="statement">
      <div className="showcase">
        <h1>GROW WITH US AGENCY</h1>
        <p>
          We teach people how to generate thousands of dollars per month through
          leveraging their personal brand, business start up, or established
          company on social media. Having serviced thousands of clients
          worldwide, we’ve proven to be the most elite marketing agency in the
          industry.
        </p>
        <button
          onclick="location.href='https://calendly.com/dremedici/1on1call'"
          type="button"
        >
          BOOK AN INTRODUCTORY CALL &#9654;&#xFE0E;
        </button>

        <h3>EXPLORE WHAT MAKES US DIFFERENT</h3>
        <a
          className="ca3-scroll-down-link ca3-scroll-down-arrow"
          data-ca3_iconfont="ETmodules"
          data-ca3_icon=""
        ></a>
      </div>
      <div className="hype">
        <h1>Our Philosophy</h1>
        <div className="break"></div>

        <p>
          Over the last 3+ years, we have focused on building the most elite
          Instagrams in the world, proving how truly life-changing online
          credibility can be. This is why we encourage you to invest in yourself
          & learn from the best. Our proprietary strategies and networks are
          guaranteed to take your online presence to the next level - giving you
          a new life of prosperity and success.
        </p>
        <div className="break" />
      </div>
      <h1>Testimonials</h1>
      <div className="carousel-wrapper">
        <Carousel
          className="carousel-container"
          nextIcon=""
          nextLabel=""
          prevIcon=""
          prevLabel=""
          indicators="false"
          interval={4000}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/review-3.JPG"}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/review-4.JPG"}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/review-7.JPG"}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/images/review-8.JPG"}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default Statement;
