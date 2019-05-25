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
    var ABC = lines[0].split(" ").map(i => Number(i));
    ABC.sort((a, b) => b - a)

    console.log(ABC[0] * 10 + ABC[1] + ABC[2])
});