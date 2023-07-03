import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryValue: "",
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryValue: (state, action) => {
      state.categoryValue = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setCategoryValue, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
