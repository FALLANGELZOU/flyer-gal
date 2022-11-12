import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { FState, FStore } from './Store/FStore';
import { setPixiManager } from './Store/Stage/StageSlice';
import { PixiManager } from './Core/Pixi/PixiManager';
import { GAME_PLAY } from './Core/Runtime/GamePlay';
import { Perform } from './Components/Perform';
import { logger } from './log/logger';
import axios from "axios"
import { Command } from './Core/Parser/Symbols/Command';
import { analyerScript } from './Core/Parser/Analyzer';
function App() {
  useInit()
  return (
      <div className="App">
        <Perform></Perform>
      </div>
  );
}

async function useInit() {
  logger.info("全局初始化")
  logger.setDebug()
  // 资源链接



  //  测试资源
  axios.get(require("@/test/script.fg")).then(res => {
    const commands = analyerScript(res.data)
    console.log(commands);
  }, err => {
    console.log(err);
    
  })

  
}

export default App;
