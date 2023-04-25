import icon1 from "./client-databiz.svg";
import icon2 from "./client-audiophile.svg";
import icon3 from "./client-meet.svg";
import icon4 from "./client-maker.svg";
import mainImage from "./image-hero-desktop.png";
import mobImage from "./image-hero-mobile.png";

const Main = () => {
  return (
    <main>
      <div className="left">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button className="learn">Learn more</button>
        <div className="logos">
          <img src={icon1}></img>
          <img src={icon2}></img>
          <img src={icon3}></img>
          <img src={icon4}></img>
        </div>
      </div>
      <div className="right">
        <img className="deskTopImage" src={mainImage}></img>
        <img className="mobImage" src={mobImage}></img>
      </div>
    </main>
  );
};

export default Main;
