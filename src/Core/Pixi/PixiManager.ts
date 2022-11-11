


import { logger } from '@/log/logger';
import * as PIXI from 'pixi.js';

export class PixiManager {
    public app: PIXI.Application | null = null

    public constructor() {
        this.app = new PIXI.Application({
            backgroundAlpha: 0,
            preserveDrawingBuffer: true
        })
        this.app.renderer.view.style.position = "absolute"
        this.app.renderer.view.style.display = "block";
        this.app.renderer.view.id = "pixiStage"
        // @ts-ignore
        this.app.renderer.autoResize = true;
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
          const pixiContainer = document.getElementById('pixiContianer')
          if (pixiContainer) {
            logger.info("pixi挂载！")
            pixiContainer.innerHTML = ''
            pixiContainer.appendChild(this.app.view)
          }
    }
}