import React from "react";
import "./digitalProduct.css";
import Banner from "../../img/digitalProduct.png";
import Play from "../../img/play-circle-fill.svg";

const DigitalProduct = (props: any) => {
  const data = props?.builderBlock?.component?.options?.digitalProduct;

  return (
    <div className="digitalWrapper">
      <div className="content">
        <div className="videoWrapper">
          <img src={Banner} className="video" />
          <div className="playBtnWrapper">
            <img src={Play} />
          </div>
          <div className="roundedCircle"></div>
        </div>
        <div className="textWrapper">
          <div className="rightBox"></div>
          <h1>{data?.title}</h1>
          <p>{data?.subTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default DigitalProduct;
