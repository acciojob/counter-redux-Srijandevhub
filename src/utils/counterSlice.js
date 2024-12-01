import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increamentCounter: (state) => state + 1,
        decreaseCounter: (state) => state - 1
    }
});

export const { increamentCounter, decreaseCounter } = counterSlice.actions;
export default counterSlice.reducer;