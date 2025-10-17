import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'counter',
    initialState : {
        Value: 0,
    },
    reducers : {
        increment : (state) => {
            state.Value += 1;
        },
        decrement : (state) => {
            state.Value -= 1;
        },
        reset : (state) => {
            state.Value += 0;
        },
    },

});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;