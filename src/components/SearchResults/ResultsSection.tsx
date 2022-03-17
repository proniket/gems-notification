import { ChangeEvent, FC, useCallback, useEffect, useState } from "react";

import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import { useDispatch } from "react-redux";
import { v4 as uuid_v4 } from "uuid";

import {
  getDetailRout,
  getNFTItem,
} from "../../redux/features/marketplace/marketplaceSlice";
import { useAppSelector } from "../../redux/hook";
import { handleSaleNFT } from "../../utils/buyNft";
import history from "../../utils/history";

import { ResultsSectionProps } from "./model";
import NFTCollectionCard from "./NFTCollectionCard";

const ResultsSection: FC<ResultsSectionProps> = () => {
  const dispuch = useDispatch();
  const Web3 = useMoralisWeb3Api();
  const { Moralis } = useMoralis();

  const { CollectionFilteredData } = useAppSelector(({ dashboard }) => ({
    CollectionFilteredData: dashboard.getCollectionGemToken,
  }));

  const [allListings, setAllListings]: any = useState(null);

  const handleNFTDetail = (e: ChangeEvent<HTMLInputElement>, pathname: any) => {
    if (e.target.className !== "buyNow") {
      const itempageRout =
        "/item_page/" +
        pathname.listing.address +
        "/" +
        pathname.listing.tokenId;
      dispuch(getDetailRout(itempageRout));
      dispuch(getNFTItem(pathname));

      Web3.account
        .getNFTTransfers({
          address: pathname.listing.address,
        })
        .then((res) => res);
      Web3.token
        .getWalletTokenIdTransfers({
          address: pathname.listing.address,
          token_id: pathname.listing.tokenId,
        })
        .then((res) => {
          localStorage.setItem("transfer", JSON.stringify(res.result));
        });

      Web3.token
        .getNFTTrades({
          address: pathname.listing.address,
        })
        .then((res) => localStorage.setItem("trades", JSON.stringify(res)));

      localStorage.setItem("itemDetail", JSON.stringify(pathname));

      history.push(itempageRout);
    }
  };

  const handleAllListing = useCallback(async () => {
    try {
      const allListings = await Moralis.Cloud.run(
        "allListings",
        {},
        {
          useMasterKey: true,
        }
      );
      console.log(allListings, " allListings ---------------------------------");
      setAllListings(allListings);
    } catch(e) {
      console.error(`allListings cloud function error: ${e}`);
    }
  }, [Moralis]);

  useEffect(() => { handleAllListing() }, []);

  return (
    <div className="searchResult__openCollection__results">
      {CollectionFilteredData.length === 0
        ? allListings !== null &&
          allListings.map((item: any) => (
            <NFTCollectionCard
              onClockDetail={(e: ChangeEvent<HTMLInputElement>) =>
                handleNFTDetail(e, {
                  listing: item.listing,
                  data: item.data,
                })
              }
              onClickToken={() => handleSaleNFT(item)}
              id={() => uuid_v4()}
              {...item.listing}
              category={item.category}
              data={item.data}
            />
          ))
        : CollectionFilteredData !== null &&
          CollectionFilteredData.map((item: any) => (
            <NFTCollectionCard
              onClockDetail={(e: ChangeEvent<HTMLInputElement>) =>
                handleNFTDetail(e, item)
              }
              onClickToken={() => handleSaleNFT(item)}
              id={() => uuid_v4()}
              {...item.listing}
              category={item.category}
              data={item.data}
            />
          ))}
    </div>
  );
};

export default ResultsSection;
