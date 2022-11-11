import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { FState, FStore } from './Store/FStore';
import { setPixiManager } from './Store/Stage/StageSlice';
import { PixiManager } from './Core/Pixi/PixiManager';
import { GAME_PLAY } from './Core/Runtime/GamePlay';
import { Perform } from './Components/Perform';
import { logger } from './log/logger';

function App() {
  useInit()
  return (
      <div className="App">
        <Perform></Perform>
      </div>
  );
}

function useInit() {
  logger.info("init")
  //GAME_PLAY.pixiManager = new PixiManager()
}

export default App;
