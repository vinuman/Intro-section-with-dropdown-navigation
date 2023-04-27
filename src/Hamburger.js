import logo from "./logo.svg";
import arrowUp from "./icon-arrow-up.svg";
import todo from "./icon-todo.svg";
import calendar from "./icon-calendar.svg";
import reminders from "./icon-reminders.svg";
import planning from "./icon-planning.svg";
import { useState, useEffect } from "react";
import arrowDown from "./icon-arrow-down.svg";

const style = {
  height: "2.6rem",
  width: "8.3rem",
};
const style2 = {
  paddingLeft: "0.6rem",
};

const styleFeature = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid red",
  width: "100%",
  marginTop: "1rem",
};
const styleFeature1 = {
  width: "11.6rem",
  backgroundColor: "#fff",
  borderRadius: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: "21%",
  top: "10%",
  border: "1px solid #151515",
  paddingBottom: "2rem",
};

const styleFeatureList = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
};

const styleIcon = {
  width: "1.6rem",
  height: "1.6rem",
  marginTop: "1.8rem",
};

const styleList = {
  color: "#686868",
  fontSize: "1.4rem",
  height: "100%",
  paddingLeft: "1rem",
};

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

  return (
    <div className="hamburger">
      <div className="nav-start">
        <img style={style} src={logo}></img>
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
                position: "absolute",
                top: "10%",
                left: "5%",
              }}
            >
              {features ? (
                <div>
                  <li onClick={handleFeaturesClick}>
                    Features
                    <img style={style2} src={arrowUp}></img>
                  </li>
                  <div style={styleFeature} className="featureList">
                    <div style={styleFeatureList} className="feature-item">
                      <img style={styleIcon} src={todo} alt="todo"></img>
                      <p style={styleList}>To do list</p>
                    </div>
                    <div style={styleFeatureList} className="feature-item">
                      <img
                        style={styleIcon}
                        src={calendar}
                        alt="calendar"
                      ></img>
                      <p style={styleList}>Calendar</p>
                    </div>
                    <div style={styleFeatureList} className="feature-item">
                      <img
                        style={styleIcon}
                        src={reminders}
                        alt="reminders"
                      ></img>
                      <p style={styleList}>Reminders</p>
                    </div>
                    <div style={styleFeatureList} className="feature-item">
                      <img
                        style={styleIcon}
                        src={planning}
                        alt="planning"
                      ></img>
                      <p style={styleList}>Planning</p>
                    </div>
                  </div>
                </div>
              ) : (
                <li onClick={handleFeaturesClick}>
                  Features
                  <img style={style2} src={arrowDown}></img>
                </li>
              )}
              {company ? (
                <div>
                  <li onClick={handleCompany}>
                    Company
                    <img style={style2} src={arrowUp}></img>
                  </li>
                  <div style={styleFeature1} className="featureList">
                    <div style={styleFeatureList} className="feature-item">
                      <p style={styleList}>History</p>
                    </div>
                    <div style={styleFeatureList} className="feature-item">
                      <p style={styleList}>Our team</p>
                    </div>
                    <div style={styleFeatureList} className="feature-item">
                      <p style={styleList}>Blog</p>
                    </div>
                  </div>
                </div>
              ) : (
                <li onClick={handleCompany}>
                  Company
                  <img style={style2} src={arrowDown}></img>
                </li>
              )}
              <li>Careers</li>
              <li>About</li>
            </ul>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "100%",
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
