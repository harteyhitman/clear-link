import SmillingVideo from "../Assets/smilling-video.png";
import Button from "../components/Button";
import CheckText from "../Assets/Check item text.png";
import CheckText2 from "../Assets/checkimg2.png";
import CheckText3 from "../Assets/checkimg3.png";
import CheckText4 from "../Assets/checkimg4.png";

const PerfectVideos = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="perfect-container">
      <div className="perfect-communication">
        <h2>Ready to clear the path to <br /> perfect communication?</h2>
        <div className="check-img">
          <img src={CheckText} alt="" />
          <img src={CheckText2} alt="" />
          <img src={CheckText3} alt="" />
          <img src={CheckText4} alt="" />
        </div>
        <div className="nav-button">
          <Button
            label="Talk to sales"
            onClick={handleClick}
            className="custom-button"
          />
          <Button
            label="Sign up for free"
            onClick={handleClick}
            className="custom-button blue-btn"
          />
        </div>
      </div>
      <div className="smilling-video">
        <img src={SmillingVideo} alt="" />
      </div>
    </div>
  );
};

export default PerfectVideos;
