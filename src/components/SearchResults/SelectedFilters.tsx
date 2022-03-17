import { useState } from "react";


import { shallowEqual,} from "react-redux";

import { ReactComponent as CollectionFilterIcon } from "../../assets/searchResult/collectionFilter.svg";
import { ReactComponent as PriceFilterIcon } from "../../assets/searchResult/priceFilter.svg";
import { ReactComponent as TypeFilterIcon } from "../../assets/searchResult/typefilter.svg";
import { useAppSelector } from "../../redux/hook";

import SelectedFilter from "./SelectedFilter";
import SelectedPriceFilter from "./SelectedPriceFilter";

const SelectedFilters = () => {
  const [displaySize, setDisplaySize] = useState(window.innerWidth);
  window.addEventListener(
    "resize",
    () => setDisplaySize(window.innerWidth),
    false
  );
 
  const { typeFilterState, collectionFilterState, priceFilterState } =
    useAppSelector(
      ({ marketplaceData }) => ({
        typeFilterState: marketplaceData.filters.type,
        collectionFilterState: marketplaceData.filters.collection,
        priceFilterState: marketplaceData.filters.price,
      }),
      shallowEqual
    );

  return (
    <div className="searchResult__searchSection__selectedFilters">
      {displaySize <= 672 && typeFilterState.length >= 2 ? (
        <SelectedFilter
          className={typeFilterState[0].className}
          textContent={`${typeFilterState.length} types`}
          id={""}
          displaySize={displaySize}
        >
          <TypeFilterIcon />
        </SelectedFilter>
      ) : (
        typeFilterState.map(({ className, textContent, id }) => (
          <SelectedFilter
            className={className}
            textContent={textContent}
            key={id}
            id={id}
            displaySize={displaySize}
          >
            <TypeFilterIcon />
          </SelectedFilter>
        ))
      )}
      {displaySize <= 672 && collectionFilterState.length >= 2 ? (
        <SelectedFilter
          className={collectionFilterState[0].className}
          textContent={`${collectionFilterState.length} colle...`}
          id={""}
          displaySize={displaySize}
        >
          <CollectionFilterIcon />
        </SelectedFilter>
      ) : (
        collectionFilterState.map(({ className, textContent, id }) => (
          <SelectedFilter
            className={className}
            textContent={textContent}
            key={id}
            id={id}
            displaySize={displaySize}
          >
            <CollectionFilterIcon />
          </SelectedFilter>
        ))
      )}
      {priceFilterState.from !== null ? (
        <SelectedPriceFilter
          from={priceFilterState.from}
          to={priceFilterState.to}
        >
          <PriceFilterIcon className="searchResult__searchSection__selectedFilters--priceFilterIcon" />
        </SelectedPriceFilter>
      ) : null}
    </div>
  );
};

export default SelectedFilters;
