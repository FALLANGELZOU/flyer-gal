import { PixiManager } from "@/Core/Pixi/PixiManager";

export interface IStage {
    bgName: string; // 背景文件地址（相对或绝对）
    figNameMid: string; // 立绘_中 文件地址（相对或绝对）
    figNameLeft: string; // 立绘_左 文件地址（相对或绝对）
    figNameRight: string; // 立绘_右 文件地址（相对或绝对）
    text: string; // 文字
    name: string; // 人物名
    vocal: string; // 语音 文件地址（相对或绝对）
    bgm: string; // 背景音乐 文件地址（相对或绝对）
    miniAvatar: string; // 小头像 文件地址（相对或绝对）
    isDisableDialog: boolean;  //  是否不显示Dialog
    currentPixiManager: PixiManager | null
}