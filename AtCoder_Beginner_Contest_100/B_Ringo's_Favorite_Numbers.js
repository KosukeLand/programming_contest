var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (x) => {
    lines.push(x);
});

rl.on('close', () => {

    var D = Number(lines[0].split(" ")[0]);
    var N = Number(lines[0].split(" ")[1]);

    if (N === 100) { N++; }
    console.log(Math.pow(100, D) * N);

});