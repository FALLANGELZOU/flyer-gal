


import { logger } from '@/log/logger';
import * as PIXI from 'pixi.js';
/**
 * 控制Stage的画面
 */

interface IBackground {
  key: string;
  pixiSprite: PIXI.Sprite;
  url: string;
  startRegisterTime: Date;
}

export class PixiManager {
    public app: PIXI.Application
    private loader: PIXI.Loader
    private backgroundContainer: PIXI.Container
    private backgroundList: Array<IBackground> = []

    public constructor() {
      this.loader = new PIXI.Loader()
      this.backgroundContainer = new PIXI.Container()
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

      // 背景容器
      this.app.stage.addChild(this.backgroundContainer)


      if (pixiContainer) {
        logger.info("pixi挂载！")
        pixiContainer.innerHTML = ''
        pixiContainer.appendChild(this.app.view)
      }
      window.addEventListener("resize", () => {
        this.app?.renderer.resize(window.innerWidth, window.innerHeight);  
        logger.info("pixi重适配！")
      })
    }

    public setBackground(url: string) {
      const index = this.backgroundList.findIndex( (e) => e.url == url)
      if (index >= 0) {
        this.backgroundContainer.removeChild(this.backgroundList[index].pixiSprite)
        this.backgroundList.splice(index, 0)
        const texture = this.loader.resources[url].texture!
        const bgSprite = this.getBackgroundSprite(texture)
        this.backgroundList.push({
          key: url,
          pixiSprite: bgSprite,
          url: url,
          startRegisterTime: new Date()
        })
        this.backgroundContainer.addChild(bgSprite)
        return
      }

      this.loader.add(url).load(() => {
        logger.debug("图片加载完成")
        const texture = this.loader.resources[url].texture!
        const bgSprite = this.getBackgroundSprite(texture)
        this.backgroundList.push({
          key: url,
          pixiSprite: bgSprite,
          url: url,
          startRegisterTime: new Date()
        })
        this.backgroundContainer.addChild(bgSprite)
      
      })
    } 

    private getBackgroundSprite(texture: PIXI.Texture) {
      const originalWidth = texture.width;
      const originalHeight = texture.height;
      const scaleX = window.innerWidth / originalWidth;
      const scaleY = window.innerHeight / originalHeight;
      const targetScale = Math.max(scaleX, scaleY);
      const bgSprite = new PIXI.Sprite(texture);
      bgSprite.scale.x = targetScale;
      bgSprite.scale.y = targetScale;
      bgSprite.anchor.set(0.5);
      bgSprite.position.x = window.innerWidth / 2;
      bgSprite.position.y = window.innerHeight / 2;
      return bgSprite
    }
}