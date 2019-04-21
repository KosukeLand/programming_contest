var lines = []; var result = Infinity;
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0]);
    lines.shift();

    var array = lines.map(value => value.split(" ").map(value => Number(value)));
    var Cx = 0; var Cy = 0; var H = 0;

    h = Math.max(Math.abs(x -Cx) - Math.abs(y-Cy));

});