
class Bathman extends LivingCreature{
    constructor(x, y, index){
        super(x, y, index);
        this.energy = 5;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y -  1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell3(character,character3) {
        this.getNewCoordinates();
        return super.chooseCell(character,character3);
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
        let emptyCells = this.chooseCell3(2,3);
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

            var newBathman = new Bathman(newCell[0], newCell[1], this.index);
            bathmanArr.push(newBathman);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 5;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in bathmanArr) {
                if (this.x == bathmanArr[i].x && this.y == bathmanArr[i].y) {
                    bathmanArr.splice(i, 1);
                }
            }
        }
    }
}
