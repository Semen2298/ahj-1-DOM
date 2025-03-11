// управляет персонажем (img), его размещением и перемещением.

export default class Goblin {
    constructor() {
        this.img = document.createElement("img");
        this.img.src = './img/goblin.png';

        this.currentCell = null;
    }
    setPosition(cell) {
        if (this.currentCell) {
            this.currentCell.innerHTML = ''; 
        }
        if (!cell) return;
        cell.appendChild(this.img);
        this.currentCell = cell;
    }
    getCurrentCell() {
        return this.currentCell
    }
}