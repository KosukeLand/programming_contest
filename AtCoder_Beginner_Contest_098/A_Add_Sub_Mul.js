var lines = []; var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var A = Number(lines[0].split(" ")[0]);
    var B = Number(lines[0].split(" ")[1]);

    console.log(0 + Math.max(A + B, A - B, A * B));
});