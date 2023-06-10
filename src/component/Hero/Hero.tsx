import React from "react";
import "./hero.css";
import heroBanner from "../../img/heroBanner.png";
import dots from "../../img/heroDot.svg";

const Hero = (props: any) => {
  const data = props?.builderBlock?.component?.options?.hero;

  return (
    <div className="heroWrapper">
      <div className="content">
        <div className="wrapper">
          <div className="leftSection">
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
            <button>Contact Now</button>
            <img src={dots} />
          </div>
          <div className="rightSecion">
            <div className="circleWrapper"></div>
            <div>
              <img src={heroBanner} />
            </div>
            <div className="squareWrapper"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
