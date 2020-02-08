
let LivingCreature = require('./LivingCreature')

module.exports = class Bathman extends LivingCreature {
	constructor(x, y, index) {
		super(x, y, index);
		this.energy = 8
	}


	move() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY
		}

		this.energy--;
		if (this.energy <= 0) {
			this.die();
		}


	}
	eat() {
		var predatorCells = super.chooseCell(3);
		var newCell = predatorCells[Math.floor(Math.random() * predatorCells.length)]

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			for (var i in grassArr) {
				if (grassArr[i].x == newX && grassArr[i].y == newY) {
					grassArr.splice(i, 1)
				}
			}

			this.x = newX;
			this.y = newY;
			this.energy++;

			if (this.energy >= 12) {
				this.mul();
			}

		}
		else {
			this.move();
		}
	}

	mul() {
		var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

		if (newCell) {
			var newX = newCell[0];
			var newY = newCell[1];
			matrix[newY][newX] = 4
			predatorArr.push(new Predator(newX, newY, 4))
			this.energy = 6;
		}
	}

	die() {
		matrix[this.y][this.x] = 0;
		for (var i in bathmanArr) {
			if (bathmanArr[i].x == this.x && bathmanArr[i].y == this.y) {
				bathmanArr.splice(i, 1)
			}
		}
	}


    
}
