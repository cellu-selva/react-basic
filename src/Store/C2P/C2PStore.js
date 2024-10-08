import { configureStore } from "@reduxjs/toolkit";
import C2PReducer from "./C2PSlice";

export const C2PStore = configureStore({
    reducer: {
        C2P: C2PReducer
    }
})
