import { PixiManager } from '../Core/Pixi/PixiManager';
import { GAME_PLAY } from '../Core/Runtime/GamePlay';
import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { FState } from '../Store/FStore';

//  背景组件
export const Perform: FC = () => {
    useEffect(() => {
      GAME_PLAY.pixiManager = new PixiManager()
    }, []);
    
    return (
        <div>
        <div id="videoContainer" />
        <div id="introContainer" />
        <div id="pixiContianer" />
        <div id="chooseContainer" />
      </div>
    )
}