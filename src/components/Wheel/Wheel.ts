import { Container } from "pixi.js";
import { IWheel, IWheelView } from "../../Types/Types";

export default class Wheel extends Container implements IWheel {
  view: null | IWheelView = null;
  wheelItems: Array<number> = [1, 2, 3, 4, 5, 6, 7];
  constructor(view: IWheelView) {
    super();
    this.view = view;
    this.addChild(this.view);
  }

  async drawWheel() {
    this.wheelItems.forEach((el, i) => {
      this.view?.fillCell(el, i * 150);
    });
  }
  update() {
    this.y++;
  }
}
