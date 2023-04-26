import logo from "./logo.svg";

const style = {
  height: "2.6rem",
  width: "8.3rem",
};

const Hamburger = () => {
  return (
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
  );
};

export default Hamburger;
