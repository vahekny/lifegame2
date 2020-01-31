
var socket = io();

var side = 20
matrix = []
function setup() {
  
    createCanvas(60 * side, 30 * side);
    background("#acacac");
}


function nkarel(matrix) {
    // console.log(matrix);
    for(y = 0; y<30; y++){
        matrix[y] = []
        for(x = 0; x<60; x++){
            matrix[y][x] = Math.floor(Math.random() * 5)
        }
    }
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        var obj = matrix[y][x];
        if (obj == 1) {
            fill("green");
            rect(x * side, y * side, side, side)
        }
        else if (obj == 2) {
            fill("yellow");
            rect(x * side, y * side, side, side);
        }
        else if (obj == 3) {
            fill("red");
            rect(x * side, y * side, side, side);
        }
        else if (obj == 4) {
            fill("blue");
            rect(x * side, y * side, side, side);
        }
        else if (obj == 5) {
            fill("orange");
            rect(x * side, y * side, side, side);
        }
    }
}

}

setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)

