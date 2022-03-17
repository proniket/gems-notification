import { ReactComponent as ImageIcon } from "../../assets/create/imgIcon.svg";
import { ReactComponent as HeartIcon } from "../../assets/creator/heart.svg";
import { ReactComponent as ShareIcon } from "../../assets/searchResult/shareIcon.svg";

const CreatorSliderCard = () => {
  return (
    <div className="creatorSliderCard">
      <div className="creatorSliderCard__headingSection">
        <div className="creatorSliderCard__headingSection--likes">
          <div>
            <HeartIcon />
          </div>
          <p>5</p>
        </div>
        <div className="creatorSliderCard__headingSection--settings">
          <ShareIcon />
        </div>
      </div>
      <div className="creatorSliderCard__imageSection">
        <div className="creatorSliderCard__imageSection--imgDiv">
          <ImageIcon />
        </div>
        <p>Photo</p>
      </div>
      <div className="creatorSliderCard__infoSection">
        <div className="creatorSliderCard__infoSection--container">
          <div className="creatorSliderCard__infoSection--container--nameDiv">
            <span>Collection Name</span>
            <p>2.59 ETH</p>
          </div>

          <p>by John Doe</p>
          {/* <span>
            <strong>2.59</strong>
            ETH
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default CreatorSliderCard;
