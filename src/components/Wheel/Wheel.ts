import { Application, Container } from "pixi.js";
import { IWheel, IWheelView } from "../../Types/Types";

export default class Wheel extends Container implements IWheel {
  currentX: number;
  app: Application | null;
  view: null | IWheelView = null;
  wheelItems: Array<number> = [];
  rndmSpeed: number = Math.random();
  constructor(
    view: IWheelView,
    wheelItems: Array<number> = [],
    app: Application | null,
    currentX: number = 0
  ) {
    super();
    this.app = app;
    this.wheelItems = wheelItems;
    this.view = view;
    this.addChild(this.view);
    this.currentX = currentX;
  }

  drawWheel() {
    this.wheelItems.forEach((el, y) => {
      this.view?.fillCell(el, this.currentX * 150, y * 150);
    });
  }

  updateItemList() {
    this.view?.fillCell(Math.random() * 8, this.currentX, -1 * 150);
    const wheel = this.view?.children[0].children[0];
    wheel?.addChildAt()
    console.log(this.view?.children[0].children[0]);
  }

  update() {
    // this.updateItemList();
    this.y += 1 + 2 * this.rndmSpeed;

    if (this.app) {
      if (this.y > window.innerHeight) {
        this.y = 0;
      }
    }
  }
}
