import { MouseEventHandler } from "react";

import { IFiltersProps } from "./filters/model";

export type ResultsSectionProps = {
  pageNum: number;
};

export type NFTCollectionCardProps = {
  imageUrl: string;
  price: number;
  likesCount: number;
  owner: string;
  creator: string;
  onDblClick?: MouseEventHandler<HTMLDivElement>;
};

export type SelectedFilterProps = {
  className: string;
  textContent: string;
  id: string;
  displaySize: number;
};

export type SelectedPriceFilterProps = {
  from: number | null;
  to: number | null;
};

export interface ISearchSectionProps extends IFiltersProps {
  typeFilterState: boolean;
  collectionFilterState: boolean;
  priceFilterState: boolean;
  sortFilterState: boolean;
}
