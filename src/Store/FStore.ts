import { configureStore } from "@reduxjs/toolkit";
import stageReducer from "./Stage/StageSlice"

export const FStore = configureStore({
    reducer: {
        stage: stageReducer
    }
})
export type FState = ReturnType<typeof FStore.getState>
