import NFTDetailContent from "./NFTDetailContent";
import NFTDetailPriceHistory from "./NFTDetailPriceHistory";

const NFTDetailContainer = () => {
  return (
    <div className="nft__detail__container">
      <NFTDetailContent />
      <NFTDetailPriceHistory />
    </div>
  );
};
export default NFTDetailContainer;
