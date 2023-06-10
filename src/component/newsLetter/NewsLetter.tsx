import React from "react";
import "./newsLetter.css";
import contactUsBackground from "../../img/newLetterRight.png";
import newLetterDots from "../../img/newsLetterDots.svg";
const NewsLetter = () => {
  return (
    <div className="newsLetterWrapper">
      <img src={newLetterDots} className="dotsImg" />
      <div className="content">
        <div className="textContent">
          <h1>Subscribe Newsletter</h1>
          <p>I will update good news and promotion service not spam</p>
        </div>
        <div className="contactNowContent">
          <div className="inputWrapper">
            <input type="text" placeholder="Enter your email address.." />
            <button>Contact Now</button>
          </div>
          <img src={contactUsBackground} className="contactUsBackground" />
        </div>
      </div>

      <div className="bottomBackground"></div>
    </div>
  );
};

export default NewsLetter;
