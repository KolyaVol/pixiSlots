import { Application, Assets, Graphics, Sprite } from "pixi.js";
import WheelFactory from "../Wheel/WheelFactory";
import { IWheel } from "../../Types/Types";

export default class Game {
  wheels: Array<IWheel> = [];
  wheelsItems: Array<Array<number>> = [
    [1, 2, 3, 4, 5, 6, 7],
    // [2, 2, 2, 2, 2, 2, 2],
    // [1, 2, 3, 4, 5, 6, 7],
    // [3, 3, 3, 3, 3, 3, 3],
    // [1, 2, 3, 4, 5, 6, 7],
  ];
  #pixiApp: null | Application = null;
  constructor() {}

  async start() {
    this.#pixiApp = new Application();
    await this.#pixiApp.init({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const assets = await Assets.loadBundle("items");

    if (this.#pixiApp) {
      document.body.appendChild(this.#pixiApp.canvas);
    }
    this.createWheels();
    // const cherry = await Assets.load("cherry");
    // const sprite = new Sprite(cherry);
    // this.#pixiApp.stage.addChild(sprite);
    // const gr = new Graphics();
    // gr.rect(100, 100, 100, 100);
    // gr.fill(0xff3300);
    // this.#pixiApp.stage.addChild(gr);

    this.#pixiApp.ticker.add(() => {
      this.wheels.forEach((wheel) => wheel.update());
    });
    this.#pixiApp.ticker.start();
  }

  async createWheels() {
    let wheelFactory: WheelFactory | null = null;
    if (this.#pixiApp) {
      wheelFactory = new WheelFactory(this.#pixiApp, this.wheelsItems);
    }
    const wheelsArr = wheelFactory?.createWheels();
    if (wheelsArr) {
      console.log(wheelsArr);

      this.wheels = wheelsArr;
    }
  }
}
