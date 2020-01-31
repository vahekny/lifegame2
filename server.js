var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);

matrix = []
io.sockets.emit('send matrix', matrix)
var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var bathmanArr = []
var jokerArr = []


    Grass = require("./grass")
    grassEater = require("./grasseater")
    Predator = require("./predator")
    Joker =  require("./joker")
    Bathman = require("./bathman")


  
    function createObject(matrix) {
       
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
        io.sockets.emit('send matrix', matrix)
    }


    function game() {
        for (var i in grassArr) {
                    grassArr[i].mul();
                }
            
                for (var i in grassEaterArr) {
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
     
        io.sockets.emit("send matrix", matrix);
    }
setInterval(game, 1000)
io.on('connection', function (socket) {
    createObject(matrix)
})
