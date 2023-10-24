import TechContest from "../Assets/tech-contest.png";
import ShopifyImg from "../Assets/shoppify.png";
import YellowStar from "../Assets/yelow-star.png";
import Avatar from "../Assets/Avatar.png";

const Shoppify = () => {
  return (
    <>
      <div className="shopify-container">
        <div className="shopify-text">
        <img className="shopify-img" src={ShopifyImg} alt="" />
        <div className="star-rating">
          <img src={YellowStar} alt="" />
          <img src={YellowStar} alt="" />
          <img src={YellowStar} alt="" />
          <img src={YellowStar} alt="" />
          <img src={YellowStar} alt="" />
        </div>

        <div className="shopify-plenty">
          ClearLink has upgraded our remote meetings. High quality video, screen
          sharing, and top-notch security make it essential for our team.
        </div>
        <div className="avatar">
          <img src={Avatar} alt="" />
          <div className="avatar-text">
            <h4>Sarah Thompson</h4>
            <p>Project Manager, Shopify</p>
          </div>
        </div>
        </div>
        <div className="tech-contest">
          <img src={TechContest} alt="" />
        </div>
      </div>
    </>
  );
};
export default Shoppify;
