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

  createWheel(x: number) {
    const wheelView = new WheelView();
    const wheel: IWheel = new Wheel(wheelView, this.wheelsItems[x], this.app, x);
    this.app?.stage.addChild(wheel);

    wheel.drawWheel();
    return wheel;
  }

  createWheels() {
    let arr = this.wheelsItems.map((arr, index) => {
      return this.createWheel(index);
    });

    return arr;
  }
}
