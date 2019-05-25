var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var H = Number(lines[0].split(" ")[0]);
    var W = Number(lines[0].split(" ")[1]);
    var N = Number(lines[0].split(" ")[2]);

    var sr = Number(lines[1].split(" ")[0]);
    var sc = Number(lines[1].split(" ")[1]);

    var S = lines[2].split("");
    var T = lines[3].split("");


});