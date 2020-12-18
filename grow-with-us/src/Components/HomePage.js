import React from "react";
import "../styles/home.css";
import Typist from "react-typist";
import Statement from "./Statement";
import Packages from "./Packages";
function HomePage() {
  return (
    <div className="home">
      <div className="image-container">
        <div className="left-center">
          <Typist className="left-center">Animate this text.</Typist>
        </div>
        <img
          className="img"
          src={process.env.PUBLIC_URL + "/images/skyline.jpg"}
        />
      </div>
      <Statement />
      <Packages />
    </div>
  );
}

export default HomePage;
