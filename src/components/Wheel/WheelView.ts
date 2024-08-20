import { Assets, Container, Graphics, Rectangle, Sprite } from "pixi.js";

export default class WheelView extends Container {
  #rootNode: null | Container = null;
  constructor() {
    super();
    this.#createNodeStructure();
  }

  #createNodeStructure() {
    const rootNode = new Container();
    this.addChild(rootNode);
    this.#rootNode = rootNode;
    console.log("node structure");
  }

  async drawCherry() {
    const cherry = await Assets.load("cherry");
    const sprite = new Sprite(cherry);
    sprite.scale.x = 2;
    sprite.scale.y = 2;
    this.#rootNode?.addChild(sprite);

    console.log("cherry");
  }
}
