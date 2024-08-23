import { Assets } from "pixi.js";
import Game from "./components/Game/Game";
import "./style.css";

Assets.addBundle("items", {
  cherry: "/cherry.png",
  grape: "/grape.png",
  lemon: "/lemon.png",
  watermelon: "/watermelon.png",
  goldBars: "/goldBars.png",
  diamond: "/diamond.png",
  wild: "/wild.png",
});

const game = new Game();
game.start();
