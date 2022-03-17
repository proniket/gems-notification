import {
  MoralisContextValue,
  useMoralis,
  useMoralisQuery,
} from "react-moralis";
import { useDispatch } from "react-redux";

import { getFilterCategory } from "../../redux/features/dashboard/dashboardSlice";

const ColletctionFillter = () => {
  const dispatch = useDispatch();
  const cotegory: any = useMoralisQuery("Category");
  const { Moralis }: MoralisContextValue = useMoralis();
  const allCollection = useMoralisQuery("Collection");

  const MoralisCategoryGetCollection = async (index: number) => {
    const Collection = Moralis.Object.extend("Category");
    const query = new Moralis.Query(Collection);
    const results = await query.find();

    let gemQuery: any = await results[index].relation("collections");
    gemQuery = await gemQuery.query();
    gemQuery.find().then((res: any) => dispatch(getFilterCategory(res)));
  };

  return (
    <div className="collection_fillter">
      <h2 className="collection_fillter--title">Collections</h2>
      <div className="collection_fillter--items_container">
        <div
          className="collection_fillter--items_container--items"
          onClick={() => dispatch(getFilterCategory(allCollection.data))}
        >
          All
        </div>
        {cotegory.data.map(({ attributes }: any, i: number) => (
          <div
            className="collection_fillter--items_container--items"
            onClick={() => MoralisCategoryGetCollection(i)}
          >
            {attributes.name}
          </div>
        ))}
      </div>
    </div>
  );
};
export default ColletctionFillter;
