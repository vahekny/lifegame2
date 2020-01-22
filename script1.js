var matrix = [];
   


var side = 80;
var grassArr = [];
var grasseaterArr = [];
var predatorArr = [];
var bathmanArr = []
var jokerArr = []



function setup() {
    frameRate(5);
    for(y = 0; y<15; y++){
        matrix[y] = []
        for(x = 0; x<15; x++){
            matrix[y][x] = Math.round(random(0,5))
        }
    }
    
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var ge = new GrassEater(x, y, 2)
                grasseaterArr.push(ge);

            } else if (matrix[y][x] == 3) {
                var pe = new Predator(x, y, 3)
                predatorArr.push(pe);

            }
            else if (matrix[y][x] == 4) {
                var bt = new Bathman(x, y, 4)
                bathmanArr.push(bt);

            }
            else if (matrix[y][x] == 5) {
                var jk = new Joker(x, y, 5)
                jokerArr.push(jk);

            }
        }
    }
}



function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 0) {
                fill("gray");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }else if (matrix[y][x] == 3) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();
    }

    for (var i in grasseaterArr) {
        grasseaterArr[i].move();
        grasseaterArr[i].eat();
        grasseaterArr[i].mul();
        grasseaterArr[i].die();
    }
    for (var i in predatorArr) {
        predatorArr[i].move();
        predatorArr[i].eat();
        predatorArr[i].mul();
        predatorArr[i].die();
    }
    for (var i in bathmanArr) {
        bathmanArr[i].move();
        bathmanArr[i].eat();
        bathmanArr[i].mul();
        bathmanArr[i].die();
    }
    for (var i in jokerArr) {
        jokerArr[i].move();
        jokerArr[i].eat();
        jokerArr[i].mul();
        jokerArr[i].die();
    }

    setTimeout(function() {
        if( jokerArr.length < 1){
            var y = Math.round(random(1,19))
            var x = Math.round(random(1,20))
            matrix[y][x] == 1
            var gs = new Grass(x, y, 1);
            grassArr.push(gs);    
          }
        if( grasseaterArr.length < 1){
            var y = Math.round(random(1,19))
            var x = Math.round(random(1,20))
            matrix[y][x] == 2
          var gz = new GrassEater(x,y,2)
          grasseaterArr.push(gz)
          
           }
        
      
         if(grasseaterArr.length > 1 ){
            var y = Math.round(random(1,19))
            var x = Math.round(random(1,20))
            matrix[y][x] == 3
            var pr = new Predator(x,y,3)
            predatorArr.push(pr)
            
             }
             if(predatorArr.length > 1){
                var y = Math.round(random(1,19))
                var x = Math.round(random(1,20))
                matrix[y][x] == 4
                var bn = new  Bathman(x,y,4)
                bathmanArr.push(bn)
                
                 }
                 if(bathmanArr.length > 1 ){
                    var y = Math.round(random(1,19))
                    var x = Math.round(random(1,20))
                    matrix[y][x] == 5
                    var jr = new  joker2(x,y,5)
                    jokerArr.push(jr)
                    
                     }
},300);




   
                }

 

         

