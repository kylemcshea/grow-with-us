import React from "react";
import Icon from "@material-ui/core/Icon";
import "../styles/package.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function Package() {
  return (
    <div className="package-wrapper">
      <div className="packages">
        <div id="packages" className="solutions">
          <h1>Elite Packages</h1>
          <div className="break"></div>
          <div className="parent-container">
            <div className="parent">
              <div className="child">
                <Accordion className="package">
                  <Card className="package">
                    <Card.Header className="package-header">
                      <h2>STARTER</h2>
                      <div className="break"></div>
                      <div className="servicebreak"></div>
                      <div className="break"></div>

                      <h3>Grow With Us</h3>
                      <div className="break"></div>
                      <Accordion.Toggle
                        className="accordian-button"
                        as={Button}
                        variant="link"
                        eventKey="0"
                      >
                        <div className="arrow bounce">
                          <icon
                            className="fa fa-arrow-down fa-2x"
                            href="#"
                          ></icon>
                        </div>
                      </Accordion.Toggle>
                      <p className="package-details">Show Details</p>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <ul className="package-details">
                          <li>
                            10-20K REAL Followers Through Our Celebrity Campaign
                          </li>
                          <li>
                            Access to our official GWU Course Led by{" "}
                            <span className="highlight-blue">@dremedici</span>,{" "}
                            <span class="highlight-blue">
                              @arthurcaravellas
                            </span>
                            , and{" "}
                            <span class="highlight-blue">@omarconnects</span>{" "}
                            with over 60+ training videos on how to build and
                            monetize your page on Instagram
                          </li>
                          <li>
                            GWU partnership access (1 on 1 consulting call with
                            GWU Head of Sales included)
                          </li>
                          <li>
                            Access to our private community on Discord with
                            hundreds of active members
                          </li>
                          <li>Weekly Live Calls</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <h4 className="package-pricing">
                      $1500 activation fee
                      <br /> +<br /> $150/month
                    </h4>
                    <p>
                      Monthly Engagement <br />
                      1000+ likes, 100+ comments per post
                    </p>
                    <p>First Month FREE!</p>
                    <button
                      className="button-grow"
                      onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                    >
                      Grow with <br />
                      STARTER
                    </button>
                  </Card>
                </Accordion>
              </div>
              <div className="child">
                <Accordion className="package">
                  <Card className="package">
                    <Card.Header className="package-header">
                      <h2>GOLD</h2>
                      <div className="break"></div>
                      <div className="servicebreak"></div>
                      <div className="break"></div>

                      <h3>Grow With Us</h3>
                      <div className="break"></div>
                      <Accordion.Toggle
                        className="accordian-button"
                        as={Button}
                        variant="link"
                        eventKey="1"
                      >
                        <div className="arrow bounce">
                          <icon
                            className="fa fa-arrow-down fa-2x"
                            href="#"
                          ></icon>
                        </div>
                      </Accordion.Toggle>
                      <p className="package-details">Show Details</p>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <ul className="package-details">
                          <li>
                            15-25K REAL U.S. Based Followers From Our US
                            Celebrity Based Campaign
                          </li>
                          <li>
                            Published on Medium, Disrupt, and American Daily
                          </li>
                          <li>Customized Story Highlight Icons</li>
                          <li>Verified Celebrity Comments</li>
                          <li>
                            Access to our official GWU Course Led by{" "}
                            <span className="highlight-blue">@dremedici</span>,{" "}
                            <span class="highlight-blue">
                              @arthurcaravellas
                            </span>
                            , and{" "}
                            <span class="highlight-blue">@omarconnects</span>{" "}
                            with over 60+ training videos on how to build and
                            monetize your page on Instagram
                          </li>
                          <li>
                            Access to our private community on Discord with
                            hundreds of active members
                          </li>
                          <li>Weekly Live Calls</li>
                          <li>GWU partnership access</li>
                          <li>
                            1 on 1 consulting call with GWU Head of Sales
                            included
                          </li>
                          <li>GWU Affilate Access</li>
                          <li>3 Top Tier Press Articles by Influencers</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <h4 className="package-pricing">
                      $3000 activation fee
                      <br /> +<br /> $200/month
                    </h4>
                    <p>
                      Monthly Engagement <br />
                      1500+ likes | 15,000+ Views | 100+ comments per post
                      <br /> *Verified Celebrity Comments Included*
                    </p>
                    <p>First Month FREE!</p>
                    <button
                      className="button-grow"
                      onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                    >
                      Grow with <br />
                      GOLD
                    </button>
                  </Card>
                </Accordion>
              </div>
              <div className="child">
                <Accordion className="package">
                  <Card className="package">
                    <Card.Header className="package-header">
                      <h2>PRO</h2>
                      <div className="break"></div>
                      <div className="servicebreak"></div>
                      <div className="break"></div>

                      <h3>Grow With Us</h3>
                      <div className="break"></div>
                      <Accordion.Toggle
                        className="accordian-button"
                        as={Button}
                        variant="link"
                        eventKey="1"
                      >
                        <div className="arrow bounce">
                          <icon
                            className="fa fa-arrow-down fa-2x"
                            href="#"
                          ></icon>
                        </div>
                      </Accordion.Toggle>
                      <p className="package-details">Show Details</p>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <ul className="package-details">
                          <li>
                            35-50K REAL U.S. Based Followers From Our US
                            Celebrity Based Campaign
                          </li>
                          <li>
                            Published on Yahoo Finance, Medium, and Disrupt
                          </li>
                          <li>3-5 Top Tier Press Articles by Influencers</li>
                          <li>Customized Story Highlight Icons</li>
                          <li>Verified Celebrity Comments</li>
                          <li>
                            Access to our official GWU Course Led by{" "}
                            <span className="highlight-blue">@dremedici</span>,{" "}
                            <span class="highlight-blue">
                              @arthurcaravellas
                            </span>
                            , and{" "}
                            <span class="highlight-blue">@omarconnects</span>{" "}
                            with over 60+ training videos on how to build and
                            monetize your page on Instagram
                          </li>
                          <li>
                            Access to our private community on Discord with
                            hundreds of active members
                          </li>
                          <li>Weekly Live Calls</li>
                          <li>GWU partnership access</li>
                          <li>
                            1-on-1 Consulting calls with GWU’s Head of Sales
                          </li>
                          <li>GWU Affiliate Access</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <h4 className="package-pricing">
                      $5500 activation fee
                      <br /> +<br /> $225/month
                    </h4>
                    <p>
                      Monthly Engagement <br />
                      2000+ likes | 20,000+ Views | 100+ comments per post{" "}
                      <br />
                      *Verified Celebrity Comments Included*
                    </p>
                    <p>First Month FREE!</p>
                    <button
                      className="button-grow"
                      onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                    >
                      Grow with <br />
                      PRO
                    </button>
                  </Card>
                </Accordion>
              </div>
              <div className="child">
                <Accordion className="package">
                  <Card className="package">
                    <Card.Header className="package-header">
                      <h2>HIGH STATS</h2>
                      <div className="break"></div>
                      <div className="servicebreak"></div>
                      <div className="break"></div>

                      <h3>Grow With Us</h3>
                      <div className="break"></div>
                      <Accordion.Toggle
                        className="accordian-button"
                        as={Button}
                        variant="link"
                        eventKey="1"
                      >
                        <div className="arrow bounce">
                          <icon
                            className="fa fa-arrow-down fa-2x"
                            href="#"
                          ></icon>
                        </div>
                      </Accordion.Toggle>
                      <p className="package-details">Show Details</p>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <ul className="package-details">
                          <li>75-100K REAL U.S. + Int'l Based Followers</li>
                          <li>
                            Published on Business Insider, Yahoo Finance,
                            Medium, Disrupt, and American Daily
                          </li>
                          <li>Customized Personal Top Tier Website</li>
                          <li>3-5 Top Tier Press Articles by Influencers</li>
                          <li>Customized Story Highlight Icons</li>
                          <li>Complete Rebranding of your page</li>
                          <li>
                            Access to our official GWU Course Led by{" "}
                            <span className="highlight-blue">@dremedici</span>,{" "}
                            <span class="highlight-blue">
                              @arthurcaravellas
                            </span>
                            , and{" "}
                            <span class="highlight-blue">@omarconnects</span>{" "}
                            with over 60+ training videos on how to build and
                            monetize your page on Instagram
                          </li>
                          <li>
                            Access to our private community on Discord with
                            hundreds of active members
                          </li>
                          <li>Weekly Live Calls</li>
                          <li>GWU partnership access</li>
                          <li>1 on 1 consulting call with GWU Head of Sales</li>
                          <li>GWU Affilate Access</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <h4 className="package-pricing">
                      $7500 activation fee
                      <br /> +<br /> $300/month
                    </h4>
                    <p>
                      Monthly Engagement <br />
                      3,500+ likes | 35,000+ Views | 150+ comments per post{" "}
                      <br />
                      *Verified Celebrity Comments Included*
                    </p>
                    <p>First Month FREE!</p>
                    <button
                      className="button-grow"
                      onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                    >
                      Grow with <br />
                      HIGH STATS
                    </button>
                  </Card>
                </Accordion>
              </div>
              <div className="child">
                <Accordion className="package">
                  <Card className="package">
                    <Card.Header className="package-header">
                      <h2>TOP TIER</h2>
                      <div className="break"></div>
                      <div className="servicebreak"></div>
                      <div className="break"></div>

                      <h3>Grow With Us</h3>
                      <div className="break"></div>
                      <Accordion.Toggle
                        className="accordian-button"
                        as={Button}
                        variant="link"
                        eventKey="1"
                      >
                        <div className="arrow bounce">
                          <icon
                            className="fa fa-arrow-down fa-2x"
                            href="#"
                          ></icon>
                        </div>
                      </Accordion.Toggle>
                      <p className="package-details">Show Details</p>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <ul className="package-details">
                          <li>100-150K REAL U.S. + Int'l Based Followers</li>
                          <li>
                            Published on Business Insider, Yahoo Finance,
                            Influencive, Medium, Disrupt, American Daily, Thrive
                            Global, and Clout News
                          </li>
                          <li>Customized Personal Top Tier Website</li>
                          <li>Customized Google Panel</li>
                          <li>
                            5 Top Tier Press Articles by Influencers with 50K+
                            Views Each
                          </li>
                          <li>Customized Story Highlight Icons</li>
                          <li>Complete Rebranding of your page</li>
                          <li>
                            Access to our official GWU Course Led by{" "}
                            <span className="highlight-blue">@dremedici</span>,{" "}
                            <span class="highlight-blue">
                              @arthurcaravellas
                            </span>
                            , and{" "}
                            <span class="highlight-blue">@omarconnects</span>{" "}
                            with over 60+ training videos on how to build and
                            monetize your page on Instagram
                          </li>
                          <li>
                            Access to our private community on Discord with
                            hundreds of active members
                          </li>
                          <li>Weekly Live Calls</li>
                          <li>GWU partnership access</li>
                          <li>
                            1-on-1 Consulting calls with GWU’s Head of Sales
                          </li>
                          <li>GWU Affilate Access</li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <h4 className="package-pricing">
                      $10000 activation fee
                      <br /> +<br /> $500/month
                    </h4>
                    <p>
                      Monthly Engagement <br />
                      7000+ likes | 75,000+ Views | 150+ comments per post
                      <br />
                      *Verified Celebrity Comments Included*
                    </p>
                    <p>First Month FREE!</p>
                    <button
                      className="button-grow"
                      onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                    >
                      Grow with <br />
                      TOP TIER
                    </button>
                  </Card>
                </Accordion>
              </div>
              <div className="child">
                <Accordion className="package">
                  <Card className="package">
                    <Card.Header className="package-header">
                      <h2>BOSS OF INSTAGRAM</h2>
                      <div className="break"></div>
                      <div className="servicebreak"></div>
                      <div className="break"></div>

                      <h3>Grow With Us</h3>
                      <div className="break"></div>
                      <Accordion.Toggle
                        className="accordian-button"
                        as={Button}
                        variant="link"
                        eventKey="1"
                      >
                        <div className="arrow bounce">
                          <icon
                            className="fa fa-arrow-down fa-2x"
                            href="#"
                          ></icon>
                        </div>
                      </Accordion.Toggle>
                      <p className="package-details">Show Details</p>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <ul className="package-details">
                          <li>
                            Instagram Verification (Fb Business Page
                            Verification Included as Bonus)
                          </li>
                          <li>100-150K Real Followers (U.S Based + Int’l)</li>
                          <li>
                            Published On Entrepreneur, Jp Post, La Weekly, V
                            Mag, Business Insider, Yahoo Finance, Influencive,
                            Medium, Disrupt, American Daily, Thrive Global,
                            Clout News
                          </li>
                          <li>Customized Personal Top Tier Website</li>
                          <li>Customized Google Panel</li>
                          <li>
                            5 Personalized Lead-Generating Influencer Promotions
                            with 50K+ Views Each
                          </li>
                          <li>1 MONTH ACCOUNT MANAGEMENT</li>
                          <li>1 MONTH ACCESS TO CONTENT CREATION</li>
                          <li>Customized story highlight icons</li>
                          <li>Complete Rebranding of your page</li>
                          <li>
                            Access to our official GWU Course Led by{" "}
                            <span className="highlight-blue">@dremedici</span>,{" "}
                            <span class="highlight-blue">
                              @arthurcaravellas
                            </span>
                            , and{" "}
                            <span class="highlight-blue">@omarconnects</span>{" "}
                            with over 60+ training videos on how to build and
                            monetize your page on Instagram
                          </li>
                          <li>
                            Access to our private community group with hundreds
                            of active members
                          </li>
                          <li>Weekly Live Calls</li>
                          <li>GWU Partner Access</li>
                          <li>
                            1-on-1 Consulting calls with GWU’s Head of Sales
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                    <h4 className="package-pricing">
                      $15500 activation fee
                      <br /> +<br /> $500/month
                    </h4>
                    <p>
                      Monthly Engagement <br />
                      7,000+ likes | 75,000+ Views | 150+ comments per post{" "}
                      <br />
                      *Verified Celebrity Comments Included*
                    </p>
                    <p>First Month FREE!</p>
                    <button
                      className="button-grow"
                      onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                    >
                      Grow with <br />
                      BOSS OF INSTAGRAM
                    </button>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="break"></div>
          <div className="parent">
            <div className="child">
              <Accordion className="package">
                <Card className="package">
                  <Card.Header className="package-header">
                    <h2>STARTER</h2>
                    <div className="break"></div>
                    <div className="servicebreak"></div>
                    <div className="break"></div>

                    <h3>Grow With Us</h3>
                    <div className="break"></div>
                    <Accordion.Toggle
                      className="accordian-button"
                      as={Button}
                      variant="link"
                      eventKey="1"
                    >
                      <div className="arrow bounce">
                        <icon
                          className="fa fa-arrow-down fa-2x"
                          href="#"
                        ></icon>
                      </div>
                    </Accordion.Toggle>
                    <p className="package-details">Show Details</p>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <ul className="package-details">
                        <li>10-20K REAL Followers</li>
                        <li>Access to our private community on Discord</li>
                        <li>Weekly Live Calls</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                  <h4 className="package-pricing">
                    $1500 activation fee
                    <br /> +<br /> $600/month
                  </h4>
                  <p>
                    Monthly Engagement <br />
                    1,000+ likes | 100+ comments per post
                    <br />
                  </p>
                  <p>First Month FREE!</p>
                  <button
                    className="button-grow"
                    onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                  >
                    Grow with <br />
                    STARTER
                  </button>
                </Card>
              </Accordion>
            </div>
            <div className="child">
              <Accordion className="package">
                <Card className="package">
                  <Card.Header className="package-header">
                    <h2>ELITE</h2>
                    <div className="break"></div>
                    <div className="servicebreak"></div>
                    <div className="break"></div>

                    <h3>Grow With Us</h3>
                    <div className="break"></div>
                    <Accordion.Toggle
                      className="accordian-button"
                      as={Button}
                      variant="link"
                      eventKey="1"
                    >
                      <div className="arrow bounce">
                        <icon
                          className="fa fa-arrow-down fa-2x"
                          href="#"
                        ></icon>
                      </div>
                    </Accordion.Toggle>
                    <p className="package-details">Show Details</p>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <ul className="package-details">
                        <li>25K+ REAL Followers</li>
                        <li>
                          5 Influencer Promotions (200k+ views GUARANTEED)
                        </li>
                        <li>1 Press Article</li>
                        <li>24/7 Support</li>
                        <li>Access to our private community on Discord</li>
                        <li>Weekly Live Calls</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                  <h4 className="package-pricing">
                    $2500 activation fee
                    <br /> +<br /> $1250/month
                  </h4>
                  <p>
                    Monthly Engagement <br />
                    1000+ likes | 100+ comments per post
                  </p>
                  <p>First Month FREE!</p>
                  <button
                    className="button-grow"
                    onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                  >
                    Grow with <br />
                    ELITE
                  </button>
                </Card>
              </Accordion>
            </div>
            <div className="child">
              <Accordion className="package">
                <Card className="package">
                  <Card.Header className="package-header">
                    <h2>DIAMOND</h2>
                    <div className="break"></div>
                    <div className="servicebreak"></div>
                    <div className="break"></div>

                    <h3>Grow With Us</h3>
                    <div className="break"></div>
                    <Accordion.Toggle
                      className="accordian-button"
                      as={Button}
                      variant="link"
                      eventKey="1"
                    >
                      <div className="arrow bounce">
                        <icon
                          className="fa fa-arrow-down fa-2x"
                          href="#"
                        ></icon>
                      </div>
                    </Accordion.Toggle>
                    <p className="package-details">Show Details</p>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <ul className="package-details">
                        <li>50K+ REAL Followers</li>
                        <li>100-150K Real Followers (U.S Based + Int’l)</li>
                        <li>
                          10 Influencer Promotions (400k+ views GUARANTEED){" "}
                        </li>
                        <li>3 Press Articles</li>
                        <li>Website Design & Development</li>
                        <li>Instagram Rebranding Sessions</li>
                        <li>1 Monthly Photoshoo</li>
                        <li>24/7 Support</li>
                        <li>Access to our private community on Discord</li>
                        <li>Weekly Live Calls</li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                  <h4 className="package-pricing">
                    $3500 activation fee
                    <br /> +<br /> $2500/month
                  </h4>
                  <p>
                    Monthly Engagement <br />
                    1,000+ likes | 100+ comments per post <br />
                  </p>
                  <p>First Month FREE!</p>
                  <button
                    className="button-grow"
                    onclick="location.href='https://checkout.square.site/buy/NBVJVC2XGV7D6JHLKGH2SKBA'"
                  >
                    Grow with <br />
                    DIAMOND
                  </button>
                </Card>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Package;
