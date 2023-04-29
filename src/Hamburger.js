import logo from "./logo.svg";
import arrowUp from "./icon-arrow-up.svg";
import todo from "./icon-todo.svg";
import calendar from "./icon-calendar.svg";
import reminders from "./icon-reminders.svg";
import planning from "./icon-planning.svg";
import { useState, useEffect } from "react";
import arrowDown from "./icon-arrow-down.svg";

const Hamburger = () => {
  const [menu, setMenu] = useState(false);
  const [bgColor, setBgColor] = useState("white");
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const handleFeaturesClick = () => {
    setFeatures(!features);
    console.log(features);
  };

  const handleCompany = () => {
    setCompany(!company);
  };

  const handleMenuClick = () => {
    setMenu(!menu);
    if (bgColor === "white") {
      setBgColor("black");
    } else {
      setBgColor("white");
    }
  };

  useEffect(() => {
    document.body.className = `bg-${bgColor}`;
  }, [bgColor]);

  const featureListStyle = {
    width: "150%",
    marginTop: "2rem",
    zIndex: "1000",
    marginLeft: "3rem",
    backgroundColor: "fff",
  };

  const imgStyle = {
    marginTop: "1rem",
    marginLeft: "2rem",
    width: "3rem",
  };

  const listStyle = {
    width: "40%",
    height: "40%",
    marginLeft: "2rem",
  };

  return (
    <div className="hamburger">
      <div className="nav-start">
        <img src={logo}></img>
      </div>
      <div className="nav-end">
        {menu ? (
          <div className="ham-menu">
            <div
              onClick={handleMenuClick}
              style={{
                transform: "rotate(45deg)",
                position: "absolute",
                top: "5%",
                right: "5%",
              }}
              className="line"
            ></div>
            <div
              onClick={handleMenuClick}
              style={{
                transform: "rotate(135deg)",
                position: "absolute",
                top: "5%",
                right: "5%",
              }}
              className="line"
            ></div>
            <ul
              style={{
                listStyle: "none",
                marginTop: "20%",
                marginLeft: "5%",
              }}
            >
              {features ? (
                <div>
                  <li
                    style={{
                      height: "3rem",
                      fontSize: "1.6rem",
                      paddingBottom: "3rem",
                    }}
                    onClick={handleFeaturesClick}
                  >
                    Features
                    <img style={{ marginLeft: "0.6rem" }} src={arrowUp}></img>
                  </li>

                  <div style={featureListStyle} className="featureList">
                    <div className="feature-item">
                      <img style={imgStyle} src={todo} alt="todo"></img>
                      <p style={listStyle}>To do list</p>
                    </div>
                    <div className="feature-item">
                      <img style={imgStyle} src={calendar} alt="calendar"></img>
                      <p style={listStyle}>Calendar</p>
                    </div>
                    <div className="feature-item">
                      <img
                        style={imgStyle}
                        src={reminders}
                        alt="reminders"
                      ></img>
                      <p style={listStyle}>Reminders</p>
                    </div>
                    <div className="feature-item">
                      <img style={imgStyle} src={planning} alt="planning"></img>
                      <p style={listStyle}>Planning</p>
                    </div>
                  </div>
                </div>
              ) : (
                <li onClick={handleFeaturesClick}>
                  Features
                  <img style={{ marginLeft: "0.6rem" }} src={arrowDown}></img>
                </li>
              )}
              {company ? (
                <div>
                  <li
                    style={{
                      height: "3rem",
                      fontSize: "1.6rem",
                      paddingBottom: "3rem",
                    }}
                    onClick={handleCompany}
                  >
                    Company
                    <img style={{ marginLeft: "0.6rem" }} src={arrowUp}></img>
                  </li>
                  <div className="featureList">
                    <div className="feature-item">
                      <p>History</p>
                    </div>
                    <div className="feature-item">
                      <p>Our team</p>
                    </div>
                    <div className="feature-item">
                      <p>Blog</p>
                    </div>
                  </div>
                </div>
              ) : (
                <li onClick={handleCompany}>
                  Company
                  <img style={{ marginLeft: "0.6rem" }} src={arrowDown}></img>
                </li>
              )}
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              className="right"
            >
              <button
                style={{ marginBottom: "2rem", marginLeft: "1rem" }}
                className="login"
              >
                Login
              </button>
              <button
                style={{ width: "19.5rem", height: "4.5rem", margin: "0 auto" }}
                className="register"
              >
                Register
              </button>
            </div>
          </div>
        ) : (
          <div onClick={handleMenuClick}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hamburger;
