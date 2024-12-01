import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increamentCounter: (state) => {
            return state + 1;
        },
        decreaseCounter: (state) => {
            return state > 0 ? state - 1 : 0;
        }
    }
});

export const { increamentCounter, decreaseCounter } = counterSlice.actions;
export default counterSlice.reducer;