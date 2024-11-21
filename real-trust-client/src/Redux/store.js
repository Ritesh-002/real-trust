import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/authSlice.js";
import projectSliceReducer from "./Slices/projectSlice.js";
const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        project: projectSliceReducer,
    },
    devTools: true,
})

export default store;