import { FC } from "react";

import { ReactComponent as CloseIcon } from "../../../assets/create/closeIcon.svg";
import { ReactComponent as SortFilterIcon } from "../../../assets/searchResult/sort.svg";

import { ISortPriceProps } from "./model";
import { sortFakeData } from "./sortFakeData";

const SortByPrice: FC<ISortPriceProps> = ({
  sortFilterState,
  setCollectionFilterState,
  setPriceFilterState,
  setSortFilterState,
  setTypeFilterState,
}) => {
  const handleOpenSortPrice = () => {
    setTypeFilterState(false);
    setCollectionFilterState(false);
    setPriceFilterState(false);
    setSortFilterState(!sortFilterState);
  };

  return (
    <>
      {sortFilterState ? <div className="sortByPrice__blur"></div> : null}
      <div className="sortByPrice">
        <div onClick={handleOpenSortPrice}>
          <SortFilterIcon />
        </div>
        {sortFilterState ? (
          <div
            onClick={(e: any) => {
              console.dir(e.target.id);
              console.log(e.target.parentElement.parentElement.className);
            }}
          >
            <div className="sortByPrice__media">
              <SortFilterIcon />
              <p>Filters</p>
              <div
                className="sortByPrice__media__closeIcon"
                onClick={() => {
                  setSortFilterState(!sortFilterState);
                }}
              >
                <CloseIcon />
              </div>
            </div>
            {sortFakeData.map(({ id, text, img }) => (
              <div id={`${id}`} key={id}>
                {text}
                {img ? <img src={img} alt="/" /> : null}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SortByPrice;
