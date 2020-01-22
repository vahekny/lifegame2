
class Joker extends LivingCreature{
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
    
    chooseCell4(character,character4) {
        this.getNewCoordinates();
        return super.chooseCell(character,character4);
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
            this.energy-=1;
        }

    }
    eat() {
        let emptyCells = this.chooseCell4(3,4);
        let uteliq = random(emptyCells);

        if (uteliq) {


            let newX = uteliq[0];
            let newY = uteliq[1];

            matrix[newY][newX] = this.index;
            matrix[this.y][this.x] = 0;



                for (let i in grassArr) {
                    if (newX === predatorArr[i].x && newY === predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
      
                for (let i in bathmanArr) {
                    if (newX === bathmanArr[i].x && newY === bathmanArr[i].y) {
                        bathmanArr.splice(i, 1);
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

            var newJoker = new Joker(newCell[0], newCell[1], this.index);
            jokerArr.push(newJoker);
            matrix[newCell[1]][newCell[0]] = this.index;
            this.energy = 4;
        }
    }

    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in jokerArr) {
                if (this.x === jokerArr[i].x && this.y === jokerArr[i].y) {
                    jokerArr.splice(i,1);
                }
                
            }
        }
       
    }
  
    
}

