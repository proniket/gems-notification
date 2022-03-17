import coverPhoto from "../../assets/creator/coverPhoto.png";
import profilePhoto from "../../assets/creator/profilePhoto.png";
import SearchIcon from "../../assets/home/SearchIcon";

import CreatorSider from "./CreatorSider";
import CreatorSortByPrice from "./CreatorSortByPrice";

const CreatorContainer = () => {
  return (
    <div className="creatorContainer">
      <div className="creatorContainer__backgroundImg">
        <img src={coverPhoto} alt="cover" />
      </div>
      <div className="creatorContainer__content">
        <div>
          <div className="creatorContainer__content__userImg">
            <img src={profilePhoto} alt="profile" />
          </div>
          <p className="creatorContainer__content__userName">NFT Creator Man</p>
          <div className="creatorContainer__content__itemsOwners">
            <div className="creatorContainer__content__itemsOwners--items">
              3 items
            </div>
            <div className="creatorContainer__content__itemsOwners--owners">
              2 owners
            </div>
          </div>

          <div className="creatorContainer__content__searchPart">
            <div className="creatorContainer__content__searchPart--search">
              <SearchIcon color="#C4C4C4" />
              <input type="text" placeholder="Enter your search terms here" />
            </div>
            <CreatorSortByPrice />
          </div>
          <div className="creatorContainer__content__sliderSection">
            <CreatorSider />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorContainer;
