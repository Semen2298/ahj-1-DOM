import GameField from "./GameField";
import Goblin from "./Goblin";

export default class Game {
    constructor() {
        this.field = new GameField(16);
        this.goblin = new Goblin();
        this.score = 0;
        this.miss = 0;
        this.interval = null;
        this.goblinClicked = false;

        this.field.container.addEventListener('click', (event) => {
            if (event.target.closest('img')) {
                this.score += 1;
                this.goblinClicked = true;
                this.goblin.removeGoblin();
                this.updateScore();
            }
        });
    }

    startGame() {
        if (this.interval) return;

        this.updateScore();

        this.interval = setInterval(() => {
            if (!this.goblinClicked && this.goblin.currentCell) {
                this.miss += 1;
            }

            if (this.miss >= 5) {
                alert(`Ты проиграл! Попаданий: ${this.score}`);
                this.stopGame();
                return;
            }

            this.goblinClicked = false;

            let newCell;
            do {
                newCell = this.field.getRandomCell();
            } while (newCell === this.goblin.getCurrentCell());

            this.goblin.setPosition(newCell);
            this.updateScore();
        }, 1000);
    }

    stopGame() {
        clearInterval(this.interval);
        this.interval = null;

        this.goblin.removeGoblin();
        alert(`Игра окончена! Результат: ${this.score} попаданий.`);
        
        this.score = 0;
        this.miss = 0;
        this.updateScore();
    }

    updateScore() {
        const scoreElement = document.querySelector('.score');
        const missElement = document.querySelector('.miss');

        if (scoreElement) scoreElement.textContent = this.score;
        if (missElement) missElement.textContent = this.miss;
    }
}
