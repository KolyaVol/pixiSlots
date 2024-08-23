import { Assets, Container, Graphics, Rectangle, Sprite } from "pixi.js";
import { IWheelView } from "../../Types/Types";

export default class WheelView extends Container implements IWheelView {
  private rootNode: null | Container = null;
  itemSize = 150;
  constructor() {
    super();
    if (window.innerWidth > window.innerHeight) {
      this.itemSize = window.innerHeight / 6;
    } else {
      this.itemSize = window.innerWidth / 5;
    }

    this.createNodeStructure();
  }

  private createNodeStructure() {
    const rootNode = new Container();
    this.addChild(rootNode);
    this.rootNode = rootNode;
  }

  async drawItem(itemName: string, offsetX: number, offsetY: number) {
    const texture = await Assets.load(itemName);
    const sprite = new Sprite(texture);
    sprite.width = this.itemSize;
    sprite.height = this.itemSize;
    sprite.x = offsetX;
    sprite.y = offsetY;

    this.rootNode?.addChildAt(sprite, 0);
  }

  async fillCell(el: number = 1, offsetX: number = 0, offsetY: number = 0) {
    switch (el) {
      case 1:
        this.drawItem("cherry", offsetX, offsetY);
        break;

      case 2:
        this.drawItem("grape", offsetX, offsetY);
        break;

      case 3:
        this.drawItem("lemon", offsetX, offsetY);
        break;

      case 4:
        this.drawItem("watermelon", offsetX, offsetY);
        break;

      case 5:
        this.drawItem("goldBars", offsetX, offsetY);
        break;

      case 6:
        this.drawItem("diamond", offsetX, offsetY);
        break;

      case 7:
        this.drawItem("wild", offsetX, offsetY);
        break;

      default:
        this.drawItem("lemon", offsetX, offsetY);
        break;
    }
  }
}
