import { Container } from "pixi.js";
import { IWheel, IWheelView } from "../../Types/Types";

export default class Wheel extends Container implements IWheel {
  view: null | IWheelView = null;
  wheelsItems: Array<Array<number>> = [];
  constructor(view: IWheelView, wheelsItems: Array<Array<number>> = []) {
    super();
    this.wheelsItems = wheelsItems;
    this.view = view;
    this.addChild(this.view);
  }

  async drawWheel() {
    this.wheelsItems.forEach((arr, x) => {
      arr.forEach((el, y) => {
        this.view?.fillCell(el, x * 150, y * 150);
      });
    });
  }
  update() {
    this.y++;
  }
}
