import React from "react";
import "../styles/featured.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Featured() {
  return (
    <div className="featured">
      <div className="wrapper">
        <h2 className="title">Featured on</h2>
        <div className="parent-feature">
          <div className="child-feature">
            <a href="https://hustlerminds.com/dre-medici-and-arthur-caravellas/top-minds/">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/hustlersmindsgwu-.png"}
                />
              </Card>
            </a>
          </div>
          <div className="child-feature">
            <a href="https://tyce.medium.com/dre-medici-and-arthur-caravellas-3a7026f0cf79">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/mediumgwu-.png"}
                />
              </Card>
            </a>
          </div>
          <div className="child-feature">
            <a href="https://newtheory.com/how-dre-medici-arthur-caravellas-and-omar-choudhury-scaled-their-marketing-agency-to-7-figures-in-under-1-year-with-amazing-results/">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/newtheorygwu-.png"}
                />
              </Card>
            </a>
          </div>
          <div className="child-feature">
            <a href="https://cloutnews.com/dre-medicis-tips-to-building-an-elite-brand-business-that-can-start-making-you-6-7-figures-a-year/">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/cloutnewsgwu-.png"}
                />
              </Card>
            </a>
          </div>
          <div className="child-feature">
            <a href="https://www.influencive.com/how-growing-your-instagram-page-can-become-your-best-investment-according-to-a-branding-expert/">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/influencivegwu-.png"}
                />
              </Card>
            </a>
          </div>
          <div className="child-feature">
            <a href="https://www.globenewswire.com/news-release/2020/11/04/2120273/0/en/Meet-the-Man-Dominating-The-Instagram-Space-Arthur-Caravellas.html">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/globenewswiregwu-.png"}
                />
              </Card>
            </a>
          </div>
          <div className="child-feature">
            <a href="https://www.yahoo.com/lifestyle/meet-man-dominating-instagram-space-160000755.html">
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/yahoogwu-.png"}
                />
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
