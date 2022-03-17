import {
  FC,
  //  useEffect, useMemo
} from "react";

import {
  shallowEqual,
  //  useDispatch
} from "react-redux";

import SearchIcon from "../../assets/home/SearchIcon";
// import {
//   filtrateDataByType,
//   setEmptyFilteredData,
// } from "../../redux/features/marketplace/marketplaceSlice";
// import { MarketplaceDataType } from "../../redux/features/marketplace/model";
import { useAppSelector } from "../../redux/hook";

import FilterByCollection from "./filters/FilterByCollection";
import FilterByPrice from "./filters/FilterByPrice";
import FilterByType from "./filters/FilterByType";
import SortByPrice from "./filters/SortByPrice";
import { ISearchSectionProps } from "./model";
import SelectedFilters from "./SelectedFilters";

const SearchSection: FC<ISearchSectionProps> = ({
  collectionFilterState,
  setCollectionFilterState,
  priceFilterState,
  setPriceFilterState,
  sortFilterState,
  setSortFilterState,
  typeFilterState,
  setTypeFilterState,
}) => {
  // const dispatch = useDispatch();

  const {
    filtersData,
    //  data,
    // mergedFilters
  } = useAppSelector(
    ({ marketplaceData }) => ({
      filtersData: marketplaceData.filters,
      // data: marketplaceData.data,
      filteredTypes: marketplaceData.filters.type,
      filteredCollections: marketplaceData.filters.collection,
      filteredData: marketplaceData.filteredData,
      // mergedFilters: marketplaceData.mergedFilters,
    }),
    shallowEqual
  );

  // const dispatchArr: MarketplaceDataType[] = useMemo(() => [], []);

  // useEffect(() => {
  //   dispatch(setEmptyFilteredData());
  //   mergedFilters.map((item) =>
  //     data.map((i) =>
  //       Object.values(i).includes(item.toLowerCase())
  //         ? dispatchArr.push(i)
  //         : null
  //     )
  //   );
  //   dispatch(filtrateDataByType(dispatchArr));
  // }, [data, mergedFilters, dispatch, dispatchArr]);

  return (
    <div className="searchResult__searchSection">
      {/* <div className="searchResult__searchSection__borderWrap"> */}
      <div className="searchResult__searchSection__upperPart">
        <div className="searchResult__searchSection__upperPart__searchPart">
          <SearchIcon color="#C4C4C4" />
          <input type="text" placeholder="Enter your search terms here" />
        </div>
        <div className="searchResult__searchSection__upperPart__filters">
          <FilterByType
            setCollectionFilterState={setCollectionFilterState}
            setPriceFilterState={setPriceFilterState}
            setSortFilterState={setSortFilterState}
            setTypeFilterState={setTypeFilterState}
            typeFilterState={typeFilterState}
          />

          <FilterByCollection
            collectionFilterState={collectionFilterState}
            setCollectionFilterState={setCollectionFilterState}
            setPriceFilterState={setPriceFilterState}
            setSortFilterState={setSortFilterState}
            setTypeFilterState={setTypeFilterState}
          />

          <FilterByPrice
            priceFilterState={priceFilterState}
            setCollectionFilterState={setCollectionFilterState}
            setPriceFilterState={setPriceFilterState}
            setSortFilterState={setSortFilterState}
            setTypeFilterState={setTypeFilterState}
          />
        </div>
        <SortByPrice
          setCollectionFilterState={setCollectionFilterState}
          setPriceFilterState={setPriceFilterState}
          setSortFilterState={setSortFilterState}
          setTypeFilterState={setTypeFilterState}
          sortFilterState={sortFilterState}
        />
      </div>
      {/* </div> */}
      {filtersData.collection.length === 0 &&
      filtersData.type.length === 0 &&
      filtersData.price.to === null &&
      filtersData.sort === null ? null : (
        <SelectedFilters />
      )}
    </div>
  );
};

export default SearchSection;
