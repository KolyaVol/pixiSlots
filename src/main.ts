import { Assets } from "pixi.js";
import Game from "./components/Game/Game";
import "./style.css";

Assets.addBundle("items", {
  cherry: "/cherry.png",
  diamond: "/diamond.png",
  goldBars: "/goldBars.png",
  grape: "/grape.png",
  lemon: "/lemon.png",
  watermelon: "/watermelon.png",
  wild: "/wild.png",
});

const game = new Game();
game.start();
