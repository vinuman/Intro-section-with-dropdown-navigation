import arrowDown from "./icon-arrow-down.svg";
import logo from "./logo.svg";
import arrowUp from "./icon-arrow-up.svg";
import todo from "./icon-todo.svg";
import calendar from "./icon-calendar.svg";
import reminders from "./icon-reminders.svg";
import planning from "./icon-planning.svg";
import Hamburger from "./Hamburger";
import { useState } from "react";

const Nav = () => {
  const [features, setFeatures] = useState(false);
  const [company, setCompany] = useState(false);

  const handleFeaturesClick = () => {
    setFeatures(!features);
    console.log(features);
  };

  const handleHamburger = () => {
    setCompany(!company);
  };

  const style = {
    height: "2.6rem",
    width: "8.3rem",
  };

  const style2 = {
    paddingLeft: "0.6rem",
  };

  const styleFeature = {
    width: "15.3rem",
    backgroundColor: "#fff",
    borderRadius: "2rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: "10%",
    top: "10%",
    border: "1px solid #151515",
    paddingBottom: "2rem",
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

  const styleList2 = {
    left: "30% !important",
  };

  return (
    <nav>
      <div className="left">
        <img style={style} src={logo}></img>
        <ul>
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
                  <img style={styleIcon} src={calendar} alt="calendar"></img>
                  <p style={styleList}>Calendar</p>
                </div>
                <div style={styleFeatureList} className="feature-item">
                  <img style={styleIcon} src={reminders} alt="reminders"></img>
                  <p style={styleList}>Reminders</p>
                </div>
                <div style={styleFeatureList} className="feature-item">
                  <img style={styleIcon} src={planning} alt="planning"></img>
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
              <li onClick={handleHamburger}>
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
            <li onClick={handleHamburger}>
              Company
              <img style={style2} src={arrowDown}></img>
            </li>
          )}

          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className="right">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
      <Hamburger />
    </nav>
  );
};

//I have a nav bar in react, I want it to disappear when the screen size
//decreases below 700px and a hamburger menu should appear instead. Give me the react code for the same

export default Nav;
