import { createSlice } from "@reduxjs/toolkit";
import { IStage } from "./IStage";

const init: IStage = {
    bgName: "",
    figNameMid: "",
    figNameLeft: "",
    figNameRight: "",
    text: "",
    name: "",
    vocal: "",
    bgm: "",
    miniAvatar: "",
    isDisableDialog: false,
    currentPixiManager: null
}
const StageSlice = createSlice({
    name: "stage",
    initialState: init,
    reducers: {
        setbackground: (state, action) => {
            state.bgName = action.payload.bgName
        },
        setPixiManager: (state, action) => {
            state.currentPixiManager = action.payload.pixiManager
        }
    }
})

export default StageSlice.reducer
export const { setbackground, setPixiManager } = StageSlice.actions