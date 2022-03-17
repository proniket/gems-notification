import CollectionContainer from "./CollectionContainer";
import ColletctionFillter from "./CollectionFillter";
import CollectTionItems from "./CollectionItems";

const Collection = () => {
  return (
    <div className="collection">
      <CollectionContainer>
        <ColletctionFillter />
        <CollectTionItems />
      </CollectionContainer>
    </div>
  );
};
export default Collection;
