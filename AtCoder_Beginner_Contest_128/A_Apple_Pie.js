var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.on('line', (x) => {
    lines.push(x)
});

rl.on('close', () => {
    var A = Number(lines[0].split(" ")[0])
    var P = Number(lines[0].split(" ")[1])

    var t = Math.floor(A * 3) + P;
    console.log(Math.floor(t / 2));
});