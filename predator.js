
let LivingCreature = require('./LivingCreature')

module.exports = class Predator extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
		this.energy = 0
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

		this.energy=this.energy-6;
		if (this.energy <= 0) {
			this.die();
		}


	}
	eat() {
		var grassEaterCells = super.chooseCell(2);
		var newCell = grassEaterCells[Math.floor(Math.random() * grasseaterCells.length)]

		if (newCell) {

			var newX = newCell[0];
			var newY = newCell[1];

			matrix[newY][newX] = matrix[this.y][this.x];
			matrix[this.y][this.x] = 0;

			this.x = newX;
			this.y = newY;
			this.energy+=1;

			if (this.energy >= 12) {
				// console.log(this.energy);
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
            var Predator = new Predator(newX, newY, 3)
            predatorArr.push(Predator)
			this.energy = 1;
		}
	}

	die() {
        if (this.energy <= 1) {
            matrix[this.y][this.x] = 0;
            for (var i in predatorArr) {
                if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                }
            }
        }
    }



}
