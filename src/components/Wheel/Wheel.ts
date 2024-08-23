import { Application, Container } from "pixi.js";
import { IWheel, IWheelView } from "../../Types/Types";

export default class Wheel extends Container implements IWheel {
  currentX: number;
  app: Application | null;
  view: null | IWheelView = null;
  wheelItems: Array<number> = [];
  rndmSpeed: number = Math.random();
  timer = 0;
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
    for (let i = this.wheelItems.length - 1; i >= 0; i--) {
      this.view?.fillCell(this.wheelItems[i], this.currentX * 150, i * 150);
    }
  }

  updateItemList() {
    console.log(333333);

    this.removeBottomItem();
    this.addItemOnTop();

    // this.view?.fillCell(Math.random() * 8, this.currentX, -1 * 150);
    // const wheel = this.view?.children[0].children[0];
    // // wheel?.addChildAt()
    // console.log(this.view?.children[0].children[0]);
  }

  addItemOnTop() {
    if (this.wheelItems.length < 7) {
      while (this.wheelItems.length < 7) {
        this.wheelItems.unshift(this.generateRndItemNum());
        this.view?.fillCell(this.wheelItems[0], this.x, -this.view.y);
      }
    }
  }

  removeBottomItem() {
    this.wheelItems.pop();
    this.view?.children[0].children[
      this.view?.children[0].children.length - 1
    ].destroy();
  }

  generateRndItemNum() {
    const rnd = Math.random();
    let res = 1;
    if (rnd > 0.8) {
    } else if (rnd < 0.8 && rnd >= 0.6) {
      res = 2;
    } else if (rnd < 0.6 && rnd >= 0.4) {
      res = 3;
    } else if (rnd < 0.4 && rnd >= 0.2) {
      res = 4;
    } else if (rnd < 0.2 && rnd >= 0.1) {
      res = 5;
    } else if (rnd < 0.1 && rnd >= 0.05) {
      res = 6;
    } else if (rnd < 0.05) {
      res = 7;
    }
    return res;
  }

  update() {
    // this.timer++;

    // if (this.timer > 100) {
    //   this.updateItemList();
    //   this.timer = 0;
    // }
    // console.log(this.view?.height);

    if (this.view) {
      this.view.y += 10 + 2 * this.rndmSpeed;

      console.log(this.view.children[0].children[0].getGlobalPosition().y);

      if (
        this.view.children[0].children[0].getGlobalPosition().y >
        this.view.itemSize
      ) {
        this.updateItemList();
      }

      // if (Math.floor(this.view.y % this.view.itemSize) <= 1) {
      // }
      // console.log(this.view.getGlobalPosition());
    }

    if (this.app) {
      if (this.y > window.innerHeight) {
        this.y = 0;
      }
    }
  }
}
