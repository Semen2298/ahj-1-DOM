import "./css/style.css";

import Game from "./js/Game";

import hammerCursor from './img/hammer.png';

const game = new Game();
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");

btnStart.addEventListener("click", () => {
    game.startGame();
})
btnStop.addEventListener("click", () => {
    game.stopGame();
})

document.querySelectorAll('.field-item').forEach(el => {
  el.style.cursor = `url(${hammerCursor}) 16 16, pointer`;
});