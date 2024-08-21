import { Assets, Container, Graphics, Rectangle, Sprite } from "pixi.js";
import { IWheelView } from "../../Types/Types";

export default class WheelView extends Container implements IWheelView {
  private rootNode: null | Container = null;
  constructor() {
    super();
    this.createNodeStructure();
  }

  private createNodeStructure() {
    const rootNode = new Container();
    this.addChild(rootNode);
    this.rootNode = rootNode;
  }

  async drawItem(itemName: string, offsetY: number) {
    const texture = await Assets.load(itemName);
    const sprite = new Sprite(texture);
    sprite.y = offsetY;
    this.rootNode?.addChild(sprite);
  }

  // async drawCherry() {
  //   const cherry = await Assets.load("cherry");
  //   const sprite = new Sprite(cherry);

  //   this.#rootNode?.addChild(sprite);
  // }

  // async drawDiamond() {
  //   const cherry = await Assets.load("diamond");
  //   const sprite = new Sprite(cherry);

  //   this.#rootNode?.addChild(sprite);
  // }

  // async drawGoldBars() {
  //   const cherry = await Assets.load("goldBars");
  //   const sprite = new Sprite(cherry);
  //   sprite.y = offsetY;
  //   this.#rootNode?.addChild(sprite);
  // }

  // async drawGrape() {
  //   const cherry = await Assets.load("grape");
  //   const sprite = new Sprite(cherry);
  //   sprite.y = offsetY;
  //   this.#rootNode?.addChild(sprite);
  // }

  // async drawLemon() {
  //   const cherry = await Assets.load("lemon");
  //   const sprite = new Sprite(cherry);
  //   sprite.y = offsetY;
  //   this.#rootNode?.addChild(sprite);
  // }

  // async drawWatermelon() {
  //   const cherry = await Assets.load("watermelon");
  //   const sprite = new Sprite(cherry);
  //   sprite.y = offsetY;
  //   this.#rootNode?.addChild(sprite);
  // }

  // async drawWild(offsetY: number) {
  //   const cherry = await Assets.load("wild");
  //   const sprite = new Sprite(cherry);
  //   sprite.y = offsetY;
  //   this.#rootNode?.addChild(sprite);
  // }

  async fillCell(el: number, offsetY: number) {
    switch (el) {
      case 1:
        this.drawItem("cherry", offsetY);
        break;

      case 2:
        this.drawItem("diamond", offsetY);
        break;

      case 3:
        this.drawItem("goldBars", offsetY);
        break;

      case 4:
        this.drawItem("grape", offsetY);
        break;

      case 5:
        this.drawItem("lemon", offsetY);
        break;

      case 6:
        this.drawItem("watermelon", offsetY);
        break;

      case 7:
        this.drawItem("wild", offsetY);
        break;

      default:
        this.drawItem("lemon", offsetY);
        break;
    }
  }
}
