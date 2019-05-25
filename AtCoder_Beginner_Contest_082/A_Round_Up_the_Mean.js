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
    var x = lines[0].split(" ").map(value => Number(value));
    console.log(Math.ceil((x[0] + x[1]) / 2))

});