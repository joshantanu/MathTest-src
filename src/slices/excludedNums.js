import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nums: [],
};

const excludedNums = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addNum: (state, action) => {
      state.nums.push({ id: Date.now(), num: action.payload });
    },
    deleteNum: (state, action) => {
      state.nums = state.nums.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addNum, deleteNum } = excludedNums.actions;

export default excludedNums.reducer;