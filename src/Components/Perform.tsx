import { PixiManager } from '../Core/Pixi/PixiManager';
import { GAME_PLAY } from '../Core/Runtime/GamePlay';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FState } from '../Store/FStore';
import { Dialog } from './Dialog';
import "@/Components/sass/Perform.sass"
//  背景组件
export const Perform: FC = () => {
    useEffect(() => {
      GAME_PLAY.pixiManager = new PixiManager()
      GAME_PLAY.pixiManager.setBackground(require("../Resources/p1.png"))
    }, []);
    
    return (
        <div>
        <div id="videoContainer" />
        <div id="pixiContianer" />
        <div id="chooseContainer" />
        <div id="dialogContainer">
          <Dialog option={{
            name: "Alice",
            message: "如果你掉进了黑暗里，你能做的，不过是静心等待，直到你的双眼适应黑暗。每个人都有属于自己的一片森林，也许我们 从来不曾去过，但它一直在那里，总会在那里。迷失的人迷失了，相逢的人会再相逢。",
            speed: 10
          }}></Dialog>
        </div>
      </div>
    )
}