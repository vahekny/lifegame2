class GrassEater extends LivingCreature {
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
   chooseCell(character) {
       this.getNewCoordinates();
       return super.chooseCell(character);
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
    let emptyCells = this.chooseCell(1);
    let grass = random(emptyCells);

    if (grass) {
        let newX = grass[0];
        let newY = grass[1];
        matrix[newY][newX] = this.index;
        matrix[this.y][this.x] = 0;

        for (let i in grassArr) {
            if (newX === grassArr[i].x && newY === grassArr[i].y) {
                grassArr.splice(i, 1);
                break;
            }
        }
        this.x = newX;
        this.y = newY;
        this.energy += 1
    }
}


mul() {
    this.energy++;

    var newCell = random(this.chooseCell(0));
    if (this.energy >= 6 && newCell) {

        var newGrassEater = new GrassEater(newCell[0], newCell[1], this.index);
        grasseaterArr.push(newGrassEater);
        matrix[newCell[1]][newCell[0]] = this.index;
        this.energy = 5;
    }
}
die() {
    if (this.energy <= 0) {
        matrix[this.y][this.x] = 0;
        for (var i in grasseaterArr) {
            if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                grasseaterArr.splice(i, 1);
            }
        }
    }
}
}

