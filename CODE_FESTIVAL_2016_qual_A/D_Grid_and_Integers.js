var lines = [];
var result_inf = Infinity; var result_0 = 0; var result_str = "";

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var R = Number(lines[0].split(" ")[0]);
    var C = Number(lines[0].split(" ")[1]);
    var N = Number(lines[1].split(" ")[0]);

    lines.shift(); lines.shift();

    var r = lines.map(value => split(" ").map(value => Number(value)));

    
});