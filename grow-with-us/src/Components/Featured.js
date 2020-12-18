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
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/images/hustlersmindsgwu-.png"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="child-feature">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/images/mediumgwu-.png"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="child-feature">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/images/newtheorygwu-.png"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="child-feature">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/images/cloutnewsgwu-.png"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="child-feature">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/images/influencivegwu-.png"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="child-feature">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/images/globenewswiregwu-.png"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="child-feature">
            <Card>
              <Card.Img
                variant="top"
                src={process.env.PUBLIC_URL + "/images/yahoogwu-.png"}
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Featured;
