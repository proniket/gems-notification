import { FC, useState } from "react";

import Img from "../../assets/home/noImgIcon.svg";
import { ReactComponent as ShareIcon } from "../../assets/searchResult/shareIcon.svg";
import { NFTItem } from "../../redux/features/marketplace/model";

const NFTCollectionCard: FC<NFTItem | any> = ({
  // onDblClick,
  address,
  id,
  imageUrl,
  onClickToken,
  metadata,
  onClockDetail,
  price,
  owner,
  title,
  category,
  data,
}) => {
  const [showBuyNow, setShowBuyNow] = useState<boolean>(false);

  return (
    <div className="nftCollectionCard" key={id}>
      <div
        className="nftCollectionCard__imgSection"
        onMouseMove={() => setShowBuyNow(true)}
        onMouseLeave={() => setShowBuyNow(false)}
        onClick={onClockDetail}
      >
        <div className="nftCollectionCard__imgSection--iconPart">
          <ShareIcon />
        </div>
        <div className="nftCollectionCard__imgSection__imgDiv">
          {imageUrl !== undefined ? (
            <img src={imageUrl} alt="#" />
          ) : (
            <img
              src={Img}
              alt="#"
              className="nftCollectionCard__imgSection__imgDiv--noImage"
            />
          )}
          {showBuyNow ? (
            <span onClick={onClickToken} className="buyNow">
              Buy now
            </span>
          ) : null}
        </div>
      </div>
      <div className="nftCollectionCard__infoSection">
        <div>
          <h4>{data?.title}</h4>
          <p>{price / 1000000000000000000} ETH</p>
        </div>
        <div>
          <div className="nftCollectionCard__infoSection--container_button">
            <div className="nftCollectionCard__infoSection--container_button--button">
              {category?.name}
            </div>
            <div className="nftCollectionCard__infoSection--container_button--button">
              {data?.carat}
            </div>
          </div>
          <div className="nftCollectionCard__infoSection--usd_price">
            (4000) USD
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCollectionCard;
