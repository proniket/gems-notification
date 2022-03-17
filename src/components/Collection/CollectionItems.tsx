import { useMoralis, useMoralisQuery } from "react-moralis";
import { useDispatch } from "react-redux";

import Img from "../../assets/home/noImgIcon.svg";
import {
  getCollectionGemToken,
  getListing,
} from "../../redux/features/dashboard/dashboardSlice";
import { useAppSelector } from "../../redux/hook";
import history from "../../utils/history";

const CollectTionItems = () => {
  const { CollectionFilteredData } = useAppSelector(({ dashboard }) => ({
    CollectionFilteredData: dashboard.filterCategory,
  }));
  const disputch = useDispatch();
  const collectionAllData = useMoralisQuery("Collection");
  const { Moralis } = useMoralis();

  let fixedCollection = CollectionFilteredData[0];

  const handleCollectionGemToken = async (index: number) => {
    const Collection = Moralis.Object.extend("Collection");
    const query = new Moralis.Query(Collection);
    const results: any = await query.find();

    const getCollectionListing = await Moralis.Cloud.run(
      "collectionListings",
      {
        name:
          (await CollectionFilteredData.length) !== 0
            ? fixedCollection[index].attributes.name
            : results[index].attributes.name,
      },
      {
        useMasterKey: true,
      }
    );
    disputch(getCollectionGemToken(getCollectionListing));

    let gemQuery: any =
      (await CollectionFilteredData.length) !== 0
        ? fixedCollection[index].relation("gemtokens")
        : results[index].relation("gemtokens");
    gemQuery = await gemQuery.query();

    let listinfgQuery = await gemQuery.find();

    const listing: any = await listinfgQuery[0].relation("listings");
    let querryLising = listing.query();
    disputch(getListing(querryLising.find()));

    history.push("/marketplace");
  };

  return (
    <div className="collection_items">
      {CollectionFilteredData.length === 0
        ? collectionAllData.data.map(({ attributes }, i: number) => (
            <div
              className="collection_items--items"
              onClick={() => handleCollectionGemToken(i)}
            >
              <div className="collection_items--items--img">
                {attributes.imageUrl !== undefined ? (
                  <img
                    src={attributes?.imageUrl}
                    alt={`${attributes?.imageUrl}`}
                    style={{ borderRadius: "2rem" }}
                  />
                ) : (
                  <img src={Img} alt="#" />
                )}
              </div>
              <div className="collection_items--items--description">
                <div className="collection_items--items--description--title">
                  {attributes.name}
                </div>
                <div className="collection_items--items--description--text">
                  {attributes.description}
                </div>
              </div>
            </div>
          ))
        : CollectionFilteredData[0].map(({ attributes }: any, i: number) => (
            <div
              className="collection_items--items"
              onClick={() => handleCollectionGemToken(i)}
            >
              <div className="collection_items--items--img">
                {attributes.imageUrl !== undefined ? (
                  <img
                    src={attributes.imageUrl}
                    alt={`${attributes.imageUrl}`}
                    style={{ borderRadius: "2rem" }}
                  />
                ) : (
                  <img src={Img} alt="#" />
                )}
              </div>
              <div className="collection_items--items--description">
                <div className="collection_items--items--description--title">
                  {attributes.name}
                </div>
                <div className="collection_items--items--description--text">
                  {attributes.description}
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};
export default CollectTionItems;
