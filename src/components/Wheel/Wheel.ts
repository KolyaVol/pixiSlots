import { Container } from "pixi.js";

export default class Wheel extends Container {
  view: null | Container = null;
  constructor(view: Container) {
    super();
    this.view = view;
    this.addChild(this.view);
  }
}
    