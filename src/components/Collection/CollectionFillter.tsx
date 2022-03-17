import {
  MoralisContextValue,
  useMoralis,
  useMoralisQuery,
} from "react-moralis";
import { useDispatch } from "react-redux";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getFilterCategory } from "../../redux/features/dashboard/dashboardSlice";
toast.configure();





const ColletctionFillter = () => {
  const notify = () => {
    // toast("Hi I'm React Toastify !");
    // inbuilt-notification
      toast.success("Hi I'm React Toastify !")
  };
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
      <h2 className="collection_fillter--title" onClick={notify}>Collections</h2>
      {/* <ToastContainer /> */}
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



// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
