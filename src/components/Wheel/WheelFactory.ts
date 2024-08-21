import { Application, Graphics } from "pixi.js";
import WheelView from "./WheelView";
import Wheel from "./Wheel";
import { IWheel, IWheelFactory } from "../../Types/Types";

export default class WheelFactory implements IWheelFactory {
  app: null | Application;
  constructor(app: Application) {
    this.app = app;
  }
  createWheel() {
    const wheelView = new WheelView();
    const wheel: IWheel = new Wheel(wheelView);
    this.app?.stage.addChild(wheel);
    wheel.drawWheel();
    return wheel;
  }
}
