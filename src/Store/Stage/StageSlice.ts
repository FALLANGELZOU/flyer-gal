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
    isDisableDialog: false
}
const StageSlice = createSlice({
    name: "stage",
    initialState: init,
    reducers: {
        setbackground: (state, action) => {
            state.bgName = action.payload.bgName
        }
    }
})

export default StageSlice.reducer
export const { setbackground } = StageSlice.actions