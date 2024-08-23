import { Application, Container } from "pixi.js";

export interface IWheelView extends Container {
  drawItem(itemName: string, offsetX: number, offsetY: number): void;
  fillCell(el: number, offsetX: number, offsetY: number): void;
}

export interface IWheel extends Container {
  rndmSpeed: number;
  drawWheel(): void;
  update(): void;
}

export interface IWheelFactory {
  app: null | Application;
  wheelsItems: Array<Array<number>>;

  createWheel(x: number): IWheel;
  createWheels(): Array<IWheel>;
}
