import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CollectionAndTypeFilterTypes,
  IMarketplaceState,
  ListingType,
  MarketplaceDataType,
  NFTItem,
  PriceFilterTypes,
  saleType,
} from "./model";

const initialState: IMarketplaceState = {
  loading: false,
  error: "",
  data: [],
  filteredData: [],
  filters: {
    type: [],
    collection: [],
    price: {
      from: null,
      to: null,
    },
    sort: null,
  },
  marketPlaceResultSection: {
    address: "",
    data: [],
  },
  mergedFilters: [],
  nftData: null,
  nftDataAnimation: [],
  detailRout: null,
  Item: null,
  priceHistory: {
    transfers: [],
    transactions: [],
    trades: [],
  },
  sale: [],
};

const marketplaceSlice = createSlice({
  name: "marketplace",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },

    addTypeCollectionFilter: (
      state,
      { payload }: PayloadAction<CollectionAndTypeFilterTypes>
    ) => {
      if (payload.className === "filterByType") {
        const idArr = state.filters.type.map((item) => item.id);
        if (!idArr.includes(payload.id)) {
          state.filters.type = [...state.filters.type, payload];
        } else {
          const index = idArr.indexOf(payload.id);
          state.filters.type.splice(index, 1);
        }
      } else if (payload.className === "filterByCollection") {
        const idArr = state.filters.collection.map((item) => item.id);
        if (!idArr.includes(payload.id)) {
          state.filters.collection = [...state.filters.collection, payload];
        } else {
          const index = idArr.indexOf(payload.id);
          state.filters.collection.splice(index, 1);
        }
      }
    },
    setTypeCollectionDataEmpty: (state, { payload }: PayloadAction<string>) => {
      payload === "filterByType"
        ? (state.filters.type = [])
        : (state.filters.collection = []);
    },
    addTypeCollectionFilterTextContent: (
      state,
      { payload }: PayloadAction<string>
    ) => {
      if (!state.mergedFilters.includes(payload)) {
        state.mergedFilters = [...state.mergedFilters, payload];
      } else {
        const index = state.mergedFilters.indexOf(payload);
        state.mergedFilters.splice(index, 1);
      }
      console.log(state.mergedFilters);
    },

    setPriceFilter: (state, { payload }: PayloadAction<PriceFilterTypes>) => {
      if (
        state.filters.price.to !== payload.to ||
        state.filters.price.from !== payload.from
      ) {
        state.filters.price.from = payload.from;
        state.filters.price.to = payload.to;
      } else {
        state.filters.price.from = null;
        state.filters.price.to = null;
      }
    },
    getMarketplaceDataSuccess: (
      state,
      { payload }: PayloadAction<MarketplaceDataType[]>
    ) => {
      state.data = payload;
    },
    getMarketplaceDataFailure: (state, { payload }: PayloadAction<string>) => {
      state.error = payload;
    },
    getNFT: (state, { payload }: PayloadAction<NFTItem[]>) => {
      const filterData = payload.filter((item, i) => i <= 50);
      state.nftData = filterData;
    },
    getAnimationNFT: (state, { payload }: PayloadAction<NFTItem[]>) => {
      let limitedArr: NFTItem[] = [];
      let animationArr: any = [];
      for (let i = 0, end = payload.length / 3; i < end; ++i) {
        animationArr.push(payload.slice(i * 3, (i + 1) * 3));
      }
      animationArr.forEach((item: any, i: number) => {
        if (i < 7) limitedArr.push(item);
      });
      state.nftDataAnimation = limitedArr;
    },
    getDetailRout: (state, { payload }: PayloadAction<string>) => {
      state.detailRout = localStorage.setItem("item-page-rout", payload);
    },
    getNFTItem: (state, { payload }: PayloadAction<ListingType>) => {
      state.Item = payload;
    },
    getTransfer: (state, { payload }: PayloadAction<any>) => {
      state.priceHistory.transfers = payload;
    },

    getTrades: (state, { payload }: PayloadAction<saleType[]>) => {
      state.priceHistory.trades = payload;
    },
    getTransactions: (state, { payload }: PayloadAction<any>) => {
      state.priceHistory.getTransactions = payload;
    },
    getMarketPlaceAddress: (state, { payload }: PayloadAction<string>) => {
      state.marketPlaceResultSection.address = payload;
    },
    getMarketPlaceResultSectionData: (
      state,
      { payload }: PayloadAction<any>
    ) => {
      state.marketPlaceResultSection.data = payload;
    },
  },
});

export const {
  setLoading,
  addTypeCollectionFilter,
  setTypeCollectionDataEmpty,
  addTypeCollectionFilterTextContent,
  // setEmptyFilteredData,
  setPriceFilter,
  getMarketplaceDataFailure,
  getMarketplaceDataSuccess,
  getNFT,
  getAnimationNFT,
  // filtrateDataByType,
  // filtrateDataByCollection,
  getDetailRout,
  getNFTItem,
  getTransfer,
  getTrades,
  getMarketPlaceAddress,
  getMarketPlaceResultSectionData,
} = marketplaceSlice.actions;

export default marketplaceSlice.reducer;

export const createSelector = (state: IMarketplaceState) => state;
