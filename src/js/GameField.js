// отвечает за создание и рендеринг игрового поля 4x4
export default class GameField {
    constructor(field) {
        if (field > 16) {
            throw new Error("Недопустимое количество ячеек");
        }
        this.field = field;
        this.container = document.querySelector('.field');

        this.cells = [];

        this.generateField();
    }
    generateField() {
        this.container.innerHTML = '';

        for (let i = 0; i < this.field; i++) {
            const cell = document.createElement("div");
            cell.classList.add("field-item");
            this.cells.push(cell);
            this.container.appendChild(cell);
        }
    }
    getRandomCell() {
        const randomIndex = Math.floor(Math.random() * this.cells.length);
        return this.cells[randomIndex];
    }
}