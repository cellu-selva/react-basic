import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: ""
}

export const C2PSlice = createSlice({
    name: "C2PSlice",
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        }
    }
});

export const {setName} = C2PSlice.actions;

export default C2PSlice.reducer;