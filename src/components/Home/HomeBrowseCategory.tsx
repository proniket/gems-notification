import { FC } from "react";

import { useMoralisWeb3Api } from "react-moralis";
import { useDispatch } from "react-redux";

import Img from "../../assets/home/noImgIcon.svg";
import { getMarketPlaceResultSectionData } from "../../redux/features/marketplace/marketplaceSlice";
import history from "../../utils/history";
const HomeBrowseCategory: FC<any> = ({ attributes }) => {
  const Web3 = useMoralisWeb3Api();
  const disputch = useDispatch();
  const handleCollectionNft = (nft: string) => {
    history.push("marketplace");
    const getMarketplaceNft = Web3.account.getNFTs({
      address: nft,
    });
    getMarketplaceNft.then((res) =>
      disputch(getMarketPlaceResultSectionData(res.result))
    );
  };
  return (
    <div
      className="homeBrowseCategory"
      onClick={() => handleCollectionNft(attributes?.receiver)}
    >
      <h3>{attributes?.name} </h3>
      {attributes.imageUrl !== null ? (
        <img
          src={attributes.imageUrl}
          alt="#"
          className="homeBrowseCategory--request_img"
        />
      ) : (
        <img src={Img} alt="#" />
      )}

      {/* <p>{attributes?.collection}</p> */}
    </div>
  );
};
export default HomeBrowseCategory;
