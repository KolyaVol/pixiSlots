import { Container } from "pixi.js";

export interface IWheelView extends Container {
  drawItem(itemName: string, offsetY: number): void;
  fillCell(el: number, offsetY: number): void;
}

export interface IWheel extends Container {
  drawWheel(): void;
  update(): void;
}

export interface IWheelFactory {
  createWheel(): IWheel;
}
