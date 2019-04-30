var lines = []; var result = 0;

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {

    var N = Number(lines[0].split(" ")[0]);
    var A = Number(lines[0].split(" ")[1]);
    var B = Number(lines[0].split(" ")[2]);

    A * N < B ? console.log(A * N) : console.log(B);
});