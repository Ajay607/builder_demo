import React from "react";
import "./clientReview.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import clientImg from "../../img/clientReviewProfile.png";
import clientDots from "../../img/clientReviewDot.png";
import rightImg from "../../img/clientReviewGroup.png";


const ClientReview = (props: any) => {
  return (
    <div className="clientReviewWrapper">
      <h1 className="title">What our happy client say</h1>
      <p className="desc">
        Several selected clients, who already believe in our service.
      </p>
      <div className="content">
        <div className="sliderWrapper">
          <div>
            <Carousel
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              showArrows={false}
              showStatus={false}
              emulateTouch
            >
              <div className="sliderBox">
                <div className="content">
                  <div className="imagesWrapper">
                    <div className="imgWrapperSlider">
                      <img src={clientDots} className="dots" />
                      <img src={clientImg} className="profile" />
                      <div className="pinkCircle"></div>
                    </div>
                  </div>
                  <div className="textContent">
                    <h3 className="sliderHeading">
                      {props?.sliderList[0]?.name}
                    </h3>
                    <p className="sliderDesc">{props?.sliderList[0]?.review}</p>
                  </div>
                </div>
              </div>
              <div className="sliderBox">
                <div className="content">
                  <div className="imagesWrapper">

                    <div className="imgWrapperSlider">
                      <img src={clientDots} className="dots" />
                      <img src={clientImg} className="profile" />
                      <div className="pinkCircle"></div>
                    </div>
                  </div>
                  <div className="textContent">
                    <h3 className="sliderHeading">
                      {props?.sliderList[0]?.name}
                    </h3>
                    <p className="sliderDesc">{props?.sliderList[0]?.review}</p>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
        <div className="imgWrapperRight">
          <img src={rightImg} />
          <div className="bgCircle"></div>
        </div>
      </div>
    </div>
  );
};

export default ClientReview;


