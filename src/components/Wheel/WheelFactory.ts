import { Application, Graphics } from "pixi.js";
import WheelView from "./WheelView";
import Wheel from "./Wheel";

export default class WheelFactory {
  app: null | Application;
  constructor(app: Application) {
    this.app = app;
  }
  async createWheel() {
    const wheelView = new WheelView();
    await wheelView.drawCherry();
    const wheel = new Wheel(wheelView);
    // const gr = new Graphics();
    // gr.rect(100, 100, 100, 100);
    // gr.fill(0xff3300);
    // this.app?.stage.addChild(gr);
    this.app?.stage.addChild(wheel);
    console.log("wheel");

    return wheel;
  }
}
