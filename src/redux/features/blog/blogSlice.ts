import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AppThunk } from "../../store";

import { getBlock } from "./../../../api/api";
import { BlogState, IBlogState } from "./model";

const initialState: IBlogState = {
  data: null,
  loading: false,
};
const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.loading = payload;
    },
    getBlogs: (state, { payload }: PayloadAction<BlogState>) => {
      state.data = payload;
    },
  },
});

export const getHandleBlog = (): AppThunk => async (dispatch) => {
  setLoading(true);
  try {
    const res = await getBlock();
    dispatch(getBlogs(res.data));
  } catch (error) {
    alert(error);
  }
};
export const { getBlogs, setLoading } = blogSlice.actions;
export default blogSlice.reducer;
export const blogSliceSelector = (state: IBlogState) => state;
