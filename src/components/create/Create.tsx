import { useHistory, useLocation } from "react-router";

// import { ReactComponent as AttributedNFTIcon } from "../../assets/create/AttributedNFTIcon.svg";
// import { ReactComponent as CardPackIcon } from "../../assets/create/CardPackIcon.svg";
// import { ReactComponent as GempoolIcon } from "../../assets/create/GempoolIcon.svg";
// import { ReactComponent as LootboxIcon } from "../../assets/create/LootboxIcon.svg";
// import { ReactComponent as RaffleIcon } from "../../assets/create/RaffleIcon.svg";
import { homeBrowseCategoryFakeData } from "../Home/HomeBrowseCategoryFakeData";

const Create = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <div className="createPage">
      <div className="createPage__container">
        <p>Create</p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas
          ligula risus sed lacus nec, pellentesque at maecenas. Nisi, odio risus
          nunc cras.
        </span>
        <div className="createPage__container__items">
          <div className="createPage__container__items__firstPart">
            {/* <div onClick={() => history.push(`${pathname}/gempool`)}>
              <GempoolIcon />
              <p>Gem Pools</p>
            </div>
            <div onClick={() => history.push(`${pathname}/lootbox`)}>
              <LootboxIcon />
              <p>Lootbox</p>
            </div>
            <div onClick={() => history.push(`${pathname}/raffle`)}>
              <RaffleIcon />
              <p>Raffle</p>
            </div>
          </div>
          <div className="createPage__container__items__secondPart">
            <div onClick={() => history.push(`${pathname}/attributednft`)}>
              <AttributedNFTIcon />
              <p>Attributed NFT</p>
            </div>
            <div onClick={() => history.push(`${pathname}/cardpack`)}>
              <CardPackIcon />
              <p>Card Pack</p>
            </div> */}
            {homeBrowseCategoryFakeData.map(({ path, img, name }) => (
              <div
                key={path}
                onClick={() => history.push(`${pathname + path}`)}
              >
                {/* <CardPackIcon /> */}
                <img src={`${img}`} alt={`${path}`} />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
