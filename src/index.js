import "./css/style.css";

import Game from "./js/Game";

const game = new Game();
const btnStart = document.querySelector(".btn-start");
const btnStop = document.querySelector(".btn-stop");

btnStart.addEventListener("click", () => {
    game.startGame();
})
btnStop.addEventListener("click", () => {
    game.stopGame();
})