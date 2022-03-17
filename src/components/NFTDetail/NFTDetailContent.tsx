import { useState } from "react";

import { Link } from "react-router-dom";

import Img from "../../assets/home/noImgIcon.svg";
import { ReactComponent as Eterum } from "../../assets/NFTDetail/eterum.svg";
import { ReactComponent as Key } from "../../assets/NFTDetail/key.svg";
import { ReactComponent as Share } from "../../assets/NFTDetail/Share.svg";
import { ReactComponent as Union } from "../../assets/NFTDetail/Union.svg";
import { handleSaleNFT } from "../../utils/buyNft";
import { ETERSCAN } from "../../utils/RoutLinks";
import AnchorElTooltips from "../ReusableComponents/TollTip";

const NFTDetailContent = () => {
  const contentJson: any = localStorage.getItem("itemDetail");
  const content: any = JSON.parse(contentJson);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const tokenAddress =
    content.listing.address.slice(0, 6) +
    "..." +
    content.listing.address.slice(38, 42);
  const tokenId = content.listing.tokenId.slice(0, 13) + "...";

  return (
    <>
      {content !== null && (
        <div className="nftDetailContent">
          <div className="nftDetailContent--image">
            <div className="nftDetailContent--image--header">
              <div className="nftDetailContent--image--header--share">
                <Share />
              </div>
              <div
                className="nftDetailContent--image--header--union"
                onClick={() => setIsOpenModal((modal) => !modal)}
              >
                <Union />
                {isOpenModal ? (
                  <div className="nftDetailContent--image--header--union--modal">
                    <a
                      href={ETERSCAN + content.listing?.contractAddress}
                      target="blank"
                    >
                      View on Etherscan
                    </a>
                    <div onClick={() => window.location.reload()}>Refresh</div>
                  </div>
                ) : null}
              </div>
            </div>
            <img
              className={
                content.listing.imageUrl !== undefined
                  ? ""
                  : "nftDetailContent--image--header--no_image"
              }
              src={
                content.listing.imageUrl !== undefined
                  ? content.listing.imageUrl
                  : Img
              }
              alt="#"
            />
          </div>
          <div className="nftDetailContent--description">
            <div className="nftDetailContent--description--container">
              <div className="nftDetailContent--description--container--genesis">
                {content?.data?.collection}
                <div className="nftDetailContent--description--container--genesis--details">
                  details
                  <div className="nftDetailContent--description--container--genesis--details--modal">
                    <div>
                      <div>
                        <div>Contract Address</div>
                        <div className="nftDetailContent--description--container--genesis--details--modal--token">
                          <a
                            href={ETERSCAN + content.listing?.address}
                            target="blank"
                          >
                            {tokenAddress}
                          </a>
                        </div>
                      </div>
                      <div>
                        <div>Token ID</div>
                        <div className="nftDetailContent--description--container--genesis--details--modal--token">
                          {tokenId}
                        </div>
                      </div>
                      <div>
                        <div>Token Standard</div>
                        <div className="nftDetailContent--description--container--genesis--details--modal--name">
                          {content.listing?.contract_type}
                        </div>
                      </div>
                      <div>
                        <div>Blockchain</div>
                        <div className="nftDetailContent--description--container--genesis--details--modal--name">
                          Ethereum
                        </div>
                      </div>
                      <div>
                        <div>Metadata</div>
                        <div className="nftDetailContent--description--container--genesis--details--modal--name">
                          Centralized
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="nftDetailContent--description--container--name">
                {content?.data?.title}
              </h2>
              <p className="nftDetailContent--description--container--text">
                {content?.listing?.description}
              </p>
              <div className="nftDetailContent--description--container--owner">
                <div className="nftDetailContent--description--container--owner--change_container">
                  <div className="nftDetailContent--description--container--owner--change_container--gem_type">
                    Ruby
                    <AnchorElTooltips title="Gem type" />
                  </div>
                  <div className="nftDetailContent--description--container--owner--ct">
                    {content?.data?.carat}
                  </div>
                </div>
                <Link
                  className="nftDetailContent--description--container--owner--text"
                  to={content?.owner_of}
                >
                  <Key />
                  {content?.listing.owner}
                </Link>
              </div>
            </div>

            <div className="nftDetailContent--description--payment ">
              <div className="nftDetailContent--description--payment--price">
                <div className="nftDetailContent--description--payment--price--eterum">
                  <Eterum />
                  {content?.listing.price / 1000000000000000000}
                  <AnchorElTooltips title="Current Price" />
                </div>
                <div className="nftDetailContent--description--payment--price--usd">
                  ($ 4000)
                </div>
              </div>
              <div className="nftDetailContent--description--payment--buy">
                <button type="button" onClick={() => handleSaleNFT(content)}>
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NFTDetailContent;
