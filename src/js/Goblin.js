export default class Goblin {
    constructor() {
        this.img = document.createElement("img");
        this.img.src = './img/goblin.png';
        this.currentCell = null;
    }

    setPosition(cell) {
        this.removeGoblin();
        if (cell) {
            cell.appendChild(this.img);
            this.currentCell = cell;
        }
    }

    removeGoblin() {
        if (this.currentCell) {
            this.currentCell.innerHTML = '';
            this.currentCell = null;
        }
    }

    getCurrentCell() {
        return this.currentCell;
    }
}
