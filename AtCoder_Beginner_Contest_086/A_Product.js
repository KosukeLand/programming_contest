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
    var A = Number(lines[0].split(" ")[0]);
    var B = Number(lines[0].split(" ")[1]);

    if (A * B % 2 === 0) { console.log("Even") }
    else { console.log("Odd") }
});