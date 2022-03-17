import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import blogSlice from "./features/blog/blogSlice";
import createReducer from "./features/create/createSlice";
import dashboardSlice from "./features/dashboard/dashboardSlice";
import faqSlice from "./features/faq/faqSlice";
import homeReducer from "./features/home/homeSlice";
import marketplaceReducer from "./features/marketplace/marketplaceSlice";
import walletReducer from "./features/wallet/walletSlice";

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
  reducer: {
    homeData: homeReducer,
    createData: createReducer,
    walletData: walletReducer,
    marketplaceData: marketplaceReducer,
    faq: faqSlice,
    dashboard: dashboardSlice,
    blog: blogSlice,
  },
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
