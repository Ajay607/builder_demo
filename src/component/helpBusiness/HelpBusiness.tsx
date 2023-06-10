import React from "react";
import "./helpBusiness.css";
import iconBusiness from "../../img/businessIdea.svg";
import iconFinancial from "../../img/financialPlanning.svg";
import iconDev from "../../img/webDev.svg";
import iconMarket from "../../img/marketAnalysis.svg";
import helpBusinessDots from "../../img/helpBusinessDots.svg";

const HelpBusiness = (props: any) => {
  return (
    <div className="helpBusinessWrapper">
      <div className="content">
        <div className="bgBoxOuter"></div>
        <img src={helpBusinessDots} className="helpBusinessDots" />
        <div className="wrapper">
          <div className="textWrapper">
            <h1 className="title">{props?.needHelp?.title}</h1>
            <p className="desc">{props?.needHelp?.subTitle}</p>
            <div className="bgBox"></div>
          </div>
          <div className="cardWrapper">
            <div className="leftCardWrapper">
              <div className="card">
                <div className="imgWrapper iconBusiness">
                  <img src={iconBusiness} />
                </div>
                <h3>{props?.businessIdea?.title}</h3>
                <p>{props?.businessIdea?.subTitle}</p>
              </div>
              <div className="card">
                <div className="imgWrapper iconDev">
                  <img src={iconDev} />
                </div>
                <h3>{props?.webDev?.title}</h3>
                <p>{props?.webDev?.subTitle}</p>
              </div>
            </div>
            <div className="rightCardWrapper">
              <div className="card">
                <div className="imgWrapper iconFinancial">
                  <img src={iconFinancial} />
                </div>
                <h3>{props?.financialPlanningSystem?.title}</h3>
                <p>{props?.financialPlanningSystem?.subTitle}</p>
              </div>
              <div className="card">
                <div className="imgWrapper iconMarket">
                  <img src={iconMarket} />
                </div>
                <h3>{props?.marketAnalysis?.title}</h3>
                <p>{props?.marketAnalysis?.subTitle}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="circleRed"></div>
      </div>
    </div>
  );
};

export default HelpBusiness;
