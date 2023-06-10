import { useState, useEffect } from "react";
import "./Header.css";
import logo from "../../img/studioLogo.svg";

interface NavListList {
  label: string;
}

export const Header = (props: any) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (active) document.body.classList.add("remove-scrollbar");

    return () => {
      document.body.classList.remove("remove-scrollbar");
    };
  }, [active]);
  return (
    <div className="header-wrapper">
      <div className="header-outer">
        <div className="header-top">
          <div className="logo">
            <img src={logo} />
          </div>
          <div className="link-wrapper">
            <ul className="link">
              {props?.NavList.map((data: { label: string }, index: number) => {
                return (
                  <li key={index}>
                    <a href="">{data?.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="hamburger-mobile"
            onClick={() => {
              setActive(!active);
            }}
          >
            {/* {!active ? (
              <span>
                open<i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            ) : (
              <span>
                close<i className="fa fa-times" aria-hidden="true"></i>
              </span>
            )} */}

            <div
              className={active ? `${`hamburger`}` : ` ${`hamburger active`}`}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
        <div className="link-mobile-wrapper">
          <ul className={active ? "link-mobile active" : "link-mobile"}>
            {props?.NavList.map((data: { label: string }, index: number) => {
              return (
                <li key={index}>
                  <a href="">{data?.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
