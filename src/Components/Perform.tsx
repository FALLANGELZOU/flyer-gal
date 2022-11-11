import { FC } from 'react';
import { useSelector } from 'react-redux';
import { FState } from '../Store/FStore';

//  背景组件
export const Perform: FC = () => {
    const stageState = useSelector((state: FState) => state.stage)
    
    return (
        <div>
        <div id="videoContainer" />
        <div id="introContainer" />
        <div id="pixiContianer" />
        <div id="chooseContainer" />
      </div>
    )
}