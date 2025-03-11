import GameField from "./GameField";
import Goblin from "./Goblin";

export default class Game {
    constructor() {
        this.field = new GameField(16);
        this.goblin = new Goblin();
        this.score = 0; 
        this.miss = 0; 
        this.interval = null;

        const fieldItems = this.field.container.childNodes;

        for (const fieldItem of fieldItems) {
            fieldItem.addEventListener('click', () => {
                if (!fieldItem.querySelector('img')) {
                    this.miss += 1;
                    this.updateScore();
                    return;
                }
                this.score += 1;
                this.updateScore();
            });
        }
    }

    startGame() {
        if (this.interval) return; 

        this.updateScore(); 

        this.interval = setInterval(() => {
            if (this.miss >= 3) { 
                alert("Ты проиграл, попробуй еще!");
                this.stopGame();
                return;
            }

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

        alert(`Игра окончена! Твой результат: ${this.score} попаданий, ${this.miss} промахов.`);
        
        this.score = 0;
        this.miss = 0;
        this.updateScore();

        if (this.goblin.currentCell) {
            this.goblin.currentCell.innerHTML = ''; // Убираем гоблина из ячейки
            this.goblin.currentCell = null; // Обнуляем текущую ячейку
        }
    }

    updateScore() {
        const scoreElement = document.querySelector('.score');
        const missElement = document.querySelector('.miss');

        if (scoreElement) scoreElement.textContent = this.score;
        if (missElement) missElement.textContent = this.miss;
    }
}
