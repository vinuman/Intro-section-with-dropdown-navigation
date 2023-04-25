import logo from "./logo.svg";
import arrowDown from "./icon-arrow-down.svg";

const Nav = () => {
  const style = {
    height: "2.6rem",
    width: "8.3rem",
  };

  const style2 = {
    paddingLeft: "0.6rem",
  };

  return (
    <nav>
      <div className="left">
        <img style={style} src={logo}></img>
        <ul>
          <li>
            Features
            <img style={style2} src={arrowDown}></img>
          </li>
          <li>
            Company
            <img style={style2} src={arrowDown}></img>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>
      <div className="right">
        <button className="login">Login</button>
        <button className="register">Register</button>
      </div>
      <div className="hamburger">
        <div className="nav-start">
          <img style={style} src={logo}></img>
        </div>
        <div className="nav-end">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

//I have a nav bar in react, I want it to disappear when the screen size
//decreases below 700px and a hamburger menu should appear instead. Give me the react code for the same

export default Nav;
