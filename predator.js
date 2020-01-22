class Predator extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 5;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell2(character,character2) {
        this.getNewCoordinates();
        return super.chooseCell(character,character2);
        
    }
    

    move() {

        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);

        if (newCell) {

            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = this.index
            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;
            this.energy--;
        }

    }
    eat() {
        let emptyCells = this.chooseCell2(1,2);
        let uteliq = random(emptyCells);

        if (uteliq) {


            let newX = uteliq[0];
            let newY = uteliq[1];

            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;



                for (let i in grassArr) {
                    if (newX === grassArr[i].x && newY === grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
      
                for (let i in grasseaterArr) {
                    if (newX === grasseaterArr[i].x && newY === grasseaterArr[i].y) {
                        grasseaterArr.splice(i, 1);
                        break;
                    }
                }
            
          
            this.x = newX;
            this.y = newY;
            this.energy += 1
        }
    }
    mul() {

        var newCell = random(this.chooseCell(0));

        if (this.energy >= 6 && newCell) {

            var newPredator = new Predator(newCell[0], newCell[1], this.index);
            predatorArr.push(newPredator);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in predatorArr) {
                if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                }
            }
        }
    }
}
