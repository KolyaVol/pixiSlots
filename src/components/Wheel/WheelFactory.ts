import { Application, Graphics } from "pixi.js";
import WheelView from "./WheelView";
import Wheel from "./Wheel";
import { IWheel, IWheelFactory } from "../../Types/Types";

export default class WheelFactory implements IWheelFactory {
  app: null | Application;
  wheelsItems: Array<Array<number>> = [];
  constructor(app: Application, wheelsItems: Array<Array<number>>) {
    this.app = app;
    this.wheelsItems = wheelsItems;
  }
  createWheel() {
    const wheelView = new WheelView();
    const wheel: IWheel = new Wheel(wheelView, this.wheelsItems);
    this.app?.stage.addChild(wheel);
    wheel.drawWheel();
    return wheel;
  }
}
