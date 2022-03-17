import { FC } from "react";

import { useDispatch } from "react-redux";

import { ReactComponent as CloseIcon } from "../../assets/searchResult/close.svg";
import {
  addTypeCollectionFilter,
  setTypeCollectionDataEmpty,
} from "../../redux/features/marketplace/marketplaceSlice";

import { SelectedFilterProps } from "./model";

const SelectedFilter: FC<SelectedFilterProps> = ({
  className,
  textContent,
  children,
  displaySize,
  id,
}) => {
  const dispatch = useDispatch();

  const handleRemoveFilter = () => {
    if (displaySize < 672) {
      dispatch(setTypeCollectionDataEmpty(className));
    } else {
      dispatch(
        addTypeCollectionFilter({
          className: className,
          textContent: textContent,
          id: id,
        })
      );
    }
  };
  return (
    <div className="searchResult__searchSection__selectedFilters--selectedFilter">
      <div>
        {children}
        <p>{textContent}</p>
      </div>
      <CloseIcon onClick={handleRemoveFilter} />
    </div>
  );
};

export default SelectedFilter;
