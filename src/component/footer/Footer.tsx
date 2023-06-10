import React from "react";
import "./footer.css";
import logoImg from "../../img/studioLogo.svg";
import twitterIcon from "../../img/twitter.svg";
import facebookIcon from "../../img/facebook.svg";
import linkedinIcon from "../../img/linkeding.svg";

const Footer = (props: any) => {

  const dataWhatWeDo = props?.WhatWeDo;
  const datacompany = props?.Company;
  const dataSupport = props?.Support;
  const dataContact = props?.Contact;
  const description = props?.footerDescription?.description;


  return (
    <div className="footerWrapper">
      <div className="borderTop"></div>
      <div className="wrapper">
        <div className="content">
          {/* {/* <h2>{data?.title}</h2> */}
          {/* <p>{data?.description}</p>  */}
          <img src={logoImg} />
          <p>
           {description}
          </p>
          <div className="socialMediaIcons">
            <img src={facebookIcon} />
            <img src={twitterIcon} />
            <img src={linkedinIcon} />
          </div>
        </div>
        <div className="listWrapper">
          <div className="listOne">
            <h3>What We Do</h3>
            <ul>
              {dataWhatWeDo.map((data: any, index: any) => {
                return <li>{data.label}</li>;
              })}
            </ul>
          </div>
          <div className="listTwo">
            <h3>Company</h3>
            <ul>
              {datacompany.map((data: any, index: any) => {
                return <li>{data.label}</li>;
              })}
            </ul>
          </div>
          <div className="listThree">
            <h3>Support</h3>
            <ul>
              {dataSupport.map((data: any, index: any) => {
                return <li>{data.label}</li>;
              })}
            </ul>
          </div>
          <div className="listFour">
            <h3>Contact</h3>
            <ul>
              {dataContact.map((data: any, index: any) => {
                return <li>{data.label}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>Copyright © {new Date().getFullYear()} Avi Yansah</p>
      </div>
    </div>
  );
};

export default Footer;
