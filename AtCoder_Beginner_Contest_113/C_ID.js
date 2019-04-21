var lines = [];
var result = [];
var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0]);
    var M = Number(lines[0].split(" ")[1]);

    lines.shift();

    var array = lines.map(value => value.split(" ").map(value => Number(value)));

    for (var i = 0; i < M; i++) {
        array[i].push(i);
    }

    var city = array.concat().sort((a, b) => a[1] - b[1]);
    ite = Array(N + 1).fill(0);
    for (var i = 0; i < M; i++) {
        var ken = city[i][0].toString(); var shi = (ite[city[i][0]] + 1).toString();

        len = ken.length
        for (var x = 0; x < 6 - len; x++) { ken = "0" + ken; }

        len = shi.length
        for (var x = 0; x < 6 - len; x++) { shi = "0" + shi; }

        city[i].push(ken + shi);
        ite[city[i][0]]++;
    }

    city.sort((a, b) => a[2] - b[2]);
    for (var i = 0; i < M; i++) {
        console.log(city[i][3]);
    }
});